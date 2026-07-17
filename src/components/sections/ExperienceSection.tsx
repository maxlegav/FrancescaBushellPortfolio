"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    company: "Groupe Intuis",
    role: "Marketing & Communications Intern",
    location: "Paris, France",
    period: "Jul 2025 – Sep 2025",
    highlights: [
      "Built marketing tools bridging multicultural teams and B2B clients across residential, commercial and industrial markets",
      "Managed key international partner relationships with data-driven feedback loops, improving sales effectiveness and contract renewal",
      "Developed export compliance frameworks and cross-border shipping coordination for global partners",
    ],
  },
  {
    id: 2,
    company: "BrandOrbit",
    role: "Founder — International Marketing Startup",
    location: "London, UK",
    period: "Since Jan 2025",
    highlights: [
      "Secured 10+ global clients through targeted digital prospecting, LinkedIn outreach and lead scoring",
      "Guided SaaS founders (Autoinvoice, Autoplanner) into Asian markets with South Korea-focused research and localization",
    ],
  },
  {
    id: 3,
    company: "Rebel Rescue Korea",
    role: "Social Media Content Manager",
    location: "Seoul, South Korea",
    period: "Nov 2024 – Mar 2025",
    highlights: [
      "Drove a 40% increase in adoption inquiries through targeted social acquisition and engagement analytics",
      "Managed end-to-end digital content workflow, improving online visibility by 30%",
    ],
  },
  {
    id: 4,
    company: "Baker McKenzie",
    role: "Intern",
    location: "Brussels, Belgium",
    period: "Jun 2024 – Aug 2024",
    highlights: [
      "Supported multilingual documentation (English, French, Dutch) for major M&A transactions",
      "Coordinated cross-border transactions spanning 40+ countries for global medtech and pharma clients",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative bg-[#050510] overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="eyebrow mb-4">Experience</p>
          <h2 className="section-title">
            From Paris to Seoul,
            <br />
            <span className="gradient-text">a global track record.</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              className="relative pl-8 md:pl-12"
            >
              <span className="absolute -left-[9px] top-2 h-[18px] w-[18px] rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 ring-4 ring-[#050510]"></span>

              <div className="glass-card p-6 md:p-8 hover:border-indigo-400/40 transition-colors duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="font-heading font-semibold text-xl md:text-2xl text-white flex items-center gap-3">
                    <FaBriefcase className="text-indigo-400 text-base" />
                    {exp.company}
                  </h3>
                  <span className="badge bg-indigo-500/10 border border-indigo-400/30 text-indigo-300">
                    {exp.period}
                  </span>
                </div>

                <p className="text-slate-300 font-medium mb-1">{exp.role}</p>
                <p className="text-sm text-slate-500 flex items-center gap-2 mb-4">
                  <FaMapMarkerAlt className="text-cyan-400" /> {exp.location}
                </p>

                <ul className="space-y-2">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start text-slate-400">
                      <span className="text-cyan-400 mr-3 mt-1">▸</span>
                      <span>{item}</span>
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
};

export default ExperienceSection;
