import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // In this portfolio-only version we simply simulate success.
    // Can be wired to a real backend later.
    setTimeout(() => setStatus('Message sent! I will get back to you soon.'), 700);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-8 text-2xl font-semibold text-gray-900">Contact</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <form onSubmit={onSubmit} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4">
            <input
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-[#6C63FF]"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
            <input
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-[#6C63FF]"
              type="email"
              name="email"
              placeholder="Email address"
              required
            />
            <textarea
              className="h-32 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-[#6C63FF]"
              name="message"
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#6C63FF] px-5 py-3 text-sm font-medium text-white shadow-md shadow-[#6C63FF]/20 transition hover:-translate-y-0.5"
          >
            <Send className="h-4 w-4" /> Send Message
          </button>
          {status && <p className="mt-3 text-sm text-gray-600">{status}</p>}
        </form>

        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <p className="text-gray-600">
            Let’s build something outstanding. I’m available for freelance work and long-term projects.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:text-[#6C63FF]">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:text-[#6C63FF]">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="mailto:contact@example.com" className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:text-[#6C63FF]">
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
