"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h3 className="text-brand-accent font-medium tracking-[0.2em] uppercase text-sm">
                Get in Touch
              </h3>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">
                Let&apos;s Build Something <span className="italic font-normal">Exceptional</span>
              </h2>
            </div>

            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
              Whether you have a specific project in mind or just want to explore possibilities, 
              I&apos;m always open to discussing new opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-sm bg-brand-slate/50 border border-white/5 flex items-center justify-center group-hover:border-brand-accent transition-colors">
                  <Mail size={20} className="text-brand-accent" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Email</p>
                  <a href="mailto:shajjadulferdous@gmail.com" className="text-brand-cream hover:text-brand-accent transition-colors">shajjadulferdous@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-sm bg-brand-slate/50 border border-white/5 flex items-center justify-center group-hover:border-brand-accent transition-colors">
                  <Phone size={20} className="text-brand-accent" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/md-shajjadul-ferdous/" target="_blank" rel="noopener noreferrer" className="text-brand-cream hover:text-brand-accent transition-colors">Md Shajjadul Ferdous</a>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-sm bg-brand-slate/50 border border-white/5 flex items-center justify-center group-hover:border-brand-accent transition-colors">
                  <MapPin size={20} className="text-brand-accent" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">GitHub</p>
                  <a href="https://github.com/shajjadulferdous" target="_blank" rel="noopener noreferrer" className="text-brand-cream hover:text-brand-accent transition-colors">@shajjadulferdous</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-brand-slate/20 border border-white/5 p-8 md:p-12 rounded-sm glow-effect"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Name</label>
                  <input
                    type="text"
                    className="w-full bg-brand-dark/50 border border-white/10 rounded-sm px-4 py-3 focus:border-brand-accent outline-none transition-colors text-brand-cream"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Email</label>
                  <input
                    type="email"
                    className="w-full bg-brand-dark/50 border border-white/10 rounded-sm px-4 py-3 focus:border-brand-accent outline-none transition-colors text-brand-cream"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">Subject</label>
                <input
                  type="text"
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-sm px-4 py-3 focus:border-brand-accent outline-none transition-colors text-brand-cream"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">Message</label>
                <textarea
                  rows="4"
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-sm px-4 py-3 focus:border-brand-accent outline-none transition-colors text-brand-cream resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button className="w-full bg-brand-accent text-white py-4 rounded-sm font-semibold text-xs hover:brightness-110 transition-all uppercase tracking-[0.3em] flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
