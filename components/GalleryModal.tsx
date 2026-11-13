"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Placeholder from "./Placeholder";
import type { GalleryItem } from "@/data/portfolioData";

export default function GalleryModal({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-3 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <motion.div
        role="dialog" aria-modal="true" aria-label={item.title}
        initial={{ y: 40, scale: 0.95 }} animate={{ y: 0, scale: 1 }} exit={{ y: 40, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90svh] w-full max-w-2xl overflow-y-auto rounded-3xl border-4 border-white bg-cream shadow-2xl"
      >
        <button
          onClick={onClose} aria-label="Close"
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow"
        >
          <X size={20} />
        </button>

        {item.text ? (
          <div className="p-6 pt-8 sm:p-10">
            <span className="text-5xl" aria-hidden>{item.emoji}</span>
            <h3 className="mt-3 text-3xl font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm font-bold text-coral">{item.category}</p>
            <div className="mt-6 space-y-2 border-l-4 border-sun pl-4 text-lg leading-relaxed">
              {item.text.map((line, i) => (line === "" ? <div key={i} className="h-3" /> : <p key={i}>{line}</p>))}
            </div>
          </div>
        ) : (
          <>
            <div className="aspect-[4/3] w-full">
              <Placeholder emoji={item.emoji} tone={item.tone} image={item.image} alt={item.title} emojiSize="text-9xl" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-1 text-muted">{item.description}</p>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
