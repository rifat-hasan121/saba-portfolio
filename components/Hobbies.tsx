"use client";
import { motion } from "framer-motion";
import { Palette, Mic, BookOpen, Sprout, Puzzle } from "lucide-react";
import Section from "./Section";
import { hobbies } from "@/data/portfolioData";
import { toneStyles } from "@/data/tones";

const icons = { palette: Palette, mic: Mic, book: BookOpen, sprout: Sprout, puzzle: Puzzle };

export default function Hobbies() {
  return (
    <Section id="hobbies" emoji="🎈" title="My Hobbies & Passions" subtitle="What I do when the school bell rings.">
      <ul className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
        {hobbies.map((h) => {
          const Icon = icons[h.icon];
          const t = toneStyles[h.tone];
          return (
            <motion.li
              key={h.title}
              whileHover={{ y: -6, rotate: -1 }}
              whileTap={{ scale: 0.97 }}
              className={`group flex w-full flex-col items-center rounded-3xl border-2 p-6 text-center md:items-start md:text-left ${t.soft} ${t.border}`}
            >
              <motion.span
                whileHover={{ rotate: [0, -12, 12, 0] }}
                className="grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-sm"
              >
                <Icon className={t.text} size={28} />
              </motion.span>
              <h3 className="mt-4 text-xl font-semibold">{h.title}</h3>
              <p className="mt-1 text-muted">{h.text}</p>
            </motion.li>
          );
        })}
      </ul>
    </Section>
  );
}
