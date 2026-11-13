"use client";
import { motion } from "framer-motion";
import { Sparkles, Trophy } from "lucide-react";
import { student } from "@/data/portfolioData";
import { toneStyles } from "@/data/tones";

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto grid min-h-[100svh] w-full max-w-6xl items-center gap-10 px-4 pb-12 pt-28 sm:px-6 md:grid-cols-2">
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-sun/30 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-mint/25 blur-3xl" aria-hidden />

      <div className="relative order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
        <span className="inline-flex items-center gap-2 rounded-full border-2 border-sun bg-sun/30 px-4 py-1.5 text-sm font-extrabold">
          <Sparkles size={16} className="text-coral" /> {student.grade}
        </span>

        <h1 className="mt-5 text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
          Hi, I&apos;m{" "}
          <span className="text-coral">{student.firstName}</span>!{" "}
          <motion.span
            className="inline-block origin-[70%_70%]"
            animate={{ rotate: [0, 18, -8, 18, -4, 14, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.8 }}
            aria-label="waving hand"
          >
            👋
          </motion.span>
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-lg text-muted md:mx-0">{student.bio}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
          <a href="#gallery" className="rounded-full bg-coral px-6 py-3 font-extrabold text-white shadow-pop transition active:translate-y-1 active:shadow-none">
            Explore My Work
          </a>
          <a href="#achievements" className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-6 py-3 font-extrabold transition hover:bg-sun/40">
            <Trophy size={18} /> My Achievements
          </a>
        </div>
      </div>

      <div className="relative order-1 mx-auto w-64 sm:w-80 md:order-2 md:w-full md:max-w-sm">
        <div className="relative aspect-square animate-float">
          <div
            className="absolute inset-0 border-4 border-white bg-gradient-to-br from-coral/30 via-sun/40 to-mint/40 shadow-soft"
            style={{ borderRadius: "58% 42% 55% 45% / 48% 55% 45% 52%" }}
          >
            <div className="grid h-full w-full place-items-center overflow-hidden" style={{ borderRadius: "inherit" }}>
              {student.avatar ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={student.avatar} alt={student.name} className="h-full w-full object-cover" />
              ) : (
                <span className="text-8xl sm:text-9xl" role="img" aria-label="Avatar placeholder">👧🏽</span>
              )}
            </div>
          </div>

          {student.badges.map((b, i) => (
            <motion.span
              key={b.label}
              className={`absolute ${b.pos} flex items-center gap-1.5 rounded-full border-2 border-white px-3 py-1.5 text-sm font-extrabold shadow-soft ${toneStyles[b.tone].solid}`}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3 + i * 0.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <span aria-hidden>{b.emoji}</span> {b.label}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
