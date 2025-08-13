// src/components/FAQSection.jsx
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is ClutchX?",
      answer:
        "ClutchX is a one-stop booking platform for gaming cafés, PlayStation arenas, board games, escape rooms, VR centers, and other entertainment venues — offering up to 25% discounts and instant booking confirmation.",
    },
    {
      question: "How do I make a booking?",
      answer:
        "Browse the venue list, choose your preferred game/activity, select date & time, add the number of players, and confirm your booking by making payment online or opting for partial pay (if available).",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "You can cancel within the free cancellation window for a full refund. After that, refunds depend on the venue’s specific policy, displayed before checkout.",
    },
    {
      question: "How do I contact ClutchX support?",
      answer:
        "You can reach us through the in-app chat, email clutchxcare@gmail.com, or call our customer care number during working hours.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="py-16 sm:py-20 px-6 sm:px-12 lg:px-20">
      {/* Heading */}
      <div data-aos="fade-up" className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-white/70 text-base sm:text-lg">
          Everything you need to know about ClutchX
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-white/15 transition"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-white text-lg sm:text-xl font-semibold">
                {faq.question}
              </h3>
              <span className="text-white text-2xl font-bold select-none">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden`}
              style={{
                maxHeight: activeIndex === index ? "200px" : "0px",
                opacity: activeIndex === index ? 1 : 0,
              }}
            >
              <p className="mt-3 text-white/80 text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
