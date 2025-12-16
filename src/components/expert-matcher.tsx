'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { findExpert } from '@/app/actions';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Sparkles, User, Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Matching...
        </>
      ) : (
        <>
          <Sparkles className="mr-2" /> Find Your Expert
        </>
      )}
    </Button>
  );
}

export default function ExpertMatcher() {
  const initialState = {
    type: '',
    message: null,
    errors: null,
    data: null,
  };
  const [state, formAction] = useActionState(findExpert, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.type === 'error' && state.message) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <Card className="max-w-3xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl md:text-3xl font-headline flex items-center justify-center gap-3">
          <Sparkles className="h-8 w-8 text-primary" />
          AI-Powered Expert Matcher
        </CardTitle>
        <CardDescription className="text-lg md:text-xl">
          Let our AI connect you with the perfect specialist for your needs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <Textarea
            name="serviceInterest"
            placeholder="Describe your service interest, e.g., 'I need to set up a secure cloud infrastructure for my hospital' or 'Looking for automation solutions for a manufacturing plant'."
            rows={4}
            className="text-base"
          />
          {state.type === 'error' && state.errors?.serviceInterest && (
            <p className="text-sm text-destructive">
              {state.errors.serviceInterest[0]}
            </p>
          )}
          <div className="text-center">
            <SubmitButton />
          </div>
        </form>

        {state.type === 'success' && state.data && (
          <div className="mt-6">
            <Alert variant="default" className="bg-green-50 border-green-200">
              <CheckCircle className="h-4 w-4 !text-green-600" />
              <AlertTitle className="text-green-800">
                We've Found a Match!
              </AlertTitle>
              <AlertDescription className="text-green-700">
                <p className="mb-4">{state.data.justification}</p>
                <div className="font-semibold text-green-900 space-y-2">
                  <p className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Expert: {state.data.expertName}
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contact:
                    <a
                      href={`mailto:${state.data.expertContact}`}
                      className="underline"
                    >
                      {state.data.expertContact}
                    </a>
                  </p>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        )}
      </CardContent>
    </Card>
  );
}