import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const project = await prisma.project.create({
      data: {
        title: body.title,

        slug: body.title
          .toLowerCase()
          .replace(/\s+/g, '-'),

        content: body.content,
      },
    });

    return NextResponse.json(project);

  } catch (error) {

    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}