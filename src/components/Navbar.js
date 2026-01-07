"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-red-500 transition-colors"
          >
            FAST <span className="text-red-500">LANE</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-red-500 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="#projects"
              className="text-white hover:text-red-500 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-white hover:text-red-500 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-red-500 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
