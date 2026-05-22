import { prisma } from '@/lib/prisma';

// GET project by slug
export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const project = await prisma.project.findUnique({
      where: {
        slug,
      },
    });

    if (!project) {
      return Response.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    return Response.json(project);

  } catch (error) {

    console.log(error);

    return Response.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}