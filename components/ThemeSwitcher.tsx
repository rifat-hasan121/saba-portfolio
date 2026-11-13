"use client";

import { useState } from "react";
import { Check, Palette } from "lucide-react";
import { themes, useTheme } from "./ThemeProvider";

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const currentTheme = themes.find((option) => option.id === theme)!;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={`Choose a theme. Current theme: ${currentTheme.name}`}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="grid h-10 w-10 place-items-center rounded-full border border-subtle bg-card text-primary transition hover:-translate-y-0.5 hover:text-coral"
      >
        <Palette size={19} />
      </button>
      {open && (
        <div
          role="dialog"
          aria-label="Choose a colour theme"
          className="absolute right-0 top-12 z-50 w-56 rounded-3xl border border-subtle bg-card p-2 shadow-soft"
        >
          <p className="px-3 pb-2 pt-1 text-xs font-extrabold uppercase tracking-wide text-muted">Pick your vibe</p>
          {themes.map((option) => (
            <button
              type="button"
              key={option.id}
              onClick={() => {
                setTheme(option.id);
                setOpen(false);
              }}
              aria-pressed={theme === option.id}
              className="flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm font-bold text-primary transition hover:bg-coral/10"
            >
              <span className="flex -space-x-1" aria-hidden>
                {option.colors.map((color) => (
                  <span key={color} className="h-4 w-4 rounded-full border-2 border-card" style={{ backgroundColor: color }} />
                ))}
              </span>
              <span className="flex-1">{option.name}</span>
              {theme === option.id && <Check size={16} className="text-coral" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
