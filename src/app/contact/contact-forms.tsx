
'use client';

import { useFormStatus } from 'react-dom';
import { useEffect, useRef, useState, useActionState } from 'react';
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
// import { submitContactForm } from '@/app/actions';

type ContactFormState = {
  type: 'success' | 'error' | '';
  message: string;
  errors: Record<string, string[]>;
  mailto: string | null;
};

// Mock action for frontend-only mode
async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    type: 'success',
    message: 'Thank you! Your inquiry has been simulated as successfully sent. In a live environment, this would be sent to our backend.',
    errors: {},
    mailto: null,
  };
}
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, ChevronDown, User, HelpCircle, HardHat, List, Info, Shield, Check } from 'lucide-react';
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
    <Button type="submit" disabled={pending} className="w-full text-base py-5 bg-brand hover:bg-brand/90 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-brand/20">
      {pending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : 'Schedule a Consultation'}
    </Button>
  );
}

/* ── Collapsible Section Wrapper ────────────────────────── */
function FormSection({ 
  icon: Icon, 
  title, 
  children, 
  defaultOpen = true 
}: { 
  icon: React.ElementType; 
  title: string; 
  children: React.ReactNode; 
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
      <button 
        type="button" 
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Icon className="h-4 w-4 text-brand" />
          {title}
        </span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="px-4 py-4 space-y-4">{children}</div>}
    </div>
  );
}

export default function ContactForms() {
  const initialState: ContactFormState = {
    type: '',
    message: '',
    errors: {},
    mailto: null,
  };
  const [state, dispatch] = useActionState<ContactFormState, FormData>(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [showMailto, setShowMailto] = useState(false);
  const [subject, setSubject] = useState('');

  const showProjectDetails = subject === 'Sales / New Project' || subject === 'Technical Support';

  useEffect(() => {
    if (state.type === 'success') {
      toast({
        title: 'Success!',
        description: state.message,
      });
      setShowMailto(false);
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
    <form ref={formRef} action={dispatch} className="space-y-4">
      
      {/* ── Section 1: Personal Information ──────────────── */}
      <FormSection icon={User} title="Personal Information">
        {/* Salutation + Names in one row */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          <div className="col-span-3 sm:col-span-1">
            <Label htmlFor="salutation" className="text-xs">Salutation</Label>
            <Select name="salutation">
              <SelectTrigger id="salutation" className="h-9 text-sm"><SelectValue placeholder="--" /></SelectTrigger>
              <SelectContent>
                {SALUTATIONS.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-3 sm:col-span-2">
            <Label htmlFor="firstName" className="text-xs">First Name *</Label>
            <Input id="firstName" name="firstName" required className="h-9 text-sm" />
            {state.errors?.firstName && <p className="text-xs text-destructive mt-1">{state.errors.firstName[0]}</p>}
          </div>
          <div className="col-span-3 sm:col-span-2">
            <Label htmlFor="lastName" className="text-xs">Last Name *</Label>
            <Input id="lastName" name="lastName" required className="h-9 text-sm" />
            {state.errors?.lastName && <p className="text-xs text-destructive mt-1">{state.errors.lastName[0]}</p>}
          </div>
          <div className="col-span-3 sm:col-span-1">
            {/* spacer on mobile, hidden on sm+ */}
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Label htmlFor="email" className="text-xs">Email *</Label>
            <Input id="email" name="email" type="email" required className="h-9 text-sm" />
            {state.errors?.email && <p className="text-xs text-destructive mt-1">{state.errors.email[0]}</p>}
          </div>
          <div>
            <Label htmlFor="phone" className="text-xs">Phone *</Label>
            <div className="flex gap-2">
              <Select name="countryCode" required defaultValue="+91">
                <SelectTrigger className="w-[90px] h-9 text-sm"><SelectValue placeholder="Code" /></SelectTrigger>
                <SelectContent>
                  {COUNTRY_CODES.map(code => <SelectItem key={code} value={code}>{code}</SelectItem>)}
                </SelectContent>
              </Select>
              <Input id="phone" name="phone" required maxLength={10} placeholder="10-digit" className="h-9 text-sm" />
            </div>
            {state.errors?.countryCode && <p className="text-xs text-destructive mt-1">{state.errors.countryCode[0]}</p>}
            {state.errors?.phone && <p className="text-xs text-destructive mt-1">{state.errors.phone[0]}</p>}
          </div>
        </div>

        {/* Company + Designation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Label htmlFor="company" className="text-xs">Company</Label>
            <Input id="company" name="company" className="h-9 text-sm" />
          </div>
          <div>
            <Label htmlFor="designation" className="text-xs">Designation</Label>
            <Input id="designation" name="designation" className="h-9 text-sm" />
          </div>
        </div>

        {/* Country + City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Label htmlFor="country" className="text-xs">Country *</Label>
            <Input id="country" name="country" required className="h-9 text-sm" />
            {state.errors?.country && <p className="text-xs text-destructive mt-1">{state.errors.country[0]}</p>}
          </div>
          <div>
            <Label htmlFor="city" className="text-xs">State / City *</Label>
            <Input id="city" name="city" required className="h-9 text-sm" />
            {state.errors?.city && <p className="text-xs text-destructive mt-1">{state.errors.city[0]}</p>}
          </div>
        </div>

        {/* Address + Pincode */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="sm:col-span-2">
            <Label htmlFor="address" className="text-xs">Street / Address</Label>
            <Input id="address" name="address" className="h-9 text-sm" />
          </div>
          <div>
            <Label htmlFor="pincode" className="text-xs">Pin Code</Label>
            <Input id="pincode" name="pincode" className="h-9 text-sm" />
          </div>
        </div>
      </FormSection>

      {/* ── Section 2: Inquiry Details ────────────────────── */}
      <FormSection icon={HelpCircle} title="Inquiry Details">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Label htmlFor="subject" className="text-xs">Subject *</Label>
            <Select name="subject" onValueChange={setSubject} required>
              <SelectTrigger id="subject" className="h-9 text-sm"><SelectValue placeholder="Select subject..." /></SelectTrigger>
              <SelectContent>
                {CONTACT_SUBJECTS.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
            {state.errors?.subject && <p className="text-xs text-destructive mt-1">{state.errors.subject[0]}</p>}
          </div>
          <div>
            <Label htmlFor="department" className="text-xs">Department</Label>
            <Select name="department">
              <SelectTrigger id="department" className="h-9 text-sm"><SelectValue placeholder="Select department..." /></SelectTrigger>
              <SelectContent>
                {DEPARTMENTS.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>
      </FormSection>

      {/* ── Section 3: Project Details (Conditional) ──────── */}
      {showProjectDetails && (
        <FormSection icon={HardHat} title="Project / Service Details">
          <div>
            <Label className="text-xs">Project Type</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-between h-9 text-sm">
                  Select Project Types <ChevronDown className="ml-2 h-3 w-3" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height] p-0">
                <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {PROJECT_TYPES.map(type => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={`type-${type}`} name="projectType" value={type} />
                      <Label htmlFor={`type-${type}`} className="font-normal text-xs">{type}</Label>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <Label htmlFor="projectLocation" className="text-xs">Project Location</Label>
              <Input id="projectLocation" name="projectLocation" className="h-9 text-sm" />
            </div>
            <div>
              <Label htmlFor="projectBudget" className="text-xs">Budget Range</Label>
              <Select name="projectBudget">
                <SelectTrigger id="projectBudget" className="h-9 text-sm"><SelectValue placeholder="Select range..." /></SelectTrigger>
                <SelectContent>
                  {BUDGET_RANGES.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
        </FormSection>
      )}

      {/* ── Section 4: Preferences ───────────────────────── */}
      <FormSection icon={List} title="Preferences" defaultOpen={false}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <Label className="text-xs">Priority</Label>
            <RadioGroup name="priority" defaultValue="Normal" className="flex flex-wrap gap-3 pt-2">
              {PRIORITY_LEVELS.map(level => (
                <div key={level} className="flex items-center space-x-1.5">
                  <RadioGroupItem value={level} id={`p-${level}`} />
                  <Label htmlFor={`p-${level}`} className="font-normal text-xs">{level}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div>
            <Label htmlFor="contactMethod" className="text-xs">Contact Method</Label>
            <Select name="contactMethod">
              <SelectTrigger id="contactMethod" className="h-9 text-sm"><SelectValue placeholder="Select..." /></SelectTrigger>
              <SelectContent>
                {CONTACT_METHODS.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="contactTime" className="text-xs">Best Time</Label>
            <Select name="contactTime">
              <SelectTrigger id="contactTime" className="h-9 text-sm"><SelectValue placeholder="Select..." /></SelectTrigger>
              <SelectContent>
                {CONTACT_TIMES.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>
      </FormSection>

      {/* ── Section 5: Additional Information ─────────────── */}
      <FormSection icon={Info} title="Additional Information" defaultOpen={false}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-end">
          <div>
            <Label htmlFor="howDidYouHear" className="text-xs">How Did You Hear About Us?</Label>
            <Select name="howDidYouHear">
              <SelectTrigger id="howDidYouHear" className="h-9 text-sm"><SelectValue placeholder="Select..." /></SelectTrigger>
              <SelectContent>
                {HEAR_ABOUT_US_OPTIONS.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2 pb-1">
            <Checkbox id="nda" name="nda" />
            <Label htmlFor="nda" className="font-normal text-xs">Request NDA before discussion</Label>
          </div>
        </div>
      </FormSection>

      {/* ── Message & Attachment (Always Visible) ─────────── */}
      <div className="space-y-3">
        <div>
          <Label htmlFor="message" className="text-xs font-semibold">Message / Description *</Label>
          <Textarea id="message" name="message" required rows={4} placeholder="Please describe your requirements in detail..." className="text-sm mt-1" />
          {state.errors?.message && <p className="text-xs text-destructive mt-1">{state.errors.message[0]}</p>}
        </div>
        <div>
          <Label htmlFor="attachment" className="text-xs font-semibold">Attachments (BOQ, Drawings, RFP)</Label>
          <Input id="attachment" name="attachment" type="file" multiple className="h-9 text-xs mt-1" />
          <p className="text-[10px] text-muted-foreground mt-1">Max 20MB. Formats: PDF, DOCX, XLSX, JPG, PNG, DWG.</p>
        </div>
      </div>

      {/* ── Consent & Submit ──────────────────────────────── */}
      <div className="space-y-3 pt-2 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex items-start space-x-2">
          <Checkbox id="data-processing" name="dataProcessingConsent" required />
          <Label htmlFor="data-processing" className="font-normal text-xs leading-relaxed">
            I agree that my data may be processed for establishing contact. *
          </Label>
        </div>
        {state.errors?.dataProcessingConsent && <p className="text-xs text-destructive">{state.errors.dataProcessingConsent[0]}</p>}
        
        <div className="flex items-start space-x-2">
          <Checkbox id="privacy-policy" name="privacyPolicyConsent" required />
          <Label htmlFor="privacy-policy" className="font-normal text-xs leading-relaxed">
            I have read the <a href="/privacy-policy" target="_blank" className="underline hover:text-brand">Privacy Policy</a>. *
          </Label>
        </div>
        {state.errors?.privacyPolicyConsent && <p className="text-xs text-destructive">{state.errors.privacyPolicyConsent[0]}</p>}
        
        <div className="flex items-center space-x-2">
          <Checkbox id="newsletter" name="newsletter" />
          <Label htmlFor="newsletter" className="font-normal text-xs">Subscribe to newsletter</Label>
        </div>
      </div>

      {/* ── Submit / Success ──────────────────────────────── */}
      {state.type === 'success' ? (
        <Alert className="border-green-500 bg-green-50 dark:bg-green-950/20">
          <Check className="h-4 w-4 !text-green-600" />
          <AlertTitle className="text-green-800 dark:text-green-400">Inquiry Submitted</AlertTitle>
          <AlertDescription className="text-green-700 dark:text-green-300">
            Thank you! Your inquiry has been securely submitted to our database.
          </AlertDescription>
        </Alert>
      ) : (
        <SubmitButton />
      )}
    </form>
  );
}
