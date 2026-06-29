"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Code, Briefcase, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-10 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail className="w-5 h-5" />, label: "Email", value: "saikumarvsai20@gmail.com", href: "mailto:saikumarvsai20@gmail.com" },
                { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91 9515228139", href: "tel:+919515228139" },
                { icon: <Code className="w-5 h-5" />, label: "GitHub", value: "github.com/SKCoder18", href: "https://github.com/SKCoder18" },
                { icon: <Briefcase className="w-5 h-5" />, label: "LinkedIn", value: "linkedin.com/in/vsaikumar-dev", href: "https://linkedin.com/in/vsaikumar-dev" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                    <p className="text-gray-200 font-medium group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#050816]/80 backdrop-blur-md border border-white/10 rounded-2xl p-8"
          >
            <div className="relative z-0 w-full mb-8 group">
              <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
              <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
            </div>
            
            <div className="relative z-0 w-full mb-8 group">
              <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
              <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
            </div>

            <div className="relative z-0 w-full mb-8 group">
              <textarea name="message" id="message" rows={4} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer resize-none" placeholder=" " required></textarea>
              <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
            </div>

            <button type="button" className="w-full text-white bg-primary hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-3.5 text-center transition-all flex items-center justify-center gap-2 group hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
