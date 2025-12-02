'use server';

/**
 * @fileOverview Expert Match Tool for routing user inquiries to the appropriate internal expert.
 * 
 * - expertMatchTool - A function that handles the expert matching process.
 * - ExpertMatchToolInput - The input type for the expertMatchTool function.
 * - ExpertMatchToolOutput - The return type for the expertMatchTool function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExpertMatchToolInputSchema = z.object({
  serviceInterest: z
    .string()
    .describe('A description of the users service interest.'),
});
export type ExpertMatchToolInput = z.infer<typeof ExpertMatchToolInputSchema>;

const ExpertMatchToolOutputSchema = z.object({
  expertName: z.string().describe('The name of the expert to contact.'),
  expertContact: z.string().describe('The contact information for the expert.'),
  justification: z.string().describe('The justification for choosing this expert.'),
});
export type ExpertMatchToolOutput = z.infer<typeof ExpertMatchToolOutputSchema>;

export async function expertMatchTool(input: ExpertMatchToolInput): Promise<ExpertMatchToolOutput> {
  return expertMatchToolFlow(input);
}

const prompt = ai.definePrompt({
  name: 'expertMatchToolPrompt',
  input: {schema: ExpertMatchToolInputSchema},
  output: {schema: ExpertMatchToolOutputSchema},
  prompt: `You are an expert at routing user inquiries to the correct internal expert.

You will receive a description of the user's service interest, and you will determine the best expert to contact.

You have access to the following experts:

Infrastructure Solutions: John Smith (john.smith@cyrotics.in)
Security & Surveillance: Alice Johnson (alice.johnson@cyrotics.in)
Audio-Visual & Communication: Bob Williams (bob.williams@cyrotics.in)
Smart Building Solutions: Charlie Brown (charlie.brown@cyrotics.in)
Software Development: Diana Miller (diana.miller@cyrotics.in)
Renewable Energy: Eve Davis (eve.davis@cyrotics.in)

Service Interest: {{{serviceInterest}}}

Return the expertName, expertContact, and justification for your choice.`,
});

const expertMatchToolFlow = ai.defineFlow(
  {
    name: 'expertMatchToolFlow',
    inputSchema: ExpertMatchToolInputSchema,
    outputSchema: ExpertMatchToolOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
