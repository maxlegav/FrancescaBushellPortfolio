"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaGraduationCap } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 bg-slate-950 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="badge bg-white/10 border border-white/20 text-blue-200 mb-6">
              <FaGraduationCap className="text-blue-400" />
              HEC Paris — International Business
            </div>

            <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-4 leading-tight">
              Grow Your Brand{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Internationally
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              International marketing services helping brands expand worldwide
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

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { value: "5+", label: "Countries lived in" },
                { value: "HEC", label: "Paris trained" },
                { value: "10+", label: "Markets advised" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center">
                  <p className="font-heading font-bold text-2xl text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl shadow-blue-900/40 ring-4 ring-white/20 bg-white/80 p-4">
              <Image
                src="/imagelogo.jpeg"
                alt="Francesca Bushell - International Marketing"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                  transform: "scale(1.5)",
                }}
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
