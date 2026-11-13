import { toneStyles, type Tone } from "@/data/tones";

/** Shows a real image if `image` is set, otherwise a cheerful emoji placeholder. */
export default function Placeholder({
  emoji, tone, image, alt, className = "", emojiSize = "text-6xl",
}: { emoji: string; tone: Tone; image?: string; alt: string; className?: string; emojiSize?: string }) {
  const t = toneStyles[tone];
  if (image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={image} alt={alt} className={`h-full w-full object-cover ${className}`} />;
  }
  return (
    <div role="img" aria-label={alt} className={`flex h-full w-full items-center justify-center ${t.soft} ${className}`}>
      <span className={emojiSize} aria-hidden>{emoji}</span>
    </div>
  );
}
