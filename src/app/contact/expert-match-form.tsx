'use client';

import { useFormState, useFormStatus } from 'react-dom';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { findExpert } from '@/app/actions';
import { Sparkles, UserCheck, Mail } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Finding Expert...' : 'Find Your Expert'}
      <Sparkles className="ml-2 h-4 w-4" />
    </Button>
  );
}

export default function ExpertMatchForm() {
  const initialState = { message: null, errors: {}, type: '', data: null };
  const [state, dispatch] = useFormState(findExpert, initialState);

  return (
    <Card className="bg-primary/5 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="text-primary" />
          AI-Powered Expert Match
        </CardTitle>
        <CardDescription>
          Describe your needs, and our AI will connect you with the right
          specialist instantly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={dispatch} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="serviceInterest">Describe your interest</Label>
            <Textarea
              id="serviceInterest"
              name="serviceInterest"
              placeholder="e.g., 'I need to upgrade the security cameras for my 3-story office building' or 'we want to explore solar energy for our factory'"
              required
            />
            {state.errors?.serviceInterest && (
              <p className="text-sm text-destructive">
                {state.errors.serviceInterest[0]}
              </p>
            )}
          </div>
          <SubmitButton />
        </form>

        {state.type === 'success' && state.data && (
          <Alert className="mt-6 border-green-500 bg-green-50">
             <UserCheck className="h-4 w-4 !text-green-600" />
            <AlertTitle className="text-green-800">Expert Found!</AlertTitle>
            <AlertDescription className="text-green-700">
              <p className="mt-2">
                For your inquiry, the best point of contact is:
              </p>
              <div className="mt-4 font-semibold">{state.data.expertName}</div>
              <a
                href={`mailto:${state.data.expertContact}`}
                className="text-sm flex items-center gap-2 hover:underline"
              >
                <Mail className="h-4 w-4" />
                {state.data.expertContact}
              </a>
              <p className="mt-4 text-xs italic border-t pt-2">
                <strong>Justification:</strong> {state.data.justification}
              </p>
            </AlertDescription>
          </Alert>
        )}
        {state.type === 'error' && state.message && !state.errors && (
             <Alert variant="destructive" className="mt-6">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{state.message}</AlertDescription>
            </Alert>
        )}

      </CardContent>
    </Card>
  );
}
