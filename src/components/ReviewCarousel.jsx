// src/components/ReviewCarousel.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const reviews = [
  { id: 1, name: "Alice Johnson", profile: "https://randomuser.me/api/portraits/women/44.jpg", rating: 5, note: "Amazing service! Totally recommend." },
  { id: 2, name: "Bob Smith", profile: "https://randomuser.me/api/portraits/men/36.jpg", rating: 4, note: "Great experience, will come back again." },
  { id: 3, name: "Clara Lee", profile: "https://randomuser.me/api/portraits/women/68.jpg", rating: 5, note: "Exceeded my expectations!" },
  { id: 4, name: "David Kim", profile: "https://randomuser.me/api/portraits/men/72.jpg", rating: 3, note: "Good, but there is room for improvement." },
  { id: 5, name: "Eva Martinez", profile: "https://randomuser.me/api/portraits/women/22.jpg", rating: 4, note: "Satisfied with the product quality." },
];

const duplicatedReviews = [...reviews, ...reviews];

const StarRating = ({ rating }) => {
  return (
    <div style={{ color: "#ffc107" }}>
      {[...Array(5)].map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
};

export default function ReviewCarousel() {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const totalWidth = containerRef.current.scrollWidth / 2;
    setScrollWidth(totalWidth);

    controls.start({
      x: [-totalWidth, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15, // faster flow
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <section
      className="py-16 sm:py-20 px-4 sm:px-6 md:px-12"
      style={{ overflow: "hidden", background: "transparent" }}
    >
       {/* Title */}
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center mb-3"
  >
    What Our Customers Say
  </motion.h2>

  {/* Subtitle */}
  <motion.p
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="text-white/70 text-center max-w-xl mx-auto text-sm sm:text-base mb-8 sm:mb-12"
  >
 At <span className="font-semibold text-white">ClutchX</span>, we value every
    voice. Our customers are more than clients — they’re part of our Clutch bond,
    helping us grow and innovate together.
  </motion.p>
      {/* Review cards */}
      <motion.div
        ref={containerRef}
        className="flex gap-4 sm:gap-6"
        animate={controls}
        style={{ backgroundColor: "transparent" }}
      >
        {duplicatedReviews.map(({ id, name, profile, rating, note }, index) => (
          <motion.div
            key={`${id}-${index}`}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 24px rgba(255,255,255,0.3)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="min-w-[240px] sm:min-w-[280px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 sm:p-6 flex flex-col"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <img
                src={profile}
                alt={name}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/30 object-cover"
              />
              <div>
                <h4 className="text-white font-semibold text-sm sm:text-base">{name}</h4>
                <StarRating rating={rating} />
              </div>
            </div>
            <p className="text-gray-300 italic text-sm sm:text-base flex-grow">
              "{note}"
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
