"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Lenis from "lenis";

// Dynamic portfolio data for easy configuration
const ABOUT_HIGHLIGHTS = [
  { text: "Fer_dous", sub: "Codeforces Handle", span: true, bg: "bg-white", rotate: "rotate-0" },
  { text: "3rd Year", sub: "CSE at SUST", bg: "bg-pencil-pink", rotate: "rotate-[-1deg]" },
  { text: "Algorithms", sub: "Problem Solving", bg: "bg-notebook-yellow", rotate: "rotate-[1deg]" },
  { text: "React", sub: "Next.js Web Focus", bg: "bg-secondary-fixed", rotate: "rotate-[0.5deg]" },
  { text: "Active", sub: "CP Practitioner", bg: "bg-white", rotate: "rotate-[-0.5deg]" }
];

const TOOLKIT = [
  {
    category: "Languages",
    items: ["C++ (CP Primary)", "Java", "Python", "JavaScript"]
  },
  {
    category: "Frontend Web",
    items: ["HTML5 & CSS3", "Tailwind CSS", "DaisyUI", "React.js", "Next.js (App Router)", "React Router"]
  },
  {
    category: "Data & Security",
    items: ["BetterAuth", "MongoDB", "Context API", "Local Storage"]
  },
  {
    category: "Platforms",
    items: ["Git & GitHub", "Codeforces", "AtCoder", "LeetCode"]
  }
];

const PROJECTS = [
  {
    id: 1,
    title: "EduApa - Online Learning Platform",
    description: "A comprehensive system containing social authentication, search querying workflows, protected client routes, persistent sessions, and reactive user settings parameters.",
    tags: ["Next.js", "BetterAuth", "MongoDB", "Tailwind CSS"],
    icon: "school",
    iconColor: "text-deep-ink",
    link: "https://edu-apa-a-learning-platform-sthv.vercel.app",
    github: "https://github.com/shajjadulferdous/EduApa-A-Learning-Platform",
    large: true,
    bgClass: "bg-secondary-container"
  },
  {
    id: 2,
    title: "Digital Tools Store",
    description: "An interactive React sandbox mapping product states. Users can dynamically browse, evaluate, clear, or remove custom items dynamically syncing responsive notification alerts.",
    tags: ["React.js", "Tailwind CSS", "Toastify"],
    icon: "shopping_cart",
    iconColor: "text-error",
    link: "https://phenomenal-longma-c93aec.netlify.app/",
    github: "https://github.com/shajjadulferdous/React-Basic",
    rotate: "rotate-[1deg]",
    bgClass: "bg-pencil-pink",
    headerBg: "bg-white"
  },
  {
    id: 3,
    title: "Responsive Core Layout",
    description: "A comprehensive structural layout project validating robust standard alignment rules. Employs crisp mobile-first adaptive frameworks utilizing layered CSS Flexbox configurations.",
    tags: ["HTML5", "CSS Flexbox/Grid"],
    icon: "devices",
    iconColor: "text-white",
    link: "https://shajjadulferdous.github.io/html-last/",
    github: "https://github.com/shajjadulferdous/html-last",
    bgClass: "bg-sky-haze/30",
    headerBg: "bg-sky-haze"
  },
  {
    id: 4,
    title: "Dynamic API Hub",
    description: "Asynchronously fetches real-time parameters from a third-party pipeline, cleanly manipulating structures into customized components. Includes credentialed access checking.",
    accessInfo: "Access: admin | admin123",
    tags: ["JavaScript ES6", "DaisyUI"],
    icon: "api",
    iconColor: "text-deep-ink",
    link: "https://jocular-florentine-a591aa.netlify.app/",
    github: "https://github.com/shajjadulferdous/DOM-and-API-and-HTML-and-CSS",
    rotate: "rotate-[-1deg]",
    bgClass: "bg-notebook-yellow/20",
    headerBg: "bg-notebook-yellow"
  },
  {
    id: 5,
    title: "React Analytical Playground",
    description: "A technical core application validating unified frontend flows. Features client-side routing, modular global states via Context API, and analytical SVG charts powered by Recharts.",
    tags: ["React Router", "Recharts", "Context API"],
    icon: "insights",
    iconColor: "text-white",
    link: "https://funny-kitsune-2345d4.netlify.app/",
    github: "https://github.com/shajjadulferdous/React-Practice-By-making-a-Simple-Website",
    bgClass: "bg-tertiary-container/30",
    headerBg: "bg-pencil-pink"
  }
];

// Motion configurations
const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Dynamic scroll handling for clean anchor jumps
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          lenis.scrollTo(targetElement, { offset: -100 });
        }
      });
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-container min-h-screen">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full z-50 bg-paper-base/90 backdrop-blur-md px-margin-mobile py-4 border-b-2 border-deep-ink shadow-[4px_4px_0px_0px_rgba(15,30,28,1)]">
        <nav className="flex justify-between items-center max-w-container-max mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="font-display-hero text-3xl leading-none text-deep-ink font-bold">Shajjadul</span>
            <span className="font-hand-label text-sm text-ink-soft">cse student @ sust</span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex gap-6 items-center"
          >
            <a className="text-on-surface-variant font-semibold hover:text-primary transition-colors" href="#about">About</a>
            <a className="text-primary font-bold underline decoration-wavy decoration-pencil-pink underline-offset-4" href="#work">Work</a>
            <a className="text-on-surface-variant font-semibold hover:text-primary transition-colors" href="#toolkit">Toolkit</a>
            <motion.a 
              whileHover={{ y: -2, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              className="bg-secondary-container px-5 py-2 rounded-full border-2 border-deep-ink text-on-secondary-container font-bold hover:shadow-[2px_2px_0px_0px_rgba(15,30,28,1)] transition-all" 
              href="#contact"
            >
              <span className="relative flex h-2 w-2 inline-block mr-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available
            </motion.a>
          </motion.div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-deep-ink focus:outline-none flex items-center justify-center p-1"
            >
              <span className="material-symbols-outlined text-4xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-paper-base border-t border-deep-ink/10 mt-3 pt-3 flex flex-col gap-4 overflow-hidden"
            >
              <a 
                onClick={() => setMobileMenuOpen(false)}
                className="text-on-surface-variant font-semibold hover:text-primary py-2 px-1 hover:bg-secondary-container/10 rounded transition-colors" 
                href="#about"
              >
                About
              </a>
              <a 
                onClick={() => setMobileMenuOpen(false)}
                className="text-primary font-bold py-2 px-1 hover:bg-secondary-container/10 rounded transition-colors" 
                href="#work"
              >
                Work
              </a>
              <a 
                onClick={() => setMobileMenuOpen(false)}
                className="text-on-surface-variant font-semibold hover:text-primary py-2 px-1 hover:bg-secondary-container/10 rounded transition-colors" 
                href="#toolkit"
              >
                Toolkit
              </a>
              <a 
                onClick={() => setMobileMenuOpen(false)}
                className="bg-secondary-container text-center py-2 px-4 rounded-full border-2 border-deep-ink text-on-secondary-container font-bold hover:bg-secondary-container/80 transition-all mb-2" 
                href="#contact"
              >
                Available
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="mt-28 space-y-20 pb-20 overflow-x-hidden">
        
        {/* Hero Section */}
        <section className="px-margin-mobile max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-12 pt-10 relative">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex-1 space-y-6 order-2 md:order-1"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2">
              <div className="w-8 h-[2px] bg-pencil-pink"></div>
              <span className="font-hand-label text-xl text-ink-soft">say hello to</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="font-display-hero-mobile text-6xl md:text-display-hero text-deep-ink font-bold wavy-underline inline-block pb-3 select-none"
            >
              Md Shajjadul ferdous
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="font-body-lg text-body-lg max-w-md text-on-surface leading-relaxed">
              A <span className="bg-secondary-container px-3 py-1 border-2 border-deep-ink rounded-full inline-block rotate-[-1deg] font-bold text-on-secondary-container shadow-[2px_2px_0px_0px_rgba(15,30,28,1)]">CSE Student</span> passionate about problem solving, algorithms, and web applications.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
              <motion.a
                whileHover={{ y: -3, shadow: "6px 6px 0px 0px rgba(15,30,28,1)" }}
                whileTap={{ scale: 0.98 }}
                href="#work"
                className="bg-notebook-yellow border-2 border-deep-ink px-6 py-3 rounded-lg shadow-[4px_4px_0px_0px_rgba(15,30,28,1)] font-bold text-deep-ink hover:text-deep-ink text-sm tracking-wide uppercase transition-all"
              >
                See selected work →
              </motion.a>
              <motion.a
                whileHover={{ y: -3, shadow: "6px 6px 0px 0px rgba(15, 30, 28, 1)" }}
                whileTap={{ scale: 0.98 }}
                href="https://drive.google.com/file/d/1OxTzuBHBqL9yAXuxrvSBA01OuX09uuMy/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-deep-ink px-6 py-3 rounded-lg shadow-[4px_4px_0px_0px_rgba(15, 30, 28, 1)] font-bold text-deep-ink hover:text-deep-ink text-sm tracking-wide uppercase transition-all"
              >
                View Resume 📄
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 order-1 md:order-2 relative w-full max-w-[450px] md:max-w-none"
          >
            <div className="relative p-4 border-2 border-dashed border-deep-ink rounded-3xl bg-white/50 shadow-2xl transition-transform hover:rotate-0 duration-300">
              <Image 
                alt="Md Shajjadul ferdous Profile Image" 
                className="rounded-2xl border-2 border-deep-ink grayscale shadow-inner w-full h-auto object-cover max-h-[380px]" 
                src="https://res.cloudinary.com/dddpxoz5j/image/upload/v1778191772/SHAJJADUL_FERDOUS_gsqsja.jpg"
                width={450}
                height={380}
                priority
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-notebook-yellow border-2 border-deep-ink px-4 py-1 rounded-full shadow-[2px_2px_0px_0px_rgba(15,30,28,1)] rotate-[-2deg] select-none">
                <span className="font-hand-label text-sm whitespace-nowrap font-bold text-deep-ink">● CSE @ SUST</span>
              </div>
            </div>

            {/* Floating Decorative Doodles */}
            <motion.div 
              animate={{ rotate: 360, y: [0, -6, 0] }}
              transition={{ 
                rotate: { repeat: Infinity, duration: 20, ease: "linear" },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
              style={{ fontVariationSettings: "'FILL' 1" }}
              className="absolute -top-6 -right-4 material-symbols-outlined text-notebook-yellow text-4xl select-none"
            >
              star
            </motion.div>
            <motion.div 
              animate={{ scale: [1, 1.15, 1], y: [0, 5, 0] }}
              transition={{ 
                scale: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
                y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
              }}
              style={{ fontVariationSettings: "'FILL' 1" }}
              className="absolute top-1/2 -left-6 material-symbols-outlined text-pencil-pink text-3xl select-none"
            >
              code
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="px-margin-mobile max-w-container-max mx-auto py-12 scroll-mt-24" id="about">
          <div className="space-y-4 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-[2px] bg-deep-ink"></div>
              <span className="font-hand-label text-xl text-ink-soft">01 – about</span>
            </div>
            <h2 className="font-display-hero-mobile text-5xl md:text-6xl text-deep-ink font-bold wavy-underline inline-block pb-1">
              The person behind the code
            </h2>
            <p className="font-body-md text-ink-soft max-w-2xl text-lg">
              I am currently in my 3rd year (2nd semester) of Computer Science and Engineering at Shahjalal University of Science and Technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Story Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-paper-base border-2 border-deep-ink rounded-3xl p-8 shadow-[6px_6px_0px_0px_rgba(15,30,28,1)] relative"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-pencil-pink border-2 border-deep-ink rounded-full"></div>
              <div className="space-y-6 font-body-md text-on-surface text-lg leading-relaxed">
                <p>I build modern web technologies using HTML, CSS, Tailwind CSS, React, and Next.js to deliver responsive and highly structured interfaces.</p>
                <p>Beyond frontend layouts, I heavily prioritize competitive programming and algorithmic thinking. Regularly cracking problems on platforms like Codeforces and AtCoder keeps my focus clean, fast, and structured under algorithmic logic boundaries.</p>
                <p>My core career trajectory targets building highly scalable, performant, and reliable engineering frameworks that create impactful computing shifts.</p>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
              {ABOUT_HIGHLIGHTS.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, rotate: 0 }}
                  className={`${item.span ? "col-span-2" : ""} ${item.bg} ${item.rotate} border-2 border-deep-ink rounded-2xl p-6 text-center shadow-[4px_4px_0px_0px_rgba(15,30,28,1)] transition-transform`}
                >
                  <span className={`block font-display-hero text-deep-ink font-bold leading-none mb-1 ${item.span ? "text-6xl" : "text-4xl"}`}>
                    {item.text}
                  </span>
                  <span className="font-hand-label text-ink-soft text-lg font-semibold">{item.sub}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Toolkit Section */}
        <section className="px-margin-mobile max-w-container-max mx-auto py-12 scroll-mt-24" id="toolkit">
          <div className="space-y-4 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-[2px] bg-deep-ink"></div>
              <span className="font-hand-label text-xl text-ink-soft">02 – toolkit</span>
            </div>
            <h2 className="font-display-hero-mobile text-5xl md:text-6xl text-deep-ink font-bold wavy-underline inline-block pb-1">
              Tools I reach for
            </h2>
            <p className="font-body-md text-ink-soft max-w-2xl text-lg">
              A toolkit tailored for robust problem solving, dynamic front-end state rendering, and robust interfaces.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {TOOLKIT.map((category, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -3 }}
                className="bg-white border-2 border-deep-ink rounded-2xl p-8 shadow-[4px_4px_0px_0px_rgba(15,30,28,1)] space-y-6"
              >
                <h3 className="font-display-hero text-4xl text-deep-ink font-bold leading-none">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, keyIdx) => (
                    <motion.span
                      key={keyIdx}
                      whileHover={{ scale: 1.05, backgroundColor: "#ffe24c" }}
                      className="px-4 py-1.5 rounded-full border-2 border-deep-ink font-hand-label text-lg font-semibold bg-white transition-colors cursor-default select-none shadow-[2px_2px_0px_0px_rgba(15,30,28,1)]"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Selected Work */}
        <section className="px-margin-mobile max-w-container-max mx-auto py-12 scroll-mt-24" id="work">
          <div className="space-y-4 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-[2px] bg-deep-ink"></div>
              <span className="font-hand-label text-xl text-ink-soft">03 – selected work</span>
            </div>
            <h2 className="font-display-hero-mobile text-5xl md:text-6xl text-deep-ink font-bold wavy-underline inline-block pb-1">
              Things I&apos;ve built
            </h2>
            <p className="font-body-md text-ink-soft max-w-2xl text-lg">
              A collection of projects demonstrating clean client-side logic, operational APIs, and secure application setups.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PROJECTS.map((project) => {
              if (project.large) {
                return (
                  <motion.div
                    key={project.id}
                    variants={fadeInUp}
                    whileHover={{ y: -4, rotate: 0 }}
                    className="md:col-span-2 bg-white border-2 border-deep-ink rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[8px_8px_0px_0px_rgba(15,30,28,1)] bento-card cursor-pointer group"
                  >
                    <div className={`${project.bgClass} md:w-1/2 p-12 flex items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-deep-ink relative overflow-hidden`}>
                      <motion.div 
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        className="material-symbols-outlined text-8xl text-deep-ink select-none"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {project.icon}
                      </motion.div>
                    </div>
                    <div className="md:w-1/2 p-8 flex flex-col justify-between gap-6">
                      <div className="space-y-4">
                        <h3 className="font-display-hero text-4xl text-deep-ink font-bold leading-none">{project.title}</h3>
                        <p className="text-ink-soft text-sm leading-relaxed">{project.description}</p>
                      </div>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIdx) => (
                            <span key={tagIdx} className="px-2 py-0.5 border border-deep-ink rounded-full text-xs font-hand-label font-bold text-ink-soft bg-paper-base">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4 font-hand-label pt-2">
                          <a 
                            className="text-deep-ink underline hover:text-secondary font-bold text-lg" 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            Live App →
                          </a>
                          {project.github && (
                            <a 
                              className="text-deep-ink underline hover:text-secondary font-bold text-lg" 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              GitHub Repo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              // Standard Cards
              return (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  whileHover={{ y: -4, rotate: 0 }}
                  className={`${project.bgClass} ${project.rotate || ""} border-2 border-deep-ink rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(15,30,28,1)] bento-card flex flex-col cursor-pointer group`}
                >
                  <div className={`h-36 ${project.headerBg || "bg-white"} border-b-2 border-deep-ink flex items-center justify-center relative overflow-hidden`}>
                    <motion.div 
                      whileHover={{ scale: 1.15 }}
                      className={`material-symbols-outlined text-5xl ${project.iconColor}`}
                      style={project.icon === "favorite" || project.icon === "star" || project.icon === "local_florist" ? { fontVariationSettings: "'FILL' 1" } : {}}
                    >
                      {project.icon}
                    </motion.div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between gap-4">
                    <div className="space-y-3">
                      <h3 className="font-display-hero text-3xl text-deep-ink font-bold leading-none">{project.title}</h3>
                      <p className="text-ink-soft text-xs leading-relaxed">{project.description}</p>
                    </div>
                    <div className="space-y-3 pt-2">
                      {project.accessInfo && (
                        <div className="text-[11px] text-ink-soft italic font-mono">
                          {project.accessInfo}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tagIdx) => (
                          <span key={tagIdx} className="px-2.5 py-0.5 bg-white/70 border border-deep-ink rounded-full text-[10px] font-hand-label font-bold text-ink-soft">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 font-hand-label text-sm pt-2">
                        <a 
                          className="underline text-deep-ink hover:text-secondary font-bold" 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Live Link →
                        </a>
                        {project.github && (
                          <a 
                            className="underline text-deep-ink hover:text-secondary font-bold" 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            {project.title === "Digital Tools Store" ? "GitHub Repo" : "Repository"}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="px-margin-mobile max-w-container-max mx-auto py-12 text-center scroll-mt-24" id="contact">
          <div className="space-y-4 mb-12">
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-[2px] bg-deep-ink"></div>
              <span className="font-hand-label text-xl text-ink-soft">04 – say hi</span>
              <div className="w-8 h-[2px] bg-deep-ink"></div>
            </div>
            <h2 className="font-display-hero-mobile text-6xl text-deep-ink font-bold wavy-underline inline-block pb-1">
              Get in touch
            </h2>
            <p className="font-body-md text-ink-soft max-w-lg mx-auto text-lg leading-relaxed">
              Feel free to connect for coding collaborations, MERN inquiries, or algorithmic problem-solving discussions.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white border-2 border-deep-ink rounded-[40px] p-12 shadow-[12px_12px_0px_0px_rgba(15,30,28,1)] max-w-3xl mx-auto relative overflow-hidden"
          >
            {/* Corner Decorative Flares */}
            <motion.div 
              animate={{ rotate: [0, -360] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute top-4 left-4 material-symbols-outlined text-notebook-yellow text-2xl select-none"
            >
              flare
            </motion.div>
            <motion.div 
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute top-4 right-4 material-symbols-outlined text-secondary text-2xl select-none"
            >
              flare
            </motion.div>
            <motion.div 
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute bottom-4 left-4 material-symbols-outlined text-pencil-pink text-2xl select-none"
            >
              flare
            </motion.div>
            <motion.div 
              animate={{ rotate: [0, -360] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute bottom-4 right-4 material-symbols-outlined text-sky-haze text-2xl select-none"
            >
              flare
            </motion.div>

            <div className="space-y-8 relative z-10">
              <h3 className="font-display-hero text-5xl md:text-6xl text-deep-ink font-bold leading-none">Start a conversation</h3>
              <p className="font-hand-label text-2xl text-ink-soft font-semibold max-w-md mx-auto">
                I&apos;m always happy to talk about engineering, design, or a good collaboration. The inbox is open.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a 
                  whileHover={{ y: -3, shadow: "6px 6px 0px 0px rgba(15, 30, 28, 1)" }}
                  whileTap={{ scale: 0.98 }}
                  href="mailto:shajjadulferdous@gmail.com"
                  className="bg-notebook-yellow border-2 border-deep-ink px-6 py-2.5 rounded-lg font-bold text-deep-ink text-sm tracking-wide uppercase transition-all shadow-[4px_4px_0px_0px_rgba(15, 30, 28, 1)] inline-block"
                >
                  Email Me
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3, shadow: "6px 6px 0px 0px rgba(15, 30, 28, 1)" }}
                  whileTap={{ scale: 0.98 }}
                  href="https://www.linkedin.com/in/md-shajjadul-ferdous/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-haze border-2 border-deep-ink px-6 py-2.5 rounded-lg font-bold text-deep-ink text-sm tracking-wide uppercase transition-all shadow-[4px_4px_0px_0px_rgba(15, 30, 28, 1)] inline-block"
                >
                  LinkedIn
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3, shadow: "6px 6px 0px 0px rgba(15, 30, 28, 1)" }}
                  whileTap={{ scale: 0.98 }}
                  href="https://github.com/shajjadulferdous"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary-fixed border-2 border-deep-ink px-6 py-2.5 rounded-lg font-bold text-deep-ink text-sm tracking-wide uppercase transition-all shadow-[4px_4px_0px_0px_rgba(15, 30, 28, 1)] inline-block"
                >
                  GitHub
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3, shadow: "6px 6px 0px 0px rgba(15, 30, 28, 1)" }}
                  whileTap={{ scale: 0.98 }}
                  href="https://codeforces.com/profile/Fer_dous"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pencil-pink border-2 border-deep-ink px-6 py-2.5 rounded-lg font-bold text-deep-ink text-sm tracking-wide uppercase transition-all shadow-[4px_4px_0px_0px_rgba(15, 30, 28, 1)] inline-block"
                >
                  Codeforces
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3, shadow: "6px 6px 0px 0px rgba(15, 30, 28, 1)" }}
                  whileTap={{ scale: 0.98 }}
                  href="https://atcoder.jp/users/shajjadulferdous"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-notebook-yellow border-2 border-deep-ink px-6 py-2.5 rounded-lg font-bold text-deep-ink text-sm tracking-wide uppercase transition-all shadow-[4px_4px_0px_0px_rgba(15, 30, 28, 1)] inline-block"
                >
                  AtCoder
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3, shadow: "6px 6px 0px 0px rgba(15, 30, 28, 1)" }}
                  whileTap={{ scale: 0.98 }}
                  href="https://leetcode.com/u/shajjadulferdous/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-haze border-2 border-deep-ink px-6 py-2.5 rounded-lg font-bold text-deep-ink text-sm tracking-wide uppercase transition-all shadow-[4px_4px_0px_0px_rgba(15, 30, 28, 1)] inline-block"
                >
                  LeetCode
                </motion.a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-margin-mobile flex flex-col md:flex-row justify-between items-center gap-gutter border-t-2 border-dashed border-deep-ink bg-surface-container mt-12">
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display-hero text-4xl text-on-surface font-bold cursor-pointer select-none"
        >
          Shajjadul
        </div>
        <p className="font-hand-label text-lg font-semibold text-ink-soft text-center py-4 md:py-0 select-none">
          Made with a box of crayons and careful thinking ❤️ © 2026 Md Shajjadul ferdous • Built with Ink & Code
        </p>
        <div className="flex gap-6">
          <a className="text-ink-soft hover:text-primary hover:rotate-1 font-hand-label text-lg font-bold transition-transform" href="#about">About</a>
          <a className="text-ink-soft hover:text-primary hover:rotate-1 font-hand-label text-lg font-bold transition-transform" href="#work">Work</a>
          <a className="text-ink-soft hover:text-primary hover:rotate-1 font-hand-label text-lg font-bold transition-transform" href="#toolkit">Toolkit</a>
          <a className="text-ink-soft hover:text-primary hover:rotate-1 font-hand-label text-lg font-bold transition-transform" href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}
