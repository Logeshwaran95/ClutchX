// src/components/Footer.jsx
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://www.facebook.com/share/19TCu3sJyq/?mibextid=wwXIfr" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/clutchx_official/" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/clutchx/" },
    { icon: <FaYoutube />, href: "https://youtube.com" },
    { icon: <FaWhatsapp />, href: "https://wa.me/9363799363" }, // ✅ WhatsApp Link
  ];

  const usefulLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <footer className="w-full mt-16">
      {/* Glassmorphism container */}
      <div className="w-[100%] mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-t-3xl p-8 flex flex-col md:flex-row md:justify-between gap-8">
          
          {/* Left: About */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/3 text-center md:text-left"
          >
            <h2 className="text-2xl font-bold text-white">ClutchX</h2>
            <p className="mt-2 text-gray-200 text-sm leading-relaxed">
              ClutchX is a one-stop booking platform for gaming cafés, PlayStation arenas, board games, escape rooms, VR centers, and other entertainment venues — offering up to 25% discounts and instant booking confirmation.
            </p>
          </motion.div>

          {/* Middle: Useful Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/3 flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    color: "#fff",
                    textShadow: "0px 0px 8px rgba(255,255,255,0.8)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <a href={link.href} className="text-gray-300 hover:text-white transition">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/3 flex flex-col items-center justify-start text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-3 justify-center flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.15,
                    backgroundColor: "rgba(255,255,255,0.2)",
                    boxShadow: "0px 0px 12px rgba(255,255,255,0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-3 bg-white/10 rounded-full text-white border border-white/20 hover:border-white/40"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-gray-400 text-sm py-4">
        © {new Date().getFullYear()} ClutchX. All rights reserved.
      </div>
    </footer>
  );
}
