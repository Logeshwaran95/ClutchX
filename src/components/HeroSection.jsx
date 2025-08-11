import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center mt-24 sm:mt-32 lg:mt-8">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left order-1 lg:order-1"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Level Up Your <br /> Gaming Experience
          </h1>
          <p className="mt-4 sm:mt-6 text-lg text-white/80 max-w-lg mx-auto lg:mx-0">
            Book sessions, join tournaments, and explore the ultimate gaming arenas — all from one place.
          </p>
          <motion.a
            href="#download"
            className="mt-8 inline-block bg-cyan-600 px-8 py-4 rounded-full text-lg font-semibold text-white hover:brightness-110 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </motion.div>

        {/* Image - below text in mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end order-2 lg:order-2"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-2xl overflow-hidden backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="https://imgcdn.stablediffusionweb.com/2025/2/5/5896d3fa-ceeb-40e7-a4c9-000aabd291af.jpg"
              alt="Gaming Arena"
              className="w-full h-full object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
