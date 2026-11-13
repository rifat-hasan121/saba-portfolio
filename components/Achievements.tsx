"use client";
import { motion } from "framer-motion";
import { Trophy, Medal, Star, Award } from "lucide-react";
import Section from "./Section";
import { achievements } from "@/data/portfolioData";
import { toneStyles } from "@/data/tones";

const icons = { trophy: Trophy, medal: Medal, star: Star, award: Award };

export default function Achievements() {
  return (
    <Section id="achievements" emoji="🏆" title="Achievements & Certificates" subtitle="Competitions, events and proud moments.">
      <ol className="relative ml-4 space-y-6 border-l-4 border-dashed border-coral/30 pl-8 sm:ml-6">
        {achievements.map((a) => {
          const Icon = icons[a.icon];
          const t = toneStyles[a.tone];
          return (
            <motion.li
              key={a.id}
              initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative"
            >
              <span className={`absolute -left-[3.2rem] top-3 grid h-10 w-10 place-items-center rounded-full border-4 border-cream sm:-left-[3.4rem] ${t.solid}`}>
                <Icon size={18} />
              </span>
              <div className={`rounded-3xl border-2 bg-white p-5 transition hover:-translate-y-1 ${t.border}`}>
                <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${t.soft}`}>{a.year}</span>
                <h3 className="mt-2 text-lg font-semibold">{a.title}</h3>
                <p className="text-muted">{a.detail}</p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}
