"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import Link from "next/link";

type Point = { x: number; y: number };
interface WaveConfig {
  offset: number;
  amplitude: number;
  frequency: number;
  color: string;
  opacity: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.12 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const statsVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 } },
};

const pills = ["AI Agents", "Workflow Automatisering", "AI Chatbots"] as const;
const stats = [
  { label: "Tevreden klanten", value: "30+" },
  { label: "Bespaard voor klanten", value: "€150K+" },
  { label: "Gemiddelde oplevering", value: "48u" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<Point>({ x: 0, y: 0 });
  const targetMouseRef = useRef<Point>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const computeThemeColors = () => {
      const rootStyles = getComputedStyle(document.documentElement);
      const resolveColor = (variables: string[], alpha = 1) => {
        const tempEl = document.createElement("div");
        tempEl.style.cssText = "position:absolute;visibility:hidden;width:1px;height:1px";
        document.body.appendChild(tempEl);
        let color = `rgba(249,115,22,${alpha})`;
        for (const variable of variables) {
          const value = rootStyles.getPropertyValue(variable).trim();
          if (value) {
            tempEl.style.backgroundColor = `var(${variable})`;
            const computed = getComputedStyle(tempEl).backgroundColor;
            if (computed && computed !== "rgba(0, 0, 0, 0)") {
              if (alpha < 1) {
                const m = computed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
                color = m ? `rgba(${m[1]},${m[2]},${m[3]},${alpha})` : computed;
              } else {
                color = computed;
              }
              break;
            }
          }
        }
        document.body.removeChild(tempEl);
        return color;
      };
      return {
        backgroundTop: resolveColor(["--background"], 1),
        backgroundBottom: resolveColor(["--muted", "--background"], 0.95),
        wavePalette: [
          { offset: 0,            amplitude: 70, frequency: 0.003,  color: resolveColor(["--primary"], 0.8),              opacity: 0.45 },
          { offset: Math.PI/2,   amplitude: 90, frequency: 0.0026, color: resolveColor(["--accent","--primary"], 0.7),    opacity: 0.35 },
          { offset: Math.PI,     amplitude: 60, frequency: 0.0034, color: resolveColor(["--secondary","--primary"], 0.65),opacity: 0.30 },
          { offset: Math.PI*1.5, amplitude: 80, frequency: 0.0022, color: resolveColor(["--primary-foreground","--foreground"], 0.25), opacity: 0.20 },
          { offset: Math.PI*2,   amplitude: 55, frequency: 0.004,  color: resolveColor(["--foreground"], 0.15),            opacity: 0.15 },
        ] satisfies WaveConfig[],
      };
    };

    let themeColors = computeThemeColors();
    const observer = new MutationObserver(() => { themeColors = computeThemeColors(); });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouseInfluence = prefersReducedMotion ? 10 : 70;
    const influenceRadius = prefersReducedMotion ? 160 : 320;
    const smoothing = prefersReducedMotion ? 0.04 : 0.1;

    const resizeCanvas = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    const recenterMouse = () => {
      const c = { x: canvas.width / 2, y: canvas.height / 2 };
      mouseRef.current = c; targetMouseRef.current = c;
    };
    const handleResize = () => { resizeCanvas(); recenterMouse(); };
    const handleMouseMove = (e: MouseEvent) => { targetMouseRef.current = { x: e.clientX, y: e.clientY }; };
    const handleMouseLeave = () => { recenterMouse(); };

    resizeCanvas(); recenterMouse();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const drawWave = (wave: WaveConfig) => {
      ctx.save(); ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 4) {
        const dx = x - mouseRef.current.x, dy = canvas.height / 2 - mouseRef.current.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        const influence = Math.max(0, 1 - dist / influenceRadius);
        const mouseEffect = influence * mouseInfluence * Math.sin(time * 0.001 + x * 0.01 + wave.offset);
        const y = canvas.height / 2
          + Math.sin(x * wave.frequency + time * 0.002 + wave.offset) * wave.amplitude
          + Math.sin(x * wave.frequency * 0.4 + time * 0.003) * (wave.amplitude * 0.45)
          + mouseEffect;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = wave.color;
      ctx.globalAlpha = wave.opacity;
      ctx.shadowBlur = 35;
      ctx.shadowColor = wave.color;
      ctx.stroke(); ctx.restore();
    };

    const animate = () => {
      time++;
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * smoothing;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * smoothing;
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, themeColors.backgroundTop);
      grad.addColorStop(1, themeColors.backgroundBottom);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1; ctx.shadowBlur = 0;
      themeColors.wavePalette.forEach(drawWave);
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-background">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-28 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full">

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="mb-5 text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-7xl"
          >
            Laat AI het zware<br />
            <span className="gradient-text">werk doen.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-lg text-foreground/60 md:text-xl"
          >
            Nova Automations bouwt slimme AI-systemen die jouw bedrijfsprocessen
            automatiseren — zodat jij je focust op groei.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-200 hover:opacity-90 transition-opacity"
            >
              Start gratis gesprek
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#diensten"
              className="inline-flex items-center gap-2 rounded-full border border-orange-300 bg-white/60 px-8 py-3.5 text-sm font-semibold text-foreground/80 backdrop-blur hover:bg-white/80 hover:border-orange-400 hover:text-orange-700 transition-all"
            >
              Bekijk onze diensten
            </Link>
          </motion.div>

          {/* Pills */}
          <motion.ul
            variants={itemVariants}
            className="mb-12 hidden sm:flex flex-wrap items-center justify-center gap-3 text-xs font-medium uppercase tracking-widest text-foreground/60"
          >
            {pills.map((pill) => (
              <li key={pill} className="rounded-full border border-border/40 bg-white/60 px-4 py-2 backdrop-blur">
                {pill}
              </li>
            ))}
          </motion.ul>

          {/* Stats */}
          <motion.div
            variants={statsVariants}
            className="grid gap-4 rounded-2xl border border-orange-300 bg-white/60 p-6 backdrop-blur-sm sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={itemVariants} className="space-y-1">
                <div className="text-xs uppercase tracking-widest text-foreground/50">{stat.label}</div>
                <div className="text-3xl font-extrabold gradient-text">{stat.value}</div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
