import Image from 'next/image';

interface TextNode {
  type: string;
  text?: string;
}

interface ContentBlock {
  type: string;

  attrs?: {
    src?: string;
    level?: number;
    alt?: string;
  };

  content?: TextNode[];
}

interface ProjectContent {
  type: string;
  content: ContentBlock[];
}

interface Project {
  title: string;
  thumbnailImage?: string;
  content: ProjectContent;
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

  const project: Project = await getProject(slug);

  return (
    <div className="min-h-screen bg-black text-white">

      <div className="max-w-5xl mx-auto px-4 py-10">

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
          {project.title}
        </h1>

        {/* Thumbnail */}
        {project.thumbnailImage && (
          <div className="relative w-full h-[250px] md:h-[500px] mb-14 overflow-hidden rounded-3xl border border-white/10">

            <Image
              src={project.thumbnailImage}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />

          </div>
        )}

        {/* Content */}
        <div className="space-y-10">

          {project.content?.content?.map(
            (
              block: ContentBlock,
              index: number
            ) => {

              // ======================
              // Paragraph
              // ======================
              if (block.type === 'paragraph') {

                const text = block.content
                  ?.map(
                    (
                      item: TextNode
                    ) => item.text || ''
                  )
                  .join('');

                if (!text) {
                  return null;
                }

                return (
                  <p
                    key={index}
                    className="text-lg md:text-xl leading-9 text-white/80"
                  >
                    {text}
                  </p>
                );
              }

              // ======================
              // Heading
              // ======================
              if (block.type === 'heading') {

                const text = block.content
                  ?.map(
                    (
                      item: TextNode
                    ) => item.text || ''
                  )
                  .join('');

                const level =
                  block.attrs?.level || 2;

                // H1
                if (level === 1) {
                  return (
                    <h1
                      key={index}
                      className="text-5xl font-bold leading-tight"
                    >
                      {text}
                    </h1>
                  );
                }

                // H2
                if (level === 2) {
                  return (
                    <h2
                      key={index}
                      className="text-4xl font-bold leading-tight"
                    >
                      {text}
                    </h2>
                  );
                }

                // H3
                return (
                  <h3
                    key={index}
                    className="text-3xl font-semibold leading-tight"
                  >
                    {text}
                  </h3>
                );
              }

              // ======================
              // Image
              // ======================
              if (block.type === 'image') {

                const imageSrc =
                  block.attrs?.src;

                if (!imageSrc) {
                  return null;
                }

                return (
                  <div
                    key={index}
                    className="relative w-full h-[250px] md:h-[600px] overflow-hidden rounded-3xl border border-white/10"
                  >

                    <Image
                      src={imageSrc}
                      alt={
                        block.attrs?.alt ||
                        'Project Image'
                      }
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />

                  </div>
                );
              }

              return null;
            }
          )}
        </div>
      </div>
    </div>
  );
}