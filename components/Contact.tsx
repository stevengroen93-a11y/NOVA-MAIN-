"use client";

import { useState } from "react";
import { MailIcon, PhoneIcon, MapPinIcon, Send, CheckCircle2 } from "lucide-react";
import { ContactCard } from "@/components/ui/contact-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const services = [
  "AI Agents",
  "AI Chatbot",
  "Workflow Automatisering",
  "Data & Rapportage",
  "Maatwerk AI-oplossing",
  "AI Strategie & Advies",
  "Weet ik nog niet",
];

// Simple random math question generated once per render
function generateQuestion() {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  return { question: `Wat is ${a} + ${b}?`, answer: String(a + b) };
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [spamAnswer, setSpamAnswer] = useState("");
  const [spamError, setSpamError] = useState(false);
  const [{ question, answer }] = useState(generateQuestion);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (spamAnswer.trim() !== answer) {
      setSpamError(true);
      return;
    }
    setSpamError(false);
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-orange-50/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-orange-600 text-sm font-semibold uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0a0a] mb-4">
            Laten we <span className="gradient-text">kennismaken</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Vul het formulier in en wij nemen binnen 24 uur contact met je op voor een gratis intake.
          </p>
        </div>

        <ContactCard
          title="Neem contact op"
          description="Heb je vragen over onze diensten of wil je een vrijblijvend gesprek? Vul het formulier in — we reageren binnen 1 werkdag."
          contactInfo={[
            {
              icon: MailIcon,
              label: "E-mail",
              value: "info@nova-automations.com",
            },
            {
              icon: MapPinIcon,
              label: "Locatie",
              value: "Poortland 66, Amsterdam",
              className: "col-span-2",
            },
          ]}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center h-full min-h-[320px] gap-4">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-[#0a0a0a]">Bericht ontvangen!</h3>
              <p className="text-gray-500 text-sm max-w-xs">
                Bedankt voor je bericht. We nemen binnen 24 uur contact met je op voor een gratis intake.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Naam</Label>
                  <Input id="name" type="text" placeholder="Jan de Vries" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="jan@bedrijf.nl" required />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="company">Bedrijfsnaam</Label>
                  <Input id="company" type="text" placeholder="Bedrijf BV" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="service">Dienst</Label>
                  <select
                    id="service"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-gray-600"
                  >
                    <option value="">Selecteer een dienst</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Bericht</Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Vertel ons kort over je bedrijf en wat je wilt automatiseren..."
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="spam">{question} <span className="text-gray-400 font-normal">(Anti-spam verificatie)</span></Label>
                <Input
                  id="spam"
                  type="text"
                  inputMode="numeric"
                  placeholder="Jouw antwoord"
                  value={spamAnswer}
                  onChange={(e) => { setSpamAnswer(e.target.value); setSpamError(false); }}
                  required
                  className={spamError ? "border-red-400 focus-visible:ring-red-400" : ""}
                />
                {spamError && (
                  <p className="text-xs text-red-500">Antwoord is niet correct. Probeer het opnieuw.</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-400 text-white hover:opacity-90 shadow-lg shadow-orange-100 border-0"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin mr-2" />
                    Versturen...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Stuur bericht
                  </>
                )}
              </Button>
            </form>
          )}
        </ContactCard>
      </div>
    </section>
  );
}
