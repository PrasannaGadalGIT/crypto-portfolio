"use client";

import Image from "next/image";
import WalletConnectButton from "./WalletConnectButton";


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
  return (
    <section id="how-it-works" className="py-30 px-6">
      <div className="max-w-7xl mb-0 mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            How It{" "}
            <span className="bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to unlock your DeFi credit potential
          </p>
        </div>

        {/* Steps in a row */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-5">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-white rounded-2xl p-5 border-3 border-gray-200 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg flex-1 flex flex-col items-center text-center"
            >
              <div className="mb-2">
                <Image
                  src={step.src}
                  alt={step.title}
                  width={180}
                  height={180}
                  className="rounded-xl"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex justify-center">
          <WalletConnectButton />
        </div>
      </div>
    </section>
  );
}
