// src/components/ReviewCarousel.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    profile: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    note: "Amazing service! Totally recommend.",
  },
  {
    id: 2,
    name: "Bob Smith",
    profile: "https://randomuser.me/api/portraits/men/36.jpg",
    rating: 4,
    note: "Great experience, will come back again.",
  },
  {
    id: 3,
    name: "Clara Lee",
    profile: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    note: "Exceeded my expectations!",
  },
  {
    id: 4,
    name: "David Kim",
    profile: "https://randomuser.me/api/portraits/men/72.jpg",
    rating: 3,
    note: "Good, but there is room for improvement.",
  },
  {
    id: 5,
    name: "Eva Martinez",
    profile: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 4,
    note: "Satisfied with the product quality.",
  },
];

// Duplicate reviews for seamless infinite scroll
const duplicatedReviews = [...reviews, ...reviews];

const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div style={{ color: "#ffc107" }}>
      {[...Array(totalStars)].map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
};

export default function ReviewCarousel() {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const totalWidth = containerRef.current.scrollWidth / 2; // because duplicated
    setScrollWidth(totalWidth);

    controls.start({
      x: [-totalWidth, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  const handlePointerDown = () => {
    controls.stop();
    setIsPaused(true);
  };

  const handlePointerUp = () => {
    if (!isPaused) return;
    setIsPaused(false);
    controls.start({
      x: [-scrollWidth, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    });
  };

  return (
    <section
      className="py-12 px-6"
      style={{
        overflow: "hidden",
        background: "transparent",
        userSelect: "none",
      }}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-extrabold text-white text-center mb-10"
      >
        What Our Customers Say
      </motion.h2>

      {/* Review cards container */}
      <motion.div
        ref={containerRef}
        className="flex gap-6 cursor-grab select-none"
        drag="x"
        dragConstraints={{ left: -scrollWidth, right: 0 }}
        dragElastic={0.1}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
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
            className="min-w-[280px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col"
            style={{ userSelect: "none" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={profile}
                alt={name}
                className="w-14 h-14 rounded-full border-2 border-white/30 object-cover"
              />
              <div>
                <h4 className="text-white font-semibold">{name}</h4>
                <StarRating rating={rating} />
              </div>
            </div>
            <p className="text-gray-300 italic flex-grow">"{note}"</p>
          </motion.div>
        ))}
      </motion.div>

      <p className="mt-6 text-center text-white/70 italic text-sm select-none">
        Auto-scrolling reviews — drag/swipe to pause and explore
      </p>
    </section>
  );
}
