"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 bg-slate-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-blue-900 z-0 opacity-90"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-4">
              Grow Your Brand Internationally
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              International marketing specialist helping brands expand worldwide
              through strategic and culturally adapted communication
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                Discover My Services
              </motion.a>

              <motion.a
                href="#process"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline text-white border-white hover:bg-white hover:text-slate-900"
              >
                My Process
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn flex items-center gap-2 bg-white text-blue-900 hover:bg-blue-50"
              >
                Contact Me <FaArrowRight className="text-sm" />
              </motion.a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl border-4 border-white bg-white/80 p-4">
              <Image
                src="/Image.jpeg"
                alt="Francesca Bushell - International Marketing"
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
