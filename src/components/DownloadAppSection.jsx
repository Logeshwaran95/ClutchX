import React from "react";
import { motion } from "framer-motion";

// Sample app screenshots from web (publicly accessible)
const playStoreScreenshot =
  "https://play-lh.googleusercontent.com/YtAg7xG9C7ChPiCVn2qPlJxCgs7NtV6DpZz5tToNl5WjTu7Atv6XfPVYJ5qI6dXGHgw=w720-h310-rw"; // Sample Play Store screenshot
const appStoreScreenshot =
  "https://developer.apple.com/assets/elements/screenshots/app-store/sample-app-iphone-portrait-1.png"; // Sample App Store screenshot

const playStoreBadge =
  "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
const appStoreBadge =
  "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";

export default function DownloadAppSection() {
  return (
    <section
      className="max-w-7xl mx-auto px-6 py-10"
      style={{ userSelect: "none" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden"
      >
        {/* Left - Play Store */}
        <motion.div
          className="flex flex-col items-center max-w-xs"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={playStoreScreenshot}
            alt="App Screenshot on Play Store"
            className="w-48 rounded-3xl shadow-lg mb-6 object-cover"
            draggable={false}
          />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-36 hover:scale-105 transition-transform"
            aria-label="Download on Google Play Store"
          >
            <img
              src={playStoreBadge}
              alt="Google Play Store Badge"
              className="w-full h-auto"
              draggable={false}
            />
          </a>
        </motion.div>

        {/* Center - Text */}
        <motion.div
          className="text-center max-w-md px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Download It
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Get ClutchX on your mobile device and enjoy seamless access to our
            features anytime, anywhere.
          </p>
        </motion.div>

        {/* Right - App Store */}
        <motion.div
          className="flex flex-col items-center max-w-xs"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={appStoreScreenshot}
            alt="App Screenshot on App Store"
            className="w-48 rounded-3xl shadow-lg mb-6 object-cover"
            draggable={false}
          />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-36 hover:scale-105 transition-transform"
            aria-label="Download on Apple App Store"
          >
            <img
              src={appStoreBadge}
              alt="Apple App Store Badge"
              className="w-full h-auto"
              draggable={false}
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
