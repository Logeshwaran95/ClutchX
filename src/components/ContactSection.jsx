// src/components/ContactWithMap.jsx
import React, { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactWithMap() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [statusMsg, setStatusMsg] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

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
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-16 mt-0"
    >
      {/* Section Title */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
          Get in Touch
        </h2>
        <p className="text-white max-w-xl mx-auto text-sm sm:text-base opacity-80">
          We’re here to answer your questions, hear your feedback, and help you
          with anything you need.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          data-aos="fade-right"
          className="overflow-hidden rounded-3xl p-6 sm:p-8 flex flex-col gap-5 
          bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-transparent border border-white/40 rounded-lg px-4 py-2 text-white placeholder-white focus:outline-none focus:border-cyan-400 transition text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-transparent border border-white/40 rounded-lg px-4 py-2 text-white placeholder-white focus:outline-none focus:border-cyan-400 transition text-sm"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="bg-transparent border border-white/40 rounded-lg px-4 py-2 text-white placeholder-white focus:outline-none focus:border-cyan-400 transition text-sm"
          />
          <textarea
            name="message"
            rows="3"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-transparent border border-white/40 rounded-lg px-4 py-2 text-white placeholder-white resize-none focus:outline-none focus:border-cyan-400 transition text-sm"
          />

          <button
  type="submit"
  className="self-center bg-white/20 backdrop-blur-lg border border-white/40 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-white/40 hover:text-black transition text-sm text-white"
>
  Send Message
</button>



          {statusMsg && (
            <p
              className={`mt-2 text-sm ${
                error ? "text-rose-300" : "text-green-300"
              }`}
            >
              {statusMsg}
            </p>
          )}
        </form>

        {/* Map Container */}
        <div
          data-aos="fade-left"
          className="p-6 rounded-3xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg flex flex-col"
        >
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="text-cyan-300" size={24} />
            <h3 className="text-xl font-semibold text-white">Our Location</h3>
          </div>

          <div className="flex-grow rounded-xl overflow-hidden border border-white/30 shadow-md">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4984122747886!2d80.23962207480528!3d13.067439787263604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265f3dca1f4a3%3A0x5e2d8c7d5f79a74e!2sPhoenix%20Marketcity%20Chennai!5e0!3m2!1sen!2sin!4v1691661612345!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="mt-4 text-white text-sm leading-relaxed opacity-80">
            123 Gaming St, Chennai, India
          </p>
        </div>
      </div>
    </section>
  );
}
