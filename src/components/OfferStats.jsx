// src/components/OfferStats.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function OfferStats() {
  const [cafes, setCafes] = useState(0);
  const [gamers, setGamers] = useState(0);
  const [offerPercent, setOfferPercent] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-50px" });

  const animateNumbers = () => {
    let startTime = performance.now();
    let duration = 2700; // 2.7s animation

    const animate = (time) => {
      let progress = Math.min((time - startTime) / duration, 1);

      // Add random fluctuations
      setCafes(Math.floor(150 * progress + Math.random() * 5));
      setGamers(Math.floor(500 * progress + Math.random() * 15));
      setOfferPercent(Math.floor(25 * progress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCafes(150);
        setGamers(500);
        setOfferPercent(25);
      }
    };

    requestAnimationFrame(animate);
  };

  // Restart animation when in view
  useEffect(() => {
    if (isInView) {
      animateNumbers();
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-12">

      {/* Offer Loader */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
  className="w-full flex flex-col sm:flex-row items-center justify-center gap-6"
>
  {/* Circular Offer Badge */}
  <div className="relative flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg overflow-hidden">
    {/* Progress circle background */}
    <svg
      className="absolute w-full h-full transform -rotate-90"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="6"
        fill="transparent"
      />
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        stroke="white"
        strokeWidth="6"
        fill="transparent"
        strokeDasharray={2 * Math.PI * 45}
        strokeDashoffset={2 * Math.PI * 45 * (1 - offerPercent / 25)}
        initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
        animate={{
          strokeDashoffset: 2 * Math.PI * 45 * (1 - offerPercent / 25),
        }}
        transition={{ duration: 0.5 }}
        strokeLinecap="round"
      />
    </svg>

    {/* Text in the middle */}
    <div className="relative z-10 text-center font-bold text-white">
      <span className="text-2xl sm:text-3xl">{offerPercent}%</span>
      <p className="text-xs mt-1 leading-tight">OFF</p>
    </div>
  </div>

  {/* Offer text */}
  <div className="text-center sm:text-left max-w-xs sm:max-w-md">
    <p className="text-sm sm:text-base md:text-lg font-semibold text-white">
      Play More, Pay Less – Upto {offerPercent}% Off Gaming Across Chennai
    </p>
  </div>
</motion.div>



        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 w-full">
          {/* Cafés Count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-4xl sm:text-5xl font-extrabold text-white">
              {cafes}+
            </h3>
            <p className="mt-2 text-white text-base sm:text-lg">
              Gaming Cafés in Chennai Listed
            </p>
          </motion.div>

          {/* Gamers Count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-4xl sm:text-5xl font-extrabold text-white">
              {gamers}+
            </h3>
            <p className="mt-2 text-white text-base sm:text-lg">
              Happy Gamers Served
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
