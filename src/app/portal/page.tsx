import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FileText, LifeBuoy, GanttChartSquare } from 'lucide-react';
import Link from 'next/link';

export default function PortalPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <h1 className="font-headline text-3xl font-bold">Client Dashboard</h1>
          <p>Welcome back! Here's an overview of your projects.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GanttChartSquare />
                  Project Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track the progress of your active projects.
                </p>
                <Button className="mt-4" asChild>
                  <Link href="#">View Projects</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText />
                  Invoices & Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access your invoices, contracts, and other documents.
                </p>
                <Button className="mt-4" asChild>
                  <Link href="#">View Documents</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LifeBuoy />
                  Support Tickets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create and manage your support requests.
                </p>
                <Button className="mt-4" asChild>
                  <Link href="#">Open a Ticket</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
