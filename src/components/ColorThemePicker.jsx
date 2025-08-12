import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Paintbrush } from "lucide-react";

export default function ColorThemePicker({ onThemeChange, gradients }) {
  const [open, setOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("default");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setActiveTheme(savedTheme);
      const themeObj = gradients.find((g) => g.id === savedTheme);
      if (themeObj) onThemeChange(themeObj);
    }
  }, [onThemeChange, gradients]);

  const handleThemeSelect = (theme) => {
    setActiveTheme(theme.id);
    localStorage.setItem("theme", theme.id);
    onThemeChange(theme);
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        className="p-4 rounded-full bg-white/20 backdrop-blur-lg hover:scale-110 transition"
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle color theme picker"
      >
        <Paintbrush className="text-white" size={24} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-16 right-0 bg-white/10 backdrop-blur-xl rounded-xl p-3"
          >
            <div className="flex flex-col gap-2">
              {gradients.map((g) => (
                <motion.button
                  key={g.id}
                  className={`w-20 h-10 rounded-lg bg-gradient-to-r ${g.from} ${g.via} ${g.to} border-2 ${
                    activeTheme === g.id ? "border-white" : "border-transparent"
                  }`}
                  onClick={() => handleThemeSelect(g)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Select ${g.id} theme`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
