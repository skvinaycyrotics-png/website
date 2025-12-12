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
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { submitContactForm } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Mail, Loader2, ChevronDown, User, MailIcon, Phone, Building, Briefcase, MapPin, Code, DollarSign, Calendar, Clock, Info, Shield, Check, List, HelpCircle, HardHat } from 'lucide-react';
import {
  CONTACT_SUBJECTS,
  DEPARTMENTS,
  PROJECT_TYPES,
  BUDGET_RANGES,
  PRIORITY_LEVELS,
  CONTACT_METHODS,
  CONTACT_TIMES,
  HEAR_ABOUT_US_OPTIONS,
  SALUTATIONS,
  COUNTRY_CODES,
} from '@/lib/constants';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full text-lg py-6">
      {pending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : 'Submit Inquiry'}
    </Button>
  );
}

export default function ContactForms() {
  const initialState = { message: null, errors: {}, type: '', mailto: null };
  const [state, dispatch] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [showMailto, setShowMailto] = useState(false);
  const [subject, setSubject] = useState('');

  const showProjectDetails = subject === 'Sales / New Project' || subject === 'Technical Support';

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
        <CardTitle className="text-3xl">Get in Touch</CardTitle>
        <CardDescription className="font-semibold">
          Have a question, request, or suggestion about our services?
          <br /><br />
          Or would you like to learn more about how we can support your project?
          <br /><br />
          Our team is here to assist you—feel free to reach out anytime.
          <br /><br />
          We will be happy to help!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={dispatch} className="space-y-8">
          
          {/* User Information */}
          <div className="space-y-6 border-b pb-8">
             <h3 className="text-xl font-semibold flex items-center"><User className="mr-2" /> User Information</h3>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="address">Street / Address</Label>
                  <Input id="address" name="address" />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="pincode">Pin Code</Label>
                  <Input id="pincode" name="pincode" />
                </div>
             </div>
          </div>

           {/* Contact Purpose & Routing */}
          <div className="space-y-6 border-b pb-8">
             <h3 className="text-xl font-semibold flex items-center"><HelpCircle className="mr-2" /> Inquiry Details</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Select name="subject" onValueChange={setSubject} required>
                    <SelectTrigger id="subject"><SelectValue placeholder="Select subject..." /></SelectTrigger>
                    <SelectContent>
                      {CONTACT_SUBJECTS.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                   {state.errors?.subject && <p className="text-sm text-destructive">{state.errors.subject[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Contact Department</Label>
                  <Select name="department">
                    <SelectTrigger id="department"><SelectValue placeholder="Select department..." /></SelectTrigger>
                    <SelectContent>
                       {DEPARTMENTS.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
             </div>
          </div>
          
          {/* Project/Service Details (Conditional) */}
          {showProjectDetails && (
            <div className="space-y-6 border-b pb-8">
               <h3 className="text-xl font-semibold flex items-center"><HardHat className="mr-2" /> Project / Service Details</h3>
                <div className="space-y-2">
                  <Label>Project Type</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-between">
                        Select Project Types <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height] p-0">
                      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {PROJECT_TYPES.map(type => (
                           <div key={type} className="flex items-center space-x-2">
                            <Checkbox id={`type-${type}`} name="projectType" value={type} />
                            <Label htmlFor={`type-${type}`} className="font-normal text-sm">{type}</Label>
                          </div>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="projectLocation">Project Location</Label>
                    <Input id="projectLocation" name="projectLocation" />
                  </div>
                   <div className="space-y-2">
                      <Label htmlFor="projectBudget">Project Budget Range</Label>
                      <Select name="projectBudget">
                        <SelectTrigger id="projectBudget"><SelectValue placeholder="Select range..." /></SelectTrigger>
                        <SelectContent>
                          {BUDGET_RANGES.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                </div>
            </div>
          )}

           {/* Priority & Preferences */}
           <div className="space-y-6 border-b pb-8">
              <h3 className="text-xl font-semibold flex items-center"><List className="mr-2" /> Preferences</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label>Priority</Label>
                   <RadioGroup name="priority" defaultValue="Normal" className="flex space-x-4 pt-2">
                    {PRIORITY_LEVELS.map(level => (
                       <div key={level} className="flex items-center space-x-2">
                        <RadioGroupItem value={level} id={`p-${level}`} />
                        <Label htmlFor={`p-${level}`} className="font-normal">{level}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                    <Select name="contactMethod">
                      <SelectTrigger id="contactMethod"><SelectValue placeholder="Select..." /></SelectTrigger>
                      <SelectContent>
                        {CONTACT_METHODS.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                      </SelectContent>
                    </Select>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="contactTime">Preferred Time to Contact</Label>
                    <Select name="contactTime">
                      <SelectTrigger id="contactTime"><SelectValue placeholder="Select..." /></SelectTrigger>
                      <SelectContent>
                        {CONTACT_TIMES.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                </div>
              </div>
           </div>

          {/* Additional Info */}
          <div className="space-y-6 border-b pb-8">
             <h3 className="text-xl font-semibold flex items-center"><Info className="mr-2" /> Additional Information</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="howDidYouHear">How Did You Hear About Us?</Label>
                    <Select name="howDidYouHear">
                      <SelectTrigger id="howDidYouHear"><SelectValue placeholder="Select..." /></SelectTrigger>
                      <SelectContent>
                        {HEAR_ABOUT_US_OPTIONS.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                      </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2 pt-6">
                  <div className="flex items-center space-x-2">
                      <Checkbox id="nda" name="nda" />
                      <Label htmlFor="nda" className="font-normal">Request NDA before project discussion</Label>
                  </div>
                </div>
             </div>

             <div className="space-y-2">
                <Label htmlFor="message">Message / Description *</Label>
                <Textarea id="message" name="message" required rows={6} placeholder="Please describe your requirements in detail..." />
                 {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="attachment">Attachments (e.g., BOQ, Drawings, RFP)</Label>
                <Input id="attachment" name="attachment" type="file" multiple className="pt-2"/>
                 <p className="text-xs text-muted-foreground">Max 20MB. Allowed formats: PDF, DOCX, XLSX, JPG, PNG, DWG.</p>
              </div>
          </div>
          
           {/* Security & Compliance */}
           <div className="space-y-6">
              <h3 className="text-xl font-semibold flex items-center"><Shield className="mr-2" /> Consent & Security</h3>
              <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                      <Checkbox id="data-processing" name="dataProcessingConsent" required />
                      <Label htmlFor="data-processing" className="font-normal text-sm">
                        I agree that my data may be processed for the purpose of establishing contact. *
                      </Label>
                  </div>
                   {state.errors?.dataProcessingConsent && <p className="text-sm text-destructive">{state.errors.dataProcessingConsent[0]}</p>}
              </div>
               <div className="flex items-start space-x-2">
                  <Checkbox id="privacy-policy" name="privacyPolicyConsent" required />
                  <Label htmlFor="privacy-policy" className="font-normal text-sm">
                   I have read and understood the <a href="/privacy-policy" target="_blank" className="underline hover:text-primary">Privacy Policy</a>. *
                  </Label>
              </div>
               {state.errors?.privacyPolicyConsent && <p className="text-sm text-destructive">{state.errors.privacyPolicyConsent[0]}</p>}
              <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" name="newsletter" />
                  <Label htmlFor="newsletter" className="font-normal text-sm">Subscribe to newsletter</Label>
              </div>
              {/* Captcha would be implemented here */}
           </div>


          {showMailto && state.mailto ? (
            <Alert className="mt-6 border-green-500 bg-green-50">
              <Mail className="h-4 w-4 !text-green-600" />
              <AlertTitle className="text-green-800">Click to Send Email</AlertTitle>
              <AlertDescription className="text-green-700">
                <a href={state.mailto} className="font-semibold underline">
                  Open your email client to send the message.
                </a>
              </AlertDescription>
            </Alert>
          ) : (
            <SubmitButton />
          )}
        </form>
      </CardContent>
    </Card>
  );
}
