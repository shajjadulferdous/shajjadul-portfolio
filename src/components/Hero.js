"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decor Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Right Copper Blob */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px]"></div>
        {/* Bottom Left Slate Blob */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-500/5 rounded-full blur-[100px]"></div>
        {/* Dot Grid */}
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        
        {/* Decorative Svg Element */}
        <div className="absolute top-48 left-12 opacity-30 animate-pulse">
          <svg fill="none" height="20" viewBox="0 0 60 20" width="60" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10C5 5 10 5 15 10C20 15 25 15 30 10C35 5 40 5 45 10C50 15 55 15 60 10" stroke="#B87333" strokeLinecap="round" strokeWidth="1"></path>
          </svg>
        </div>

        {/* Diagonal Bars */}
        <div className="absolute -bottom-10 -right-10 flex flex-col space-y-4">
          <div className="w-96 h-16 bg-brand-accent diagonal-shape opacity-10"></div>
          <div className="w-80 h-16 bg-slate-400 diagonal-shape opacity-5 self-end mr-8"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Portrait Image Container */}
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-30">
          <div className="relative w-full h-full">
            <Image 
              alt="Md Shajjadul Ferdous Portrait" 
              className="w-full h-full object-cover rounded-full grayscale contrast-125 mix-blend-lighten scale-110" 
              src="https://res.cloudinary.com/dddpxoz5j/image/upload/v1778191772/SHAJJADUL_FERDOUS_gsqsja.jpg"
              width={500}
              height={500}
              priority
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-brand-dark/20 via-brand-dark/60 to-brand-dark"></div>
          </div>
        </div>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10"
        >
          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
            <span className="italic font-normal block text-3xl md:text-4xl mb-2 text-brand-cream/60 font-serif">Introducing</span>
            <span className="text-brand-accent text-gradient font-serif">Md Shajjadul Ferdous</span>
          </h1>

          <div className="flex flex-col items-center space-y-6">
            <h2 className="text-xl md:text-2xl font-serif italic text-brand-cream/90 tracking-[0.15em]">
              MERN Stack Developer & Problem Solver
            </h2>
            <div className="w-16 h-[1px] bg-brand-accent/50"></div>
          </div>

          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed font-light">
            Sculpting high-performance digital experiences with precision and purpose. 
            Expertise in modern web architecture, scalable backends, and intuitive user interfaces.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/md-shajjadul-ferdous/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent text-white px-12 py-4 rounded-sm font-semibold text-xs hover:brightness-110 transition-all uppercase tracking-[0.3em] shadow-xl shadow-brand-accent/20 glow-effect"
            >
              Connect
            </a>
          </div>
        </motion.div>

        {/* Mobile Image display */}
        <div className="mt-16 lg:hidden relative">
          <div className="w-64 h-64 rounded-full overflow-hidden border border-brand-accent/20 shadow-2xl">
            <Image 
              alt="Md Shajjadul Ferdous Portrait" 
              className="w-full h-full object-cover grayscale contrast-125" 
              src="https://res.cloudinary.com/dddpxoz5j/image/upload/v1778191772/SHAJJADUL_FERDOUS_gsqsja.jpg"
              width={256}
              height={256}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
