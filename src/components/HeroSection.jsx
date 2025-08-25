import React from "react";
import { motion } from "framer-motion";
import {ReactTyped} from "react-typed";

import img from "../assets/images/hero.jpg";


export default function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative
        w-full
        flex
        items-center
        justify-center
        pt-8
        sm:pt-12
        lg:pt-20
        min-h-[calc(100vh-56px)]
        sm:min-h-[calc(100vh-64px)]
      "
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left order-1 lg:order-1"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Level Up Your{" "}
            <ReactTyped
              strings={["Gaming", "Skills", "Fun", "Competitions"]}
              typeSpeed={100}
              backSpeed={80}
              loop
              className="inline-block text-cyan-400"
            />
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/80 max-w-lg mx-auto lg:mx-0">
            Discover the ultimate gaming experience — book PlayStation, PC, VR, board games, and more. Join tournaments, compete with friends, and enjoy exclusive discounts at top gaming arenas near you.
          </p>

          <motion.a
            href="#early-access"
            className="mt-8 inline-block bg-white/10 backdrop-blur-md border border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white hover:bg-white/20 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Early Access 🚀
          </motion.a>

          <p className="mt-3 text-sm text-white/60 max-w-md">
            Sign up now and be the first to access exclusive gaming sessions and up to 25% off your first booking!
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end order-2 lg:order-2"
        >
          <div className="relative w-64 h-48 sm:w-72 sm:h-56 lg:w-[420px] lg:h-[300px] rounded-xl overflow-hidden backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            <img
              src={img}
              alt="ClutchX Gaming Arena"
              className="w-full h-full object-cover rounded-xl"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
