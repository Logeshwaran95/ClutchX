import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";

export default function ContactWithMap() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [statusMsg, setStatusMsg] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setStatusMsg("");
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      setStatusMsg("Please fill in all required fields.");
      return;
    }
    setError(false);
    setStatusMsg("Your message will be received here. Thank you!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 md:px-12 py-16 mt-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="
            relative
            overflow-hidden
            rounded-t-3xl rounded-b-3xl
            p-8
            flex flex-col gap-5
            bg-white/10
            backdrop-blur-lg
            border
            border-white/20
            shadow-lg
          "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-3xl font-extrabold text-white mb-3 relative z-10">
            Get in Touch
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="
              relative z-10
              bg-transparent
              border border-white/30
              rounded-lg
              px-4 py-2
              text-white
              placeholder-gray-400
              focus:outline-none
              focus:border-cyan-400
              transition
              text-sm
            "
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="
              relative z-10
              bg-transparent
              border border-white/30
              rounded-lg
              px-4 py-2
              text-white
              placeholder-gray-400
              focus:outline-none
              focus:border-cyan-400
              transition
              text-sm
            "
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="
              relative z-10
              bg-transparent
              border border-white/30
              rounded-lg
              px-4 py-2
              text-white
              placeholder-gray-400
              focus:outline-none
              focus:border-cyan-400
              transition
              text-sm
            "
          />
          <textarea
            name="message"
            rows="3"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="
              relative z-10
              bg-transparent
              border border-white/30
              rounded-lg
              px-4 py-2
              text-white
              placeholder-gray-400
              resize-none
              focus:outline-none
              focus:border-cyan-400
              transition
              text-sm
            "
          />

          <motion.button
            type="submit"
            className="
              relative z-10
              self-start
              bg-gradient-to-r
              from-cyan-600
              via-blue-600
              to-indigo-600
              px-7 py-2
              rounded-full
              font-semibold
              shadow-md
              hover:brightness-110
              transition
              text-sm
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>

          <AnimatePresence>
            {statusMsg && (
              <motion.p
                className={`mt-3 text-sm ${
                  error ? "text-rose-400" : "text-green-400"
                } relative z-10`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.3 }}
              >
                {statusMsg}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>

        {/* Map Container */}
        <motion.div
          className="
            relative
            p-6
            rounded-t-3xl rounded-b-3xl
            bg-white/10
            backdrop-blur-lg
            border
            border-white/20
            shadow-lg
            flex flex-col
          "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="text-cyan-400" size={24} />
            <h3 className="text-xl font-semibold text-white">Our Location</h3>
          </div>

          <div className="flex-grow rounded-xl overflow-hidden border border-white/20 shadow-md">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086137362151!2d-122.41941568468159!3d37.774929779759315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809cda1f9fbd%3A0xd92b031858f342f6!2sSan%20Francisco%20Gaming%20Cafe!5e0!3m2!1sen!2sus!4v1691661612345!5m2!1sen!2sus"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            123 Gaming St, San Francisco, CA 94103
          </p>
        </motion.div>
      </div>
    </section>
  );
}
