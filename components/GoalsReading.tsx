"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Section from "./Section";
import Placeholder from "./Placeholder";
import { currentlyReading as book, goals as initialGoals, student } from "@/data/portfolioData";

export default function GoalsReading() {
  const [goals, setGoals] = useState(initialGoals);
  const doneCount = goals.filter((g) => g.done).length;
  const toggle = (id: string) => setGoals((gs) => gs.map((g) => (g.id === id ? { ...g, done: !g.done } : g)));

  return (
    <Section id="goals" emoji="🎯" title="My Goals & Reading Corner">
      <div className="grid w-full gap-6 md:grid-cols-2">
        <div className="flex w-full flex-col items-center rounded-3xl border-2 border-mint/40 bg-mint/10 p-6 text-center md:items-start md:text-left">
          <h3 className="text-xl font-semibold">Currently Reading</h3>
          <div className="mt-4 flex flex-col items-center gap-4 md:flex-row md:items-start">
            <div className="h-40 w-28 shrink-0 overflow-hidden rounded-2xl border-4 border-white shadow-soft">
              <Placeholder emoji={book.emoji} tone={book.tone} image={book.image} alt={`Cover of ${book.title}`} emojiSize="text-5xl" />
            </div>
            <div className="text-center md:text-left">
              <p className="font-display text-lg font-semibold">{book.title}</p>
              <p className="text-sm text-muted">by {book.author}</p>
              <p className="mt-3">{book.review}</p>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex justify-between text-sm font-bold"><span>Reading progress</span><span>{book.progress}%</span></div>
            <div className="mt-1 h-3 overflow-hidden rounded-full bg-white" role="progressbar" aria-valuenow={book.progress} aria-valuemin={0} aria-valuemax={100}>
              <motion.div className="h-full rounded-full bg-mint" initial={{ width: 0 }} whileInView={{ width: `${book.progress}%` }} viewport={{ once: true }} transition={{ duration: 1 }} />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center rounded-3xl border-2 border-sun/60 bg-sun/20 p-6 text-center sm:items-stretch sm:text-left">
          <div className="flex flex-col items-center gap-1 md:flex-row md:items-baseline md:justify-between">
            <h3 className="text-xl font-semibold">My {student.year} Bucket List</h3>
            <span className="text-sm font-extrabold">{doneCount}/{goals.length} done</span>
          </div>
          <ul className="mt-4 w-full space-y-2">
            {goals.map((g) => (
              <li key={g.id}>
                <button
                  onClick={() => toggle(g.id)} role="checkbox" aria-checked={g.done}
                  className="flex w-full items-center gap-3 rounded-2xl bg-white px-4 py-3 text-left transition active:scale-[0.98]"
                >
                  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg border-2 transition ${g.done ? "border-coral bg-coral text-white" : "border-ink/20"}`}>
                    {g.done && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}><Check size={16} strokeWidth={3} /></motion.span>}
                  </span>
                  <span className={g.done ? "text-muted line-through" : "font-bold"}>{g.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
