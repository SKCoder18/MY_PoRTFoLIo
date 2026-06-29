"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const TITLES = [
  "Python Developer",
  "Full Stack Developer",
  "Software Engineer",
  "Machine Learning Enthusiast"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary font-medium tracking-widest uppercase mb-4"
        >
          Hi, I&apos;m
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl font-display font-bold text-white mb-6 tracking-tight drop-shadow-2xl"
        >
          V Sai Kumar
        </motion.h1>

        <div className="h-12 flex items-center justify-center mb-8 relative w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={titleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-3xl font-light text-gray-300 absolute"
            >
              {TITLES[titleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10"
        >
          B.Tech Computer Science graduate passionate about building scalable web applications, solving real-world problems using Python, and creating elegant user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#resume"
            className="group relative px-8 py-4 bg-primary text-white rounded-full font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative">Download Resume</span>
          </a>
          <a
            href="#projects"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105"
          >
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-gray-500 uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-primary absolute top-0"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
