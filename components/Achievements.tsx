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
      <ol className="relative w-full space-y-6 md:ml-6 md:border-l-4 md:border-dashed md:border-coral/30 md:pl-8">
        {achievements.map((a) => {
          const Icon = icons[a.icon];
          const t = toneStyles[a.tone];
          return (
            <motion.li
              key={a.id}
              initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative w-full pt-12 md:pt-0"
            >
              <span className={`absolute left-1/2 top-0 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full border-4 border-cream md:-left-[3.4rem] md:top-3 md:translate-x-0 ${t.solid}`}>
                <Icon size={18} />
              </span>
              <div className={`w-full rounded-3xl border-2 bg-white p-5 text-center transition hover:-translate-y-1 md:text-left ${t.border}`}>
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
