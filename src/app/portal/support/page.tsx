import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LifeBuoy, Send, MessageSquare } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Support Desk</h1>
        <p className="text-muted-foreground">Need help? Open a ticket or browse our resources.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <Card className="border-brand/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-brand" />
                Open a New Ticket
              </CardTitle>
              <CardDescription>Our technical team typically responds within 4-6 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Subject</label>
                  <Input placeholder="Describe the issue briefly..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Project (Optional)</label>
                  <Input placeholder="Which project is this related to?" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Message</label>
                  <Textarea 
                    placeholder="Tell us more about the issue..." 
                    className="min-h-[150px] resize-none"
                  />
                </div>
                <Button className="w-full sm:w-auto gap-2">
                  <Send className="h-4 w-4" />
                  Submit Ticket
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-brand/5 border-brand/20">
            <CardHeader>
              <CardTitle className="text-sm uppercase tracking-widest text-brand font-bold">Quick Help</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-brand/10 hover:border-brand/30 transition-colors cursor-pointer">
                <p className="text-sm font-semibold">Project Onboarding Guide</p>
                <p className="text-xs text-muted-foreground mt-1">Learn how to track your milestones.</p>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-brand/10 hover:border-brand/30 transition-colors cursor-pointer">
                <p className="text-sm font-semibold">Security Standards</p>
                <p className="text-xs text-muted-foreground mt-1">Our data protection protocols.</p>
              </div>
              <Button variant="outline" className="w-full gap-2 border-brand/20">
                <LifeBuoy className="h-4 w-4" />
                Visit Help Center
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
