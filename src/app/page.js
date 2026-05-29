"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Lenis from "lenis";
import { 
  FiBookOpen, 
  FiLayers, 
  FiShoppingBag, 
  FiMonitor, 
  FiCpu, 
  FiBarChart2 ,
  FiMenu, FiX
} from "react-icons/fi";
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
    items: ["HTML5 & CSS3", "Tailwind CSS", "DaisyUI","HeroUI", "React.js", "Next.js (App Router)", "React Router"]
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
    title: "Tutoria - Tutor Booking Platform",
    description: "A modern, full-stack marketplace enabling students to discover tutors, schedule sessions, and register as instructors. Features a dynamic profile-matching engine and multi-role user workflows.",
    tags: ["Next.js", "BetterAuth", "MongoDB", "HeroUI", "Tailwind CSS"],
    icon: FiBookOpen,
    iconColor: "text-deep-ink",
    link: "https://tutoria-one.vercel.app/",
    github: "https://github.com/shajjadulferdous/tutoria",
    bgClass: "bg-secondary-container"
  },
  {
    id: 2,
    title: "EduApa - Online Learning Platform",
    description: "A comprehensive LMS built with persistent user sessions, social authentication adapters, robust client-side route guards, and high-performance reactive settings dashboards.",
    tags: ["Next.js", "BetterAuth", "MongoDB", "Tailwind CSS"],
    icon: FiLayers,
    iconColor: "text-deep-ink",
    link: "https://edu-apa-a-learning-platform-sthv.vercel.app",
    github: "https://github.com/shajjadulferdous/EduApa-A-Learning-Platform",
    bgClass: "bg-secondary-container"
  },
  {
    id: 3,
    title: "Digital Tools Store",
    description: "An interactive e-commerce sandbox mapping complex global state behaviors. Implements real-time item evaluation, batch state clearing, and state-synced toast notification systems.",
    tags: ["React.js", "Tailwind CSS", "Toastify"],
    icon: FiShoppingBag,
    iconColor: "text-error",
    link: "https://phenomenal-longma-c93aec.netlify.app/",
    github: "https://github.com/shajjadulferdous/React-Basic",
    rotate: "rotate-[1deg]",
    bgClass: "bg-pencil-pink",
    headerBg: "bg-white"
  },
  {
    id: 4,
    title: "Responsive Core Layout",
    description: "A performance-focused UI structural layout validating strict modern design tokens. Leverages rigid mobile-first break-points utilizing layered CSS Flexbox and CSS Grid setups.",
    tags: ["HTML5", "CSS Grid", "Flexbox"],
    icon: FiMonitor,
    iconColor: "text-white",
    link: "https://shajjadulferdous.github.io/html-last/",
    github: "https://github.com/shajjadulferdous/html-last",
    bgClass: "bg-sky-haze/30",
    headerBg: "bg-sky-haze"
  },
  {
    id: 5,
    title: "Dynamic API Hub",
    description: "Asynchronously orchestrates data fetching pipelines from third-party RESTful architectures. Maps structured JSON payloads directly into clean UI elements with integrated admin role gates.",
    accessInfo: "Access: admin | admin123",
    tags: ["JavaScript ES6", "DaisyUI", "REST API"],
    icon: FiCpu,
    iconColor: "text-deep-ink",
    link: "https://jocular-florentine-a591aa.netlify.app/",
    github: "https://github.com/shajjadulferdous/DOM-and-API-and-HTML-and-CSS",
    rotate: "rotate-[-1deg]",
    bgClass: "bg-notebook-yellow/20",
    headerBg: "bg-notebook-yellow"
  },
  {
    id: 6,
    title: "React Analytical Playground",
    description: "A micro-frontend platform optimizing client-side routing structures. Leverages React Context API for global state persistence paired with highly performant, responsive SVG charts via Recharts.",
    tags: ["React Router", "Recharts", "Context API"],
    icon: FiBarChart2,
    iconColor: "text-white",
    link: "https://funny-kitsune-2345d4.netlify.app/",
    github: "https://github.com/shajjadulferdous/React-Practice-By-making-a-Simple-Website",
    bgClass: "bg-tertiary-container/30",
    headerBg: "bg-pencil-pink"
  }
];

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
  const SparkleStar = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`w-8 h-8 ${className} select-none pointer-events-none`}>
      <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
    </svg>
  );

  const CodeBracket = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`w-7 h-7 ${className} select-none pointer-events-none`}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
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
   const StarFlare = ({ className }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-6 h-6 ${className} select-none pointer-events-none`}
    >
      <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
    </svg>
  );
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-container min-h-screen">
      {/* Top Navigation */}
  <header className="fixed top-0 w-full z-50 bg-paper-base/90 backdrop-blur-md px-margin-mobile py-4 border-b-2 border-deep-ink shadow-[4px_4px_0px_0px_rgba(15,30,28,1)]">
      <nav className="flex justify-between items-center max-w-container-max mx-auto">
        
        {/* Brand / Logo */}
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
            className="flex items-center bg-secondary-container px-5 py-2 rounded-full border-2 border-deep-ink text-on-secondary-container font-bold hover:shadow-[2px_2px_0px_0px_rgba(15,30,28,1)] transition-all" 
            href="#contact"
          >
            <span className="relative flex h-2 w-2 mr-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available
          </motion.a>
        </motion.div>

        {/* Mobile Menu Icon Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-deep-ink focus:outline-none flex items-center justify-center p-1 transition-transform duration-200"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <FiX className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
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
              className="flex items-center justify-center bg-secondary-container py-2 px-4 rounded-full border-2 border-deep-ink text-on-secondary-container font-bold hover:bg-secondary-container/80 transition-all mb-2" 
              href="#contact"
            >
              <span className="relative flex h-2 w-2 mr-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>

      <main className="mt-28 space-y-20 pb-20 overflow-x-hidden">
        
        {/* Hero Section */}
<section className="px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16 pt-20 pb-24 relative overflow-hidden" id="hero">
      {/* Subtle Blueprint Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f1e1c04_1px,transparent_1px),linear-gradient(to_bottom,#0f1e1c04_1px,transparent_1px)] bg-[size:32px_32px] -z-10" />

      {/* Left Content Column */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="flex-1 space-y-6 order-2 md:order-1 relative z-10"
      >
        {/* UNIQUE: Live Status Radar Badge */}
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white border-2 border-deep-ink px-3 py-1.5 rounded-full shadow-[3px_3px_0px_0px_#0f1e1c]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-hand-label text-xs uppercase font-black tracking-wider text-deep-ink">
            Available for new opportunities
          </span>
        </motion.div>

        <div className="space-y-3">
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <span className="font-hand-label text-xl text-ink-soft italic">
              say hello to
            </span>
            <div className="w-12 h-0.5 bg-pencil-pink/70"></div>
          </motion.div>
          
          {/* Enhanced Heavy-Weight Neo-Brutalist Heading */}
          <motion.h1 
            variants={fadeInUp}
            className="font-display-hero-mobile text-5xl md:text-6xl lg:text-7xl text-deep-ink font-black tracking-tight relative inline-block pb-2 select-none"
          >
            Md Shajjadul Ferdous
            <span className="absolute bottom-0 left-0 w-full h-[4px] bg-deep-ink rounded-full"></span>
          </motion.h1>
        </div>
        
        <motion.p variants={fadeInUp} className="font-body-lg text-lg md:text-xl max-w-lg text-on-surface leading-relaxed font-medium">
          A <span className="bg-secondary-container px-3 py-1 border-2 border-deep-ink rounded-full inline-block rotate-[-1.5deg] font-black text-on-secondary-container shadow-[4px_4px_0px_0px_#0f1e1c] mx-1 transition-transform hover:rotate-[1deg] cursor-default duration-200">CSE Student</span> passionate about problem solving, algorithms, and web applications.
        </motion.p>
        
        {/* Action Buttons with Offset Click Mechanism */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
          <motion.a
            whileHover={{ y: -3, x: -3, shadow: "7px 7px 0px 0px #0f1e1c" }}
            whileTap={{ scale: 0.98 }}
            href="#work"
            className="bg-notebook-yellow border-2 border-deep-ink px-6 py-3.5 rounded-xl shadow-[4px_4px_0px_0px_#0f1e1c] font-bold text-deep-ink text-sm tracking-wider uppercase text-center transition-all"
          >
            See selected work →
          </motion.a>
          <motion.a
            whileHover={{ y: -3, x: -3, shadow: "7px 7px 0px 0px #0f1e1c" }}
            whileTap={{ scale: 0.98 }}
            href="https://drive.google.com/file/d/1r-spdW-i4aiH8q4vtQxjfeA90gnabevi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border-2 border-deep-ink px-6 py-3.5 rounded-xl shadow-[4px_4px_0px_0px_#0f1e1c] font-bold text-deep-ink text-sm tracking-wider uppercase text-center transition-all"
          >
            View Resume 📄
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Right Side Portrait: UNIQUE "Photo-Stack" & Color-Reveal Hover Effect */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.93, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 3 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 order-1 md:order-2 flex justify-center relative w-full max-w-[420px] md:max-w-none group cursor-pointer"
      >
        {/* Behind Stack Layer (Creates depth) */}
        <div className="absolute inset-0 bg-sky-haze/40 border-2 border-deep-ink rounded-[24px] translate-x-3 translate-y-3 rotate-[-4deg] group-hover:rotate-[-6deg] transition-transform duration-300 -z-10 shadow-[4px_4px_0px_0px_#0f1e1c]" />

        {/* Primary Polaroid Card Container */}
        <div className="relative p-4 pb-14 border-3 border-deep-ink rounded-[24px] bg-white shadow-[10px_10px_0px_0px_#0f1e1c] transition-all duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-[16px_16px_0px_0px_#0f1e1c]">
          
          <div className="overflow-hidden rounded-xl border-2 border-deep-ink bg-deep-ink">
            <Image 
              alt="Md Shajjadul ferdous Profile Image" 
              /* UNIQUE: Grayscale transitions instantly to crisp color on parent block hover */
              className="w-full h-auto object-cover max-h-[380px] grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 contrast-110" 
              src="https://res.cloudinary.com/dddpxoz5j/image/upload/v1778191772/SHAJJADUL_FERDOUS_gsqsja.jpg"
              width={400}
              height={380}
              priority
            />
          </div>
          
          {/* Label Tag locked elegantly inside the border margin bounds */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-notebook-yellow border-2 border-deep-ink px-5 py-1.5 rounded-full shadow-[3px_3px_0px_0px_#0f1e1c] rotate-[-1.5deg] select-none group-hover:rotate-[1deg] transition-transform duration-300">
            <span className="font-hand-label text-sm whitespace-nowrap font-black text-deep-ink tracking-wide">
              ● CSE @ SUST
            </span>
          </div>
        </div>

        {/* Floating Asymmetric SVG Doodles with Independent Trajectories */}
        <motion.div 
          animate={{ rotate: [0, 360], y: [0, -10, 0] }}
          transition={{ 
            rotate: { repeat: Infinity, duration: 15, ease: "linear" },
            y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
          }}
          className="absolute -top-6 right-4 md:-right-2 text-notebook-yellow drop-shadow-[2px_2px_0px_#0f1e1c]"
        >
          <SparkleStar />
        </motion.div>
        
        <motion.div 
          animate={{ scale: [1, 1.1, 1], x: [0, 6, 0] }}
          transition={{ 
            scale: { repeat: Infinity, duration: 3, ease: "easeInOut" },
            x: { repeat: Infinity, duration: 4.5, ease: "easeInOut" }
          }}
          className="absolute bottom-10 -left-6 text-pencil-pink drop-shadow-[2px_2px_0px_#0f1e1c]"
        >
          <CodeBracket />
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
            {/* Header Container */}
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

            {/* Grid Container - Uniform column sizing across all screens */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {PROJECTS.map((project) => {
                // Dynamic React Component Assignment
                const IconComponent = project.icon;

                return (
                  <motion.div
                    key={project.id}
                    variants={fadeInUp}
                    whileHover={{ y: -4, rotate: 0 }}
                    className={`${project.bgClass} ${project.rotate || ""} border-2 border-deep-ink rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(15,30,28,1)] bento-card flex flex-col cursor-pointer group`}
                  >
                    {/* Icon / Header Section */}
                    <div className={`h-36 ${project.headerBg || "bg-white"} border-b-2 border-deep-ink flex items-center justify-center relative overflow-hidden`}>
                      <motion.div whileHover={{ scale: 1.15 }}>
                        <IconComponent className={`text-5xl ${project.iconColor}`} />
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex-grow flex flex-col justify-between gap-4">
                      <div className="space-y-3">
                        <h3 className="font-display-hero text-3xl text-deep-ink font-bold leading-none">
                          {project.title}
                        </h3>
                        <p className="text-ink-soft text-xs leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tags and Action Links Section */}
                      <div className="space-y-3 pt-2">
                        {project.accessInfo && (
                          <div className="text-[11px] text-ink-soft italic font-mono">
                            {project.accessInfo}
                          </div>
                        )}

                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag, tagIdx) => (
                            <span 
                              key={tagIdx} 
                              className="px-2.5 py-0.5 bg-white/70 border border-deep-ink rounded-full text-[10px] font-hand-label font-bold text-ink-soft"
                            >
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
                              Repository
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
    <section 
      className="px-4 md:px-8 max-w-7xl mx-auto py-20 text-center scroll-mt-24 relative overflow-hidden" 
      id="contact"
    >
      {/* Subtle Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f1e1c05_1px,transparent_1px),linear-gradient(to_bottom,#0f1e1c05_1px,transparent_1px)] bg-[size:32px_32px] -z-10" />

      {/* Header Area */}
      <div className="space-y-4 mb-16 relative z-10">
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-[2px] bg-deep-ink/60"></div>
          <span className="font-hand-label text-lg tracking-wider text-ink-soft uppercase font-bold">
            04 – say hi
          </span>
          <div className="w-8 h-[2px] bg-deep-ink/60"></div>
        </div>
        
        <h2 className="font-display-hero-mobile text-5xl md:text-6xl text-deep-ink font-black tracking-tight relative inline-block pb-2">
          Get in touch
          <span className="absolute bottom-0 left-0 w-full h-[3px] bg-deep-ink rounded-full"></span>
        </h2>
        
        <p className="font-body-md text-ink-soft max-w-xl mx-auto text-base md:text-lg leading-relaxed">
          Feel free to connect for coding collaborations, MERN inquiries, or algorithmic problem-solving discussions.
        </p>
      </div>

      {/* Main Contact Card */}
      <div className="max-w-2xl mx-auto transition-transform duration-300 hover:-translate-y-1 hover:-translate-x-1">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          /* FIXED BORDERS & SHADOWS:
             - Reduced border to a clean, crisp 3px (border-3)
             - Swapped harsh 16px shadow for a tight, deliberate 8px offset
             - Adjusted border-radius to rounded-[32px] so the shadow geometry lines up elegantly
          */
          className="bg-white border-3 border-deep-ink rounded-[32px] p-8 md:p-14 shadow-[8px_8px_0px_0px_#0f1e1c] relative overflow-hidden"
        >
          {/* Animated SVG Flare Corners with adjusted placement */}
          <motion.div 
            animate={{ rotate: [0, -360], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="absolute top-5 left-5 text-notebook-yellow"
          >
            <StarFlare className="w-6 h-6 filter drop-shadow-[1.5px_1.5px_0px_#0f1e1c]" />
          </motion.div>

          <motion.div 
            animate={{ rotate: [0, 360], scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute top-5 right-5 text-secondary"
          >
            <StarFlare className="w-7 h-7 filter drop-shadow-[1.5px_1.5px_0px_#0f1e1c]" />
          </motion.div>

          <motion.div 
            animate={{ rotate: [0, 360], scale: [1, 0.95, 1] }}
            transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
            className="absolute bottom-5 left-5 text-pencil-pink"
          >
            <StarFlare className="w-5 h-5 filter drop-shadow-[1.5px_1.5px_0px_#0f1e1c]" />
          </motion.div>

          <motion.div 
            animate={{ rotate: [0, -360], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
            className="absolute bottom-5 right-5 text-sky-haze"
          >
            <StarFlare className="w-6 h-6 filter drop-shadow-[1.5px_1.5px_0px_#0f1e1c]" />
          </motion.div>

          {/* Content */}
          <div className="space-y-6 relative z-10">
            <h3 className="font-display-hero text-3xl md:text-5xl text-deep-ink font-black tracking-tight leading-none">
              Start a conversation
            </h3>
            
            <p className="font-hand-label text-lg md:text-xl text-ink-soft max-w-md mx-auto leading-normal">
              I&apos;m always happy to talk about engineering, design, or a good collaboration. The inbox is open.
            </p>
            
            {/* Action Buttons with matching crisp styling */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
              <motion.a 
                whileHover={{ y: -2, x: -2, shadow: "6px 6px 0px 0px #0f1e1c" }}
                whileTap={{ scale: 0.98 }}
                href="mailto:shajjadulferdous@gmail.com"
                className="w-full sm:w-auto bg-notebook-yellow border-2 border-deep-ink px-6 py-3 rounded-xl font-bold text-deep-ink text-sm tracking-wide uppercase shadow-[4px_4px_0px_0px_#0f1e1c] text-center"
              >
                Email Me
              </motion.a>
              
              <motion.a 
                whileHover={{ y: -2, x: -2, shadow: "6px 6px 0px 0px #0f1e1c" }}
                whileTap={{ scale: 0.98 }}
                href="https://www.linkedin.com/in/md-shajjadul-ferdous/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-sky-haze border-2 border-deep-ink px-6 py-3 rounded-xl font-bold text-deep-ink text-sm tracking-wide uppercase shadow-[4px_4px_0px_0px_#0f1e1c] text-center"
              >
                LinkedIn
              </motion.a>
              
              <motion.a 
                whileHover={{ y: -2, x: -2, shadow: "6px 6px 0px 0px #0f1e1c" }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/shajjadulferdous"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-secondary-fixed border-2 border-deep-ink px-6 py-3 rounded-xl font-bold text-deep-ink text-sm tracking-wide uppercase shadow-[4px_4px_0px_0px_#0f1e1c] text-center"
              >
                GitHub
              </motion.a>     
            </div>
          </div>
        </motion.div>
      </div>
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
