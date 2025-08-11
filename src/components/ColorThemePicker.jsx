import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Paintbrush } from "lucide-react";

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

export default function ColorThemePicker({ onThemeChange }) {
  const [open, setOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("default");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setActiveTheme(savedTheme);
      const themeObj = gradients.find((g) => g.id === savedTheme);
      if (themeObj) onThemeChange(themeObj);
    }
  }, [onThemeChange]);

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
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
