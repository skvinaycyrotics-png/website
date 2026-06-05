'use client';

import { useEffect, useRef, useState } from 'react';
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
import { useToast } from '@/hooks/use-toast';
import { User, Loader2 } from 'lucide-react';
import {
  SALUTATIONS,
  COUNTRY_CODES,
} from '@/lib/constants';

export default function ContactForms() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, setIsPending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      salutation: formData.get('salutation'),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      countryCode: formData.get('countryCode'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      designation: formData.get('designation'),
      country: formData.get('country'),
      city: formData.get('city'),
    };

    // Client-side validation fallback
    if (!data.firstName || !data.lastName || !data.email || !data.phone) {
      setErrors({
        firstName: !data.firstName ? 'First name is required' : '',
        lastName: !data.lastName ? 'Last name is required' : '',
        email: !data.email ? 'Email is required' : '',
        phone: !data.phone ? 'Phone number is required' : '',
      });
      setIsPending(false);
      return;
    }

    try {
      // Send data to your custom live backend endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const resData = await response.json();
      if (!response.ok) throw new Error(resData.message || 'Submission failed');

      toast({
        title: 'Success!',
        description: 'Your inquiry has been submitted. We respond within 1-2 business days.',
      });
      
      formRef.current?.reset();
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: err instanceof Error ? err.message : 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-3xl font-headline">Let's Build Something Remarkable</CardTitle>
        <CardDescription className="text-base text-muted-foreground pt-4 space-y-4">
          <p>
            Great infrastructure doesn't happen by accident. It's the result of strategic 
            planning, technical precision, and a team that's fully invested in your success.
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
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
                  {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" name="lastName" required />
                   {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
                </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
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
                   {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
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
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="city">State / City *</Label>
                  <Input id="city" name="city" required />
                </div>
             </div>
          </div>
          <Button type="submit" disabled={isPending} className="w-full text-lg py-6">
            {isPending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : 'Schedule a Consultation'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
