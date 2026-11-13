"use client";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import Section from "./Section";
import Placeholder from "./Placeholder";
import { projects } from "@/data/portfolioData";
import { toneStyles } from "@/data/tones";

export default function Projects() {
  return (
    <Section id="projects" emoji="🔬" title="School Projects & Science Fair" subtitle="Things I built, tested and (sometimes) exploded.">
      <div className="grid w-full gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <motion.article
            key={p.id} whileHover={{ y: -6 }}
            className={`flex w-full flex-col overflow-hidden rounded-3xl border-2 bg-white ${toneStyles[p.tone].border}`}
          >
            <div className="aspect-video">
              <Placeholder emoji={p.emoji} tone={p.tone} image={p.image} alt={p.title} emojiSize="text-7xl" />
            </div>
            <div className="flex flex-1 flex-col items-center p-6 text-center md:items-start md:text-left">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-muted">{p.story}</p>
              <span className={`mx-auto mt-4 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-extrabold md:mx-0 ${toneStyles[p.tone].solid}`}>
                <Lightbulb size={15} /> I learned: {p.learned}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
