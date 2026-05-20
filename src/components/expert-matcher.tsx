'use client';

import { useActionState, useState } from 'react';
// import { findExpert } from '@/app/actions';

type ExpertMatcherState = {
  type: 'success' | 'error' | '';
  message: string;
  errors: Record<string, string[]> | null;
  data: {
    expertName: string;
    expertContact: string;
    justification: string;
  } | null;
};

// Mock action for frontend-only mode
async function findExpert(prevState: ExpertMatcherState, formData: FormData): Promise<ExpertMatcherState> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    type: 'success',
    message: '',
    errors: null,
    data: {
      expertName: 'Dr. Sarah Mitchell',
      expertContact: 'sarah.m@cyrotics.in',
      justification: 'Based on your requirement, Dr. Sarah Mitchell is our leading specialist in enterprise infrastructure and secure networking.',
    },
  };
}
import {
  BrainCircuit,
  UserCheck,
  Building,
  Loader2,
  Mail,
  ThumbsUp,
} from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { useFormStatus } from 'react-dom';

const initialState: ExpertMatcherState = {
  type: '',
  message: '',
  errors: null,
  data: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Finding Expert...
        </>
      ) : (
        'Find Your Expert'
      )}
    </Button>
  );
}

export default function ExpertMatcher() {
  const [state, formAction] = useActionState<ExpertMatcherState, FormData>(findExpert, initialState);

  return (
    <Card className="max-w-2xl mx-auto shadow-2xl">
      <form action={formAction}>
        <CardHeader className="text-center">
          <BrainCircuit className="mx-auto h-12 w-12 text-primary" />
          <CardTitle className="font-headline text-2xl md:text-3xl">
            AI-Powered Expert Matcher
          </CardTitle>
          <CardDescription>
            Describe your requirement, and our AI will connect you with the
            perfect expert.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Textarea
              id="serviceInterest"
              name="serviceInterest"
              placeholder="e.g., 'I need to set up a secure network for a new hospital wing' or 'I need a consultation for a data center migration project.'"
              rows={4}
              required
            />
            {state.type === 'error' && state.errors?.serviceInterest && (
              <p className="text-sm text-destructive">
                {state.errors.serviceInterest[0]}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <SubmitButton />

          {state.type === 'success' && state.data && (
            <Alert className="text-left border-green-500">
              <UserCheck className="h-4 w-4" />
              <AlertTitle className="font-bold">Expert Found!</AlertTitle>
              <AlertDescription>
                <p className="font-semibold">
                  For your requirement, we recommend contacting{' '}
                  <span className="text-primary">{state.data.expertName}</span>.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {state.data.justification}
                </p>
                <Button size="sm" asChild className="mt-4">
                  <a href={`mailto:${state.data.expertContact}`}>
                    <Mail className="mr-2 h-4 w-4" /> Contact{' '}
                    {state.data.expertName}
                  </a>
                </Button>
              </AlertDescription>
            </Alert>
          )}

          {state.type === 'error' && !state.errors && (
             <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{state.message}</AlertDescription>
            </Alert>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
