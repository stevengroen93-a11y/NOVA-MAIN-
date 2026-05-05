import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nova Automations — Automatiseer. Groei. Domineer.",
  description:
    "Nova Automations helpt bedrijven slimmer werken met AI-automatisering, chatbots, workflow-optimalisatie en maatwerk AI-oplossingen.",
  keywords: ["AI automatisering", "workflow automatisering", "chatbot", "AI bureau", "Nederland", "Nova Automations"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="bg-white text-[#0a0a1a]">{children}</body>
    </html>
  );
}
