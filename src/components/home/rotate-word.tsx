import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const WORDS = ["accurate", "found", "synced", "listed", "trusted"] as const;
/** ch-width for layout only — do not render a second copy of the word in the DOM. */
const LONGEST_CH = Math.max(...WORDS.map((w) => w.length));

export function RotateWord() {
  const [index, setIndex] = useState(0);
  const [motion, setMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return undefined;
    setMotion(true);
    const tick = window.setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 2400);
    const onChange = () => {
      if (media.matches) {
        window.clearInterval(tick);
        setMotion(false);
        setIndex(0);
      }
    };
    media.addEventListener("change", onChange);
    return () => {
      window.clearInterval(tick);
      media.removeEventListener("change", onChange);
    };
  }, []);

  const word = WORDS[index];

  // Width via ch only — do not put a second invisible copy of the word in the DOM
  // (crawlers concatenated "accurateaccurate" from the spacer + visible span).
  return (
    <span
      className="inline-block text-center italic text-brand"
      style={{ minWidth: `${LONGEST_CH}ch` }}
    >
      <span key={word} className={cn(motion && "animate-word-in")}>
        {word}
      </span>
    </span>
  );
}
