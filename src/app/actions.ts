'use server';

import { z } from 'zod';
import { expertMatchTool } from '@/ai/flows/expert-match-tool';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
  inquiryType: z.enum(['General', 'Sales', 'Support']),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const validatedFields = contactFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
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

    // Here you would typically save to a database (e.g., Firestore)
    console.log('Contact form submitted:', validatedFields.data);

    return {
      type: 'success',
      message:
        "Thank you for your message! We'll get back to you as soon as possible.",
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
