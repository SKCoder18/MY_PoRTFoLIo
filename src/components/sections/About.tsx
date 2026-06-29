"use client";

import { motion } from "framer-motion";
import { User, Code2, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Glassmorphism Card */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-3xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
          <div className="relative bg-[#050816]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Glowing accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  About <span className="text-primary">Me</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  B.Tech Computer Science graduate with hands-on experience in Python, Flask, and full-stack web development. Built and deployed data-driven applications using MySQL, RESTful APIs, and OOP principles.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Proven ability to debug, test, and optimize Python-based applications independently, with additional exposure to machine learning using Pandas and Scikit-learn. Comfortable working in Agile environments and collaborating via Git and GitHub.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <User className="w-8 h-8 text-primary" />,
                    title: "Who I Am",
                    desc: "B.Tech CSE Graduate from SITAMS",
                  },
                  {
                    icon: <Code2 className="w-8 h-8 text-primary" />,
                    title: "What I Do",
                    desc: "Full Stack & Python Development",
                  },
                  {
                    icon: <Cpu className="w-8 h-8 text-primary" />,
                    title: "My Interests",
                    desc: "Machine Learning & AI",
                  },
                  {
                    icon: <div className="w-8 h-8 text-primary font-bold text-2xl flex items-center justify-center">🚀</div>,
                    title: "My Goal",
                    desc: "Building impactful software",
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-white font-medium text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
