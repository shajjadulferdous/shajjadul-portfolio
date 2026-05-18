"use client";

import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Projects Delivered", value: "150+" },
    { label: "Client Satisfaction", value: "100%" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-brand-accent font-medium tracking-[0.2em] uppercase text-sm">
                About Me
              </h3>
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                Architecting the <span className="italic">Future</span> of MERN Stack
              </h2>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              I am Md Shajjadul Ferdous, a dedicated MERN Stack Developer with a passion for 
              transforming complex problems into elegant digital solutions. With expertise in 
              MongoDB, Express.js, React, and Node.js, I build scalable applications that deliver 
              exceptional user experiences.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <div className="text-3xl font-serif font-bold text-brand-accent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Grid Layout of Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="aspect-square bg-brand-slate/30 border border-white/5 rounded-sm flex flex-col items-center justify-center p-8 hover:border-brand-accent/30 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-brand-accent font-serif text-xl">M</span>
                </div>
                <h4 className="font-serif text-lg text-center">MERN Stack</h4>
              </div>
              <div className="aspect-[4/5] bg-brand-slate/10 border border-white/5 rounded-sm p-8 flex flex-col justify-end">
                <div className="h-1 w-8 bg-brand-accent mb-4"></div>
                <h4 className="font-serif text-xl">Scalable Backends</h4>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="aspect-[4/5] bg-brand-accent/5 border border-brand-accent/10 rounded-sm p-8 flex flex-col justify-between">
                <div className="text-brand-accent italic font-serif">&quot;Logic will get you from A to B. Imagination will take you everywhere.&quot;</div>
                <h4 className="font-serif text-xl">Problem Solver</h4>
              </div>
              <div className="aspect-square bg-brand-slate/30 border border-white/5 rounded-sm flex flex-col items-center justify-center p-8 hover:border-brand-accent/30 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-brand-accent font-serif text-xl">U</span>
                </div>
                <h4 className="font-serif text-lg">Intuitive UI</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
