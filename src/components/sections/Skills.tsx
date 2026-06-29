"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Flask", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    title: "Databases",
    skills: ["MySQL"],
  },
  {
    title: "Deployments",
    skills: ["Vercel", "Netlify"],
  },
  {
    title: "Concepts",
    skills: ["OOP", "RESTful API design", "Debugging", "Software Testing", "Agile"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Spoken Languages",
    skills: ["English", "Telugu", "Hindi"],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#050816]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-all group"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 font-medium transition-colors hover:bg-primary/20 hover:text-white hover:border-primary/50 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
