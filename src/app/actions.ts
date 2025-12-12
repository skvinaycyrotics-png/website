'use server';

import { z } from 'zod';
import { expertMatchTool } from '@/ai/flows/expert-match-tool';

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
    
    const { firstName, lastName, email, phone, company, message, subject, department, countryCode } = validatedFields.data;
    const fullPhone = `${countryCode} ${phone}`;
    const recipient = department === 'Sales Team' ? 'sales@cyrotics.in' : 
                      department === 'Support Team' ? 'support@cyrotics.in' : 
                      'info@cyrotics.in';

    // Constructing a detailed mailto link as a fallback
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(`[${subject}] New Inquiry from ${firstName} ${lastName}`)}&body=${encodeURIComponent(
        Object.entries({...validatedFields.data, phone: fullPhone})
            .map(([key, value]) => {
                if (value) {
                    if (Array.isArray(value)) {
                        return `${key}: ${value.join(', ')}`;
                    }
                    return `${key}: ${value}`;
                }
                return null;
            })
            .filter(Boolean)
            .join('\n')
    )}`;


    return {
      type: 'success',
      message:
        "Your data has been validated. Please click the link below to send your inquiry via email.",
      mailto: mailto
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
