"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheck, FaLinkedin, FaEnvelope } from "react-icons/fa";

const values = [
  "Expertise in international markets",
  "Personalized approach for each client",
  "Transparent and regular communication",
  "Data-driven strategic solutions",
  "Adaptability to different cultures and markets",
];

const certifications = [
  "Master's in International Marketing - University of Paris",
  "Google Digital Marketing Certification",
  "Facebook Blueprint Certification",
  "Intercultural Management Training",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-lg overflow-hidden shadow-xl  p-4">
              <Image
                src="/francesca.png"
                alt="Francesca Bushell - Professional"
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-semibold text-3xl md:text-5xl text-white mb-6">
              About Me
            </h2>

            <div className="prose max-w-none text-gray-300">
              <p className="text-lg mb-4">
                After living in multiple countries I aquired a strong experience marketing and corporate
                experience, I&apos;ve developed unique
                expertise in adapting marketing strategies to different global
                markets.
              </p>

              <p className="text-lg mb-6">
                Passionate about cultural differences and their impact on brand
                communication, I created my business to help companies expand
                internationally with relevant strategies tailored to their
                target audiences.
              </p>

              <h3 className="font-heading font-semibold text-xl text-blue-400 mt-8 mb-4">
                My Values
              </h3>

              <ul className="space-y-2 mb-6">
                {values.map((value, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">{value}</span>
                  </motion.li>
                ))}
              </ul>

             
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                Contact Me
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/francesca-bushell-7a34b5255/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
              >
                <FaLinkedin /> Connect on LinkedIn
              </motion.a>

              <motion.a
                href="mailto:francescaiidaolivia@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-white text-slate-900 hover:bg-gray-100 flex items-center gap-2"
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
