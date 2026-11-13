"use client";
import { motion } from "framer-motion";

export default function Section({
  id, title, subtitle, emoji, children,
}: { id: string; title: string; subtitle?: string; emoji?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        className="mx-auto mb-8 text-center sm:mb-10 md:mx-0 md:text-left"
      >
        <h2 className="text-3xl font-semibold sm:text-4xl">
          {emoji && <span className="mr-2" aria-hidden>{emoji}</span>}
          {title}
        </h2>
        {subtitle && <p className="mx-auto mt-2 max-w-xl text-muted md:mx-0">{subtitle}</p>}
      </motion.div>
      {children}
    </section>
  );
}
