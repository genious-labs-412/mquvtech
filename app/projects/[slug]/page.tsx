import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

import { generateHTML } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {

  const project = await prisma.project.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!project) {
    return notFound();
  }

  const html = generateHTML(
    project.content as Record<string, unknown>,
    [StarterKit]
  );

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          {project.title}
        </h1>

        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />

      </div>
    </div>
  );
}