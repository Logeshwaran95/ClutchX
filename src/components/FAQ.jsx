// src/components/FAQSection.jsx
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";

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
        "Click to view the full Cancellation & Refund Policy.",
      modalContent: `📘ClutchX – Cancellation & Refund Policy User Manual
________________________________________
1. Introduction
This manual explains the rules and procedures for cancelling or rescheduling bookings made through the ClutchX app.
The policy ensures fairness to both customers and gaming venues while providing clarity on refund eligibility.
________________________________________
2. Where to Find the Policy
You can view the Cancellation & Refund Policy in three places within the ClutchX app:
1. Before Payment – A popup appears before confirming your booking.
2. Booking Details Page – View after a booking is confirmed.
3. Help & Policies Menu – Accessible anytime from the side menu.
________________________________________
3. Cancellation Policy Rules
Cancellation Time Before Slot  Refund Percentage  Rescheduling Allowed
More than 24 hours  ✅ 100% Refund  Yes
Between 5 to 24 hours  ⚠️ 50% Refund  Yes
Less than 5 hours  ❌ No Refund  No
________________________________________
4. Special Notes
• Refund Timeline: Refunds will be processed within 5–7 working days.
• Venue Policies: Some venues may have stricter rules. Venue-specific policies will be shown during booking.
• No-shows: If you do not attend your booked session, the booking is considered used, and no refund will be issued.
• Peak Hours: Cancellation rules still apply during peak hours.
________________________________________
5. Rescheduling Policy
• If your booking is eligible for rescheduling, you can change the date and time without extra cost (subject to slot availability).
• Rescheduling is allowed only up to 4 hours before the booked time.
• Some venues may limit the number of times you can reschedule.
________________________________________
6. How to Cancel a Booking
1. Open the ClutchX App and go to "My Bookings".
2. Select the booking you wish to cancel.
3. Click "Cancel Booking".
4. Review the refund amount shown on screen.
5. Confirm the cancellation.
________________________________________
7. How to Reschedule a Booking
1. Go to "My Bookings".
2. Select the booking you want to reschedule.
3. Click "Reschedule Booking".
4. Choose the new date & time.
5. Confirm the change.
________________________________________
8. Visual Guide in the App
Booking Details Screen Example:
[Booking Details]
----------------------------------------
Venue: Gameistry
Game: PS5 Session
Date: 15 Aug | Time: 5:00–6:00 PM

Cancellation Policy:
🟢 Cancel >24 hrs: Full refund
🟡 Cancel 5–24 hrs: 50% refund
🔴 Cancel <5 hrs: No refund
💳 Refund in 5–7 working days

[Cancel Booking] [Reschedule Booking]
----------------------------------------
________________________________________
9. Color Coding Guide
• 🟢 Green = Safe to cancel (Full Refund)
• 🟡 Yellow = Partial refund
• 🔴 Red = No refund
________________________________________
10. Contact for Support
If you face issues with cancellation or refund:
• Phone: +91 93637 99363
• Email: clutchxcare@gmail.com
• Instagram: @clutchx_official`
    },
    {
      question: "How do I contact ClutchX support?",
      answer:
        "You can reach us through the in-app chat, email clutchxcare@gmail.com, or call our customer care number during working hours.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const toggleFAQ = (index) => {
    const faq = faqs[index];
    if (faq.modalContent) {
      setModalContent(faq.modalContent);
      setIsModalOpen(true);
    } else {
      setActiveIndex(activeIndex === index ? null : index);
    }
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

            {!faq.modalContent && (
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
            )}
          </div>
        ))}
      </div>

      <AnimatePresence>
  {isModalOpen && (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsModalOpen(false)}
    >
      <motion.div
        className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-lg shadow-white/10"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-cyan-300 transition"
        >
          ×
        </button>

        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          📘 ClutchX – Cancellation & Refund Policy
        </h3>

        <div className="text-white/80 text-sm sm:text-base whitespace-pre-line">
          {modalContent}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
}
