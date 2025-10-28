"use client";

import { useState, useEffect, useRef } from "react";

export default function BorrowPage() {
  const [amount, setAmount] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [collateralNeeded, setCollateralNeeded] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (amount && !isNaN(amount)) {
      const borrowAmount = parseFloat(amount);
      // 150% collateral ratio
      setCollateralNeeded((borrowAmount * 1.5).toFixed(4));
      // 7.5% annual rate, divided by 12 months
      setMonthlyPayment((borrowAmount * 0.075 / 12).toFixed(4));
    } else {
      setCollateralNeeded(0);
      setMonthlyPayment(0);
    }
  }, [amount]);

  const stats = [
    { label: "Total Borrowed", value: "$1.8M", icon: "📤" },
    { label: "Active Borrowers", value: "892", icon: "👤" },
    { label: "Interest Rate", value: "7.5%", icon: "💹" },
  ];

  const features = [
    { icon: "⚡", title: "Instant Approval", desc: "Get your SOL in seconds" },
    { icon: "🔒", title: "Secure Collateral", desc: "Smart contract protected" },
    { icon: "📊", title: "Flexible Terms", desc: "Repay on your schedule" },
  ];

  return (
    <section className="min-h-[calc(100vh-80px)] pt-16 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white px-6 overflow-hidden relative" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Borrow SOL
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Borrow Solana (SOL) instantly using your collateral and unlock DeFi opportunities.
          </p>
        </div>

        {/* Stats Row */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/50 hover:scale-105 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold font-mono text-blue-400">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Borrow Card */}
        <div className={`bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 md:p-10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 mb-12 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} delay-300`}>
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <img
                  src="/images/sol-logo.png"
                  alt="Solana"
                  className="w-20 h-20 relative z-10"
                />
              </div>
              <div className="text-left">
                <h2 className="text-3xl font-semibold">Solana</h2>
                <p className="text-gray-400">SOL</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-1">Interest Rate</p>
              <p className="text-4xl font-bold font-mono bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                7.5%
              </p>
            </div>
          </div>

          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <label className="block text-gray-300 text-sm mb-3 font-medium">Amount to Borrow</label>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1 group">
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-focus-within:opacity-30 blur transition duration-500"></div>
                  
                  <input
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="relative w-full px-6 py-5 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 text-white border-2 border-gray-700/50 focus:border-blue-500 outline-none transition-all duration-300 text-xl font-mono placeholder:text-gray-600 shadow-inner"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-gray-800/80 px-3 py-1.5 rounded-lg border border-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 font-semibold text-sm">SOL</span>
                  </div>
                </div>
                <button className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 hover:from-blue-700 hover:via-blue-600 hover:to-purple-700 px-8 py-5 rounded-xl transition-all duration-300 font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 whitespace-nowrap overflow-hidden group">
                  <span className="relative z-10">Borrow SOL</span>
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </button>
              </div>
            </div>

            {/* Loan Details Preview */}
            {amount && collateralNeeded > 0 && (
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-6 animate-fade-in space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-gray-400 text-sm mb-1">Collateral Required (150%)</p>
                    <p className="text-2xl font-bold font-mono text-orange-400">
                      {collateralNeeded} SOL
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-gray-400 text-sm mb-1">Est. Monthly Interest</p>
                    <p className="text-2xl font-bold font-mono text-blue-400">
                      {monthlyPayment} SOL
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400 bg-black/30 rounded-lg p-3">
                  <span>⚠️</span>
                  <span>Make sure you have sufficient collateral in your wallet</span>
                </div>
              </div>
            )}

            {!amount && (
              <div className="text-center py-6 text-gray-500 text-sm border border-dashed border-gray-700 rounded-xl">
                💡 Enter an amount to see loan details
              </div>
            )}
          </div>

          {/* Loan Info */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="text-gray-400 mb-1">Min Borrow</p>
                <p className="font-semibold font-mono">0.5 SOL</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 mb-1">Collateral Ratio</p>
                <p className="font-semibold">150%</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 mb-1">Max Duration</p>
                <p className="font-semibold">12 Months</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-black/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className={`text-center text-gray-500 text-sm transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p>🔐 All loans are secured by smart contracts and over-collateralized for safety</p>
        </div>
      </div>
    </section>
  );
}