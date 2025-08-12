import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ theme }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

const menuItems = [
  { label: "Home", id: "home" },
  { label: "Features", id: "features" },
  { label: "Categories", id: "categories" },
  { label: "Gallery", id: "gallery" },
  { label: "Reviews", id: "reviews" },
  { label: "Contact", id: "contact" },
  { label: "Download", id: "download" },
];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50">
        <div className="px-2 md:px-4 py-2">
          <div className="w-full flex items-center justify-between bg-white/10 backdrop-blur-lg rounded-b-xl px-6 py-3">
            <div className="flex items-center gap-3">
              <div className="rounded-md p-2 bg-white/20 backdrop-blur-md" aria-hidden>
                {/* logo */}
              </div>
              <span className="text-white font-extrabold text-lg">ClutchX</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((it) => (
  <a
    key={it.id}
    href={`#${it.id}`}
    className="text-white font-semibold hover:text-white/80 transition"
    onClick={() => setOpen(false)}
  >
    {it.label}
  </a>
))}

              <button className="ml-4 bg-white text-black px-4 py-2 rounded-full hover:brightness-95">
                Get Started
              </button>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded-md bg-white/10 backdrop-blur-md"
            >
              {/* hamburger */}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div className="absolute inset-0 backdrop-blur-2xl">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${theme.from} ${theme.via} ${theme.to} opacity-80 -z-10`}
              />
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-md bg-white/20 text-white hover:bg-white/30"
                >
                  {/* close */}
                </button>
              </div>
              <ul className="flex flex-col items-center gap-6 mt-6 text-2xl font-semibold text-white">
                {menuItems.map((it, i) => (
                  <motion.li
                    key={it.label}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <a href={it.href} onClick={(e) => handleNavClick(e, it.href)}>
                      {it.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
