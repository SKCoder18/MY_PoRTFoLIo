"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group p-10 md:p-16 bg-[#050816]/60 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Get My <span className="text-primary">Resume</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Want to dive deeper into my professional background, education, and technical skills? Download my complete resume below.
            </p>
            
            <a
              href="/resume/V_Sai_Kumar_Resume.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-bold uppercase tracking-wider overflow-hidden relative group/btn hover:scale-105 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
              <Download className="w-5 h-5 relative z-10 group-hover/btn:animate-bounce" />
              <span className="relative z-10">Download PDF</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
