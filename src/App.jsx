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

function App() {
  const [theme, setTheme] = useState({
    from: "from-purple-900",
    via: "via-indigo-900",
    to: "to-black",
  });

  useEffect(() => {
    const savedColor = localStorage.getItem("selectedColor") || "#000"; // fallback
    document.documentElement.style.backgroundColor = savedColor;
    document.body.style.backgroundColor = savedColor;
  }, []);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedId = localStorage.getItem("theme");
    if (savedId) {
      const gradients = [
        { id: "dark", from: "from-gray-900", via: "via-gray-800", to: "to-black" },
        { id: "green", from: "from-green-700", via: "via-emerald-600", to: "to-green-500" },
        { id: "blue", from: "from-blue-800", via: "via-blue-600", to: "to-cyan-500" },
        { id: "orange", from: "from-orange-700", via: "via-orange-500", to: "to-yellow-400" },
        { id: "purple", from: "from-purple-900", via: "via-violet-700", to: "to-fuchsia-500" },
        { id: "red", from: "from-red-700", via: "via-red-600", to: "to-pink-500" },
        { id: "pink", from: "from-pink-600", via: "via-pink-400", to: "to-rose-400" },
        { id: "teal", from: "from-teal-700", via: "via-teal-500", to: "to-cyan-400" },
      ];
      const found = gradients.find((g) => g.id === savedId);
      if (found) setTheme(found);
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Color Sweep Background */}
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

      {/* Page Content */}
      <div className="relative z-10 text-white">
        <Navbar theme={theme} />
        <HeroSection />
        <CategoryList />
        <Gallery />
        <ColorThemePicker onThemeChange={setTheme} />
        <ReviewCarousel />
        <ContactSection />
        <DownloadAppSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
