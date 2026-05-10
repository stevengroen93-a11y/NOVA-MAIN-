"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Zap, Bot, FileText, ChevronDown, Wrench } from "lucide-react";

const navLinks = [
  { href: "#diensten", label: "Diensten" },
  { href: "#werkwijze", label: "Werkwijze" },
  { href: "#over-ons", label: "Over ons" },
  { href: "#contact", label: "Contact" },
];

const products = [
  {
    href: "https://neutronautomations.nl",
    label: "Chatbot",
    description: "AI chatbot voor jouw website",
    icon: Bot,
  },
  {
    href: "#",
    label: "Bedrijfscontracten",
    description: "Automatisch contracten opstellen",
    icon: FileText,
  },
  {
    href: "#contact",
    label: "Maatwerk",
    description: "Een oplossing op maat voor jouw bedrijf",
    icon: Wrench,
    internal: true,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-sm">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg text-[#0a0a0a]">
            Nova <span className="gradient-text">Automations</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors font-medium">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-3">
          {/* Products dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:text-[#0a0a0a] hover:bg-gray-100 transition-colors"
            >
              Onze producten
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
            </button>

            {productsOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 rounded-xl bg-white border border-gray-100 shadow-lg overflow-hidden">
                {products.map((product) => {
                  const Icon = product.icon;
                  return (
                    <a
                      key={product.label}
                      href={product.href}
                      {...(!product.internal && { target: "_blank", rel: "noopener noreferrer" })}
                      onClick={() => setProductsOpen(false)}
                      className="flex items-start gap-3 px-4 py-3.5 hover:bg-orange-50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#0a0a0a] group-hover:text-orange-600 transition-colors">{product.label}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{product.description}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            href="#contact"
            className="flex items-center px-5 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-400 text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm shadow-orange-100"
          >
            Gratis gesprek
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-500 hover:text-[#0a0a0a]">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-orange-600 py-1 font-medium">
                {link.label}
              </Link>
            ))}

            {/* Products in mobile menu */}
            <div className="border-t border-gray-100 pt-3 mt-1">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Onze producten</p>
              {products.map((product) => {
                const Icon = product.icon;
                return (
                  <a
                    key={product.label}
                    href={product.href}
                    {...(!product.internal && { target: "_blank", rel: "noopener noreferrer" })}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 py-2.5 text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-medium text-sm">{product.label}</span>
                  </a>
                );
              })}
            </div>

            <Link href="#contact" onClick={() => setIsOpen(false)} className="mt-1 px-5 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-amber-400 text-white text-sm font-semibold text-center">
              Gratis gesprek
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
