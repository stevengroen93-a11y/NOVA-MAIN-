"use client";

import { useState } from "react";
import { Bot, Workflow, BarChart3, MessageSquare, Cpu, Lightbulb, ChevronDown, Check, Circle } from "lucide-react";

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

/* ── Mini UI mockups ── */
function Visual({ type }: { type: string }) {
  const wrap = "absolute inset-0 p-3 pb-24";
  const panel = "w-full h-full rounded-xl bg-black/35 backdrop-blur-sm border border-white/10 overflow-hidden p-3 flex flex-col gap-2";
  const row = "flex items-center justify-between";
  const label = "text-[9px] text-white/50 uppercase tracking-widest font-semibold";
  const val = "text-[9px] text-white font-semibold";
  const bar = (pct: number) => (
    <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
      <div className="h-full rounded-full bg-white/50" style={{ width: `${pct}%` }} />
    </div>
  );

  if (type === "agents") return (
    <div className={wrap}>
      <div className={panel}>
        <div className={row}>
          <span className={label}>Nova AI Agents</span>
          <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-300 font-semibold">● actief</span>
        </div>
        <div className="flex gap-2 mt-1">
          {[["3","actief","green"],["7","wachtend","amber"],["24","klaar","white"]].map(([n,l,c])=>(
            <div key={l} className="flex-1 rounded-lg bg-white/5 border border-white/10 p-2 text-center">
              <div className={`text-base font-bold text-${c}-300`}>{n}</div>
              <div className="text-[8px] text-white/40">{l}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1.5 mt-1">
          {[
            ["E-mail sorteren", "running"],
            ["Offerte verwerken", "running"],
            ["CRM sync", "queued"],
            ["Klant onboarding", "done"],
          ].map(([task, status]) => (
            <div key={task} className="flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-1.5">
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${status === "done" ? "bg-green-400" : status === "running" ? "bg-orange-400 animate-pulse" : "bg-white/20"}`} />
              <span className="text-[9px] text-white/70 flex-1 truncate">{task}</span>
              <span className="text-[8px] text-white/30">{status === "done" ? "✓" : status === "running" ? "..." : "⏳"}</span>
            </div>
          ))}
        </div>
        <div className={`${row} mt-auto`}>
          <span className={label}>847 runs deze maand</span>
        </div>
      </div>
    </div>
  );

  if (type === "chatbot") return (
    <div className={wrap}>
      <div className={panel}>
        <div className={row}>
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-green-500/30 flex items-center justify-center text-[8px]">💬</div>
            <span className={label}>Nova Chatbot</span>
          </div>
          <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-300 font-semibold">● online</span>
        </div>
        <div className="flex flex-col gap-2 mt-1 flex-1">
          {/* User message */}
          <div className="flex justify-end">
            <div className="rounded-2xl rounded-tr-sm bg-white/15 px-2.5 py-1.5 max-w-[80%]">
              <p className="text-[9px] text-white/80">Hoi! Wat zijn jullie tarieven?</p>
            </div>
          </div>
          {/* Bot reply */}
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-tl-sm bg-white/5 border border-white/10 px-2.5 py-1.5 max-w-[85%]">
              <p className="text-[9px] text-white/70">Onze pakketten starten vanaf €299/mnd. Ik kan direct een offerte maken! 🎯</p>
            </div>
          </div>
          {/* User */}
          <div className="flex justify-end">
            <div className="rounded-2xl rounded-tr-sm bg-white/15 px-2.5 py-1.5 max-w-[80%]">
              <p className="text-[9px] text-white/80">Graag! Wanneer kunnen jullie beginnen?</p>
            </div>
          </div>
          {/* Bot */}
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-tl-sm bg-white/5 border border-white/10 px-2.5 py-1.5 max-w-[85%]">
              <p className="text-[9px] text-white/70">Ik plan direct een intake in voor je. ✓ <span className="text-green-300">Afspraak ingepland!</span></p>
            </div>
          </div>
        </div>
        <div className={`${row} mt-1`}>
          <span className={label}>80% vragen automatisch beantwoord</span>
        </div>
      </div>
    </div>
  );

  if (type === "workflow") return (
    <div className={wrap}>
      <div className={panel}>
        <div className={row}>
          <span className={label}>Lead Opvolging Workflow</span>
          <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-300 font-semibold">● live</span>
        </div>
        <div className="flex flex-col gap-2 mt-2 flex-1">
          {[
            ["📨", "E-mail binnenkomt", true],
            ["🤖", "AI verwerkt inhoud", true],
            ["📋", "CRM contact aangemaakt", true],
            ["✉️", "Bevestiging verstuurd", true],
            ["📅", "Follow-up ingepland", false],
          ].map(([icon, step, done], i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[9px] ${done ? "bg-green-500/20 border border-green-500/30" : "bg-white/5 border border-white/10"}`}>
                {done ? "✓" : icon}
              </div>
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-[9px] text-white/60 w-28 truncate text-right">{step as string}</span>
            </div>
          ))}
        </div>
        <div className={`${row} border-t border-white/10 pt-2`}>
          <span className={label}>3 workflows actief</span>
          <span className={val}>1.2K runs/mnd</span>
        </div>
      </div>
    </div>
  );

  if (type === "data") return (
    <div className={wrap}>
      <div className={panel}>
        <div className={row}>
          <span className={label}>Rapportage Dashboard</span>
          <span className="text-[8px] text-white/30">auto-update ✓</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5 mt-1">
          {[["€24.8K","Omzet","↑12%"],["48","Nieuwe leads","↑8%"],["34%","Conversie","↑3%"],["2.1u","Bespaard/dag","↑"]].map(([v,l,ch])=>(
            <div key={l} className="rounded-lg bg-white/5 border border-white/10 p-2">
              <div className="text-sm font-bold text-white">{v}</div>
              <div className="text-[8px] text-white/40">{l}</div>
              <div className="text-[8px] text-green-300 mt-0.5">{ch}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1.5 mt-1">
          {[["Omzet",78],["Leads",52],["Conversie",68]].map(([l,p])=>(
            <div key={l} className="flex items-center gap-2">
              <span className="text-[9px] text-white/50 w-12">{l}</span>
              {bar(p as number)}
              <span className="text-[9px] text-white/50 w-6 text-right">{p}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (type === "custom") return (
    <div className={wrap}>
      <div className={panel}>
        <div className={row}>
          <span className={label}>Document AI Analyse</span>
          <span className="text-[8px] text-green-300">✓ klaar</span>
        </div>
        <div className="rounded-lg bg-white/5 border border-white/10 p-2.5 mt-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm">📄</span>
            <span className="text-[9px] text-white/70 font-semibold">Contract_2024-047.pdf</span>
          </div>
          {[
            ["Datum", "15 jan 2024", true],
            ["Partijen", "2 gevonden", true],
            ["Bedrag", "€ 4.200", true],
            ["Risico", "Laag", true],
            ["Samenvatting", "Gegenereerd", true],
          ].map(([k,v,ok])=>(
            <div key={k as string} className="flex items-center gap-2 py-0.5">
              <span className="text-[8px] text-white/30 w-16">{k}</span>
              <span className="text-[9px] text-white/70 flex-1">{v}</span>
              <span className="text-[8px] text-green-300">✓</span>
            </div>
          ))}
        </div>
        <div className={`${row} mt-auto`}>
          <span className={label}>Gemiddeld 40 doc/dag</span>
        </div>
      </div>
    </div>
  );

  if (type === "strategy") return (
    <div className={wrap}>
      <div className={panel}>
        <div className={row}>
          <span className={label}>AI Roadmap 2024</span>
        </div>
        <div className="flex flex-col gap-2 mt-1 flex-1">
          {[
            ["Fase 1", "Analyse & Scan", 100, true],
            ["Fase 2", "Pilot Workflow", 75, false],
            ["Fase 3", "Implementatie", 0, false],
            ["Fase 4", "Optimalisatie", 0, false],
          ].map(([fase, title, pct, done])=>(
            <div key={fase as string} className="flex flex-col gap-1">
              <div className={row}>
                <div className="flex items-center gap-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${done ? "bg-green-400" : pct as number > 0 ? "bg-orange-400 animate-pulse" : "bg-white/20"}`} />
                  <span className="text-[9px] text-white/40 font-semibold">{fase as string}</span>
                  <span className="text-[9px] text-white/60">{title as string}</span>
                </div>
                <span className="text-[9px] text-white/40">{pct as number > 0 ? `${pct}%` : "Gepland"}</span>
              </div>
              <div className="h-1 rounded-full bg-white/10 overflow-hidden ml-3">
                <div className={`h-full rounded-full ${done ? "bg-green-400" : "bg-orange-400"}`} style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-white/10 border border-white/10 p-2 mt-1">
          <span className="text-[9px] text-white/70">📅 Volgende stap: <span className="text-orange-200 font-semibold">Intake plannen →</span></span>
        </div>
      </div>
    </div>
  );

  return null;
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
                {/* Mini UI visual */}
                <Visual type={service.visual} />

                {/* Dark overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  {/* Icon */}
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white" />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-white font-bold leading-tight whitespace-nowrap overflow-hidden text-ellipsis"
                    style={{
                      fontSize: isActive ? "1.05rem" : "0.8rem",
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
                    <p className="text-white/80 text-xs leading-relaxed mt-2 mb-3">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/20 text-white border border-white/20">
                          {tag}
                        </span>
                      ))}
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
