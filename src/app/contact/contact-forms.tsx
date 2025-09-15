'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { submitContactForm } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit Message'}
    </Button>
  );
}

function ContactForm({
  inquiryType,
}: {
  inquiryType: 'General' | 'Sales' | 'Support';
}) {
  const initialState = { message: null, errors: {}, type: '' };
  const [state, dispatch] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.type === 'success') {
      toast({
        title: 'Success!',
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.type === 'error' && state.message && !state.errors) {
       toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={dispatch} className="space-y-4">
      <Input type="hidden" name="inquiryType" value={inquiryType} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor={`name-${inquiryType}`}>Full Name</Label>
          <Input id={`name-${inquiryType}`} name="name" required />
          {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor={`email-${inquiryType}`}>Email Address</Label>
          <Input id={`email-${inquiryType}`} name="email" type="email" required />
           {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor={`company-${inquiryType}`}>Company (Optional)</Label>
        <Input id={`company-${inquiryType}`} name="company" />
      </div>
      <div className="space-y-2">
        <Label htmlFor={`message-${inquiryType}`}>Message</Label>
        <Textarea id={`message-${inquiryType}`} name="message" required />
         {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
      </div>
      <SubmitButton />
    </form>
  );
}

export default function ContactForms() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Send us a Message</CardTitle>
        <CardDescription>
          Select the appropriate category for your inquiry.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="pt-4">
            <ContactForm inquiryType="General" />
          </TabsContent>
          <TabsContent value="sales" className="pt-4">
            <ContactForm inquiryType="Sales" />
          </TabsContent>
          <TabsContent value="support" className="pt-4">
            <ContactForm inquiryType="Support" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
