"use client";

import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="opacity-95 bg-linear-to-b from-purple-900 to-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white">SolanaScore</h3>
          <p className="text-gray-400 text-sm">
            Your Web3 credit scoring platform. Monitor your wallet performance and make smarter DeFi decisions.
          </p>
          <p className="text-gray-400 text-sm">Trusted by thousands of DeFi users globally.</p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2">
          <h4 className="font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/dashboard" className="hover:text-purple-500 transition">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/lend" className="hover:text-purple-500 transition">
                Lend
              </Link>
            </li>
            <li>
              <Link href="/borrow" className="hover:text-purple-500 transition">
                Borrow
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-purple-500 transition">
                About Us
              </Link>
            </li>
            <li><a href="#contact" className="hover:text-purple-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Icons & Newsletter */}
        <div className="space-y-3">
          <h4 className="font-semibold text-white mb-2">Follow Us</h4>
          <div className="flex gap-4 mb-3">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition">
              <FaTwitter size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition">
              <FaLinkedin size={22} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition">
              <FaGithub size={22} />
            </a>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-1 text-sm">Subscribe</h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-3 py-1 rounded-l-md text-gray-900 text-sm"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-r-md text-sm transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} SolanaScore. All rights reserved.
      </div>
    </footer>
  );
}
