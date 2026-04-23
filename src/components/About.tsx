"use client";

import { useEffect, useRef } from "react";

const KICKER = "Not Every Artist Gets Heard.";
const COPY =
  "the story of Yamesa begins with the music you haven't found. we believe underrated artists, the ones the algorithm keeps quiet, deserve better: better reach, better listeners, better rules. this is discovery, rebuilt for the ones worth hearing.";

export default function About() {
  const paraRef = useRef<HTMLParagraphElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const words = COPY.split(" ");

  useEffect(() => {
    let rafId = 0;
    const update = () => {
      rafId = 0;
      const para = paraRef.current;
      if (!para) return;
      const vh = window.innerHeight;
      const REVEAL_START = vh * 0.82;
      const REVEAL_END = vh * 0.4;
      const span = REVEAL_START - REVEAL_END;
      const LINE_STAGGER = 110;

      const paraRect = para.getBoundingClientRect();
      const paraLeft = paraRect.left;
      const paraWidth = Math.max(1, paraRect.width);

      for (const el of wordsRef.current) {
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const xFrac = Math.max(
          0,
          Math.min(1, (rect.left - paraLeft) / paraWidth)
        );
        const effectiveY = rect.top + xFrac * LINE_STAGGER;

        let opacity: number;
        if (effectiveY <= REVEAL_END) opacity = 1;
        else if (effectiveY >= REVEAL_START) opacity = 0.15;
        else opacity = 0.15 + ((REVEAL_START - effectiveY) / span) * 0.85;
        el.style.opacity = String(opacity);
      }
    };
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute -left-40 top-[8%] h-[650px] w-[650px] rounded-full opacity-45"
          style={{
            background:
              "radial-gradient(circle, rgba(201,163,106,0.9) 0%, transparent 62%)",
            filter: "blur(110px)",
          }}
        />
        <div
          className="absolute -right-40 bottom-[12%] h-[780px] w-[780px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(139,42,31,0.9) 0%, transparent 62%)",
            filter: "blur(130px)",
          }}
        />
        <div
          className="absolute left-[28%] top-[40%] h-[520px] w-[520px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(59,42,107,0.9) 0%, transparent 62%)",
            filter: "blur(120px)",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative mx-auto max-w-5xl px-8 py-40 md:px-14 md:py-56 lg:px-20 lg:py-64">
        <div className="mb-10 font-sans text-[11px] font-medium tracking-[0.35em] text-white/85 uppercase md:mb-14 md:text-xs">
          {KICKER}
        </div>

        <p
          ref={paraRef}
          className="font-display text-3xl leading-[1.25] text-white md:text-5xl md:leading-[1.2] lg:text-[4.25rem] lg:leading-[1.15]"
        >
          {words.map((word, i) => (
            <span key={i}>
              <span
                ref={(el) => {
                  wordsRef.current[i] = el;
                }}
                style={{ opacity: 0.15, transition: "opacity 80ms linear" }}
              >
                {word}
              </span>
              {i < words.length - 1 && " "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
