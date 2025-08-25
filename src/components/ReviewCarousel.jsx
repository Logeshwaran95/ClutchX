// src/components/ReviewCarousel.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// Updated reviews
const reviews = [
  { id: 1, name: "Arjun Ramesh", profile: "https://randomuser.me/api/portraits/men/45.jpg", rating: 5, note: "Finally a one-stop app for all my gaming plans! Booking a pool table or a PS5 session has never been this easy. Super smooth experience 👌." },
  { id: 2, name: "Divya Iyer", profile: "https://randomuser.me/api/portraits/women/50.jpg", rating: 5, note: "Loved the discounts! Saved almost 20% last weekend at my favorite board game café. Definitely my go-to app for weekend plans." },
  { id: 3, name: "Karthik Balaji", profile: "https://randomuser.me/api/portraits/men/51.jpg", rating: 4, note: "Clean interface, quick bookings, and no hidden charges. ClutchX has completely changed the way my friends and I plan our hangouts." },
  { id: 4, name: "Anjali Rajan", profile: "https://randomuser.me/api/portraits/women/33.jpg", rating: 5, note: "Discovered a new gaming café near me through ClutchX. Wouldn’t have known about it otherwise. This app is a game-changer (literally 😅)." },
  { id: 5, name: "Suresh Kumar", profile: "https://randomuser.me/api/portraits/men/60.jpg", rating: 4, note: "Customer support is responsive and helpful. I had to reschedule my booking, and it was done in minutes without any hassle." },
  { id: 6, name: "Priya Selvan", profile: "https://randomuser.me/api/portraits/women/21.jpg", rating: 5, note: "The tournaments feature is so exciting! Registered for Splendor via ClutchX and the entire process was seamless. Can’t wait for more events." },
  { id: 7, name: "Vikram Shankar", profile: "https://randomuser.me/api/portraits/men/22.jpg", rating: 4, note: "Loved how I could filter by games – I’m into laser tag and snooker, and ClutchX shows me exactly what I want nearby. Super convenient." },
  { id: 8, name: "Meena Chandran", profile: "https://randomuser.me/api/portraits/women/48.jpg", rating: 5, note: "Payment process was smooth and transparent. Also, the option to pay at the venue is really helpful for casual gamers like me." },
  { id: 9, name: "Raghav Menon", profile: "https://randomuser.me/api/portraits/men/35.jpg", rating: 5, note: "This app has become my weekend partner. Whether it’s board games, snooker, or a private theatre, I can book everything in just a few taps." },
  { id: 10, name: "Sneha Varma", profile: "https://randomuser.me/api/portraits/women/27.jpg", rating: 4, note: "As someone new to Chennai, ClutchX has been a lifesaver. Helped me find gaming cafés, make friends, and enjoy my evenings without stress." },
];

// Duplicate reviews for infinite scroll
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
          duration: 15,
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
