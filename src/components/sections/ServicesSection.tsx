"use client";

import { motion } from "framer-motion";
import { FaComments, FaGlobeEurope, FaRocket } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: <FaComments className="text-3xl" />,
    title: "Communication Strategy",
    items: [
      "Cultural message adaptation",
      "Local positioning",
      "Adapted tone of voice",
    ],
  },
  {
    id: 2,
    icon: <FaGlobeEurope className="text-3xl" />,
    title: "International Digital Marketing",
    items: [
      "Localized advertising campaigns",
      "Social media management",
      "Online brand development",
    ],
  },
  {
    id: 3,
    icon: <FaRocket className="text-3xl" />,
    title: "Launch Support",
    items: [
      "Support during launch",
      "Local team training",
      "Performance tracking",
    ],
  },
];

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  index: number;
}

const ServiceCard = ({ icon, title, items, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      className="group relative glass-card p-8 flex flex-col h-full overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative">
        <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white mb-6 shadow-lg shadow-indigo-500/30">
          {icon}
        </div>
        <h3 className="text-xl font-heading font-semibold text-white mb-5">
          {title}
        </h3>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-start text-slate-400">
              <span className="text-cyan-400 mr-3 mt-1">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative bg-[#050510]">
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">Services</p>
          <h2 className="section-title mb-4">
            What I <span className="gradient-text">deliver.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Tailored solutions to support your international development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="btn btn-primary"
          >
            Request a Consultation
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
