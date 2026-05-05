"use client";

import { MessageCircle, FileSearch, Wrench, TrendingUp } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: MessageCircle,
    title: "Vrijblijvend gesprek",
    description: "We beginnen altijd met een gratis kennismaking. Geen verplichtingen — alleen een eerlijk gesprek over jouw situatie en waar de kansen liggen.",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    icon: FileSearch,
    title: "Analyse op maat",
    description: "We brengen jouw processen in kaart en bepalen samen welke automatiseringen de meeste waarde opleveren. Transparant en concreet.",
    gradient: "from-amber-500 to-orange-400",
  },
  {
    icon: Wrench,
    title: "Bouwen & implementeren",
    description: "Ons team werkt snel en doelgericht. De investering is altijd afhankelijk van de scope — van een eenvoudige workflow tot een volledige AI-implementatie.",
    gradient: "from-orange-600 to-amber-500",
  },
  {
    icon: TrendingUp,
    title: "Doorlopende optimalisatie",
    description: "Na de lancering blijven we betrokken. We monitoren, optimaliseren en schalen waar nodig — jij groeit, wij groeien mee.",
    gradient: "from-amber-400 to-orange-500",
  },
];

export default function Pricing() {
  return (
    <section id="aanpak" className="py-24 bg-orange-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-600 text-sm font-semibold uppercase tracking-widest mb-3">Onze aanpak</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0a0a] mb-4">
            Geen vaste prijslijst,{" "}
            <span className="gradient-text">wel eerlijke kosten</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Elke bedrijfssituatie is anders. Daarom werken wij altijd met een offerte op maat — geen verborgen kosten, geen verrassingen.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14">
          {/* Left: timeline steps */}
          <div className="relative flex flex-col gap-0">
            {/* Vertical line */}
            <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-orange-300 via-amber-300 to-orange-200" />

            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === steps.length - 1;
              return (
                <div key={step.title} className={`relative flex gap-6 ${isLast ? "" : "pb-10"}`}>
                  {/* Circle on the line */}
                  <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-md shadow-orange-100`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  {/* Content */}
                  <div className="pt-1.5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Stap {i + 1}</span>
                    </div>
                    <h3 className="text-[#0a0a0a] font-bold text-lg mb-1.5">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: cost info card */}
          <div className="rounded-2xl p-8 bg-white border border-orange-100 shadow-sm flex flex-col gap-5 lg:sticky lg:top-24">
            <div>
              <h3 className="text-xl font-extrabold text-[#0a0a0a] mb-2">
                Wat kost het <span className="gradient-text">voor jouw bedrijf?</span>
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Plan een gratis intake en je krijgt binnen 48 uur een heldere, vrijblijvende offerte. We leggen precies uit wat we doen, hoe lang het duurt en wat het kost.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { label: "Gratis intake gesprek",  sub: "Altijd vrijblijvend, binnen 48u ingepland" },
                { label: "Offerte binnen 48 uur",  sub: "Transparant, helder en zonder verborgen kosten" },
                { label: "Vaste projectprijs",      sub: "Je weet vooraf precies wat je betaalt" },
                { label: "Resultaatgarantie",       sub: "Wij leveren wat we beloven, of we lossen het op" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 p-3.5 rounded-xl bg-orange-50/60 border border-orange-100">
                  <div className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0 mt-1.5" />
                  <div>
                    <div className="text-[#0a0a0a] font-semibold text-sm">{item.label}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-orange-100 mt-1"
            >
              Vraag gratis offerte aan →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
