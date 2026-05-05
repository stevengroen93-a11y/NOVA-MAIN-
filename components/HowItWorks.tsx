"use client";

import { Search, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: Search, number: "01", title: "Gratis intake & analyse",    description: "We plannen een vrijblijvend gesprek in om jouw bedrijfsprocessen te begrijpen. We brengen in kaart waar de grootste tijdwinst te behalen valt.", gradient: "from-orange-500 to-amber-400" },
  { icon: Code2,  number: "02", title: "Bouwen & integreren",        description: "Ons team bouwt de oplossing op maat en integreert deze naadloos in jouw bestaande systemen — van CRM en e-mail tot je eigen software.",          gradient: "from-amber-500 to-orange-400" },
  { icon: Rocket, number: "03", title: "Live & verder optimaliseren", description: "We lanceren de oplossing, trainen je team indien nodig, en blijven beschikbaar voor optimalisaties. Jij ziet de resultaten.",                        gradient: "from-orange-600 to-amber-500" },
];

export default function HowItWorks() {
  return (
    <section id="werkwijze" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-orange-600 text-sm font-semibold uppercase tracking-widest mb-3">Onze werkwijze</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0a0a] mb-4">
            Van idee naar{" "}
            <span className="gradient-text">resultaat in 3 stappen</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Geen complexe trajecten, geen eindeloze meetings. Wij gaan snel te werk en leveren meetbare resultaten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="rounded-2xl p-7 text-center bg-orange-50/50 border border-orange-100">
                <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-orange-100 text-orange-700 text-xs font-bold mb-4">{i + 1}</div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto mb-4 shadow-md shadow-orange-100`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[#0a0a0a] font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center text-center gap-5 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-300 bg-white text-orange-700 text-xs font-semibold uppercase tracking-widest">
            Klinkt goed?
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#0a0a0a]">
            Plan vandaag nog je <span className="gradient-text">gratis intake</span>
          </h3>
          <p className="text-gray-500 text-sm max-w-md">
            In 30 minuten weet je precies welke AI-kansen er liggen voor jouw bedrijf — geheel vrijblijvend.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-orange-100">
            Plan gratis intake →
          </a>
        </div>
      </div>
    </section>
  );
}
