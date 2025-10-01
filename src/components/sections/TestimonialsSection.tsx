"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaArrowRight } from "react-icons/fa";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
}

interface CaseStudy {
  id: number;
  title: string;
  results: string[];
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Francesca helped me manage my brand internationally in different markets, expanding into Asia market with a perfectly tailored marketing strategy. The results exceeded our expectations with 40% growth in the first year.",
    name: "Max Legav",
    position: "Freelancer and Founder",
  },
  {
    id: 2,
    quote:
      "Francesca's deep knowledge of Scandinavian markets allowed us to reposition our communication and avoid many cultural pitfalls. Her guidance was invaluable and professional.",
    name: "Adam Nasreddine",
    position: "French Tech Startup",
  },
  
];

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "French Brand Launch in Germany",
    results: [
      "In-depth market research of the local sector",
      "Complete communication adaptation",
      "+75% brand awareness after 6 months of campaign",
      "Advertising ROI improved by 35%",
    ],
  },
  {
    id: 2,
    title: "Multilingual SEO Optimization",
    results: [
      "Complete audit of 4 language versions of the website",
      "Redesign of keyword strategy by country",
      "+120% organic traffic in 1 year",
      "Conversion improved by 25% in targeted markets",
    ],
  },
];

const partners = ["Partner 1", "Partner 2", "Partner 3", "Partner 4"];

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow"
    >
      <FaQuoteLeft className="text-blue-200 text-4xl mb-4" />
      <p className="italic mb-6 text-gray-600">{quote}</p>
      <div>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">{position}</p>
      </div>
    </motion.div>
  );
};

interface CaseStudyCardProps {
  title: string;
  results: string[];
  index: number;
}

const CaseStudyCard = ({ title, results, index }: CaseStudyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-blue-900 text-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
    >
      <h3 className="font-heading font-semibold text-xl text-white mb-4">
        {title}
      </h3>
      <ul className="space-y-2">
        {results.map((result, i) => (
          <li key={i} className="flex items-start">
            <span className="text-blue-400 mr-2 mt-1">•</span>
            <span className="text-gray-300">{result}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-4 border-t border-gray-700">
        <button className="text-white flex items-center gap-2 font-medium hover:text-blue-400 transition-colors">
          View Full Case Study <FaArrowRight className="text-sm" />
        </button>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-semibold text-3xl md:text-5xl text-blue-900 mb-4">
            Testimonials & Results
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Discover how I&apos;ve helped my clients succeed in their
            international expansion
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
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
