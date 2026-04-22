import { NextRequest, NextResponse } from 'next/server';
import { ProjectService } from '@/services/project.service';
import { getSession } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const publishedOnly = searchParams.get('all') !== 'true'; // Allow admins to fetch all
    
    // If requesting unpublished, verify admin
    if (!publishedOnly) {
        const session = await getSession(req);
        if (!session || session.role !== 'ADMIN') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
        }
    }

    const projects = await ProjectService.getAll(publishedOnly);
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession(req);
    if (!session || (session.role !== 'ADMIN' && session.role !== 'EDITOR')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const data = await req.json();
    const project = await ProjectService.create(data);
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Bad Request or Internal Server Error' }, { status: 400 });
  }
}
