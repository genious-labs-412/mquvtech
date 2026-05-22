import Image from 'next/image';

interface ContentBlock {
  type: 'paragraph' | 'image';
  value: string;
}

async function getProject(slug: string) {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${slug}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch project');
  }

  return res.json();
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const project = await getProject(slug);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">
        {project.title}
      </h1>

      {/* Thumbnail */}
      {project.thumbnailImage && (
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src={project.thumbnailImage}
            alt={project.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      )}

      {/* Content */}
      <div className="space-y-6">

        {Array.isArray(project.content) &&
          project.content.map((block: ContentBlock, index: number) => {

            if (block.type === 'paragraph') {
              return (
                <p
                  key={index}
                  className="text-lg leading-8 text-gray-700"
                >
                  {block.value}
                </p>
              );
            }

            if (block.type === 'image') {
              return (
                <div
                  key={index}
                  className="relative w-full h-[400px]"
                >
                  <Image
                    src={block.value}
                    alt="Project Image"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              );
            }

            return null;
          })}
      </div>
    </div>
  );
}