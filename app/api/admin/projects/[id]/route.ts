import { prisma } from '@/lib/prisma';


// GET single project
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  const { id } = await params;

  const project = await prisma.project.findUnique({
    where: {
      id,
    },
  });

  return Response.json(project);
}


// UPDATE project
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  try {

    const { id } = await params;

    const body = await req.json();

    const updatedProject =
      await prisma.project.update({

        where: {
          id,
        },

        data: {
          title: body.title,
          content: body.content,
          thumbnailImage: body.thumbnailImage,
        },
      });

    return Response.json(updatedProject);

  } catch (error) {

    console.log(error);

    return Response.json(
      {
        error: 'Update failed',
      },
      {
        status: 500,
      }
    );
  }
}



// DELETE project
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  const { id } = await params;

  await prisma.project.delete({
    where: {
      id,
    },
  });

  return Response.json({
    message: 'Project deleted',
  });
}