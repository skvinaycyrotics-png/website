import { NextRequest, NextResponse } from 'next/server';
import { ContactService } from '@/services/contact.service';
import { getSession } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    const session = await getSession(req);
    if (!session || session.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const submissions = await ContactService.getAll();
    return NextResponse.json(submissions);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    if (!data.name || !data.email || !data.message) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    const submission = await ContactService.create(data);
    return NextResponse.json({ success: true, id: submission.id }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
