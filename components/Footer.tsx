import { developer, student } from "@/data/portfolioData";

const footerLinks = [
  { label: "About Me", href: "#about" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Creative Gallery", href: "#gallery" },
  { label: "School Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "2026 Goals", href: "#goals" },
];

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-8 pt-12 sm:px-6">
      <div className="rounded-3xl border border-subtle bg-card p-6 shadow-sm sm:p-8 md:p-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.2fr_1fr_0.8fr]">
          <section className="flex flex-col items-center text-center md:items-start md:text-left" aria-label="Student information">
            <p className="font-display text-2xl font-semibold text-primary">{student.name} 🌟</p>
            <span className="mt-2 inline-flex rounded-full bg-coral/10 px-3 py-1 text-xs font-extrabold text-coral">
              Grade 6 Explorer
            </span>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted md:mx-0">
              Dreaming big, painting stories, and learning something new every day!
            </p>
            <a
              href={`mailto:${student.guardianEmail}`}
              className="mt-4 inline-flex max-w-full items-center gap-2 break-all rounded-full border border-subtle bg-cream px-4 py-2 text-sm font-bold text-primary transition hover:-translate-y-0.5 hover:border-coral"
            >
              <span aria-hidden>✉️</span> Guardian email
            </a>
          </section>

          <nav className="text-center md:text-left" aria-label="Footer navigation">
            <h2 className="font-display text-lg font-semibold text-primary">Explore my corner</h2>
            <ul className="mt-3 grid grid-cols-2 justify-items-center gap-x-4 gap-y-2 md:justify-items-start">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex rounded-lg py-1 text-sm font-bold text-muted transition hover:translate-x-1 hover:text-coral"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section className="flex flex-col items-center text-center md:col-span-2 md:items-start md:text-left lg:col-span-1">
            <h2 className="font-display text-lg font-semibold text-primary">A little note</h2>
            <a
              href="#top"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-mint px-5 py-2.5 font-extrabold text-on-secondary transition hover:-translate-y-1 hover:shadow-soft"
            >
              Back to Top <span aria-hidden>↑</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Try the palette button in the navbar to find your favourite theme! 🎨
            </p>
          </section>
        </div>

        <div className="my-6 border-t border-subtle/30" />

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-muted">
            © {student.year} {student.name}. All artwork &amp; stories belong to her.
          </p>

          <div className="flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center">
            <p className="text-sm font-semibold text-primary">
              Crafted with <span aria-label="love" role="img">❤️</span> by{" "}
              <a href={developer.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-coral hover:underline">
                {developer.name}
              </a>
            </p>
            <a
              href={developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-coral px-4 py-2 text-xs font-extrabold text-white transition hover:scale-[1.03] hover:shadow-soft"
            >
              Want a portfolio like this? Let&apos;s connect <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
