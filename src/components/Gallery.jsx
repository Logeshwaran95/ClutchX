// src/components/Gallery.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Import all images explicitly
import ps1 from "../assets/images/PS 1.jpg";
import ps2 from "../assets/images/PS 2.jpg";
import pc1 from "../assets/images/PC 1.jpg";
import vr1 from "../assets/images/VR 1.jpg";
import board1 from "../assets/images/BOARD GAMES 1.jpg";
import board2 from "../assets/images/BOARD GAMES 2.jpg";
import soap1 from "../assets/images/SOAP FOOTBALL 2.jpg";
import private1 from "../assets/images/PRIVATE_THEATRE.jpg";
import blasters1 from "../assets/images/BLASTERS 1.jpg";
import paintball1 from "../assets/images/PAINT BALL 1.jpg";
import laser1 from "../assets/images/LASER TAG 1.jpg";
import escape1 from "../assets/images/ESCAPE ROOMS 1.jpg";
import snooker1 from "../assets/images/SNOOKERS.jpg";
import bowling1 from "../assets/images/BOWLING 1.jpg";
import kids1 from "../assets/images/KIDS 1.jpg";
import trampoline1 from "../assets/images/TRAMPOLINE 1.jpg";

// Map images to gallery
const galleryImages = [
  { src: ps1, category: "PS" },
  { src: ps2, category: "PS" },
  { src: pc1, category: "PC" },
  { src: vr1, category: "VR" },
  { src: board1, category: "BOARD GAMES" },
  { src: board2, category: "BOARD GAMES" },
  { src: soap1, category: "SOAP FOOTBALL" },
  { src: private1, category: "PRIVATE THEATRE" },
  { src: blasters1, category: "BLASTERS" },
  { src: paintball1, category: "PAINTBALL" },
  { src: laser1, category: "LASER TAG" },
  { src: escape1, category: "ESCAPE ROOMS" },
  { src: snooker1, category: "SNOOKERS" },
  { src: bowling1, category: "BOWLING" },
  { src: kids1, category: "KIDS" },
  { src: trampoline1, category: "TRAMPOLINE" },
];

export default function GalleryGlass() {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    const handleResize = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const half = Math.ceil(galleryImages.length / 2);
  const row1 = galleryImages.slice(0, half);
  const row2 = galleryImages.slice(half);

  const IMG_WIDTH = window.innerWidth < 640 ? 160 : 240;
  const IMG_HEIGHT = window.innerWidth < 640 ? 110 : 170;
  const GAP = 20;
  const TOTAL_IMG_WIDTH = IMG_WIDTH + GAP;
  const marqueeDuration = 18;

  const scrollDistanceRow1 = row1.length * TOTAL_IMG_WIDTH;
  const scrollDistanceRow2 = row2.length * TOTAL_IMG_WIDTH;
  const row1Loop = [...row1, ...row1];
  const row2Loop = [...row2, ...row2];

  return (
    <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-10 mt-18">
      <div className="mb-10 text-center">
        <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl drop-shadow-lg">
          Explore Our Gaming Venues
        </h2>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto text-sm sm:text-base">
          From PCs and VR setups to bowling alleys and laser tag — ClutchX has it all.
        </p>
      </div>

      <div
        ref={containerRef}
        className="glassmorphism w-full max-w-[95vw] mx-auto px-4 py-8 sm:py-10 rounded-3xl border border-white/20 backdrop-blur-xl shadow-lg overflow-hidden"
      >
        <div className="flex flex-col gap-8 select-none relative">
          <motion.div
            className="flex gap-5"
            style={{ width: scrollDistanceRow1 * 2 }}
            animate={{ x: [0, -scrollDistanceRow1] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: marqueeDuration,
            }}
          >
            {row1Loop.map(({ src, category }, i) => (
              <GlassImage key={"r1-" + i} src={src} category={category} width={IMG_WIDTH} height={IMG_HEIGHT} />
            ))}
          </motion.div>

          <motion.div
            className="flex gap-5"
            style={{ marginLeft: TOTAL_IMG_WIDTH / 2, width: scrollDistanceRow2 * 2 }}
            animate={{ x: [0, -scrollDistanceRow2] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: marqueeDuration * 1.15,
            }}
          >
            {row2Loop.map(({ src, category }, i) => (
              <GlassImage key={"r2-" + i} src={src} category={category} width={IMG_WIDTH} height={IMG_HEIGHT} />
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .glassmorphism {
          background: rgba(255, 255, 255, 0.06);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
      `}</style>
    </section>
  );
}

function GlassImage({ src, category, width, height }) {
  return (
    <motion.div
      className="relative rounded-xl flex-shrink-0 overflow-hidden"
      style={{
        width,
        height,
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        cursor: "pointer",
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 250 }}
    >
      <img src={src} alt={category} className="w-full h-full object-cover rounded-xl" draggable={false} loading="lazy" />
      <div className="absolute bottom-2 left-2 px-3 py-1 rounded-lg bg-black/40 backdrop-blur-md text-white font-medium text-xs sm:text-sm tracking-wide shadow-md">
        {category}
      </div>
    </motion.div>
  );
}
