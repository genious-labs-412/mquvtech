import { projects } from '@/constants/index';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailsPage({
  params,
}: PageProps) {

  const project = projects.find(
    (item) => item.slug === params.slug
  );

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* HERO IMAGE */}
      <div className="w-full h-[500px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
          {project.category}
        </p>

        <h1 className="text-6xl font-bold mb-8">
          {project.title}
        </h1>

        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
          {project.shortDescription}
        </p>

        {/* TECH STACK */}
        <div className="mt-14">
          <h2 className="text-3xl font-semibold mb-6">
            Technologies Used
          </h2>

          <div className="flex flex-wrap gap-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-5 py-3 rounded-full border border-white/10 bg-[#111]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* PROJECT DETAILS */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">
            Project Overview
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              This project was developed to solve modern business challenges
              through scalable digital solutions.
            </p>

            <p>
              We designed and developed a complete user-focused experience
              including frontend architecture, backend integration, and
              responsive design systems.
            </p>

            <p>
              The platform improves business workflows, enhances user
              engagement, and delivers high performance across devices.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}