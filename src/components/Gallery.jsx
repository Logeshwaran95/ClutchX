import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1605902711622-cfb43c443f3d?auto=format&fit=crop&w=800&q=80", // esports setup
    category: "PC",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", // gaming keyboard
    category: "PC",
  },
  {
    src: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=800&q=80", // VR headset
    category: "VR",
  },
  {
    src: "https://images.unsplash.com/photo-1530889031790-497b4a5aa56a?auto=format&fit=crop&w=800&q=80", // arcade machines
    category: "BLASTERS",
  },
  {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80", // gaming controller
    category: "PS",
  },
  {
    src: "https://images.unsplash.com/photo-1511910849309-40c9d8a29a1f?auto=format&fit=crop&w=800&q=80", // board games
    category: "BOARD GAMES",
  },
  {
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80", // paintball gear
    category: "PAINTBALL",
  },
  {
    src: "https://images.unsplash.com/photo-1532635240-6c15e0b19921?auto=format&fit=crop&w=800&q=80", // bowling alley
    category: "BOWLING",
  },
  {
    src: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80", // gaming cafe interior
    category: "PC",
  },
  {
    src: "https://images.unsplash.com/photo-1528372444006-5ce6e86be292?auto=format&fit=crop&w=800&q=80", // laser tag arena
    category: "LASER TAG",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80", // escape room door
    category: "ESCAPE ROOMS",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", // soap football
    category: "SOAP FOOTBALL",
  },
];

const IMG_WIDTH = 250; // increased width
const IMG_HEIGHT = 180; // increased height
const GAP = 24; // gap between images in px
const TOTAL_IMG_WIDTH = IMG_WIDTH + GAP; // width including gap

const marqueeDuration = 24; // seconds for full scroll

export default function GalleryGlass() {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Split images roughly in half for 2 rows
  const half = Math.ceil(galleryImages.length / 2);
  const row1 = galleryImages.slice(0, half);
  const row2 = galleryImages.slice(half);

  // Calculate total scroll distances
  const scrollDistanceRow1 = row1.length * TOTAL_IMG_WIDTH;
  const scrollDistanceRow2 = row2.length * TOTAL_IMG_WIDTH;

  // Duplicate arrays for seamless scroll
  const row1Loop = [...row1, ...row1];
  const row2Loop = [...row2, ...row2];

  return (
    <section
      aria-label="Gaming venues gallery"
      className="relative py-20 bg-transparent overflow-hidden"
      style={{ minHeight: IMG_HEIGHT * 2 + 120 }} // accommodate two rows + gap + padding
    >
      <div
        ref={containerRef}
        className="glassmorphism mx-auto max-w-[90vw] px-8 py-12 rounded-3xl border border-white/20 backdrop-blur-xl shadow-lg"
        style={{ overflow: "hidden" }}
      >
        <h2 className="text-white text-4xl font-extrabold mb-10 text-center select-none">
          Explore Our Gaming Venues
        </h2>

        <div className="flex flex-col gap-10 select-none relative">
          {/* Row 1 */}
          <motion.div
            className="flex gap-6"
            style={{ marginLeft: 0, width: scrollDistanceRow1 * 2 }}
            animate={{ x: [0, -scrollDistanceRow1] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: marqueeDuration,
            }}
          >
            {row1Loop.map(({ src, category }, i) => (
              <GlassImage key={"r1-" + i} src={src} category={category} />
            ))}
          </motion.div>

          {/* Row 2 - offset by half image width + half gap */}
          <motion.div
            className="flex gap-6"
            style={{ marginLeft: TOTAL_IMG_WIDTH / 2, width: scrollDistanceRow2 * 2 }}
            animate={{ x: [0, -scrollDistanceRow2] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: marqueeDuration * 1.2,
            }}
          >
            {row2Loop.map(({ src, category }, i) => (
              <GlassImage key={"r2-" + i} src={src} category={category} />
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .glassmorphism {
          background: rgba(255, 255, 255, 0.07);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
      `}</style>
    </section>
  );
}

function GlassImage({ src, category }) {
  return (
    <motion.div
      className="relative rounded-xl"
      style={{
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        overflow: "hidden",
        cursor: "pointer",
      }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
      tabIndex={0}
      onFocus={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onBlur={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={src}
        alt="Gaming venue"
        className="w-full h-full object-cover rounded-xl pointer-events-none"
        draggable={false}
        loading="lazy"
      />
      {/* Category label card */}
      <div
        className="absolute bottom-2 left-2 px-3 py-1 rounded-md bg-white/20 backdrop-blur-md text-white font-semibold text-xs tracking-wide"
        style={{
          transform: "translateY(15%)",
        }}
      >
        {category}
      </div>
    </motion.div>
  );
}
