"use client";

import { motion } from "framer-motion";
import { Code, Briefcase, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] py-12 mt-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex space-x-6 mb-8"
        >
          {[
            { icon: <Code className="w-5 h-5" />, href: "https://github.com/SKCoder18" },
            { icon: <Briefcase className="w-5 h-5" />, href: "https://linkedin.com/in/vsaikumar-dev" },
            { icon: <Mail className="w-5 h-5" />, href: "mailto:saikumarvsai20@gmail.com" },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              {item.icon}
            </a>
          ))}
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 text-sm font-medium"
        >
          Designed and Developed by <span className="text-gray-300 font-bold tracking-wide">V Sai Kumar</span>
        </motion.p>
      </div>
    </footer>
  );
}
