"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaEnvelope,
  FaGraduationCap,
  FaLanguage,
  FaCertificate,
} from "react-icons/fa";

const education = [
  {
    school: "HEC Paris",
    detail: "International Business",
    note: "Now part of one of Europe's leading business schools",
  },
  {
    school: "SOAS University of London",
    detail: "BA East Asian Studies & Korean — GPA 3.79/4.0",
    note: "Principles & Management of Marketing, International Marketing",
  },
  {
    school: "Korea University, Seoul",
    detail: "Exchange year",
    note: "East Asian Marketing, Globalisation within East Asia",
  },
];

const languages = [
  { name: "English", level: "Native" },
  { name: "French", level: "Native" },
  { name: "Finnish", level: "Native" },
  { name: "Korean", level: "B2" },
  { name: "Dutch", level: "B2" },
];

const certifications = [
  "Google — Digital Marketing & E-Commerce (94%)",
  "Google — Foundations of Project Management (91%)",
  "Columbia University — Economics of Money & Banking (93%)",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative bg-[#050510] overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image + languages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/30 to-cyan-400/30 rounded-3xl blur-xl"></div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card p-4">
                <Image
                  src="/francesca.png"
                  alt="Francesca Bushell - Professional"
                  fill
                  style={{ objectFit: "contain", objectPosition: "center" }}
                />
              </div>
            </div>

            <div className="mt-10 max-w-md mx-auto lg:mx-0">
              <h3 className="font-heading font-semibold text-lg text-white mb-4 flex items-center gap-2">
                <FaLanguage className="text-cyan-400" /> Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="badge bg-white/5 border border-white/15 text-slate-300"
                  >
                    {lang.name}
                    <span className="text-cyan-400 text-xs">{lang.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-4">About</p>
            <h2 className="section-title mb-8">
              Five countries.
              <br />
              <span className="gradient-text">One perspective.</span>
            </h2>

            <p className="text-lg text-slate-400 mb-4 leading-relaxed">
              Having lived in over five countries across Europe and Asia,
              I&apos;ve gained valuable firsthand insight into how cultural
              differences shape consumer behavior and brand communication.
            </p>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Now part of HEC Paris, I combine world-class academic training in
              international business with hands-on market experience. I founded
              BrandOrbit to help companies navigate international expansion
              with culturally relevant, audience-focused strategies.
            </p>

            <h3 className="font-heading font-semibold text-lg text-white mb-4 flex items-center gap-2">
              <FaGraduationCap className="text-indigo-400" /> Education
            </h3>
            <div className="space-y-4 mb-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-5"
                >
                  <p className="font-semibold text-white">{edu.school}</p>
                  <p className="text-sm text-indigo-300">{edu.detail}</p>
                  <p className="text-sm text-slate-500 mt-1">{edu.note}</p>
                </motion.div>
              ))}
            </div>

            <h3 className="font-heading font-semibold text-lg text-white mb-4 flex items-center gap-2">
              <FaCertificate className="text-cyan-400" /> Certifications
            </h3>
            <ul className="space-y-2 mb-10">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start text-slate-400">
                  <span className="text-cyan-400 mr-3 mt-1">▸</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://www.linkedin.com/in/francesca-bushell-7a34b5255/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn btn-primary flex items-center gap-2"
              >
                <FaLinkedin /> Connect on LinkedIn
              </motion.a>

              <motion.a
                href="mailto:francescaiidaolivia@gmail.com"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn btn-ghost flex items-center gap-2"
              >
                <FaEnvelope /> Send an Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
