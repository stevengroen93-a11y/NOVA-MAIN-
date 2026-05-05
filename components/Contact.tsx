"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

type FormState = { name: string; email: string; company: string; service: string; message: string };

const services = ["AI Agents", "AI Chatbot", "Workflow Automatisering", "Data & Rapportage", "Maatwerk AI-oplossing", "AI Strategie & Advies", "Weet ik nog niet"];

const inputClass = "w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#0a0a0a] placeholder-gray-400 text-sm focus:outline-none focus:border-orange-400 focus:bg-white transition-colors";

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-orange-600 text-sm font-semibold uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0a0a] mb-4">
            Laten we <span className="gradient-text">kennismaken</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Vul het formulier in en wij nemen binnen 24 uur contact met je op voor een gratis intake.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-4">
            {[
              { icon: Mail,   label: "E-mail",   value: "info@nova-automations.nl", href: "mailto:info@nova-automations.nl" },
              { icon: Phone,  label: "Telefoon", value: "+31 6 00 000 000",          href: "tel:+31600000000" },
              { icon: MapPin, label: "Locatie",  value: "Nederland",                 href: "#" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} className="rounded-xl p-5 flex items-center gap-4 bg-white border border-gray-100 shadow-sm hover:border-orange-200 hover:shadow-md transition-all">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-100">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-medium mb-0.5">{item.label}</div>
                    <div className="text-[#0a0a0a] font-semibold text-sm">{item.value}</div>
                  </div>
                </a>
              );
            })}
            <div className="rounded-xl p-5 bg-orange-50 border border-orange-100 mt-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                <span className="text-green-700 text-xs font-semibold">Gemiddelde reactietijd</span>
              </div>
              <p className="text-3xl font-extrabold text-[#0a0a0a]">&lt; 24 uur</p>
              <p className="text-gray-500 text-xs mt-1">Op werkdagen reageren we altijd binnen een dag.</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[400px] bg-white border border-green-100 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">Bericht ontvangen!</h3>
                <p className="text-gray-500 text-sm max-w-xs">Bedankt voor je bericht. We nemen binnen 24 uur contact met je op voor een gratis intake.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl p-7 flex flex-col gap-4 bg-white border border-gray-100 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#0a0a0a] text-xs font-semibold mb-1.5">Naam *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jan de Vries" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[#0a0a0a] text-xs font-semibold mb-1.5">E-mail *</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jan@bedrijf.nl" className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#0a0a0a] text-xs font-semibold mb-1.5">Bedrijfsnaam</label>
                    <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Bedrijf BV" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[#0a0a0a] text-xs font-semibold mb-1.5">Dienst</label>
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 text-sm focus:outline-none focus:border-orange-400 focus:bg-white transition-colors">
                      <option value="">Selecteer een dienst</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[#0a0a0a] text-xs font-semibold mb-1.5">Bericht *</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Vertel ons kort over je bedrijf en wat je wilt automatiseren..." className={`${inputClass} resize-none`} />
                </div>
                <button type="submit" disabled={loading} className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60 shadow-lg shadow-orange-100 mt-1">
                  {loading ? <><div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Versturen...</> : <><Send className="w-4 h-4" />Stuur bericht</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
