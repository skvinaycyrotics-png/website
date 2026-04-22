import { NextRequest, NextResponse } from 'next/server';
import { TestimonialService } from '@/services/testimonial.service';
import { getSession } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const approvedOnly = searchParams.get('all') !== 'true';

    if (!approvedOnly) {
        const session = await getSession(req);
        if (!session || (session.role !== 'ADMIN' && session.role !== 'EDITOR')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
        }
    }

    const testimonials = await TestimonialService.getAll(approvedOnly);
    return NextResponse.json(testimonials);
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
    const testimonial = await TestimonialService.create(data);
    return NextResponse.json(testimonial, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 400 });
  }
}
