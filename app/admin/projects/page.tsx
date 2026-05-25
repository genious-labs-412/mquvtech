export const dynamic = 'force-dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { prisma } from '@/lib/prisma';
import DeleteButton from '@/components/admin/DeleteButton';


interface ContentBlock {
  type: string;
  attrs?: {
    src?: string;
  };
  content?: Array<{
    text?: string;
  }>;
}

interface ProjectContent {
  content?: ContentBlock[];
}

export default async function ProjectsPage() {

  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="min-h-screen bg-black text-white p-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-14">

        <div>
          <h1 className="text-5xl font-bold">
            Projects
          </h1>

          <p className="text-white/40 mt-2">
            Manage all portfolio projects
          </p>
        </div>

        <Link
          href="/admin/projects/create"
          className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:bg-neutral-200 transition"
        >
          Add Project
        </Link>

      </div>

      {/* Empty State */}
      {projects.length === 0 && (
        <div className="border border-white/10 rounded-3xl p-20 text-center bg-[#0a0a0a]">

          <h2 className="text-2xl font-semibold mb-3">
            No Projects Found
          </h2>

          <p className="text-white/40 mb-8">
            Start by creating your first project.
          </p>

          <Link
            href="/admin/projects/create"
            className="bg-white text-black px-6 py-3 rounded-2xl font-semibold"
          >
            Create Project
          </Link>

        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {projects.map((project) => {

          const content = project.content as ProjectContent;

          let firstImage = '';
          let firstText = '';

          content?.content?.forEach((item: ContentBlock) => {

            // image
            if (
              item.type === 'image' &&
              !firstImage
            ) {
              firstImage = item.attrs?.src || '';
            }

            // paragraph
            if (
              item.type === 'paragraph' &&
              !firstText
            ) {

              const text =
                item.content?.[0]?.text;

              if (text) {
                firstText = text;
              }
            }
          });

          return (
            <div
              key={project.id}
              className="bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
            >

              {/* Thumbnail */}
              <div className="relative h-60 overflow-hidden bg-[#111]">

                {firstImage ? (
                  <Image
                    src={firstImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/20 text-sm">
                    No Image
                  </div>
                )}

              </div>

              {/* Card Content */}
              <div className="p-6 space-y-5">

                {/* Title */}
                <div>

                  <h2 className="text-2xl font-bold line-clamp-1">
                    {project.title}
                  </h2>

                  <p className="text-xs text-white/30 mt-2 break-all">
                    {project.id}
                  </p>

                </div>

                {/* Description */}
                {firstText ? (
                  <p className="text-white/60 text-sm leading-relaxed line-clamp-4">
                    {firstText}
                  </p>
                ) : (
                  <p className="text-white/20 text-sm">
                    No description added
                  </p>
                )}

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">

                  {/* Show */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="bg-white text-black px-4 py-2 rounded-xl text-sm font-semibold hover:bg-neutral-200 transition"
                  >
                    Show
                  </Link>

                  {/* Edit */}
                  <Link
                    href={`/admin/projects/edit/${project.id}`}
                    className="border border-white/10 px-4 py-2 rounded-xl text-sm hover:bg-white/5 transition"
                  >
                    Edit
                  </Link>

{/* Delete */}
<DeleteButton
  id={project.id}
  api="/api/admin/projects"
  message="Project deleted"
/>

                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}