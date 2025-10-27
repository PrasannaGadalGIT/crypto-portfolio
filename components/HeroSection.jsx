"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex pt-30 pb-10 bg-gray-50 items-center justify-center px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center bg-linear-30">
        {/* Left */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Your{" "}
            <span className="bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Web3 Credit Score
            </span>{" "}
            on Solana
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            Unlock your DeFi potential with real-time credit scoring powered by blockchain analytics.
          </p>
          <button
            onClick={() =>
              document.getElementById("how-it-works")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            See How It Works →
          </button>
        </div>

        {/* Right */}
        <div className="relative flex justify-center">
          <Image
            src="/images/hero-web3.jpg"
            alt="Web3 Credit Score Visualization"
            width={1200}
            height={900}
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
