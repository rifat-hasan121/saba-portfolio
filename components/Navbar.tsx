"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, student } from "@/data/portfolioData";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-3 z-40 flex justify-center px-3">
      <nav
        aria-label="Main"
        className="flex w-full max-w-5xl items-center justify-between rounded-full border border-subtle bg-card/90 px-4 py-2 shadow-soft backdrop-blur"
      >
        <a href="#top" className="font-display text-lg font-semibold text-coral">
          {student.firstName}<span aria-hidden> ✨</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-3 py-1.5 text-sm font-bold text-muted transition hover:bg-coral/10 hover:text-coral">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full bg-coral text-white lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 -z-10 bg-ink/30 lg:hidden" onClick={() => setOpen(false)}
            />
            <motion.ul
              initial={{ opacity: 0, y: -12, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: 0.97 }}
              className="absolute right-3 top-16 grid w-[calc(100%-1.5rem)] max-w-sm grid-cols-2 gap-2 rounded-3xl border border-subtle bg-card p-3 shadow-soft lg:hidden"
            >
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href} onClick={() => setOpen(false)}
                    className="block rounded-2xl bg-cream px-4 py-3 text-center font-bold text-ink active:bg-coral/15"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
