'use client';

import { DashboardLayout } from '@/components/dashboard/dashboard-layout';
import { ClientDashboard } from '@/components/dashboard/client-dashboard';

export default function PortalPage() {
  return (
    <DashboardLayout role="CLIENT">
      <ClientDashboard />
    </DashboardLayout>
  );
}
