"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Python Full Stack Developer Intern",
    company: "Python & Full Stack Development Training Program",
    period: "Dec 2025 - Apr 2026",
    highlights: [
      "Improved development workflow efficiency by completing 100% of assigned deliverables on time, by building and debugging Python-based web features using Flask, HTML, CSS, and JavaScript across real-world projects.",
      "Reduced manual data handling time by 40%, as measured by task completion speed in team sprints, by designing MySQL database schemas and writing optimized SQL queries for data storage and retrieval.",
      "Accelerated team delivery by contributing to all sprint cycles without blockers, by practicing Agile methodology — participating in daily standups, code reviews, and iterative software testing using Git and GitHub.",
      "Strengthened code reliability across 3 projects by reducing bug recurrence, by applying OOP principles, writing clean reusable code, and debugging application logic systematically."
    ],
  },
  {
    role: "Artificial Intelligence Intern",
    company: "AI Internship Program",
    period: "May 2025 - Jul 2025",
    highlights: [
      "Delivered 2 functional AI-based solutions within the internship timeline, by developing Python applications using machine learning models and applying structured problem-solving and analytical thinking throughout.",
      "Improved model accuracy by iterating through 3+ experimental approaches, by performing data preprocessing, feature selection, and hyperparameter tuning using Pandas and Scikit-learn."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              <div className="bg-[#050816]/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:ml-16 relative hover:border-primary/40 transition-colors group">
                <div className="hidden md:flex absolute -left-12 top-8 w-8 h-8 rounded-full bg-[#050816] border-2 border-primary items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-secondary font-medium text-lg">{exp.company}</p>
                  </div>
                  <span className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-semibold whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
