
'use client';

import { useActionState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { findExpert } from '@/app/actions';
import { Loader2, User, Mail, Sparkles } from 'lucide-react';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Matching...
        </>
      ) : (
        'Find an Expert'
      )}
    </Button>
  );
}

export default function ExpertMatcher() {
  const initialState = {
    type: '',
    message: '',
    errors: null,
    data: null,
  };
  const [state, formAction] = useActionState(findExpert, initialState);

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl md:text-3xl font-headline flex items-center justify-center gap-2">
          <Sparkles className="h-8 w-8 text-primary" />
          AI-Powered Expert Matcher
        </CardTitle>
        <CardDescription>
          Describe your service interest, and our AI will connect you with the
          right expert.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <Textarea
            name="serviceInterest"
            placeholder="e.g., 'I need to set up a secure network for a new hospital' or 'I am looking for industrial automation solutions for my factory'."
            rows={4}
            required
          />
          {state.type === 'error' && state.errors?.serviceInterest && (
            <p className="text-sm text-destructive">
              {state.errors.serviceInterest[0]}
            </p>
          )}
          <SubmitButton />
        </form>

        {state.type === 'success' && state.data && (
          <div className="mt-6 bg-primary/10 p-6 rounded-lg">
            <h3 className="font-semibold text-lg">Your Expert Match:</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">{state.data.expertName}</p>
                  <p className="text-sm text-muted-foreground">Expert</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <a href={`mailto:${state.data.expertContact}`} className="text-primary hover:underline">
                    {state.data.expertContact}
                  </a>
                  <p className="text-sm text-muted-foreground">Contact</p>
                </div>
              </div>
               <div className="pt-2">
                 <p className="text-sm text-muted-foreground italic">
                    <strong>Justification:</strong> {state.data.justification}
                 </p>
              </div>
            </div>
          </div>
        )}

        {state.type === 'error' && state.message && !state.errors && (
          <p className="mt-4 text-sm text-destructive">{state.message}</p>
        )}
      </CardContent>
    </Card>
  );
}
