"use client";

import { useEffect, useRef, useState } from "react";

const KICKER = "Not Every Artist Gets Heard.";
const COPY =
  "the story of Yamesa begins with the music you haven't found. we believe underrated artists, the ones the algorithm keeps quiet, deserve better: better reach, better listeners, better rules. this is discovery, rebuilt for the ones worth hearing.";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const words = COPY.split(" ");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let rafId = 0;
    const update = () => {
      rafId = 0;
      const rect = section.getBoundingClientRect();
      const total = Math.max(1, rect.height - window.innerHeight);
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
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
    <section ref={sectionRef} className="relative min-h-[240vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          <div
            className="absolute -left-40 -top-32 h-[650px] w-[650px] rounded-full opacity-45"
            style={{
              background:
                "radial-gradient(circle, rgba(201,163,106,0.9) 0%, transparent 62%)",
              filter: "blur(110px)",
            }}
          />
          <div
            className="absolute -bottom-48 -right-40 h-[780px] w-[780px] rounded-full opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(139,42,31,0.9) 0%, transparent 62%)",
              filter: "blur(130px)",
            }}
          />
          <div
            className="absolute left-[28%] top-[18%] h-[520px] w-[520px] rounded-full opacity-25"
            style={{
              background:
                "radial-gradient(circle, rgba(59,42,107,0.9) 0%, transparent 62%)",
              filter: "blur(120px)",
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative mx-auto w-full max-w-5xl px-8 md:px-14 lg:px-20">
          <div className="mb-10 font-sans text-[11px] font-medium tracking-[0.35em] text-white/85 uppercase md:mb-14 md:text-xs">
            {KICKER}
          </div>

          <p className="font-display text-3xl leading-[1.25] text-white md:text-5xl md:leading-[1.2] lg:text-[4.25rem] lg:leading-[1.15]">
            {words.map((word, i) => {
              const wordProgress = progress * words.length - i * 0.85;
              const opacity = Math.max(0.12, Math.min(1, wordProgress));
              return (
                <span key={i}>
                  <span
                    style={{
                      opacity,
                      transition: "opacity 120ms linear",
                    }}
                  >
                    {word}
                  </span>
                  {i < words.length - 1 && " "}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
