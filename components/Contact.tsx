"use client";
import { useState } from "react";
import { Mail, Send, ShieldCheck } from "lucide-react";
import Section from "./Section";
import { student } from "@/data/portfolioData";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // Opens the visitor's email app addressed to the guardian. Nothing is stored on this site.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`A message for ${student.firstName} from ${f.get("name")}`);
    const body = encodeURIComponent(String(f.get("message")));
    window.location.href = `mailto:${student.guardianEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field = "w-full rounded-2xl border-2 border-coral/20 bg-white px-4 py-3 outline-none focus:border-coral";

  return (
    <Section id="contact" emoji="💌" title="Say Hello!" subtitle={`Leave ${student.firstName} a kind note or a compliment.`}>
      <div className="grid w-full gap-6 md:grid-cols-5">
        <div className="flex w-full flex-col items-center rounded-3xl border-2 border-mint/40 bg-mint/10 p-6 text-center md:col-span-2 md:items-start md:text-left">
          <ShieldCheck className="text-mint" size={30} />
          <h3 className="mt-3 text-xl font-semibold">A note for parents & guardians</h3>
          <p className="mt-2 text-muted">
            For {student.firstName}&apos;s safety, this site shares no home address or phone number. All messages go to her guardian first.
          </p>
          <a href={`mailto:${student.guardianEmail}`} className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-5 py-2.5 font-extrabold hover:bg-sun/40">
            <Mail size={18} /> Email her guardian
          </a>
        </div>

        <form onSubmit={onSubmit} className="w-full space-y-4 rounded-3xl border-2 border-coral/30 bg-white p-6 text-center md:col-span-3 md:text-left">
          <label className="block">
            <span className="mb-1 block font-bold">Your first name</span>
            <input name="name" required maxLength={40} autoComplete="given-name" className={field} placeholder="e.g. Ayesha" />
          </label>
          <label className="block">
            <span className="mb-1 block font-bold">Your message</span>
            <textarea name="message" required maxLength={500} rows={4} className={field} placeholder={`I loved your poem, ${student.firstName}!`} />
          </label>
          <button type="submit" className="mx-auto inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-extrabold text-white shadow-pop transition active:translate-y-1 active:shadow-none md:mx-0">
            <Send size={18} /> Send message
          </button>
          {sent && <p role="status" className="font-bold text-mint">Thank you! Your email app should open so you can send it. 💛</p>}
        </form>
      </div>
    </Section>
  );
}
