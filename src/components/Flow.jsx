import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Book Your Spot",
    description: "Choose your favorite gaming venue and lock your time slot instantly.",
    img: "https://images.unsplash.com/photo-1605902711622-cfb43c44342f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Connect with Players",
    description: "Find teammates or challenge opponents for the ultimate gaming experience.",
    img: "https://images.unsplash.com/photo-1611926080300-1d74a22bcf8d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Let’s Go!",
    description: "Step into your game zone and enjoy a fully immersive experience.",
    img: "https://images.unsplash.com/photo-1587202372775-6a2b7b3b4b2f?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function FlowSection() {
  const stepRefs = useRef([]);
  const [selectedStep, setSelectedStep] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const scrollToStep = (index) => {
    if (stepRefs.current[index]) {
      stepRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative py-16 sm:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16 sm:gap-20">
        {steps.map((step, idx) => (
          <div
            key={idx}
            ref={(el) => (stepRefs.current[idx] = el)}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2 flex justify-center cursor-pointer" onClick={() => setSelectedStep(step)}>
              <div className="relative w-72 h-52 sm:w-80 sm:h-56 lg:w-[420px] lg:h-[300px] rounded-xl overflow-hidden border border-white/20 shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6">{step.description}</p>

              {idx < steps.length - 1 ? (
                <button
                  onClick={() => scrollToStep(idx + 1)}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full shadow-lg hover:bg-white/20 transition"
                >
                  Next Step
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedStep && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setSelectedStep(null)}
          ></div>

          {/* Glass Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg overflow-hidden">
              {/* Close Button */}
              <button
                onClick={() => setSelectedStep(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:scale-110 transition"
              >
                ✕
              </button>

              {/* Image */}
              <img
                src={selectedStep.img}
                alt={selectedStep.title}
                className="w-full h-64 sm:h-72 object-cover"
              />

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">{selectedStep.title}</h3>
                <p className="text-white/80 text-base">{selectedStep.description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

function ArrowSVG({ reverse = false }) {
  return (
    <svg
      width="80"
      height="40"
      viewBox="0 0 80 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={reverse ? "rotate-180" : ""}
    >
      <path
        d="M0 20 H70 M70 20 L60 10 M70 20 L60 30"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
