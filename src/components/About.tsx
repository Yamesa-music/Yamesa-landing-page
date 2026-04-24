"use client";

import { useEffect, useRef } from "react";

const CHUNKS = [
  "Streaming scaled on volume, not on taste. Most artists never made it past the algorithm.",
  "Yamesa is curated music discovery. Every artist is handpicked by real ears, not ranked by plays.",
  "Hear tomorrow's favorites before the charts do. No payola, no autoplay, no algorithm in the way.",
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
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let rafId = 0;
    const update = () => {
      rafId = 0;
      const c1 = text1Ref.current;
      const c2 = text2Ref.current;
      if (!c1 || !c2) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = Math.max(1, rect.height - vh);
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / total));

      const segments = CHUNKS.length - 1;
      const scaled = Math.min(progress * segments, segments - 0.0001);
      const segIdx = Math.floor(scaled);
      const localProgress = scaled - segIdx;

      let fraction: number;
      if (localProgress < 0.25) fraction = 0;
      else if (localProgress > 0.75) fraction = 1;
      else fraction = (localProgress - 0.25) / 0.5;

      c1.textContent = CHUNKS[segIdx] ?? "";
      c2.textContent = CHUNKS[segIdx + 1] ?? "";

      if (fraction === 0) {
        c1.style.filter = "none";
        c1.style.opacity = "1";
        c2.style.filter = "none";
        c2.style.opacity = "0";
      } else if (fraction === 1) {
        c1.style.filter = "none";
        c1.style.opacity = "0";
        c2.style.filter = "none";
        c2.style.opacity = "1";
      } else {
        const inv = 1 - fraction;
        c1.style.filter = `blur(${Math.min(8 / inv - 8, 100)}px)`;
        c1.style.opacity = String(Math.pow(inv, 0.4));
        c2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        c2.style.opacity = String(Math.pow(fraction, 0.4));
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
          <div
            className="relative mx-auto h-[4.5em] w-full max-w-5xl text-center font-display text-2xl leading-[1.2] text-white md:text-4xl lg:text-[3.25rem] lg:leading-[1.15]"
            style={{ filter: "url(#about-morph-threshold) blur(0.6px)" }}
          >
            <span
              ref={text1Ref}
              className="absolute inset-x-0 top-0 inline-block w-full"
            />
            <span
              ref={text2Ref}
              className="absolute inset-x-0 top-0 inline-block w-full"
            />
          </div>

          <svg aria-hidden="true" className="fixed h-0 w-0">
            <defs>
              <filter id="about-morph-threshold">
                <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="1 0 0 0 0
                          0 1 0 0 0
                          0 0 1 0 0
                          0 0 0 255 -140"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <div className="relative py-8 md:py-10">
          <Marquee items={TAGS} reverse />
        </div>
      </div>
    </section>
  );
}
