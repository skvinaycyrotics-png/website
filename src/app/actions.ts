// src/app/actions.ts
'use server';

type ContactFormState = {
  message: string | null;
  type: string;
  mailto: string | null;
  errors: Record<string, string[]>;
};

export async function submitContactForm(prevState: ContactFormState, formData: FormData) {
  // Extract values from formData
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const countryCode = formData.get('countryCode') as string;
  const country = formData.get('country') as string;
  const city = formData.get('city') as string;
  const company = formData.get('company') as string;
  const designation = formData.get('designation') as string;

  // Basic validation fallback
  if (!firstName || !lastName || !email || !phone) {
    return {
      type: 'error',
      message: 'Please fill in all required fields.',
      mailto: null,
      errors: {
        firstName: !firstName ? ['First name is required'] : [],
        lastName: !lastName ? ['Last name is required'] : [],
        email: !email ? ['Email is required'] : [],
        phone: !phone ? ['Phone number is required'] : [],
      }
    };
  }

  try {
    // TODO: Add your email sending logic (Nodemailer, Resend, etc.) or database entry here

    return {
      type: 'success',
      message: 'Thank you! Your consultation request has been received.',
      mailto: `mailto:support@cyrotics.in?subject=Consultation Request - ${firstName} ${lastName}`,
      errors: {}
    };
  } catch (error) {
    return {
      type: 'error',
      message: 'Something went wrong. Please try again later.',
      mailto: null,
      errors: {}
    };
  }
}
