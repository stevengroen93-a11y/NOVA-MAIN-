"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Mark de Vries",  role: "Directeur, De Vries Logistics",    quote: "Nova Automations heeft onze offerte- en facturatieprocessen volledig geautomatiseerd. We besparen nu 15 uur per week — uren die we nu steken in het binnenhalen van nieuwe klanten.", initials: "MV", gradient: "from-orange-500 to-amber-400" },
  { name: "Lisa van den Berg", role: "Eigenaar, Berg & Bloom Webshop",quote: "De AI chatbot beantwoordt 80% van de klantvragen automatisch. De klanttevredenheid is omhooggegaan én ik hoef minder te reageren op WhatsApp.",                                  initials: "LB", gradient: "from-amber-500 to-orange-400" },
  { name: "Thijs Hooft",    role: "Co-founder, Hooft Recruitment",    quote: "In 3 weken hadden we een complete AI-workflow voor kandidaat-screening. Wat voorheen 2 uur per dag kostte, kost nu 10 minuten. Absoluut aanrader.",                                        initials: "TH", gradient: "from-orange-600 to-red-400" },
  { name: "Sophie Janssen", role: "Marketing Manager, Janssen Media", quote: "Eindelijk een AI-bureau dat begrijpt wat je echt nodig hebt. Ze denken mee, leveren snel en zijn ook na het project bereikbaar.",                                                          initials: "SJ", gradient: "from-amber-400 to-orange-500" },
  { name: "Daan Mulder",    role: "CEO, Mulder Bouw",                 quote: "Als bouwbedrijf was ik sceptisch over AI. Maar na een intake bij Nova zag ik direct de mogelijkheden. Ze hebben onze planning volledig geautomatiseerd.",                                     initials: "DM", gradient: "from-orange-500 to-amber-500" },
  { name: "Emma Visser",    role: "Oprichter, Visser Coaching",       quote: "Nova hielp mij mijn onboarding voor nieuwe klanten volledig automatiseren. Van intake-formulier tot gepersonaliseerde welkomstmail — alles automatisch.",                                     initials: "EV", gradient: "from-red-400 to-orange-500" },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-orange-600 text-sm font-semibold uppercase tracking-widest mb-3">Wat klanten zeggen</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0a0a] mb-4">
            Klanten die <span className="gradient-text">het verschil merken</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Van webshops tot recruitmentbureaus — bedrijven in allerlei sectoren werken slimmer dankzij Nova Automations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl p-6 bg-white border border-gray-100 shadow-sm flex flex-col">
              <Quote className="w-6 h-6 text-orange-200 mb-3" />
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-[#0a0a0a] font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
