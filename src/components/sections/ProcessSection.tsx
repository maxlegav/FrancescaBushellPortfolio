"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    id: 1,
    title: "Initial Audit",
    description: [
      "Analysis of your current brand",
      "Target market definition",
      "Resource evaluation",
    ],
  },
  {
    id: 2,
    title: "Research & Insights",
    description: [
      "Market research overview",
      "Cultural and behavioral analysis",
      "Competitive benchmarking",
    ],
  },
  {
    id: 3,
    title: "Personalized Strategy",
    description: [
      "Marketing plan development",
      "Communication adaptation",
      "Budget and timeline definition",
    ],
  },
  {
    id: 4,
    title: "Implementation",
    description: [
      "Localized content creation",
      "Campaign launch",
      "Team training",
    ],
  },
  {
    id: 5,
    title: "Continuous Optimization",
    description: [
      "KPI monitoring",
      "Strategic adjustments",
      "Monthly reporting",
    ],
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding relative bg-[#050510] overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">Method</p>
          <h2 className="section-title mb-4">
            A proven <span className="gradient-text">5-step process.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A clear methodology to ensure the success of your international
            expansion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 relative overflow-hidden group"
            >
              <span className="absolute -top-4 -right-2 font-heading font-bold text-7xl text-white/5 group-hover:text-indigo-400/10 transition-colors select-none">
                {step.id}
              </span>
              <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white font-bold mb-4 shadow-lg shadow-indigo-500/30">
                {step.id}
              </div>
              <h3 className="font-heading font-semibold text-lg text-white mb-3">
                {step.title}
              </h3>
              <ul className="space-y-2">
                {step.description.map((item, i) => (
                  <li key={i} className="text-sm text-slate-400 flex items-start">
                    <span className="text-cyan-400 mr-2 mt-0.5">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="btn btn-ghost"
          >
            Start Your International Journey
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
