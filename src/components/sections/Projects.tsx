"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

const PROJECTS = [
  {
    title: "Big Mart Sales Prediction",
    description: [
      "Achieved 98% prediction accuracy, as measured by model evaluation on the test dataset, by developing a Random Forest Regressor in Python with full data preprocessing, feature engineering, and hyperparameter tuning.",
      "Reduced model error rate by 25% over baseline, as measured by RMSE comparison, by applying systematic debugging and iterative optimization to the training pipeline."
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
    liveUrl: "#",
    githubUrl: "https://github.com/SKCoder18/bigmart-sales-prediction-ml",
  },
  {
    title: "Expense Tracker Web Application - Ledgr",
    description: [
      "Reduced manual expense entry time by 50%, as measured by user task-time testing, by building a full-stack web app with dynamic charts for real-time category-wise analytics and monthly summaries.",
      "Improved app load time by 30%, as measured by Lighthouse performance score, by writing clean reusable component code and optimizing JavaScript rendering logic.",
      "Enabled RESTful API integration for transaction data retrieval, as demonstrated by live deployment on Vercel, by designing a modular architecture with clear separation of concerns."
    ],
    tech: ["JavaScript", "HTML", "CSS", "RESTful API", "Vercel"],
    liveUrl: "https://ledgr-hazel.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "PantryPal - Smart Pantry Management System",
    description: [
      "Reduced manual inventory entry time by 50%, as measured by tracked feature usage in testing, by developing a responsive web application with item tracking, expiry management, and AI-powered recipe suggestions.",
      "Achieved zero critical bugs at launch, as measured by end-to-end software testing, by designing a mobile-friendly UI with real-time search and RESTful API integration for the AI chat module."
    ],
    tech: ["Python", "RESTful API", "Software Testing", "HTML", "CSS", "Netlify"],
    liveUrl: "https://superb-sable-cc245b.netlify.app",
    githubUrl: "#",
  },
  {
    title: "Urban Parking Demand Forecasting",
    description: [
      "Delivered a smart city forecasting system with measurable prediction accuracy improvement over baseline, by building a Python machine learning pipeline that analyzed historical demand data using Pandas to identify patterns and trends.",
      "Reduced error rate by 25% through agile iteration across 3 model versions, by collaborating in an Agile-style workflow with regular code reviews and structured debugging sessions on GitHub."
    ],
    tech: ["Python", "Machine Learning", "Pandas", "Agile", "GitHub"],
    liveUrl: "#",
    githubUrl: "https://github.com/SKCoder18/urban-parking-demand-prediction",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-[#050816]/80 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              {/* Animated Glow Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
              
              {/* Image Placeholder */}
              <div className="relative w-full h-64 bg-gray-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 group-hover:scale-105 transition-transform duration-700 ease-in-out flex items-center justify-center">
                  <span className="text-gray-500 font-display font-bold tracking-widest uppercase opacity-50">Project Preview</span>
                </div>
                <div className="absolute inset-0 bg-[#050816]/40 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="text-gray-400 mb-6 text-sm leading-relaxed space-y-2">
                  {project.description.map((desc, dIdx) => (
                    <p key={dIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                      {desc}
                    </p>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-colors"
                    >
                      <Code className="w-4 h-4" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
