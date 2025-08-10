import React from "react";
import { motion } from "framer-motion";

// Gaming-themed image from Unsplash (free to use, vibrant esports setup)
const heroSideImage =
  "https://images.unsplash.com/photo-1605902711622-cfb43c443f3d?auto=format&fit=crop&w=600&q=80";

const glitchVariants = {
  glitch1: {
    x: [0, -2, 2, 0],
    y: [0, 1, -1, 0],
    skew: [0, 5, -5, 0],
    transition: { duration: 0.4, repeat: Infinity, ease: "easeInOut" },
  },
  glitch2: {
    x: [0, 2, -2, 0],
    y: [0, -1, 1, 0],
    skew: [0, -5, 5, 0],
    transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center px-6 md:px-12 mt-24">
      {/* Particle flicker background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(14,182,252,0.12), transparent 50%)," +
            "radial-gradient(circle at 80% 70%, rgba(79,70,229,0.15), transparent 50%)",
          mixBlendMode: "screen",
          filter: "blur(70px)",
          zIndex: 0,
        }}
      />

      {/* Glass container */}
      <motion.div
        className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-12 p-12 max-w-7xl w-full overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Neon accent lines with subtle flicker */}
        <motion.div
          aria-hidden="true"
          className="absolute top-4 left-4 w-28 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-40 blur-md"
          initial={{ x: -20, opacity: 0.3 }}
          animate={{ x: [0, 4, -4, 0], opacity: [0.3, 0.5, 0.3, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-6 right-6 w-20 h-20 rounded-full border border-cyan-400 opacity-30 blur-xl"
          initial={{ scale: 0.9, opacity: 0.25 }}
          animate={{ scale: [1, 1.1, 1, 1.05], opacity: [0.25, 0.5, 0.25, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Text content */}
        <div className="md:w-1/2 text-center md:text-left text-white relative z-10 font-sans">
          <h1
            className="text-6xl font-extrabold leading-tight mb-6 tracking-wider relative"
            style={{ letterSpacing: "0.04em" }}
          >
            {/* Base text without animation */}
            <span
              className="text-white bg-clip-text "
              aria-label="Book Your Spot at"
            >
              Book Your Spot at{" "}
            </span>

            {/* Glitch effect for ClutchX */}
            <span className="relative inline-block ml-2">
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600"
                variants={glitchVariants.glitch1}
                animate="glitch1"
                style={{ position: "absolute", left: 0, top: 0 }}
                aria-hidden="true"
              >
                ClutchX
              </motion.span>
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600"
                variants={glitchVariants.glitch2}
                animate="glitch2"
                style={{ position: "absolute", left: 0, top: 0 }}
                aria-hidden="true"
              >
                ClutchX
              </motion.span>
              <span className="relative font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                ClutchX
              </span>
            </span>
          </h1>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto md:mx-0 font-medium tracking-wide leading-relaxed">
            The easiest way to reserve your gaming seat, join epic tournaments,
            and connect with your squad at the coolest gaming cafes.
          </p>
          <motion.a
            href="#download"
            className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 px-14 py-4 rounded-full font-semibold shadow-xl hover:brightness-110 transition"
            whileHover={{
              scale: 1.1,
              boxShadow:
                "0 0 12px 4px rgba(79, 70, 229, 0.8), 0 0 20px 8px rgba(14, 182, 252, 0.9)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.a>
        </div>

        {/* Side Image */}
        <motion.div
          className="md:w-1/2 max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl relative z-10"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={heroSideImage}
            alt="Gaming esports setup"
            className="w-full object-cover rounded-3xl"
            draggable={false}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
