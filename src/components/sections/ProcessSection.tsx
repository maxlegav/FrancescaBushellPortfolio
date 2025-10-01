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
    <section
      id="process"
      className="section-padding bg-gradient-to-b from-white to-blue-100"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-semibold text-3xl md:text-5xl text-blue-900 mb-4">
            My 5-Step Process
          </h2>
          <p className="text-gray-900 max-w-3xl mx-auto text-lg">
            A proven methodology to ensure the success of your international
            expansion
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-600 -translate-x-1/2 z-0"></div>

          {/* Timeline Steps */}
          <div className="space-y-12 md:space-y-0 relative z-10">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex-1 p-4"
                >
                  <div
                    className={`bg-white shadow-lg rounded-lg p-6 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    } border-l-4 border-blue-600`}
                  >
                    <h3 className="font-heading font-semibold text-xl text-blue-600 mb-2">
                      Step {step.id}: {step.title}
                    </h3>
                    <ul className="space-y-2">
                      {step.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-600 mr-2 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    
                  </div>
                </motion.div>

                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex items-center justify-center h-14 w-14 bg-blue-900 rounded-full my-4 md:my-0 text-white font-semibold shadow-lg z-10"
                >
                  {step.id}
                </motion.div>

                {/* Empty div for layout balance */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-dark"
          >
            Start Your International Journey
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
