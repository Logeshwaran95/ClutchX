import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
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

  const menuItems = ["Home", "Features", "Pricing", "Contact"];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed inset-x-0 top-0 z-50">
        <div className="px-2 md:px-4 py-2">
          <div
            className="
              w-full flex items-center justify-between 
              bg-white/10 backdrop-blur-lg shadow-lg border border-white/20
              rounded-b-xl
              px-6 py-3
            "
          >
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div
                className="rounded-md p-2 bg-white/20 backdrop-blur-md"
                aria-hidden
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6 7a3 3 0 100 6 3 3 0 000-6zm12 0a3 3 0 100 6 3 3 0 000-6zM2 12a2 2 0 002 2h2l2 3h8l2-3h2a2 2 0 002-2V8a2 2 0 00-2-2h-4L14 3H10L6 6H2v6z" />
                </svg>
              </div>
              <span className="text-white font-extrabold text-lg">ClutchX</span>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((it) => (
                <a
                  key={it}
                  href={`#${it.toLowerCase()}`}
                  className="text-white font-semibold hover:text-white/80 transition"
                >
                  {it}
                </a>
              ))}
              <button className="ml-4 bg-white text-black px-4 py-2 rounded-full shadow-md hover:brightness-95">
                Get Started
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded-md bg-white/10 backdrop-blur-md"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 bg-white/10 backdrop-blur-2xl border border-white/20"
            >
              {/* Close button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-md bg-white/10 text-white hover:bg-white/20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Menu links */}
              <ul className="flex flex-col items-center gap-6 mt-6 text-2xl font-semibold text-white">
                {menuItems.map((label, i) => (
                  <motion.li
                    key={label}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <a
                      href={`#${label.toLowerCase()}`}
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Action button */}
              <div className="flex justify-center mt-8">
                <button className="px-6 py-3 rounded-full bg-white text-black font-medium shadow-md hover:brightness-95">
                  Get Started
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
