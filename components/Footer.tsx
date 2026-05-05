"use client";

import Link from "next/link";
import { Zap, ExternalLink, Mail, Globe } from "lucide-react";

const footerLinks = {
  Diensten: [
    { label: "AI Agents",               href: "#diensten" },
    { label: "AI Chatbots",             href: "#diensten" },
    { label: "Workflow Automatisering", href: "#diensten" },
    { label: "Data & Rapportage",       href: "#diensten" },
    { label: "Maatwerk AI",             href: "#diensten" },
  ],
  Bedrijf: [
    { label: "Over ons",  href: "#over-ons" },
    { label: "Werkwijze", href: "#werkwijze" },
    { label: "Aanpak",    href: "#aanpak" },
    { label: "Contact",   href: "#contact" },
  ],
  Legal: [
    { label: "Privacybeleid",        href: "#" },
    { label: "Algemene voorwaarden", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-sm">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-[#0a0a0a]">
                Nova <span className="gradient-text">Automations</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Wij helpen Nederlandse bedrijven slimmer werken met AI-automatisering. Van chatbots tot volledige AI-transformaties.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: "#", icon: ExternalLink, label: "LinkedIn" },
                { href: "#", icon: Globe,        label: "Website" },
                { href: "mailto:info@nova-automations.nl", icon: Mail, label: "E-mail" },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} aria-label={label} className="w-9 h-9 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-orange-600 hover:border-orange-200 transition-colors shadow-sm">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[#0a0a0a] font-semibold text-sm mb-4">{category}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-orange-600 text-sm transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>© {new Date().getFullYear()} Nova Automations. Alle rechten voorbehouden.</span>
          <span>Gebouwd in Nederland 🇳🇱</span>
        </div>
      </div>
    </footer>
  );
}
