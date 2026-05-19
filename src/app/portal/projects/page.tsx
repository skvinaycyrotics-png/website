import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Clock } from 'lucide-react';

export default function MyProjectsPage() {
  const mockProjects = [
    { id: 1, name: 'Smart City Infrastructure', status: 'In Progress', progress: 65, nextMilestone: 'IoT Sensor Deployment' },
    { id: 2, name: 'E-Governance Portal Revamp', status: 'Testing', progress: 90, nextMilestone: 'Security Audit' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">My Projects</h1>
        <p className="text-muted-foreground">Track and manage your active project engagements.</p>
      </div>

      <div className="grid gap-6">
        {mockProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden border-brand/10 hover:border-brand/30 transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-brand/5">
              <div className="space-y-1">
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>Project ID: PRJ-00{project.id}</CardDescription>
              </div>
              <Badge variant={project.status === 'Testing' ? 'secondary' : 'default'} className="bg-brand/20 text-brand border-none">
                {project.status}
              </Badge>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-sm font-bold text-brand">{project.progress}%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand transition-all duration-1000" 
                  style={{ width: `${project.progress}%` }} 
                />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Next: {project.nextMilestone}</span>
                </div>
                <Button size="sm" variant="outline" className="gap-2">
                  View Details
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
