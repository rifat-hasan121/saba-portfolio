"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const themes = [
  { id: "candy-pop", name: "Candy Pop", colors: ["#FF6B8B", "#4ECDC4"] },
  { id: "lavender-dream", name: "Lavender Dream", colors: ["#8B5CF6", "#F472B6"] },
  { id: "mint-meadow", name: "Mint Meadow", colors: ["#10B981", "#F59E0B"] },
  { id: "midnight-galaxy", name: "Midnight Galaxy", colors: ["#F472B6", "#38BDF8"] },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

const STORAGE_KEY = "saba-portfolio-theme";
const ThemeContext = createContext<{ theme: ThemeId; setTheme: (theme: ThemeId) => void } | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeId>("candy-pop");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (themes.some((option) => option.id === saved)) {
      setTheme(saved as ThemeId);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [ready, theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
