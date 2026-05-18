"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "EduApa - Online Learning",
      category: "Full-Stack Next.js & MongoDB",
      image: "https://images.unsplash.com/photo-1501503069356-3c6b82a17d89?q=80&w=2670&auto=format&fit=crop",
      link: "https://edu-apa-a-learning-platform-sthv.vercel.app/",
      tags: ["Next.js", "MongoDB", "BetterAuth"]
    },
    {
      title: "Dynamic Web App",
      category: "API Integration & Tailwind",
      image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=2670&auto=format&fit=crop",
      link: "https://jocular-florentine-a591aa.netlify.app/",
    },
    {
      title: "Digital Tool",
      category: "React Basic Logic",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
      link: "https://phenomenal-longma-c93aec.netlify.app/",
    },
    {
      title: "Job Tracker",
      category: "DOM Manipulation & Tailwind",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
      link: "https://shajjadulferdous.github.io/basic-project-job-tracker/",
    },
    {
      title: "Responsive Web UI",
      category: "Front-end Fundamentals",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      link: "https://shajjadulferdous.github.io/html-last/",
    },
  ];

  return (
    <section id="work" className="py-24 bg-brand-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <h3 className="text-brand-accent font-medium tracking-[0.2em] uppercase text-sm">
              Portfolio
            </h3>
            <h2 className="text-4xl md:text-6xl font-serif font-bold">
              Selected <span className="italic font-normal">Works</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm font-light leading-relaxed">
            A curated selection of digital products and experiences built for performance and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-sm"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="aspect-16/10 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    width={640}
                    height={400}
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <p className="text-brand-accent text-xs uppercase tracking-widest font-semibold">
                        {project.category}
                      </p>
                      <h4 className="text-2xl font-serif text-white">{project.title}</h4>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-300">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </a>

              {/* Mobile/Default Label */}
              <div className="mt-4 md:hidden group-hover:hidden">
                <p className="text-brand-accent text-xs uppercase tracking-widest">{project.category}</p>
                <h4 className="text-xl font-serif">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="border border-white/10 px-8 py-4 rounded-sm font-semibold text-xs hover:border-brand-accent hover:text-brand-accent transition-all uppercase tracking-[0.3em]">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
