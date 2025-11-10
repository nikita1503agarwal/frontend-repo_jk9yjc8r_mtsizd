import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const handleHireMe = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for readability (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm"
        >
          Building fast, beautiful web experiences
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
        >
          Hi, I’m <span className="text-[#6C63FF]">Mahatab Khan</span> —
          <br className="hidden sm:block" /> Web Developer & UI Creator
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          I craft modern, performant web apps with clean code, smooth motion, and a focus on the details that delight users.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={handleViewProjects}
            className="rounded-full bg-[#6C63FF] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#6C63FF]/30 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            View Projects
          </button>
          <button
            onClick={handleHireMe}
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            Hire Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
