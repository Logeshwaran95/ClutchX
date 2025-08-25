import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ColorThemePicker from "@/components/ColorThemePicker";
import { motion, AnimatePresence } from "framer-motion";
import ReviewCarousel from "./components/ReviewCarousel";
import DownloadAppSection from "./components/DownloadAppSection";
import HeroSection from "./components/HeroSection";
import ContactSection from "./components/ContactSection";
import CategoryList from "./components/Category";
import Gallery from "./components/Gallery";
import FlowSection from "./components/Flow";
import OfferStats from "./components/OfferStats";
import { FaQ } from "react-icons/fa6";
import FAQSection from "./components/FAQ";

function App() {
  const gradients = [

{
  id: "dark-carbon",
  from: "from-neutral-950",
  via: "via-gray-950",
  to: "to-black",
},
  {
    id: "pink",
    from: "from-pink-600",
    via: "via-pink-400",
    to: "to-rose-400",
  },
  {
    id: "multi",
    from: "from-purple-700",
    via: "via-pink-500",
    to: "to-yellow-400",
  },

  // 7 new gradients
  {
    id: "blue-cyan",
    from: "from-blue-800",
    via: "via-cyan-600",
    to: "to-cyan-400",
  },
  {
    id: "emerald-green",
    from: "from-emerald-700",
    via: "via-green-500",
    to: "to-lime-400",
  },
  {
    id: "teal-aqua",
    from: "from-teal-700",
    via: "via-cyan-500",
    to: "to-sky-400",
  },
  {
    id: "lavender-pink",
    from: "from-purple-600",
    via: "via-pink-400",
    to: "to-rose-300",
  },
  {
    id: "dark-purple-indigo-black",
    from: "from-purple-900",
    via: "via-indigo-900",
    to: "to-black",
  },
   {
    id: "neon-cyber",
    from: "from-purple-900",
    via: "via-pink-600",
    to: "to-indigo-700",
  }
];


  const [theme, setTheme] = useState(gradients[7]);

  useEffect(() => {
   const savedColor = localStorage.getItem("selectedColor");
    if (savedColor) {
      document.documentElement.style.backgroundColor = savedColor;
      document.body.style.backgroundColor = savedColor;
    }
  }, []);

  useEffect(() => {
    const savedId = localStorage.getItem("theme");
    if (savedId) {
      const found = gradients.find((g) => g.id === savedId);
      if (found) setTheme(found);
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden scroll-smooth [scroll-padding-top:5rem]">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${theme.from}-${theme.via}-${theme.to}`}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`absolute inset-0 bg-gradient-to-br ${theme.from} ${theme.via} ${theme.to}`}
        />
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 text-white">
        <Navbar theme={theme} />
        <section id="home">
          <HeroSection />
        </section>
        <section id="features">
          <FlowSection />
        </section>
        <section id="stats">
          <OfferStats/>
        </section>
        <section id="categories">
          <CategoryList />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <ColorThemePicker onThemeChange={setTheme} gradients={gradients} />
        <section id="reviews">
          <ReviewCarousel />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <section id="FAQ">
          <FAQSection/>
        </section>
        <section id="download">
          <DownloadAppSection />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
