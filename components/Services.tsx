"use client";

import { Bot, Workflow, BarChart3, MessageSquare, Cpu, Lightbulb } from "lucide-react";

const services = [
  { icon: Bot,          title: "AI Agents",                description: "Slimme AI-agents die zelfstandig taken uitvoeren — van data verwerking tot klantcommunicatie — zonder menselijke tussenkomst.",      tags: ["Autonome taken", "24/7 actief", "Schaalbaar"],       gradient: "from-orange-500 to-amber-400" },
  { icon: MessageSquare,title: "AI Chatbots",              description: "Geavanceerde chatbots op je website of WhatsApp die klanten helpen, leads kwalificeren en bestellingen verwerken.",                   tags: ["WhatsApp", "Website", "CRM-integratie"],             gradient: "from-amber-500 to-orange-400" },
  { icon: Workflow,      title: "Workflow Automatisering", description: "Verbind al je tools en applicaties met slimme workflows. Van e-mail tot CRM, alles loopt automatisch.",                                tags: ["Make.com", "Zapier", "n8n"],                         gradient: "from-orange-600 to-red-400" },
  { icon: BarChart3,     title: "Data & Rapportage",       description: "Automatische dashboards en rapporten die jij en je team real-time inzicht geven — zonder handmatig werk.",                             tags: ["Dashboards", "KPI tracking", "Alerts"],              gradient: "from-amber-500 to-yellow-400" },
  { icon: Cpu,           title: "Maatwerk AI-oplossingen", description: "Unieke AI-systemen gebouwd op jouw bedrijfsbehoeften. Van document-analyse tot voorspelmodellen.",                                    tags: ["LLMs", "Computer Vision", "Analyse"],                gradient: "from-orange-500 to-amber-500" },
  { icon: Lightbulb,     title: "AI Strategie & Advies",   description: "Weet je niet waar je moet beginnen? Wij analyseren je processen en stellen een concrete AI-roadmap op.",                              tags: ["Scan", "Roadmap", "Implementatie"],                  gradient: "from-red-400 to-orange-500" },
];

export default function Services() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="rounded-2xl p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-100 transition-all duration-200">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-sm`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[#0a0a0a] font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
