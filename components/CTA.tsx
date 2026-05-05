"use client";

import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-orange-50/40">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="rounded-3xl px-8 py-14 md:px-14 bg-gradient-to-br from-orange-500 to-amber-400 shadow-2xl shadow-orange-100">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 mb-7">
            <Zap className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            Klaar om te automatiseren?
          </h2>
          <p className="text-orange-50 text-lg mb-9 max-w-md mx-auto leading-relaxed">
            Plan vandaag nog een gratis 30-minuten gesprek. We laten je zien hoe AI jouw bedrijf concreet kan verbeteren — zonder verplichtingen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#contact" className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-orange-600 font-semibold hover:bg-orange-50 transition-colors shadow-sm">
              Plan gratis gesprek
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="mailto:info@nova-automations.nl" className="flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/30 bg-white/10 text-white font-semibold hover:bg-white/20 transition-all">
              info@nova-automations.nl
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
