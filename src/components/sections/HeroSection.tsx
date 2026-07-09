"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaGraduationCap } from "react-icons/fa";

const marqueeItems = [
  "English",
  "Français",
  "Suomi",
  "한국어",
  "Nederlands",
  "London",
  "Paris",
  "Seoul",
  "Brussels",
  "Helsinki",
];

const stats = [
  { value: "5", label: "Languages spoken fluently" },
  { value: "10+", label: "Global clients via BrandOrbit" },
  { value: "3", label: "Markets: Europe · UK · Asia" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-0 bg-[#050510] overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 bg-grid z-0"></div>
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-indigo-600/25 rounded-full blur-[120px] animate-float-slow z-0"></div>
      <div className="absolute top-1/3 -right-32 w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[120px] animate-float-slow z-0"></div>
      <div className="absolute -bottom-40 -left-32 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[120px] z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="badge bg-white/5 border border-white/15 text-indigo-300 mb-6 backdrop-blur-md">
              <FaGraduationCap className="text-indigo-400" />
              HEC Paris · SOAS University of London · Korea University
            </div>

            <h1 className="font-heading font-bold text-5xl md:text-7xl text-white mb-6 leading-[1.05] tracking-tight">
              Marketing without
              <br />
              <span className="gradient-text">borders.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              Multicultural marketer with a Finnish, English and French
              upbringing — fluent in five languages. Founder of BrandOrbit,
              helping brands expand across Europe and Asia with culturally
              adapted strategy.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#experience"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn btn-primary"
              >
                Explore My Work <FaArrowRight className="ml-2 text-sm" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn btn-ghost"
              >
                Contact Me
              </motion.a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                  className="glass-card p-4 text-center"
                >
                  <p className="font-heading font-bold text-3xl gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-400 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full blur-2xl opacity-30"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden ring-1 ring-white/20 bg-white/90 p-4">
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
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 mt-16 border-y border-white/10 bg-white/[0.02] py-4 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="mx-8 text-sm uppercase tracking-[0.25em] text-slate-500 whitespace-nowrap"
            >
              {item} <span className="ml-8 text-indigo-500">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
