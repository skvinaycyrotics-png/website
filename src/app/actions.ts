'use server';

import { z } from 'zod';
import { expertMatchTool } from '@/ai/flows/expert-match-tool';

const contactFormSchema = z.object({
  name: z.string().min(1, 'Full Name is required.'),
  email: z.string().email('Invalid email address.'),
  mobile: z.string().regex(/^\d{10}$/, 'Mobile number must be 10 digits.'),
  company: z.string().optional(),
  message: z.string().min(1, 'Message is required.'),
  inquiryType: z.enum(['General', 'Sales', 'Support']),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const validatedFields = contactFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      mobile: formData.get('mobile'),
      company: formData.get('company'),
      message: formData.get('message'),
      inquiryType: formData.get('inquiryType'),
    });

    if (!validatedFields.success) {
      return {
        type: 'error',
        message: 'Invalid form data.',
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }
    
    // As we cannot send emails from the server without an email provider,
    // we will construct a mailto link for the user to send the inquiry.
    const { name, email, mobile, company, message, inquiryType } = validatedFields.data;
    const mailto = `mailto:techsupport.cyrotics@gmail.com?subject=${encodeURIComponent(`[${inquiryType}] New Inquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nCompany: ${company || 'N/A'}\n\nMessage:\n${message}`)}`;

    return {
      type: 'success',
      message:
        "Your data has been validated. Please click the link below to send your inquiry via email.",
      mailto: mailto
    };
  } catch (e) {
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
