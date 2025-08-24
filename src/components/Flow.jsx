import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";
import Swal from "sweetalert2";

const steps = [
  {
    title: "Book Your Spot",
    description:
      "Choose your favorite gaming venue and secure your time slot instantly. No hassle, no waiting.",
    img: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Connect with Players",
    description:
      "Find teammates or challenge opponents. Our platform connects you with the right people for your game.",
    img: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Let’s Go!",
    description:
      "Step into your game zone and enjoy the ultimate experience. We handle the rest.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function FlowSection() {
  const stepRefs = useRef([]);

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

  const handleFinish = () => {
    Swal.fire({
      title: "🎉 ClutchX",
      text: "You’re all set! Thanks for completing the flow with ClutchX 🚀",
      icon: "success",
      confirmButtonText: "Awesome!",
    });
  };

  return (
    <section className="relative py-16 sm:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16 sm:gap-20">
        {steps.map((step, idx) => (
          <div
            key={idx}
            ref={(el) => (stepRefs.current[idx] = el)} // assign ref
            className={`flex flex-col md:flex-row items-center gap-10 ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2 flex justify-center">
              <div className="relative w-72 h-52 sm:w-80 sm:h-56 lg:w-[420px] lg:h-[300px] rounded-xl overflow-hidden border border-white/20 shadow-lg">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                {/* Arrow */}
                {idx < steps.length - 1 && (
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 ${
                      idx % 2 !== 0 ? "left-[-60px]" : "right-[-60px]"
                    } hidden md:block`}
                  >
                    <ArrowSVG reverse={idx % 2 !== 0} />
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6">
                {step.description}
              </p>

              {idx < steps.length - 1 ? (
                <button
                  onClick={() => scrollToStep(idx + 1)}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full shadow-lg hover:bg-white/20 transition"
                >
                  Next Step
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleFinish}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full shadow-lg hover:bg-white/20 transition"
                >
                  Finish
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
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
