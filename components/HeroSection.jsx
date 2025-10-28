"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="flex pt-30 pb-10 items-center justify-center px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className={`space-y-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Your{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent animate-pulse">
              Web3 Credit Score
            </span>{" "}
            on Solana
          </h1>
          <p className={`text-lg text-gray-600 max-w-md transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Unlock your DeFi potential with real-time credit scoring powered by blockchain analytics.
          </p>
          <button
            onClick={() =>
              document.getElementById("how-it-works")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className={`inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg hover:opacity-90 hover:scale-105 hover:shadow-xl transition-all duration-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} delay-300`}
          >
            <span>See How It Works</span>
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* Right */}
        <div className={`relative flex justify-center transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
          <div className="relative group">
            {/* Animated glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
            
            <Image
              src="/images/hero-web3.jpg"
              alt="Web3 Credit Score Visualization"
              width={1200}
              height={900}
              className="relative rounded-2xl shadow-lg w-full max-w-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}