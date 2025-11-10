import React from 'react';
import { Code2, Sparkles } from 'lucide-react';

const Stat = ({ value, label }) => (
  <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
    <div className="text-3xl font-semibold text-gray-900">{value}</div>
    <div className="mt-1 text-sm text-gray-500">{label}</div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-[#6C63FF]" />
        <h2 className="text-2xl font-semibold text-gray-900">About</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900">Who I Am</h3>
          <p className="mt-3 text-gray-600">
            I’m Mahatab Khan, a web developer focused on building delightful, high-performing interfaces.
            I love combining clean architecture with aesthetics and micro-interactions to craft premium digital products.
          </p>
          <div className="mt-6 flex items-center gap-2 rounded-xl bg-gray-50 p-3 text-sm text-gray-700">
            <Code2 className="h-4 w-4 text-[#6C63FF]" />
            <span>JavaScript, TypeScript, React, Next.js, Node.js, Tailwind CSS</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Stat value="4+" label="Years Experience" />
          <Stat value="30+" label="Projects" />
          <Stat value="100%" label="Client Focus" />
        </div>
      </div>
    </section>
  );
};

export default About;
