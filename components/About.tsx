"use client";

import { CheckCircle2 } from "lucide-react";

const values = [
  "Altijd resultaatgericht",
  "Transparant over AI",
  "Snelle oplevering",
  "Langdurige samenwerking",
];

export default function About() {
  return (
    <section id="over-ons" className="py-24 bg-orange-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-orange-600 text-sm font-semibold uppercase tracking-widest mb-3">Over ons</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0a0a] mb-4">
            Wat wij doen en{" "}
            <span className="gradient-text">waarom het werkt</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Wij helpen Nederlandse mkb-bedrijven terugkerende processen automatiseren met AI — van klantcommunicatie
            en offerteverwerking tot data-analyse en workflows. Praktisch, hands-on en altijd gericht op meetbaar resultaat.
          </p>
        </div>

        {/* Horizontal value pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {values.map((value) => (
            <div key={value} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-orange-100 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-700">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
