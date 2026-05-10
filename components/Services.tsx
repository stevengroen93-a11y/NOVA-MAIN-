"use client";

import { useState } from "react";
import { Bot, Workflow, BarChart3, MessageSquare, Cpu, Lightbulb, ChevronDown } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    description: "Slimme AI-agents die zelfstandig taken uitvoeren — van data verwerking tot klantcommunicatie — zonder menselijke tussenkomst.",
    tags: ["Autonome taken", "24/7 actief", "Schaalbaar"],
    from: "#f97316", to: "#fbbf24",
    visual: "agents",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "Geavanceerde chatbots op je website of WhatsApp die klanten helpen, leads kwalificeren en bestellingen verwerken.",
    tags: ["WhatsApp", "Website", "CRM-integratie"],
    from: "#fb923c", to: "#f97316",
    visual: "chatbot",
  },
  {
    icon: Workflow,
    title: "Workflow Automatisering",
    description: "Verbind al je tools en applicaties met slimme workflows. Van e-mail tot CRM, alles loopt automatisch.",
    tags: ["Make.com", "Zapier", "n8n"],
    from: "#ea580c", to: "#fb923c",
    visual: "workflow",
  },
  {
    icon: BarChart3,
    title: "Data & Rapportage",
    description: "Automatische dashboards en rapporten die jij en je team real-time inzicht geven — zonder handmatig werk.",
    tags: ["Dashboards", "KPI tracking", "Alerts"],
    from: "#f59e0b", to: "#fbbf24",
    visual: "data",
  },
  {
    icon: Cpu,
    title: "Maatwerk AI",
    description: "Unieke AI-systemen gebouwd op jouw bedrijfsbehoeften. Van document-analyse tot voorspelmodellen.",
    tags: ["LLMs", "Computer Vision", "Analyse"],
    from: "#f97316", to: "#f59e0b",
    visual: "custom",
  },
  {
    icon: Lightbulb,
    title: "AI Strategie",
    description: "Weet je niet waar je moet beginnen? Wij analyseren je processen en stellen een concrete AI-roadmap op.",
    tags: ["Scan", "Roadmap", "Implementatie"],
    from: "#ef4444", to: "#f97316",
    visual: "strategy",
  },
];

/* ── SVG decorative visuals per service ── */
function Visual({ type }: { type: string }) {
  switch (type) {
    case "agents":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="30" stroke="white" strokeWidth="2" />
          <circle cx="40"  cy="60"  r="14" stroke="white" strokeWidth="1.5" />
          <circle cx="160" cy="60"  r="14" stroke="white" strokeWidth="1.5" />
          <circle cx="40"  cy="140" r="14" stroke="white" strokeWidth="1.5" />
          <circle cx="160" cy="140" r="14" stroke="white" strokeWidth="1.5" />
          <circle cx="100" cy="20"  r="10" stroke="white" strokeWidth="1.5" />
          <line x1="100" y1="70"  x2="100" y2="30"  stroke="white" strokeWidth="1" />
          <line x1="72"  y1="84"  x2="52"  y2="70"  stroke="white" strokeWidth="1" />
          <line x1="128" y1="84"  x2="148" y2="70"  stroke="white" strokeWidth="1" />
          <line x1="72"  y1="116" x2="52"  y2="130" stroke="white" strokeWidth="1" />
          <line x1="128" y1="116" x2="148" y2="130" stroke="white" strokeWidth="1" />
          <circle cx="100" cy="100" r="6" fill="white" opacity="0.6" />
          <circle cx="40"  cy="60"  r="4" fill="white" opacity="0.4" />
          <circle cx="160" cy="60"  r="4" fill="white" opacity="0.4" />
          <circle cx="40"  cy="140" r="4" fill="white" opacity="0.4" />
          <circle cx="160" cy="140" r="4" fill="white" opacity="0.4" />
        </svg>
      );
    case "chatbot":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200" fill="none">
          <rect x="20" y="30" width="120" height="70" rx="14" stroke="white" strokeWidth="2" />
          <polygon points="40,100 60,100 40,120" fill="white" opacity="0.6" />
          <circle cx="55"  cy="65" r="7" fill="white" opacity="0.5" />
          <circle cx="80"  cy="65" r="7" fill="white" opacity="0.5" />
          <circle cx="105" cy="65" r="7" fill="white" opacity="0.5" />
          <rect x="60" y="110" width="120" height="60" rx="14" stroke="white" strokeWidth="2" />
          <polygon points="160,170 140,170 160,190" fill="white" opacity="0.6" />
          <rect x="75"  cy="135" x1="75" y1="135" width="50" height="6" rx="3" fill="white" opacity="0.4" />
          <line x1="75" y1="135" x2="155" y2="135" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.4" />
          <line x1="75" y1="148" x2="135" y2="148" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.3" />
        </svg>
      );
    case "workflow":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200" fill="none">
          <rect x="10"  y="85" width="45" height="30" rx="6" stroke="white" strokeWidth="2" />
          <rect x="78"  y="40" width="45" height="30" rx="6" stroke="white" strokeWidth="2" />
          <rect x="78"  y="130" width="45" height="30" rx="6" stroke="white" strokeWidth="2" />
          <rect x="148" y="85" width="45" height="30" rx="6" stroke="white" strokeWidth="2" />
          <line x1="55"  y1="100" x2="78"  y2="60"  stroke="white" strokeWidth="1.5" />
          <line x1="55"  y1="100" x2="78"  y2="145" stroke="white" strokeWidth="1.5" />
          <line x1="123" y1="60"  x2="148" y2="100" stroke="white" strokeWidth="1.5" />
          <line x1="123" y1="145" x2="148" y2="100" stroke="white" strokeWidth="1.5" />
          <circle cx="32"  cy="100" r="4" fill="white" opacity="0.6" />
          <circle cx="100" cy="55"  r="4" fill="white" opacity="0.6" />
          <circle cx="100" cy="145" r="4" fill="white" opacity="0.6" />
          <circle cx="170" cy="100" r="4" fill="white" opacity="0.6" />
        </svg>
      );
    case "data":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200" fill="none">
          <line x1="20" y1="170" x2="180" y2="170" stroke="white" strokeWidth="2" />
          <line x1="20" y1="170" x2="20"  y2="20"  stroke="white" strokeWidth="2" />
          <rect x="35"  y="100" width="25" height="70" rx="3" fill="white" opacity="0.5" />
          <rect x="75"  y="60"  width="25" height="110" rx="3" fill="white" opacity="0.6" />
          <rect x="115" y="80"  width="25" height="90" rx="3" fill="white" opacity="0.5" />
          <rect x="155" y="40"  width="25" height="130" rx="3" fill="white" opacity="0.7" />
          <polyline points="47,98 87,58 127,78 167,38" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="47"  cy="98" r="4" fill="white" />
          <circle cx="87"  cy="58" r="4" fill="white" />
          <circle cx="127" cy="78" r="4" fill="white" />
          <circle cx="167" cy="38" r="4" fill="white" />
        </svg>
      );
    case "custom":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200" fill="none">
          <rect x="30" y="30" width="140" height="140" rx="16" stroke="white" strokeWidth="2" />
          <rect x="50" y="50" width="100" height="100" rx="10" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" />
          <line x1="70"  y1="80"  x2="130" y2="80"  stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
          <line x1="70"  y1="100" x2="110" y2="100" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
          <line x1="70"  y1="120" x2="120" y2="120" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.4" />
          <circle cx="155" cy="155" r="20" stroke="white" strokeWidth="2" />
          <line x1="148" y1="155" x2="162" y2="155" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="155" y1="148" x2="155" y2="162" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "strategy":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="70" stroke="white" strokeWidth="2" />
          <circle cx="100" cy="100" r="45" stroke="white" strokeWidth="1.5" strokeDasharray="5 4" />
          <circle cx="100" cy="100" r="20" stroke="white" strokeWidth="1.5" />
          <line x1="100" y1="30"  x2="100" y2="10"  stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="100" y1="170" x2="100" y2="190" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="30"  y1="100" x2="10"  y2="100" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="170" y1="100" x2="190" y2="100" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <circle cx="100" cy="100" r="6" fill="white" opacity="0.8" />
          <line x1="100" y1="94" x2="100" y2="65" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="100" y1="100" x2="120" y2="100" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        </svg>
      );
    default:
      return null;
  }
}

/* ── Mobile accordion item ── */
function AccordionItem({ service, isOpen, onToggle }: {
  service: typeof services[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = service.icon;
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">
      <button onClick={onToggle} className="w-full flex items-center gap-4 px-5 py-4 text-left">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
          style={{ background: `linear-gradient(135deg, ${service.from}, ${service.to})` }}>
          <Icon className="w-4 h-4 text-white" />
        </div>
        <span className="flex-1 font-bold text-[#0a0a0a] text-base">{service.title}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-64" : "max-h-0"}`}>
        <div className="px-5 pb-5">
          <p className="text-gray-500 text-sm leading-relaxed mb-3">{service.description}</p>
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main component ── */
export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="diensten" className="py-24 bg-orange-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-orange-600 text-sm font-semibold uppercase tracking-widest mb-3">Onze diensten</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0a0a] mb-4">
            Alles wat je nodig hebt om{" "}
            <span className="gradient-text">slimmer te werken</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Van eenvoudige automatiseringen tot volledige AI-transformaties — wij leveren resultaten die meetbaar zijn.
          </p>
        </div>

        {/* Mobile: accordion */}
        <div className="flex flex-col gap-3 md:hidden">
          {services.map((service, i) => (
            <AccordionItem
              key={service.title}
              service={service}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Desktop: expanding cards */}
        <div
          className="hidden md:flex items-stretch gap-3 h-[460px]"
          onMouseLeave={() => setHovered(null)}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            const isActive = hovered === null ? i === 0 : hovered === i;
            const width = isActive ? "38%" : "12.4%";

            return (
              <div
                key={service.title}
                onMouseEnter={() => setHovered(i)}
                className="relative rounded-2xl overflow-hidden cursor-pointer flex-shrink-0"
                style={{
                  width,
                  transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)",
                  background: `linear-gradient(145deg, ${service.from}, ${service.to})`,
                }}
              >
                {/* Decorative SVG visual */}
                <Visual type={service.visual} />

                {/* Dark overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 self-start">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Bottom content */}
                  <div className="overflow-hidden">
                    {/* Title — always visible */}
                    <h3
                      className="text-white font-bold leading-tight mb-0 whitespace-nowrap overflow-hidden text-ellipsis"
                      style={{
                        fontSize: isActive ? "1.1rem" : "0.85rem",
                        transition: "font-size 0.3s ease",
                        writingMode: isActive ? "horizontal-tb" : "vertical-rl",
                        transform: isActive ? "none" : "rotate(180deg)",
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Description + tags — only when active */}
                    <div
                      style={{
                        maxHeight: isActive ? "200px" : "0px",
                        opacity: isActive ? 1 : 0,
                        transition: "max-height 0.4s ease, opacity 0.3s ease",
                        overflow: "hidden",
                      }}
                    >
                      <p className="text-white/85 text-xs leading-relaxed mt-2 mb-3">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm border border-white/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
