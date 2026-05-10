"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

type ContactInfoItem = {
  icon: LucideIcon;
  label: string;
  value: string;
  className?: string;
};

type ContactCardProps = {
  title: string;
  description: string;
  contactInfo: ContactInfoItem[];
  children: React.ReactNode;
};

export function ContactCard({ title, description, contactInfo, children }: ContactCardProps) {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white flex flex-col md:flex-row">
      {/* Left panel */}
      <div className="md:w-[42%] bg-gradient-to-br from-orange-500 to-amber-400 p-8 flex flex-col gap-8">
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-3">{title}</h2>
          <p className="text-white/80 text-sm leading-relaxed">{description}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-auto">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`flex flex-col gap-2 bg-white/15 rounded-xl p-4 ${item.className ?? ""}`}
              >
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white/60 text-xs font-medium">{item.label}</div>
                  <div className="text-white font-semibold text-sm mt-0.5">{item.value}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right panel — form slot */}
      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  );
}
