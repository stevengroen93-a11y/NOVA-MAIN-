"use client";

import { useState } from "react";
import { Bot, Workflow, BarChart3, MessageSquare, Cpu, Lightbulb, ChevronDown } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    description: "Slimme AI-agents die zelfstandig taken uitvoeren — van data verwerking tot klantcommunicatie — zonder menselijke tussenkomst.",
    tags: ["Autonome taken", "24/7 actief", "Schaalbaar"],
    gradient: "from-orange-500 to-amber-400",
    visual: "agents",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "Geavanceerde chatbots op je website of WhatsApp die klanten helpen, leads kwalificeren en bestellingen verwerken.",
    tags: ["WhatsApp", "Website", "CRM-integratie"],
    gradient: "from-amber-500 to-orange-400",
    visual: "chatbot",
  },
  {
    icon: Workflow,
    title: "Workflow Automatisering",
    description: "Verbind al je tools en applicaties met slimme workflows. Van e-mail tot CRM, alles loopt automatisch.",
    tags: ["Make.com", "Zapier", "n8n"],
    gradient: "from-orange-600 to-red-400",
    visual: "workflow",
  },
  {
    icon: BarChart3,
    title: "Data & Rapportage",
    description: "Automatische dashboards en rapporten die jij en je team real-time inzicht geven — zonder handmatig werk.",
    tags: ["Dashboards", "KPI tracking", "Alerts"],
    gradient: "from-amber-500 to-yellow-400",
    visual: "data",
  },
  {
    icon: Cpu,
    title: "Maatwerk AI-oplossingen",
    description: "Unieke AI-systemen gebouwd op jouw bedrijfsbehoeften. Van document-analyse tot voorspelmodellen.",
    tags: ["LLMs", "Computer Vision", "Analyse"],
    gradient: "from-orange-500 to-amber-500",
    visual: "custom",
  },
  {
    icon: Lightbulb,
    title: "AI Strategie & Advies",
    description: "Weet je niet waar je moet beginnen? Wij analyseren je processen en stellen een concrete AI-roadmap op.",
    tags: ["Scan", "Roadmap", "Implementatie"],
    gradient: "from-red-400 to-orange-500",
    visual: "strategy",
  },
];

/* ── Mini UI panels ── */
function Visual({ type, gradient }: { type: string; gradient: string }) {
  const base = `w-full rounded-xl bg-gradient-to-br ${gradient} p-3 flex flex-col gap-2 overflow-hidden`;
  const row = "flex items-center justify-between";
  const lbl = "text-[9px] text-white/50 uppercase tracking-widest font-semibold";
  const val = "text-[9px] text-white font-semibold";
  const bar = (pct: number) => (
    <div className="flex-1 h-1.5 rounded-full bg-black/20 overflow-hidden">
      <div className="h-full rounded-full bg-white/60" style={{ width: `${pct}%` }} />
    </div>
  );
  const pill = (text: string, color = "bg-white/15") =>
    <span className={`${color} text-white text-[8px] font-semibold px-2 py-0.5 rounded-full`}>{text}</span>;

  if (type === "agents") return (
    <div className={base}>
      <div className={row}>
        <span className={lbl}>Nova AI Agents</span>
        {pill("● actief", "bg-green-500/30")}
      </div>
      <div className="flex gap-1.5">
        {[["3","Actief","bg-white/20"],["7","Wachtend","bg-black/20"],["24","Klaar","bg-green-500/20"]].map(([n,l,bg])=>(
          <div key={l} className={`flex-1 ${bg} rounded-lg p-2 text-center`}>
            <div className="text-lg font-bold text-white leading-none">{n}</div>
            <div className="text-[8px] text-white/60 mt-0.5">{l}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        {[["E-mail sorteren","running"],["Offerte verwerken","running"],["CRM sync","queued"],["Klant onboarding","done"]].map(([task,status])=>(
          <div key={task} className="flex items-center gap-2 bg-black/15 rounded-lg px-2.5 py-1.5">
            <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${status==="done"?"bg-green-400":status==="running"?"bg-white animate-pulse":"bg-white/30"}`} />
            <span className="text-[9px] text-white/80 flex-1 truncate">{task}</span>
            <span className="text-[8px] text-white/40">{status==="done"?"✓":status==="running"?"...":"⏳"}</span>
          </div>
        ))}
      </div>
    </div>
  );

  if (type === "chatbot") return (
    <div className={base}>
      <div className={row}>
        <div className="flex items-center gap-1.5">
          <span className="text-sm">💬</span>
          <span className={lbl}>Nova Chatbot</span>
        </div>
        {pill("● online", "bg-green-500/30")}
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-end">
          <div className="bg-black/20 rounded-2xl rounded-tr-sm px-2.5 py-1.5 max-w-[80%]">
            <p className="text-[9px] text-white/80">Hoi! Wat zijn jullie tarieven?</p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white/15 rounded-2xl rounded-tl-sm px-2.5 py-1.5 max-w-[85%]">
            <p className="text-[9px] text-white/90">Onze pakketten starten vanaf €299/mnd. Ik maak direct een offerte! 🎯</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-black/20 rounded-2xl rounded-tr-sm px-2.5 py-1.5 max-w-[80%]">
            <p className="text-[9px] text-white/80">Wanneer kunnen jullie beginnen?</p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white/15 rounded-2xl rounded-tl-sm px-2.5 py-1.5 max-w-[85%]">
            <p className="text-[9px] text-white/90">Ik plan direct een intake in. <span className="text-green-200 font-semibold">✓ Ingepland!</span></p>
          </div>
        </div>
      </div>
    </div>
  );

  if (type === "workflow") return (
    <div className={base}>
      <div className={row}>
        <span className={lbl}>Lead Opvolging</span>
        {pill("● live", "bg-green-500/30")}
      </div>
      <div className="flex flex-col gap-1.5">
        {[["📨","E-mail binnenkomt",true],["🤖","AI verwerkt inhoud",true],["📋","CRM aangemaakt",true],["✉️","Bevestiging verstuurd",true],["📅","Follow-up ingepland",false]].map(([icon,step,done],i)=>(
          <div key={i} className="flex items-center gap-2">
            <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[9px] font-bold ${done?"bg-white/25 text-white":"bg-black/20 text-white/50"}`}>
              {done ? "✓" : icon}
            </div>
            <span className={`text-[9px] flex-1 truncate ${done?"text-white/80":"text-white/40"}`}>{step as string}</span>
          </div>
        ))}
      </div>
      <div className={`${row} border-t border-white/10 pt-1`}>
        <span className={lbl}>1.2K runs/mnd</span>
        <span className={val}>3 actief</span>
      </div>
    </div>
  );

  if (type === "data") return (
    <div className={base}>
      <div className={row}>
        <span className={lbl}>Dashboard</span>
        <span className="text-[8px] text-white/40">auto-update ✓</span>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {[["€24.8K","Omzet","↑12%"],["48","Nieuwe leads","↑8%"],["34%","Conversie","↑3%"],["2.1u","Bespaard/dag","↑"]].map(([v,l,ch])=>(
          <div key={l} className="bg-black/15 rounded-lg p-2">
            <div className="text-base font-bold text-white leading-none">{v}</div>
            <div className="text-[8px] text-white/50 mt-0.5">{l}</div>
            <div className="text-[8px] text-green-200 mt-0.5">{ch}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        {[["Omzet",78],["Leads",52],["Conversie",68]].map(([l,p])=>(
          <div key={l} className="flex items-center gap-2">
            <span className="text-[9px] text-white/50 w-12">{l}</span>
            {bar(p as number)}
            <span className="text-[9px] text-white/50 w-5 text-right">{p}%</span>
          </div>
        ))}
      </div>
    </div>
  );

  if (type === "custom") return (
    <div className={base}>
      <div className={row}>
        <span className={lbl}>Document AI Analyse</span>
        <span className="text-[8px] text-green-200">✓ klaar</span>
      </div>
      <div className="bg-black/15 rounded-xl p-2.5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-base">📄</span>
          <span className="text-[9px] text-white/80 font-semibold truncate">Contract_2024-047.pdf</span>
        </div>
        {[["Datum","15 jan 2024"],["Partijen","2 gevonden"],["Bedrag","€ 4.200"],["Risico","Laag"],["Samenvatting","Gegenereerd"]].map(([k,v])=>(
          <div key={k} className="flex items-center gap-2 py-0.5 border-b border-white/5 last:border-0">
            <span className="text-[8px] text-white/40 w-16 flex-shrink-0">{k}</span>
            <span className="text-[9px] text-white/75 flex-1">{v}</span>
            <span className="text-[8px] text-green-200">✓</span>
          </div>
        ))}
      </div>
    </div>
  );

  if (type === "strategy") return (
    <div className={base}>
      <div className={row}>
        <span className={lbl}>AI Roadmap 2024</span>
      </div>
      <div className="flex flex-col gap-2">
        {[["Fase 1","Analyse & Scan",100],["Fase 2","Pilot Workflow",75],["Fase 3","Implementatie",0],["Fase 4","Optimalisatie",0]].map(([fase,title,pct])=>(
          <div key={fase as string} className="flex flex-col gap-1">
            <div className={row}>
              <div className="flex items-center gap-1.5">
                <div className={`w-1.5 h-1.5 rounded-full ${(pct as number)===100?"bg-green-400":(pct as number)>0?"bg-white animate-pulse":"bg-white/20"}`} />
                <span className="text-[9px] text-white/50 font-semibold">{fase as string}</span>
                <span className="text-[9px] text-white/70">{title as string}</span>
              </div>
              <span className="text-[9px] text-white/40">{(pct as number)>0?`${pct}%`:"Gepland"}</span>
            </div>
            <div className="h-1 rounded-full bg-black/20 overflow-hidden ml-3">
              <div className={`h-full rounded-full ${(pct as number)===100?"bg-green-400":"bg-white/60"}`} style={{width:`${pct}%`}} />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-black/15 rounded-lg p-2 mt-auto">
        <span className="text-[9px] text-white/70">📅 Volgende stap: <span className="text-white font-semibold">Intake plannen →</span></span>
      </div>
    </div>
  );

  return null;
}

export default function Services() {
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
          {services.map((service, i) => {
            const Icon = service.icon;
            const isOpen = openIndex === i;
            return (
              <div key={service.title} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left"
                >
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="flex-1 font-bold text-[#0a0a0a] text-base">{service.title}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}>
                  <div className="px-4 pb-4">
                    <Visual type={service.visual} gradient={service.gradient} />
                    <p className="text-gray-500 text-sm leading-relaxed mt-3 mb-3">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: static 6-block grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-100 transition-all duration-200 overflow-hidden flex flex-col">
                {/* Mini UI */}
                <div className="p-4 pb-0">
                  <Visual type={service.visual} gradient={service.gradient} />
                </div>
                {/* Card content */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-[#0a0a0a] font-bold text-base">{service.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">{tag}</span>
                    ))}
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
