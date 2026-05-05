"use client";

import { ExternalLink, Mail, CheckCircle2 } from "lucide-react";

const team = [
  {
    name: "Steven", role: "Co-founder & AI Architect",
    bio: "Gespecialiseerd in het bouwen van schaalbare AI-systemen en workflow-automatiseringen. Heeft ervaring bij meerdere scale-ups en helpt bedrijven hun volledige automatiseringspotentieel benutten.",
    initials: "S", gradient: "from-orange-500 to-amber-400",
    linkedin: "#", email: "mailto:info@nova-automations.nl",
    skills: ["AI Architectuur", "Workflow Design", "Python", "LLMs"],
  },
  {
    name: "Jeroen", role: "Co-founder & Growth Strategist",
    bio: "Richt zich op de strategische inzet van AI binnen bedrijfsprocessen. Helpt klanten van intake tot implementatie, met een focus op meetbare groei en ROI.",
    initials: "J", gradient: "from-amber-500 to-orange-400",
    linkedin: "#", email: "mailto:info@nova-automations.nl",
    skills: ["Strategie", "Business Development", "Projectmanagement", "CRM"],
  },
];

const values = [
  "Altijd resultaatgericht — geen vage beloftes",
  "Transparant over wat AI wel en niet kan",
  "Snelle oplevering, slimme oplossingen",
  "Langdurige samenwerking, niet eenmalige projecten",
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
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Nova Automations is opgericht door twee ondernemers die geloven dat AI niet alleen voor grote bedrijven is — maar voor elk bedrijf dat wil groeien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {team.map((member) => (
            <div key={member.name} className="rounded-2xl p-7 bg-white border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md shadow-orange-100`}>
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-[#0a0a0a] font-bold text-lg leading-tight">{member.name}</h3>
                  <p className="text-orange-600 text-sm font-medium">{member.role}</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{member.bio}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {member.skills.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">{skill}</span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a href={member.linkedin} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100 hover:bg-blue-100 transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" />LinkedIn
                </a>
                <a href={member.email} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-50 text-gray-600 text-xs font-medium border border-gray-200 hover:bg-gray-100 transition-colors">
                  <Mail className="w-3.5 h-3.5" />E-mail
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-8 bg-white border border-orange-100 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0a0a0a] mb-3">
                Waarom bedrijven voor <span className="gradient-text">Nova kiezen</span>
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We zijn geen groot anoniem IT-bedrijf. Als klein, toegewijd team zijn we persoonlijk betrokken bij elk project en leveren we sneller dan grote bureaus.
              </p>
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
      </div>
    </section>
  );
}
