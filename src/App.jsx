import { useState } from "react";
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
        <Navbar />
        <HeroSection/>
        <CategoryList/>
        <Gallery/>
        <ColorThemePicker onThemeChange={setTheme} />
        <ReviewCarousel/>
         <ContactSection/>
        <DownloadAppSection/>
       
           <Footer />
      </div>
    </div>
  );
}

export default App;
