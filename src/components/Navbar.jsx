import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ theme }) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });

  const navRef = useRef(null);

  // Lock/unlock body scroll when menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close menu on ESC key
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

  // Update highlight pill position & width on activeSection or menu change
  useEffect(() => {
    if (!navRef.current) return;
    const container = navRef.current;
    const activeLink = container.querySelector(`[data-id="${activeSection}"]`);
    if (activeLink) {
      setHighlightStyle({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      });
    }
  }, [activeSection, menuItems]);

  // Handle navigation click
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70; // Adjust for navbar height
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
    setOpen(false);
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.pageYOffset + 80;
      let current = activeSection;

      for (const item of menuItems) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          current = item.id;
        }
      }
      if (current !== activeSection) {
        setActiveSection(current);
        // console.log("Active section:", current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, menuItems]);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed inset-x-0 top-0 z-50">
        <div className="px-2 md:px-4 py-2">
          <div className="w-full flex items-center justify-between bg-white/10 backdrop-blur-lg rounded-b-xl px-6 py-3">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div
                className="rounded-md p-2 bg-white/20 backdrop-blur-md"
                aria-hidden
              >
                {/* Logo SVG */}
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
            <div
              ref={navRef}
              className="relative hidden md:flex items-center gap-6"
              style={{ position: "relative" }}
            >
              {/* Highlight pill */}
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute top-0 bottom-0 rounded-full bg-white bg-opacity-20 pointer-events-none"
                style={{
                  left: highlightStyle.left,
                  width: highlightStyle.width,
                  marginTop: 0,
                  marginBottom: 6,
                  // Adjust height to your link height (py-1 + font-size)
                  height: "2.2rem",
                }}
              />

              {menuItems.map((it) => (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  data-id={it.id}
                  onClick={(e) => handleNavClick(e, it.id)}
                  className={`relative z-10 font-semibold px-3 py-1 rounded-full cursor-pointer select-none ${
                    activeSection === it.id
                      ? "text-black"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  {it.label}
                </a>
              ))}
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

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 backdrop-blur-2xl"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${theme.from} ${theme.via} ${theme.to} opacity-80 -z-10`}
              />

              {/* Close button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-md bg-white/20 text-white hover:bg-white/30"
                  aria-label="Close menu"
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
                {menuItems.map((it, i) => (
                  <motion.li
                    key={it.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <a
                      href={`#${it.id}`}
                      onClick={(e) => handleNavClick(e, it.id)}
                      className={`px-4 py-1 rounded-full transition ${
                        activeSection === it.id
                          ? "bg-white bg-opacity-20 text-black"
                          : "text-white"
                      }`}
                    >
                      {it.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Action button */}
              {/* <div className="flex justify-center mt-8">
                <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:brightness-95">
                  Get Started
                </button>
              </div> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
