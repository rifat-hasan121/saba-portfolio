"use client";
import { motion } from "framer-motion";
import { GraduationCap, Heart, Lightbulb, BookOpen } from "lucide-react";
import Section from "./Section";
import { aboutCards } from "@/data/portfolioData";

const card = "rounded-3xl border-2 p-6 transition-transform hover:-translate-y-1";

export default function AboutBento() {
  const { school, subjects, favorites, funFact } = aboutCards;
  return (
    <Section id="about" emoji="🌈" title="A Little About Me" subtitle="Five quick things that make me, me.">
      <div className="grid gap-4 md:grid-cols-6">
        <motion.div whileHover={{ rotate: -0.6 }} className={`${card} border-coral/30 bg-coral/10 md:col-span-3`}>
          <GraduationCap className="text-coral" />
          <h3 className="mt-3 text-xl font-semibold">{school.title}</h3>
          <p className="mt-1 text-2xl font-semibold text-coral">{school.value}</p>
          <p className="text-muted">{school.note}</p>
        </motion.div>

        <motion.div whileHover={{ rotate: 0.6 }} className={`${card} border-mint/40 bg-mint/10 md:col-span-3`}>
          <BookOpen className="text-mint" />
          <h3 className="mt-3 text-xl font-semibold">Favourite Subjects</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {subjects.map((s) => (
              <li key={s.name} className="rounded-full bg-white px-4 py-1.5 font-bold shadow-sm">
                <span aria-hidden>{s.emoji}</span> {s.name}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className={`${card} border-sun/60 bg-sun/20 md:col-span-3`}>
          <Heart className="text-sun" />
          <h3 className="mt-3 text-xl font-semibold">Favourite Books & Colours</h3>
          <p className="mt-2 text-muted">{favorites.books.join(", ")}</p>
          <ul className="mt-3 flex gap-3" aria-label="Favourite colours">
            {favorites.colors.map((c) => (
              <li key={c.hex} className="text-center text-xs font-bold text-muted">
                <span className="mx-auto mb-1 block h-9 w-9 rounded-full border-2 border-white shadow" style={{ background: c.hex }} />
                {c.name}
              </li>
            ))}
          </ul>
        </div>

        <div className={`${card} border-ink/10 bg-white md:col-span-3`}>
          <Lightbulb className="text-coral" />
          <h3 className="mt-3 text-xl font-semibold">Fun Fact About Me</h3>
          <p className="mt-2 text-lg">{funFact}</p>
        </div>
      </div>
    </Section>
  );
}
