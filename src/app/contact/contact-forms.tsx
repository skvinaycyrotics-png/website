'use client';

import { useFormStatus } from 'react-dom';
import { useEffect, useRef, useState, useActionState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { submitContactForm } from '../actions';
import { useToast } from '@/hooks/use-toast';
import { User, Loader2 } from 'lucide-react';
import {
  SALUTATIONS,
  COUNTRY_CODES,
} from '@/lib/constants';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full text-lg py-6">
      {pending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : 'Schedule a Consultation'}
    </Button>
  );
}

type ContactFormState = {
  message: string | null;
  type: string;
  mailto: string | null;
  errors: Record<string, string[]>;
};

const initialState: ContactFormState = {
  message: null,
  type: '',
  mailto: null,
  errors: {},
};

export default function ContactForms() {
  const [state, dispatch] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [showMailto, setShowMailto] = useState(false);
  const [subject, setSubject] = useState('');

  useEffect(() => {
    if (state.type === 'success' && state.mailto) {
      toast({
        title: 'Ready to Send!',
        description: state.message,
      });
      setShowMailto(true);
      formRef.current?.reset();
      setSubject('');
    } else if (state.type === 'error' && state.message && !state.errors) {
       toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
      setShowMailto(false);
    } else {
      setShowMailto(false);
    }
  }, [state, toast]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-3xl font-headline">Let's Build Something Remarkable</CardTitle>
        <CardDescription className="text-base text-muted-foreground pt-4 space-y-4">
          <p>
            Great infrastructure doesn't happen by accident. It's the result of strategic 
            planning, technical precision, and a team that's fully invested in your success.
          </p>
          <p>
            At CYROTICS, we partner with organizations across India to design, deploy, and 
            optimize infrastructure that powers their most critical operations. From data 
            center architecture to enterprise-wide network solutions, we bring certified 
            expertise, proven methodologies, and an unwavering commitment to on-time delivery.
          </p>
          <p>
            Have a project in mind? Questions about our capabilities? Or simply want to 
            explore what's possible? Our team is ready to listen, advise, and deliver.
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={dispatch} className="space-y-8">
          
          {/* User Information */}
          <div className="space-y-6 border-b pb-8">
             <h3 className="text-xl font-semibold flex items-center"><User className="mr-2" /> Schedule a Consultation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="salutation">Salutation</Label>
                  <Select name="salutation">
                    <SelectTrigger id="salutation"><SelectValue placeholder="Select..." /></SelectTrigger>
                    <SelectContent>
                      {SALUTATIONS.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" name="firstName" required />
                  {state.errors?.firstName && <p className="text-sm text-destructive">{state.errors.firstName[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" name="lastName" required />
                   {state.errors?.lastName && <p className="text-sm text-destructive">{state.errors.lastName[0]}</p>}
                </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required />
                  {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                   <div className="flex gap-2">
                    <Select name="countryCode" required defaultValue="+91">
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Code" />
                      </SelectTrigger>
                      <SelectContent>
                        {COUNTRY_CODES.map(code => <SelectItem key={code} value={code}>{code}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <Input id="phone" name="phone" required maxLength={10} placeholder="10-digit number" />
                  </div>
                  {state.errors?.countryCode && <p className="text-sm text-destructive">{state.errors.countryCode[0]}</p>}
                   {state.errors?.phone && <p className="text-sm text-destructive">{state.errors.phone[0]}</p>}
                </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" name="company" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="designation">Designation</Label>
                  <Input id="designation" name="designation" />
                </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Input id="country" name="country" required />
                  {state.errors?.country && <p className="text-sm text-destructive">{state.errors.country[0]}</p>}
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="city">State / City *</Label>
                  <Input id="city" name="city" required />
                   {state.errors?.city && <p className="text-sm text-destructive">{state.errors.city[0]}</p>}
                </div>
             </div>
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
