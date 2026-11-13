export type Tone = "coral" | "mint" | "sun";

// Full class names are written out so Tailwind can detect them.
export const toneStyles: Record<Tone, { soft: string; border: string; solid: string; text: string; ring: string }> = {
  coral: { soft: "bg-coral/15", border: "border-coral/30", solid: "bg-coral text-white", text: "text-coral", ring: "ring-coral/40" },
  mint: { soft: "bg-mint/15", border: "border-mint/40", solid: "bg-mint text-on-secondary", text: "text-mint", ring: "ring-mint/50" },
  sun: { soft: "bg-sun/25", border: "border-sun/60", solid: "bg-sun text-on-secondary", text: "text-sun", ring: "ring-sun/60" },
};
