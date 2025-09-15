"use client";

import { motion } from "framer-motion";
import {
  FaChartLine,
  FaComments,
  FaGlobeEurope,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: <FaChartLine className="text-4xl text-blue-600" />,
    title: "Market Analysis",
    items: [
      "Target market research",
      "Competitive analysis",
      "Opportunity identification",
    ],
  },
  {
    id: 2,
    icon: <FaComments className="text-4xl text-blue-600" />,
    title: "Communication Strategy",
    items: [
      "Cultural message adaptation",
      "Local positioning",
      "Adapted tone of voice",
    ],
  },
  {
    id: 3,
    icon: <FaGlobeEurope className="text-4xl text-blue-600" />,
    title: "International Digital Marketing",
    items: [
      "Localized advertising campaigns",
      "Social media management",
      "Online brand development",
    ],
  },
  {
    id: 4,
    icon: <FaRocket className="text-4xl text-blue-600" />,
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="service-card bg-white rounded-lg shadow-md p-6 flex flex-col h-full"
    >
      <div className="flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-4 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold text-center mb-4">
        {title}
      </h3>
      <ul className="space-y-2 mt-auto">
        {items.map((item, i) => (
          <li key={i} className="flex items-start">
            <span className="text-blue-600 mr-2 mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 pt-4 border-t border-gray-100">
        <a
          href="#process"
          className="flex items-center justify-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          Learn More <FaArrowRight className="text-sm" />
        </a>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-blue-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-semibold text-3xl md:text-5xl text-white mb-4">
            My Services
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Tailored solutions to support your international development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
