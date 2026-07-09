"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Francesca provided valuable insights for our expansion into the Nordic region. Her cultural context and understanding of Scandinavian consumer behavior helped us adapt our messaging for our upcoming campaign launch and avoid several potential missteps.",
    name: "Thomas Verhoeven",
    position: "Freelancer and Founder",
  },
  {
    id: 2,
    quote:
      "Francesca helped us develop a marketing approach for entering the Asian market. Her research into South Korean cultural preferences and local marketing strategies was detailed and useful. She brought fresh ideas and was professional throughout our collaboration.",
    name: "Adam Nasreddine",
    position: "French Tech Startup",
  },
];

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  index: number;
}

const TestimonialCard = ({
  quote,
  name,
  position,
  index,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -6 }}
      className="glass-card p-8 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"></div>
      <FaQuoteLeft className="text-indigo-400/40 text-4xl mb-5" />
      <p className="italic mb-8 text-slate-300 leading-relaxed">{quote}</p>
      <div className="flex items-center gap-4">
        <div className="h-11 w-11 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-semibold shadow-lg shadow-indigo-500/30">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm text-slate-500">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="section-padding relative bg-[#050510]">
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">Testimonials</p>
          <h2 className="section-title mb-4">
            Trusted across <span className="gradient-text">markets.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Discover how I&apos;ve helped my clients succeed in their
            international expansion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
