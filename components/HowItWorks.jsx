"use client";

import Image from "next/image";
import WalletConnectButton from "./WalletConnectButton";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Connect",
    description: "Link your Solana wallet securely to get started",
    src: "/images/connect-icon.jpg",
  },
  {
    title: "Analyze",
    description: "We analyze your on-chain activity and transaction history",
    src: "/images/analyze-icon.jpg",
  },
  {
    title: "Score",
    description: "Get your personalized Web3 credit score instantly",
    src: "/images/score-icon.jpg",
  },
];

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState([false, false, false]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stagger the step animations
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => {
                  const newSteps = [...prev];
                  newSteps[index] = true;
                  return newSteps;
                });
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="how-it-works" className="py-30 px-6" ref={sectionRef}>
      <div className="max-w-7xl mb-0 mx-auto">
        {/* Title */}
        <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            How It{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to unlock your DeFi credit potential
          </p>
        </div>

        {/* Steps in a row */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`bg-white rounded-2xl p-5 border-2 border-gray-200 hover:border-purple-500/50 transition-all duration-500 hover:shadow-lg hover:scale-105 hover:-translate-y-2 flex-1 flex flex-col items-center text-center ${
                visibleSteps[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-2 relative group">
                {/* Animated glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition duration-500"></div>
                
                <Image
                  src={step.src}
                  alt={step.title}
                  width={180}
                  height={180}
                  className="rounded-xl relative transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`flex justify-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <WalletConnectButton />
        </div>
      </div>
    </section>
  );
}