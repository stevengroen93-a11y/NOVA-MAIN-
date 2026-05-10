"use client";

import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/blocks/testimonials-columns-1";

const testimonials = [
  {
    text: "Nova Automations heeft onze offerte- en facturatieprocessen volledig geautomatiseerd. We besparen nu 15 uur per week — uren die we nu steken in nieuwe klanten.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Mark de Vries",
    role: "Directeur, De Vries Logistics",
  },
  {
    text: "De AI chatbot beantwoordt 80% van de klantvragen automatisch. De klanttevredenheid is omhooggegaan én ik hoef minder te reageren op WhatsApp.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Lisa van den Berg",
    role: "Eigenaar, Berg & Bloom Webshop",
  },
  {
    text: "In 3 weken hadden we een complete AI-workflow voor kandidaat-screening. Wat voorheen 2 uur per dag kostte, kost nu 10 minuten. Absoluut aanrader.",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    name: "Thijs Hooft",
    role: "Co-founder, Hooft Recruitment",
  },
  {
    text: "Eindelijk een AI-bureau dat begrijpt wat je echt nodig hebt. Ze denken mee, leveren snel en zijn ook na het project bereikbaar. We werken al aan ons tweede traject.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Sophie Janssen",
    role: "Marketing Manager, Janssen Media",
  },
  {
    text: "Als bouwbedrijf was ik sceptisch over AI. Maar na de intake zag ik direct de mogelijkheden. Ze hebben onze planning en communicatie volledig geautomatiseerd.",
    image: "https://randomuser.me/api/portraits/men/74.jpg",
    name: "Daan Mulder",
    role: "CEO, Mulder Bouw",
  },
  {
    text: "Nova hielp mij mijn onboarding voor nieuwe klanten volledig automatiseren. Van intake-formulier tot gepersonaliseerde welkomstmail — alles automatisch.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Emma Visser",
    role: "Oprichter, Visser Coaching",
  },
  {
    text: "Dankzij Nova draaien onze facturatie en klantopvolging nu volledig automatisch. We groeien harder dan ooit zonder extra personeel.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Rens Bakker",
    role: "Eigenaar, Bakker Techniek",
  },
  {
    text: "Het team van Nova begrijpt onze sector en dacht actief mee over de beste aanpak. De AI-oplossing werkt boven verwachting.",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    name: "Laura Smit",
    role: "Operations Lead, Smit Consultancy",
  },
  {
    text: "We hadden eerder geprobeerd zelf te automatiseren maar liepen vast. Nova had het in twee weken werkend — hadden we dit maar eerder gedaan.",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
    name: "Kevin Verhoeven",
    role: "Founder, Verhoeven Digital",
  },
];

const firstColumn  = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn  = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-300 bg-white text-orange-700 text-xs font-semibold uppercase tracking-widest mb-5">
            Wat klanten zeggen
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0a0a] mb-4">
            Klanten die{" "}
            <span className="gradient-text">het verschil merken</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Van webshops tot recruitmentbureaus — bedrijven in allerlei sectoren werken slimmer dankzij Nova Automations.
          </p>
        </motion.div>

        {/* Scrolling columns */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[720px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn}  duration={18} />
          <TestimonialsColumn testimonials={secondColumn} duration={22} className="hidden md:block" />
          <TestimonialsColumn testimonials={thirdColumn}  duration={16} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
