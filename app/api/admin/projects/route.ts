import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const {
      title,
      content,
      thumbnailImage,
    } = body;

    const slug = generateSlug(title);

    const project = await prisma.project.create({
      data: {
        title,
        slug,
        content,
        thumbnailImage,
      },
    });

    return NextResponse.json({
      success: true,
      project,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}