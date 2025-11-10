import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Sticky minimalist navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold">Mahatab Khan</a>
          <nav className="hidden gap-6 text-sm text-gray-700 sm:flex">
            <a href="#about" className="hover:text-[#6C63FF]">About</a>
            <a href="#skills" className="hover:text-[#6C63FF]">Skills</a>
            <a href="#projects" className="hover:text-[#6C63FF]">Projects</a>
            <a href="#contact" className="hover:text-[#6C63FF]">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-black/5 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6 text-sm text-gray-600">
          © {new Date().getFullYear()} Mahatab Khan. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
