"use client";

import { useState } from "react";
import React from "react";
import { Bot, MessageSquare, Workflow, BarChart3, Cpu, Lightbulb, Mail, ClipboardList, Send, Calendar, FileText, Circle } from "lucide-react";

const services = [
  { id: "agents",   label: "AI Agents",    icon: Bot },
  { id: "chatbot",  label: "Chatbots",     icon: MessageSquare },
  { id: "workflow", label: "Workflows",    icon: Workflow },
  { id: "data",     label: "Rapportage",   icon: BarChart3 },
  { id: "custom",   label: "Maatwerk",     icon: Cpu },
  { id: "strategy", label: "Strategie",    icon: Lightbulb },
];

/* ── Screen contents per service ── */
function AgentsScreen() {
  return (
    <div className="h-full flex flex-col bg-[#0f1117] text-white overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-xs font-semibold text-white/70">Nova AI Agent Dashboard</span>
        </div>
        <span className="text-[10px] text-white/30">Live</span>
      </div>
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-36 border-r border-white/5 p-3 flex flex-col gap-1">
          {["Dashboard","Agents","Taken","Instellingen"].map((item, i) => (
            <div key={item} className={`text-[10px] px-2.5 py-1.5 rounded-lg cursor-pointer ${i === 0 ? "bg-white/10 text-white font-semibold" : "text-white/40 hover:text-white/60"}`}>{item}</div>
          ))}
        </div>
        {/* Main */}
        <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto">
          <div className="grid grid-cols-3 gap-2">
            {[["3","Actief","#22c55e"],["7","Wachtend","#f59e0b"],["24","Voltooid","#6366f1"]].map(([n,l,c])=>(
              <div key={l} className="rounded-xl bg-white/5 border border-white/5 p-3 text-center">
                <div className="text-xl font-bold" style={{color:c}}>{n}</div>
                <div className="text-[9px] text-white/40 mt-0.5">{l}</div>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-white/5 border border-white/5 overflow-hidden">
            <div className="px-3 py-2 border-b border-white/5 text-[10px] font-semibold text-white/50">Actieve taken</div>
            {[
              ["E-mails sorteren & prioriteren","running","2 min geleden"],
              ["Offerte PDF genereren","running","5 min geleden"],
              ["CRM contacten synchroniseren","queued","Wachtend"],
              ["Welkomstmail nieuwe klant","done","Voltooid"],
            ].map(([task, status, time]) => (
              <div key={task as string} className="flex items-center gap-3 px-3 py-2.5 border-b border-white/5 last:border-0">
                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${status==="done"?"bg-green-400":status==="running"?"bg-blue-400 animate-pulse":"bg-white/20"}`} />
                <span className="text-[10px] text-white/70 flex-1">{task as string}</span>
                <span className="text-[9px] text-white/25">{time as string}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatbotScreen() {
  return (
    <div className="h-full flex flex-col bg-[#f8f9fa] overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-100 shadow-sm">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
          <MessageSquare className="w-3.5 h-3.5 text-white" />
        </div>
        <div>
          <div className="text-xs font-semibold text-gray-800">Nova Assistent</div>
          <div className="text-[9px] text-green-500 font-medium">● Online</div>
        </div>
      </div>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
        <div className="flex justify-start">
          <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[75%] shadow-sm">
            <p className="text-[10px] text-gray-700">Hoi! Hoe kan ik je helpen vandaag? 👋</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-indigo-600 rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[75%]">
            <p className="text-[10px] text-white">Wat zijn jullie tarieven voor een chatbot?</p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[80%] shadow-sm">
            <p className="text-[10px] text-gray-700">Onze chatbot-pakketten starten vanaf €299/mnd. Ik kan direct een vrijblijvende intake inplannen. Wanneer schikt het?</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-indigo-600 rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[75%]">
            <p className="text-[10px] text-white">Morgen om 10:00 uur?</p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[80%] shadow-sm">
            <p className="text-[10px] text-gray-700">✅ Geregeld! Je ontvangt een uitnodiging op je e-mail. Tot morgen!</p>
          </div>
        </div>
      </div>
      {/* Input */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
          <span className="text-[10px] text-gray-300 flex-1">Stel een vraag...</span>
          <div className="w-5 h-5 rounded-lg bg-indigo-600 flex items-center justify-center">
            <Send className="w-2.5 h-2.5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkflowScreen() {
  return (
    <div className="h-full bg-[#fafafa] overflow-hidden flex flex-col">
      <div className="flex items-center justify-between px-5 py-3.5 bg-white border-b border-gray-100">
        <span className="text-xs font-semibold text-gray-700">Workflow: Lead Opvolging</span>
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-semibold">● Actief — 1.2K runs/mnd</span>
      </div>
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="flex flex-col items-center gap-0 w-full max-w-xs">
          {([
            { icon: Mail, label: "E-mail binnenkomt", sub: "Gmail / Outlook", done: true, color: "#6366f1" },
            { icon: Bot, label: "AI verwerkt inhoud", sub: "Intentie & urgentie", done: true, color: "#8b5cf6" },
            { icon: ClipboardList, label: "CRM aangemaakt", sub: "HubSpot / Pipedrive", done: true, color: "#3b82f6" },
            { icon: Send, label: "Bevestiging verstuurd", sub: "Gepersonaliseerde e-mail", done: true, color: "#06b6d4" },
            { icon: Calendar, label: "Follow-up ingepland", sub: "Automatisch na 3 dagen", done: false, color: "#94a3b8" },
          ] as {icon: React.ElementType; label: string; sub: string; done: boolean; color: string}[]).map((step, i, arr) => (
            <div key={step.label} className="flex flex-col items-center w-full">
              <div className={`flex items-center gap-3 w-full rounded-xl px-3 py-2.5 ${step.done ? "bg-white border border-gray-100 shadow-sm" : "bg-gray-50 border border-dashed border-gray-200"}`}>
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: step.done ? step.color+"20" : "#f1f5f9"}}>
                  <step.icon className="w-3.5 h-3.5" style={{color: step.done ? step.color : "#94a3b8"}} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-[10px] font-semibold truncate ${step.done ? "text-gray-800" : "text-gray-400"}`}>{step.label}</div>
                  <div className="text-[9px] text-gray-400 truncate">{step.sub}</div>
                </div>
                {step.done && <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"><span className="text-[8px] text-green-600 font-bold">✓</span></div>}
              </div>
              {i < arr.length - 1 && <div className="w-px h-3 bg-gray-200" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DataScreen() {
  return (
    <div className="h-full bg-[#0f1117] text-white overflow-hidden flex flex-col">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5">
        <span className="text-xs font-semibold text-white/70">Rapportage Dashboard</span>
        <span className="text-[9px] text-white/30">Automatisch bijgewerkt</span>
      </div>
      <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto">
        <div className="grid grid-cols-2 gap-2">
          {[["€24.8K","Omzet","↑12%","#22c55e"],["48","Nieuwe leads","↑8%","#22c55e"],["34%","Conversie","↑3%","#22c55e"],["2.1u","Bespaard/dag","per medewerker","#6366f1"]].map(([v,l,ch,c])=>(
            <div key={l} className="rounded-xl bg-white/5 border border-white/5 p-3">
              <div className="text-lg font-bold text-white">{v}</div>
              <div className="text-[9px] text-white/40">{l}</div>
              <div className="text-[9px] mt-0.5 font-medium" style={{color: c as string}}>{ch}</div>
            </div>
          ))}
        </div>
        {/* Bar chart */}
        <div className="rounded-xl bg-white/5 border border-white/5 p-3">
          <div className="text-[10px] text-white/40 mb-3 font-semibold">Omzet afgelopen 6 maanden</div>
          <div className="flex items-end gap-1.5 h-16">
            {[45,60,38,72,55,88].map((h,i)=>(
              <div key={i} className="flex-1 rounded-t" style={{height:`${h}%`, backgroundColor: i===5?"#f97316":"rgba(255,255,255,0.15)"}} />
            ))}
          </div>
          <div className="flex gap-1.5 mt-1.5">
            {["Dec","Jan","Feb","Mrt","Apr","Mei"].map(m=>(
              <div key={m} className="flex-1 text-center text-[8px] text-white/25">{m}</div>
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-white/5 border border-white/5 p-3 flex flex-col gap-2">
          {[["Leads omgezet",72],["E-mails beantwoord",94],["Taken voltooid",88]].map(([l,p])=>(
            <div key={l} className="flex items-center gap-2">
              <span className="text-[9px] text-white/40 w-28">{l}</span>
              <div className="flex-1 h-1.5 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-orange-400" style={{width:`${p}%`}} />
              </div>
              <span className="text-[9px] text-white/40 w-6 text-right">{p}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CustomScreen() {
  return (
    <div className="h-full bg-white overflow-hidden flex flex-col">
      <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-100">
        <span className="text-xs font-semibold text-gray-700">Document AI Analyse</span>
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-semibold">✓ Verwerkt</span>
      </div>
      <div className="flex-1 p-5 flex flex-col gap-4 overflow-y-auto">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
          <FileText className="w-8 h-8 text-blue-500 flex-shrink-0" />
          <div>
            <div className="text-xs font-semibold text-gray-800">Contract_2024-047.pdf</div>
            <div className="text-[9px] text-gray-400 mt-0.5">Geüpload 2 min geleden · 3.2 MB</div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-100 overflow-hidden">
          <div className="px-3 py-2 bg-gray-50 border-b border-gray-100 text-[10px] font-semibold text-gray-500">Geëxtraheerde informatie</div>
          {[
            ["Datum","15 januari 2024"],
            ["Partij A","Nova Automations B.V."],
            ["Partij B","Bakker Techniek B.V."],
            ["Contractwaarde","€ 12.500 excl. BTW"],
            ["Looptijd","12 maanden"],
            ["Risicoscore","Laag ✓"],
          ].map(([k,v])=>(
            <div key={k} className="flex items-center px-3 py-2 border-b border-gray-50 last:border-0">
              <span className="text-[10px] text-gray-400 w-28 flex-shrink-0">{k}</span>
              <span className="text-[10px] text-gray-700 font-medium">{v}</span>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-blue-50 border border-blue-100 p-3">
          <div className="text-[10px] font-semibold text-blue-700 mb-1">AI Samenvatting</div>
          <p className="text-[9px] text-blue-600 leading-relaxed">Standaard dienstverleningsovereenkomst zonder bijzondere clausules. Geen ongebruikelijke bepalingen gevonden. Aanbeveling: goedkeuren.</p>
        </div>
      </div>
    </div>
  );
}

function StrategyScreen() {
  return (
    <div className="h-full bg-white overflow-hidden flex flex-col">
      <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-100">
        <span className="text-xs font-semibold text-gray-700">AI Roadmap — Nova Automations</span>
        <span className="text-[9px] text-gray-400">Q1–Q4 2024</span>
      </div>
      <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto">
        {([
          { fase: "Fase 1", title: "Analyse & AI-scan", period: "Q1 2024", pct: 100, done: true, items: ["Processen in kaart","Quick wins bepaald","Roadmap opgesteld"] },
          { fase: "Fase 2", title: "Pilot Workflow", period: "Q2 2024", pct: 75, done: false, items: ["E-mail automatisering live","CRM-koppeling gereed","Chatbot in test"] },
          { fase: "Fase 3", title: "Volledige implementatie", period: "Q3 2024", pct: 0, done: false, items: ["AI Agents uitgerold","Dashboard operationeel","Team getraind"] },
          { fase: "Fase 4", title: "Optimalisatie & groei", period: "Q4 2024", pct: 0, done: false, items: ["Performance review","Uitbreiding modules","Schaalbaarheid"] },
        ]).map((phase) => (
          <div key={phase.fase} className={`rounded-xl border p-3 ${phase.done ? "bg-green-50 border-green-100" : phase.pct > 0 ? "bg-blue-50 border-blue-100" : "bg-gray-50 border-gray-100"}`}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${phase.done ? "bg-green-500" : phase.pct > 0 ? "bg-blue-500 animate-pulse" : "bg-gray-300"}`} />
                <span className={`text-[9px] font-bold uppercase tracking-widest ${phase.done ? "text-green-600" : phase.pct > 0 ? "text-blue-600" : "text-gray-400"}`}>{phase.fase}</span>
                <span className="text-[10px] font-semibold text-gray-700">{phase.title}</span>
              </div>
              <span className="text-[9px] text-gray-400">{phase.period}</span>
            </div>
            <div className="h-1 rounded-full bg-black/5 mb-2">
              <div className={`h-full rounded-full ${phase.done ? "bg-green-400" : "bg-blue-400"}`} style={{width:`${phase.pct}%`}} />
            </div>
            <div className="flex gap-3 flex-wrap">
              {phase.items.map(item => (
                <span key={item} className={`text-[9px] ${phase.done ? "text-green-600" : phase.pct > 0 ? "text-blue-600" : "text-gray-400"}`}>· {item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const screens: Record<string, React.ReactNode> = {
  agents:   <AgentsScreen />,
  chatbot:  <ChatbotScreen />,
  workflow: <WorkflowScreen />,
  data:     <DataScreen />,
  custom:   <CustomScreen />,
  strategy: <StrategyScreen />,
};

export default function Showcase() {
  const [active, setActive] = useState("agents");
  const activeService = services.find(s => s.id === active)!;

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-orange-600 text-sm font-semibold uppercase tracking-widest mb-3">Zo ziet het eruit</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0a0a] mb-4">
            Bekijk onze{" "}
            <span className="gradient-text">oplossingen in actie</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Kies een dienst en zie hoe de interface eruitziet voor jouw bedrijf.
          </p>
        </div>

        {/* Service selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {services.map((s) => {
            const Icon = s.icon;
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-[#0a0a0a] text-white shadow-md"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Browser frame */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-2xl shadow-gray-200/80 bg-white">
          {/* Browser chrome */}
          <div className="flex items-center gap-3 px-4 py-3 bg-gray-100 border-b border-gray-200">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 border border-gray-200 max-w-sm mx-auto">
              <div className="w-2.5 h-2.5 rounded-full border border-gray-300 flex-shrink-0" />
              <span className="text-[11px] text-gray-400 truncate">nova-automations.com / {activeService.label.toLowerCase()}</span>
            </div>
            <div className="w-16" />
          </div>
          {/* Screen content */}
          <div className="h-[480px] overflow-hidden" key={active}>
            {screens[active]}
          </div>
        </div>
      </div>
    </section>
  );
}
