"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";
import Placeholder from "./Placeholder";
import GalleryModal from "./GalleryModal";
import { galleryItems, galleryTabs, type GalleryItem } from "@/data/portfolioData";
import { toneStyles } from "@/data/tones";

export default function Gallery() {
  const [tab, setTab] = useState<(typeof galleryTabs)[number]>("All");
  const [active, setActive] = useState<GalleryItem | null>(null);
  const items = tab === "All" ? galleryItems : galleryItems.filter((i) => i.category === tab);

  return (
    <Section id="gallery" emoji="🖼️" title="My Creative Gallery" subtitle="Tap any piece to look closer or read it.">
      <div role="tablist" aria-label="Gallery filter" className="mb-8 flex flex-wrap gap-2">
        {galleryTabs.map((t) => (
          <button
            key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
            className={`relative rounded-full border-2 px-5 py-2 font-extrabold transition ${
              tab === t ? "border-coral bg-coral text-white" : "border-coral/30 bg-white text-ink hover:bg-coral/10"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <motion.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.li
              key={item.id} layout
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
            >
              <button
                onClick={() => setActive(item)}
                className={`group block w-full overflow-hidden rounded-3xl border-2 bg-white text-left transition hover:-translate-y-1.5 hover:shadow-soft ${toneStyles[item.tone].border}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Placeholder emoji={item.emoji} tone={item.tone} image={item.image} alt={item.title} className="transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${toneStyles[item.tone].soft}`}>{item.category}</span>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-muted">{item.description}</p>
                </div>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>{active && <GalleryModal item={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </Section>
  );
}
