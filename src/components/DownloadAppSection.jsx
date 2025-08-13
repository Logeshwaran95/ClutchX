// src/components/DownloadAppSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample app assets
const playStoreScreenshot =
  "https://play-lh.googleusercontent.com/YtAg7xG9C7ChPiCVn2qPlJxCgs7NtV6DpZz5tToNl5WjTu7Atv6XfPVYJ5qI6dXGHgw=w720-h310-rw";
const appStoreScreenshot =
  "https://developer.apple.com/assets/elements/screenshots/app-store/sample-app-iphone-portrait-1.png";
const playStoreBadge =
  "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
const appStoreBadge =
  "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";

// Sample QR code from the internet
const sampleQRCode =
  "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://clutchx.com";

export default function DownloadAppSection() {
  const [showQR, setShowQR] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-6 py-10" style={{ userSelect: "none" }}>
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
          <button
            onClick={() => setShowQR(true)}
            className="block w-36 hover:scale-105 transition-transform"
            aria-label="Download on Google Play Store"
          >
            <img
              src={playStoreBadge}
              alt="Google Play Store Badge"
              className="w-full h-auto"
              draggable={false}
            />
          </button>
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
          <button
            onClick={() => setShowQR(true)}
            className="block w-36 hover:scale-105 transition-transform"
            aria-label="Download on Apple App Store"
          >
            <img
              src={appStoreBadge}
              alt="Apple App Store Badge"
              className="w-full h-auto"
              draggable={false}
            />
          </button>
        </motion.div>
      </motion.div>

      {/* QR Code Modal */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center max-w-sm w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Scan to Download ClutchX
              </h3>
              <img
                src={sampleQRCode}
                alt="QR Code to download ClutchX"
                className="mx-auto w-40 h-40 rounded-lg"
              />
              <button
                onClick={() => setShowQR(false)}
                className="mt-6 px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
