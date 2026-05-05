"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { href: "#diensten", label: "Diensten" },
  { href: "#werkwijze", label: "Werkwijze" },
  { href: "#over-ons", label: "Over ons" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-sm">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg text-[#0a0a0a]">
            Nova <span className="gradient-text">Automations</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors font-medium">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="#contact" className="hidden md:flex items-center px-5 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-400 text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm shadow-orange-100">
          Gratis gesprek
        </Link>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-500 hover:text-[#0a0a0a]">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-orange-600 py-1 font-medium">
                {link.label}
              </Link>
            ))}
            <Link href="#contact" onClick={() => setIsOpen(false)} className="mt-1 px-5 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-amber-400 text-white text-sm font-semibold text-center">
              Gratis gesprek
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
