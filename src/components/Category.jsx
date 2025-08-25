import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaGamepad,
  FaDesktop,
  FaVrCardboard,
  FaChessBoard,
  FaFutbol,
  FaFilm,
  FaCrosshairs, // for Blasters & Paintball
  FaPaintRoller, // optional for Paintball effect
  FaDoorOpen,
   // hypothetical, or FaTableTennis fallback
   FaTableTennis,
  FaBowlingBall,
  FaChild,
  FaArrowUp,
  FaGolfBall,
  FaBaseballBall, // for Trampoline jumping
} from "react-icons/fa";
import { FaBaseball, FaGun, FaTableTennisPaddleBall } from "react-icons/fa6";

// Updated Categories with proper icons
const categories = [
  { name: "PS", icon: FaGamepad, desc: "PlayStation gaming sessions with the latest titles." },
  { name: "PC", icon: FaDesktop, desc: "High-end PC setups for competitive and casual play." },
  { name: "VR", icon: FaVrCardboard, desc: "Immersive VR experiences and games." },
  { name: "BOARD GAMES", icon: FaChessBoard, desc: "Classic and modern board games for all ages." },
  { name: "SOAP FOOTBALL", icon: FaFutbol, desc: "Fun and slippery soap football matches." },
  { name: "PRIVATE THEATRE", icon: FaFilm, desc: "Private screenings for movies and shows." },
  { name: "BLASTERS", icon: FaGun, desc: "Foam blaster battles in exciting arenas." },
  { name: "PAINTBALL", icon: FaGun, desc: "Thrilling paintball matches with safety gear." },
  { name: "LASER TAG", icon: FaCrosshairs, desc: "Fast-paced laser tag battles with friends." },
  { name: "ESCAPE ROOMS", icon: FaDoorOpen, desc: "Test your wits in themed escape rooms." },
  { name: "SNOOKERS", icon: FaBaseballBall, desc: "Enjoy a relaxing snooker or billiards game." },
  { name: "BOWLING", icon: FaBowlingBall, desc: "Hit strikes in our glowing bowling alley." },
  { name: "KIDS", icon: FaChild, desc: "Safe and fun play areas for children." },
  { name: "TRAMPOLINE", icon: FaArrowUp, desc: "Bounce high in our trampoline park." },
];


export default function CategoryList() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const renderCategoryCard = ({ name, icon: Icon, desc }) => (
    <button
      key={name}
      onClick={() => setSelected({ name, icon: Icon, desc })}
      className="cursor-pointer bg-white/10 backdrop-blur-xl rounded-2xl px-4 py-6 sm:px-6 sm:py-8 transform transition duration-300 ease-in-out flex flex-col items-center justify-center space-y-3 hover:scale-105 hover:bg-white/20 focus:outline-none"
    >
      <Icon className="text-white" size={34} />
      <span className="text-white text-sm sm:text-base font-semibold tracking-widest uppercase text-center">
        {name}
      </span>
    </button>
  );

  return (
    <section
      aria-label="Gaming categories"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 pt-20"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-indigo-900/70 to-black/70 bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1598550476439-6847785e1900?q=80&w=1920&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          zIndex: -1,
        }}
      ></div>

      {/* Title */}
      <div data-aos="fade-up" className="text-center mb-12">
        <h3 className="text-white text-3xl sm:text-4xl font-extrabold tracking-wider uppercase drop-shadow-lg">
          Explore Categories
        </h3>
        <p className="text-white/80 text-sm sm:text-base mt-3">
          Discover endless ways to play, compete, and bond — ClutchX style.
        </p>
      </div>

  

      {/* All Categories */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 w-full max-w-7xl"
        data-aos="fade-up"
      >
        {categories.map(renderCategoryCard)}
      </div>

      {/* Popup */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            {/* Popup content */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{
                scale: [0.7, 1.05, 0.95, 1],
                opacity: 1
              }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <div
                className="relative w-full max-w-md text-center border-2 border-white/25 rounded-2xl p-6"
                style={{
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  backdropFilter: "blur(20px)",
                  background: "rgba(255,255,255,0.06)"
                }}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 text-white text-lg bg-transparent hover:scale-110 transition-transform"
                >
                  ✕
                </button>

                {/* Icon */}
                <div
                  className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/20"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <selected.icon size={56} color="white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-white">{selected.name}</h3>

                {/* Description */}
                <p className="text-white/90 text-base">{selected.desc}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
