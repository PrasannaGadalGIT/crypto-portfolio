"use client";

import { useState, useEffect, useRef } from "react";

export default function LendPage() {
  const [amount, setAmount] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [earnings, setEarnings] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (amount && !isNaN(amount)) {
      const calculatedEarnings = (parseFloat(amount) * 0.062).toFixed(4);
      setEarnings(calculatedEarnings);
    } else {
      setEarnings(0);
    }
  }, [amount]);

  const stats = [
    { label: "Total Value Locked", value: "$2.4M", icon: "🔒" },
    { label: "Active Lenders", value: "1,247", icon: "👥" },
    { label: "Avg APY", value: "6.2%", icon: "📈" },
  ];

  return (
    <section className="min-h-[calc(100vh-80px)] pt-16 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white px-6 overflow-hidden relative" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Lend Your SOL
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Earn passive income by lending your Solana (SOL) securely through our decentralized protocol.
          </p>
        </div>

        {/* Stats Row */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 hover:scale-105 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold font-mono text-purple-400">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Lend Card */}
        <div className={`bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 md:p-10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} delay-300`}>
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
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
              <p className="text-gray-400 text-sm mb-1">Current APY</p>
              <p className="text-4xl font-bold font-mono bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                6.2%
              </p>
            </div>
          </div>

          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <label className="block text-gray-300 text-sm mb-3 font-medium">Amount to Lend</label>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1 group">
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-focus-within:opacity-30 blur transition duration-500"></div>
                  
                  <input
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="relative w-full px-6 py-5 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 text-white border-2 border-gray-700/50 focus:border-purple-500 outline-none transition-all duration-300 text-xl font-mono placeholder:text-gray-600 shadow-inner"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-gray-800/80 px-3 py-1.5 rounded-lg border border-gray-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 font-semibold text-sm">SOL</span>
                  </div>
                </div>
                <button className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 hover:from-purple-700 hover:via-purple-600 hover:to-blue-700 px-8 py-5 rounded-xl transition-all duration-300 font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 whitespace-nowrap overflow-hidden group">
                  <span className="relative z-10">Deposit SOL</span>
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </button>
              </div>
            </div>

            {/* Earnings Preview */}
            {amount && earnings > 0 && (
              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-6 animate-fade-in">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Estimated Annual Earnings</p>
                    <p className="text-2xl font-bold font-mono text-green-400">
                      {earnings} SOL
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm mb-1">Monthly</p>
                    <p className="text-lg font-mono text-purple-400">
                      {(earnings / 12).toFixed(4)} SOL
                    </p>
                  </div>
                </div>
              </div>
            )}

            {!amount && (
              <div className="text-center py-6 text-gray-500 text-sm border border-dashed border-gray-700 rounded-xl">
                💡 Enter an amount to see your potential earnings
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="text-gray-400 mb-1">Min Deposit</p>
                <p className="font-semibold font-mono">0.1 SOL</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 mb-1">Lock Period</p>
                <p className="font-semibold">Flexible</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 mb-1">Withdraw</p>
                <p className="font-semibold">Anytime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className={`mt-8 text-center text-gray-500 text-sm transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p>🔐 Your funds are secured by smart contracts audited by leading security firms</p>
        </div>
      </div>
    </section>
  );
}