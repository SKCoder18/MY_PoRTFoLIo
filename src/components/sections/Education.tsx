"use client";

import { motion } from "framer-motion";

const EDUCATION = [
  {
    title: "Bachelor of Technology",
    institution: "Sreenivasa Institute of Technology and Management Studies",
    branch: "Computer Science Engineering",
    year: "2022–2026",
    score: "CGPA 6.6",
  },
  {
    title: "Intermediate",
    institution: "Vijayam Junior College",
    branch: "",
    year: "2020–2022",
    score: "57%",
  },
  {
    title: "10th Standard",
    institution: "Prakash Vidyalaya",
    branch: "",
    year: "2020",
    score: "89%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            My <span className="text-primary">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start md:items-center justify-between w-full mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[11px] md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2 mt-6 md:mt-0 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10" />

              {/* Empty space for alternating layout on desktop */}
              <div className="hidden md:block w-[45%]" />

              {/* Content Card */}
              <div className="w-full pl-12 md:pl-0 md:w-[45%]">
                <div className="bg-[#050816]/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-colors group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <span className="text-primary font-medium text-sm block mb-2 tracking-wider">{edu.year}</span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
                      {edu.title}
                    </h3>
                    <p className="text-gray-300 font-medium mb-1">{edu.institution}</p>
                    {edu.branch && (
                      <p className="text-gray-400 text-sm mb-4">{edu.branch}</p>
                    )}
                    <div className="inline-block px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-secondary text-sm font-semibold mt-2 shadow-inner">
                      Score: {edu.score}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
