"use client";

import React from "react";

import WalletConnectButton from "./WalletConnectButton";

const Navbar = () => {
  return (
    <nav className="fixed flex px-3 items-center top-0 left-0 right-0 h-20 z-50 bg-linear-to-b to-purple-950 from-gray-900 opacity-95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-linear-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            S
          </div>
          <span className="text-xl font-bold bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            SolanaScore
          </span>
        </div>

        {/* Links + Wallet */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden md:flex items-center gap-4 md:gap-6 font-medium text-lg">
            <a href="#dashboard" className="text-white hover:text-purple-600 transition">
              Dashboard
            </a>
            <a href="#lend" className="text-white hover:text-purple-600 transition">
              Lend
            </a>
            <a href="#borrow" className="text-white hover:text-purple-600 transition">
              Borrow
            </a>
            <a href="#about" className="text-white hover:text-purple-600 transition">
              About Us
            </a>
          </div>

          {/* Connect Wallet Button */}
          <WalletConnectButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
