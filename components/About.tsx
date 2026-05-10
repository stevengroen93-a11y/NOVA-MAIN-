"use client";

import { CheckCircle2, Zap, Users, TrendingUp } from "lucide-react";

const values = [
  "Altijd resultaatgericht — geen vage beloftes",
  "Transparant over wat AI wel en niet kan",
  "Snelle oplevering, slimme oplossingen",
  "Langdurige samenwerking, niet eenmalige projecten",
];

const highlights = [
  {
    icon: Zap,
    title: "AI-first aanpak",
    description: "We bouwen met de nieuwste AI-technologie — van grote taalmodellen tot slimme automatiseringsplatformen.",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    icon: Users,
    title: "Persoonlijk & betrokken",
    description: "Geen groot anoniem bureau. Wij zijn direct betrokken bij elk project en denken actief mee over de beste aanpak.",
    gradient: "from-amber-500 to-orange-400",
  },
  {
    icon: TrendingUp,
    title: "Meetbare resultaten",
    description: "Tijdsbesparing, kostenreductie, meer conversies. Wij leveren oplossingen waarvan je het effect direct ziet.",
    gradient: "from-orange-600 to-amber-500",
  },
];

export default function About() {
  return (
    <section id="over-ons" className="py-24 bg-orange-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-orange-600 text-sm font-semibold uppercase tracking-widest mb-3">Over ons</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0a0a] mb-4">
            Twee oprichters, <span className="gradient-text">één missie</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Nova Automations is een Nederlands AI-bureau opgericht door twee ondernemers met een gedeelde overtuiging:
            kunstmatige intelligentie moet toegankelijk zijn voor elk bedrijf — niet alleen voor grote corporates.
          </p>
        </div>

        {/* Company story */}
        <div className="rounded-2xl p-8 md:p-12 bg-white border border-orange-100 shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0a0a0a] mb-4">
                Wat wij doen en <span className="gradient-text">waarom het werkt</span>
              </h3>
              <div className="flex flex-col gap-4 text-gray-500 text-sm leading-relaxed">
                <p>
                  Wij helpen Nederlandse mkb-bedrijven hun terugkerende processen automatiseren met AI — van klantcommunicatie
                  en offerteverwerking tot data-analyse en interne workflows.
                </p>
                <p>
                  Onze aanpak is altijd praktisch en hands-on. We beginnen klein, laten snel resultaten zien en schalen op
                  waar het zinvol is. Geen eindeloze trajecten, geen vaag advies — gewoon concrete oplossingen die werken.
                </p>
                <p>
                  Naast maatwerk-projecten bouwen we ook eigen AI-producten, zoals een slimme chatbotoplossing en een
                  platform voor geautomatiseerde bedrijfscontracten. Zo combineren we diepgaande kennis met bewezen technologie.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3.5">
              {values.map((value) => (
                <div key={value} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl p-6 bg-white border border-gray-100 shadow-sm">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-sm`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[#0a0a0a] font-bold text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
