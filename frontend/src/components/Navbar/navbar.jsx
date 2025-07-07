"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-950 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          FinGuard
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div
          className={`flex flex-col md:flex-row md:items-center md:space-x-4 ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <Link href="/" className="block py-2 md:py-0 hover:text-blue-300">
            Dashboard
          </Link>
          <Link href="/budget" className="block py-2 md:py-0 hover:text-blue-300">
            Budget
          </Link>
          <Link href="/expenses" className="block py-2 md:py-0 hover:text-blue-300">
            Transactions
          </Link>
          <Link href="/about-us" className="block py-2 md:py-0 hover:text-blue-300">
            About Us
          </Link>

          {/* 🔐 Login Button */}
          <Link
            href="/account/login"
            className="mt-2 md:mt-0 bg-blue-900 hover:bg-blue-500 text-white px-4 py-2 rounded transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
