'use server';

import { z } from 'zod';
import { headers } from 'next/headers';
import { expertMatchTool } from '@/ai/flows/expert-match-tool';
import db from '@/lib/db';
import { sendNotificationEmail, sendAutoReplyEmail } from '@/lib/email';
import { rateLimit } from '@/lib/rate-limit';

const contactFormSchema = z.object({
  salutation: z.string().optional(),
  firstName: z.string().min(1, 'First Name is required.'),
  lastName: z.string().min(1, 'Last Name is required.'),
  email: z.string().email('Invalid email address.'),
  countryCode: z.string().min(1, 'Country code is required.'),
  phone: z.string().length(10, 'Phone number must be 10 digits.'),
  company: z.string().optional(),
  designation: z.string().optional(),
  country: z.string().min(1, 'Country is required.'),
  city: z.string().min(1, 'City is required.'),
  address: z.string().optional(),
  pincode: z.string().optional(),
  subject: z.string().min(1, 'Subject is required.'),
  department: z.string().optional(),
  projectType: z.union([z.string(), z.array(z.string())]).optional(),
  projectLocation: z.string().optional(),
  projectBudget: z.string().optional(),
  priority: z.string().optional(),
  contactMethod: z.string().optional(),
  contactTime: z.string().optional(),
  howDidYouHear: z.string().optional(),
  nda: z.string().optional(),
  message: z.string().min(1, 'Message is required.'),
  dataProcessingConsent: z.string().refine(val => val === 'on', { message: 'You must agree to data processing.' }),
  privacyPolicyConsent: z.string().refine(val => val === 'on', { message: 'You must agree to the privacy policy.' }),
  newsletter: z.string().optional(),
});


export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    // ── Rate Limiting ──────────────────────────────────────
    const headersList = await headers();
    const forwarded = headersList.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
    const limiter = rateLimit(ip);

    if (!limiter.success) {
      return {
        type: 'error',
        message: `Too many submissions. Please try again in ${Math.ceil(limiter.retryAfterSeconds / 60)} minute(s).`,
        errors: {},
      };
    }

    // ── Validation ─────────────────────────────────────────
    const validatedFields = contactFormSchema.safeParse({
      salutation: formData.get('salutation'),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      countryCode: formData.get('countryCode'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      designation: formData.get('designation'),
      country: formData.get('country'),
      city: formData.get('city'),
      address: formData.get('address'),
      pincode: formData.get('pincode'),
      subject: formData.get('subject'),
      department: formData.get('department'),
      projectType: formData.getAll('projectType'),
      projectLocation: formData.get('projectLocation'),
      projectBudget: formData.get('projectBudget'),
      priority: formData.get('priority'),
      contactMethod: formData.get('contactMethod'),
      contactTime: formData.get('contactTime'),
      howDidYouHear: formData.get('howDidYouHear'),
      nda: formData.get('nda'),
      message: formData.get('message'),
      dataProcessingConsent: formData.get('dataProcessingConsent'),
      privacyPolicyConsent: formData.get('privacyPolicyConsent'),
      newsletter: formData.get('newsletter'),
    });

    if (!validatedFields.success) {
      console.log(validatedFields.error.flatten().fieldErrors);
      return {
        type: 'error',
        message: 'Invalid form data. Please check the fields.',
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }
    
    // Save to database instead of returning mailto link
    const stmt = db.prepare(`
      INSERT INTO inquiries (
        salutation, firstName, lastName, email, countryCode, phone, company,
        designation, country, city, address, pincode, subject, department,
        projectType, projectLocation, projectBudget, priority, contactMethod,
        contactTime, howDidYouHear, nda, message, dataProcessingConsent,
        privacyPolicyConsent, newsletter
      ) VALUES (
        @salutation, @firstName, @lastName, @email, @countryCode, @phone, @company,
        @designation, @country, @city, @address, @pincode, @subject, @department,
        @projectType, @projectLocation, @projectBudget, @priority, @contactMethod,
        @contactTime, @howDidYouHear, @nda, @message, @dataProcessingConsent,
        @privacyPolicyConsent, @newsletter
      )
    `);

    const dbData = {
      ...validatedFields.data,
      projectType: Array.isArray(validatedFields.data.projectType) 
        ? validatedFields.data.projectType.join(', ') 
        : validatedFields.data.projectType || null,
      salutation: validatedFields.data.salutation || null,
      company: validatedFields.data.company || null,
      designation: validatedFields.data.designation || null,
      address: validatedFields.data.address || null,
      pincode: validatedFields.data.pincode || null,
      department: validatedFields.data.department || null,
      projectLocation: validatedFields.data.projectLocation || null,
      projectBudget: validatedFields.data.projectBudget || null,
      priority: validatedFields.data.priority || null,
      contactMethod: validatedFields.data.contactMethod || null,
      contactTime: validatedFields.data.contactTime || null,
      howDidYouHear: validatedFields.data.howDidYouHear || null,
      nda: validatedFields.data.nda || null,
      newsletter: validatedFields.data.newsletter || null,
    };

    stmt.run(dbData);

    // ── Send Emails (fire-and-forget) ────────────────────
    sendNotificationEmail(dbData).catch((err) =>
      console.error('[Email] Notification failed:', err)
    );
    sendAutoReplyEmail(dbData).catch((err) =>
      console.error('[Email] Auto-reply failed:', err)
    );

    return {
      type: 'success',
      message: 'Your inquiry has been submitted successfully! Our team will contact you soon.',
    };
  } catch (e) {
    console.error(e);
    return {
      type: 'error',
      message: 'An unexpected error occurred. Please try again.',
    };
  }
}

const expertMatchSchema = z.object({
  serviceInterest: z
    .string()
    .min(10, 'Please describe your interest in at least 10 characters.'),
});

export async function findExpert(prevState: any, formData: FormData) {
  const validatedFields = expertMatchSchema.safeParse({
    serviceInterest: formData.get('serviceInterest'),
  });

  if (!validatedFields.success) {
    return {
      type: 'error',
      message: 'Invalid input.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await expertMatchTool({
      serviceInterest: validatedFields.data.serviceInterest,
    });
    return {
      type: 'success',
      data: result,
    };
  } catch (error) {
    console.error('Expert match tool failed:', error);
    return {
      type: 'error',
      message: 'Could not find an expert at this time. Please try again.',
    };
  }
}
