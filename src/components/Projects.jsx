import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, desc, tech, live, code }) => (
  <div className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
    <div className="flex items-start justify-between gap-4">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <div className="flex items-center gap-2">
        {live && (
          <a aria-label="View Live" href={live} target="_blank" rel="noreferrer" className="rounded-full border border-gray-200 p-2 text-gray-700 hover:text-[#6C63FF]">
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
        {code && (
          <a aria-label="View Code" href={code} target="_blank" rel="noreferrer" className="rounded-full border border-gray-200 p-2 text-gray-700 hover:text-[#6C63FF]">
            <Github className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
    <p className="mt-2 text-gray-600">{desc}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {tech.map((t) => (
        <span key={t} className="rounded-full bg-[#6C63FF]/10 px-2 py-1 text-xs text-[#6C63FF]">{t}</span>
      ))}
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: 'Motion Commerce',
      desc: 'High-performance storefront with animations and instant search.',
      tech: ['Next.js', 'Tailwind', 'TypeScript', 'Algolia'],
      live: 'https://example.com',
      code: 'https://github.com/',
    },
    {
      title: 'UI Components Kit',
      desc: 'Beautiful, accessible components built with Tailwind and Radix.',
      tech: ['React', 'Radix', 'Tailwind', 'Framer Motion'],
      live: 'https://example.com',
      code: 'https://github.com/',
    },
    {
      title: 'Realtime Dashboard',
      desc: 'Streaming analytics with websockets and elegant charts.',
      tech: ['Next.js', 'SWR', 'Socket.io', 'Recharts'],
      live: 'https://example.com',
      code: 'https://github.com/',
    },
  ];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-8 text-2xl font-semibold text-gray-900">Projects</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />)
        )}
      </div>
    </section>
  );
};

export default Projects;
