"use client";

import { useEffect, useRef } from "react";

const BEATS = [
  {
    kicker: "Not Every Artist Gets Heard.",
    body:
      "streaming runs on scale. the biggest artists get bigger, the rest disappear into a long tail no one scrolls past. discovery, as it exists today, isn't discovery. it's suggestion.",
  },
  {
    kicker: "Curation, Not Computation.",
    body:
      "every artist on Yamesa is vetted, not matched. no payola, no algorithm steering, no feed designed to keep you scrolling past the music. real people, listening to real music, betting on who's next.",
  },
  {
    kicker: "Hear It First.",
    body:
      "the artists you find here haven't been validated by a chart yet. you're not catching up to someone else's taste. you're hearing them first. so is everyone else.",
  },
];

const ARTISTS = [
  "NAVA",
  "SANJH",
  "KASHTI",
  "DHARA",
  "RASA",
  "MONSOON STATE",
  "NOMAD COLLECTIVE",
  "NORTH / SOUTH",
  "ROOHANI",
  "LATIF",
  "BASSLINE BAZAAR",
  "PARCH",
  "EMBER",
  "DUSKWATCH",
  "VERSE VERSE",
  "MALWA",
];

const TAGS = [
  "INDIE POP",
  "NEO-SOUL",
  "BEDROOM POP",
  "LO-FI",
  "ELECTRONIC",
  "ALTERNATIVE",
  "HIP-HOP",
  "JAZZ FUSION",
  "GARAGE",
  "HINDUSTANI",
  "MUMBAI",
  "DELHI",
  "BENGALURU",
  "KOLKATA",
  "PUNE",
  "SHILLONG",
  "GOA",
];

type FadeWindow = {
  in0: number;
  in1: number;
  out0: number;
  out1: number;
};

const FADE_WINDOWS: FadeWindow[] = [
  { in0: 0,    in1: 0,    out0: 0.30, out1: 0.42 },
  { in0: 0.30, in1: 0.42, out0: 0.60, out1: 0.72 },
  { in0: 0.60, in1: 0.72, out0: 999,  out1: 999  },
];

function chunkOpacity(p: number, w: FadeWindow) {
  if (p < w.in0) return 0;
  if (p < w.in1) return (p - w.in0) / Math.max(0.0001, w.in1 - w.in0);
  if (p < w.out0) return 1;
  if (p < w.out1) return 1 - (p - w.out0) / Math.max(0.0001, w.out1 - w.out0);
  return 0;
}

function Marquee({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const row = (
    <div className="flex shrink-0 items-center gap-10 px-5 md:gap-14 md:px-8">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-10 md:gap-14">
          <span className="font-display text-3xl italic text-white/85 md:text-5xl lg:text-6xl">
            {item}
          </span>
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full bg-white/40 md:h-2.5 md:w-2.5"
          />
        </span>
      ))}
    </div>
  );
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        className={`flex w-max ${
          reverse ? "marquee-track-reverse" : "marquee-track"
        }`}
      >
        {row}
        <div aria-hidden>{row}</div>
      </div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const chunkRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let rafId = 0;
    const update = () => {
      rafId = 0;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = Math.max(1, rect.height - vh);
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));

      for (let i = 0; i < chunkRefs.current.length; i++) {
        const el = chunkRefs.current[i];
        if (!el) continue;
        el.style.opacity = String(chunkOpacity(p, FADE_WINDOWS[i]));
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
    <section
      ref={sectionRef}
      className="relative bg-black"
      style={{ height: "300vh" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute -left-40 top-[6%] h-[650px] w-[650px] rounded-full opacity-35"
          style={{
            background:
              "radial-gradient(circle, rgba(201,163,106,0.85) 0%, transparent 62%)",
            filter: "blur(110px)",
          }}
        />
        <div
          className="absolute -right-40 bottom-[8%] h-[780px] w-[780px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(139,42,31,0.9) 0%, transparent 62%)",
            filter: "blur(130px)",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="sticky top-0 z-10 flex h-screen flex-col overflow-hidden">
        <div className="relative py-8 md:py-10">
          <Marquee items={ARTISTS} />
        </div>

        <div className="relative flex flex-1 items-center justify-center px-6 md:px-10">
          {BEATS.map((beat, i) => (
            <div
              key={i}
              ref={(el) => {
                chunkRefs.current[i] = el;
              }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
              style={{
                opacity: i === 0 ? 1 : 0,
                transition: "opacity 140ms linear",
                willChange: "opacity",
              }}
            >
              <div className="mb-6 font-sans text-[11px] font-medium tracking-[0.35em] text-white/75 uppercase md:mb-8 md:text-xs">
                {beat.kicker}
              </div>
              <p className="max-w-4xl font-display text-2xl leading-[1.22] text-white md:text-4xl md:leading-[1.18] lg:text-5xl lg:leading-[1.15]">
                {beat.body}
              </p>
            </div>
          ))}
        </div>

        <div className="relative py-8 md:py-10">
          <Marquee items={TAGS} reverse />
        </div>
      </div>
    </section>
  );
}
