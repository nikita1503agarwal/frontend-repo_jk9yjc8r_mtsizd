import React from 'react';
import { Wrench, Braces, Box } from 'lucide-react';

const SkillGroup = ({ title, items, icon: Icon, color = '#6C63FF' }) => (
  <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
    <div className="mb-3 flex items-center gap-2">
      <Icon className="h-5 w-5" style={{ color }} />
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((s) => (
        <span
          key={s}
          className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700"
        >
          {s}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-8 text-2xl font-semibold text-gray-900">Skills</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <SkillGroup
          title="Frontend"
          icon={Braces}
          items={[
            'HTML5',
            'CSS3',
            'JavaScript',
            'TypeScript',
            'React',
            'Next.js',
            'Tailwind CSS',
            'Framer Motion',
          ]}
        />
        <SkillGroup
          title="Backend"
          icon={Box}
          items={['Node.js', 'Express', 'REST APIs', 'MongoDB', 'PostgreSQL']}
        />
        <SkillGroup
          title="Tools"
          icon={Wrench}
          items={[
            'Git',
            'GitHub',
            'Vercel',
            'Figma',
            'Jest',
            'ESLint',
            'Prettier',
          ]}
        />
      </div>
    </section>
  );
};

export default Skills;
