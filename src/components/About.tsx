"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Chunk = {
  kicker: string;
  body: string;
  asset: string;
  ambient: "float" | "spin";
  bg: string;
  accent: { color: string; x: string; y: string; size: string };
  glow: string;
};

const CHUNKS: Chunk[] = [
  {
    kicker: "The Platform",
    body:
      "Yamesa is a curated platform for the music the algorithm keeps quiet. Real ears, real taste, real artists. No payola, no autoplay, no feed optimized to keep you scrolling past the music.",
    asset: "/logos/white-logo-bg-less.png",
    ambient: "float",
    bg: "#0B0707",
    accent: {
      color: "rgba(201, 163, 106, 0.28)",
      x: "-10%",
      y: "20%",
      size: "620px",
    },
    glow: "rgba(201, 163, 106, 0.22)",
  },
  {
    kicker: "The Feed",
    body:
      "Scroll through short reels of music you've never heard. Every artist is handpicked, every track chosen by real listeners. Discovery that actually discovers, one reel at a time.",
    asset: "/reel-asset-bg-less.png",
    ambient: "float",
    bg: "#170A0A",
    accent: {
      color: "rgba(176, 36, 36, 0.32)",
      x: "-12%",
      y: "55%",
      size: "720px",
    },
    glow: "rgba(196, 46, 38, 0.24)",
  },
  {
    kicker: "The Listen",
    body:
      "Press play and keep going. Yamesa runs in the background of your phone, your day, your commute. Discover, save, and stream while your phone does everything else.",
    asset: "/vinyl-bg-less.png",
    ambient: "spin",
    bg: "#110B06",
    accent: {
      color: "rgba(201, 163, 106, 0.36)",
      x: "-8%",
      y: "30%",
      size: "680px",
    },
    glow: "rgba(211, 150, 70, 0.22)",
  },
];

const FADE_HALF = 0.06;
const SLIDE_DISTANCE = 48;
const DRIFT_DISTANCE = 140;
const BOUNDARIES = [0.33, 0.66];

function smoothstep(t: number): number {
  const x = Math.max(0, Math.min(1, t));
  return x * x * (3 - 2 * x);
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const paraRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const wordsRefs = useRef<(HTMLSpanElement | null)[][]>(
    CHUNKS.map(() => [])
  );
  const assetRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let rafId = 0;
    const update = () => {
      rafId = 0;
      const vh = window.innerHeight;

      const REVEAL_START = vh * 0.82;
      const REVEAL_END = vh * 0.4;
      const span = REVEAL_START - REVEAL_END;
      const LINE_STAGGER = 110;

      for (let i = 0; i < CHUNKS.length; i++) {
        const para = paraRefs.current[i];
        if (!para) continue;
        const paraRect = para.getBoundingClientRect();
        const paraLeft = paraRect.left;
        const paraWidth = Math.max(1, paraRect.width);
        const words = wordsRefs.current[i];
        for (const el of words) {
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
          else {
            const raw = (REVEAL_START - effectiveY) / span;
            opacity = 0.15 + smoothstep(raw) * 0.85;
          }
          el.style.opacity = String(opacity);
        }
      }

      const rect = section.getBoundingClientRect();
      const total = Math.max(1, rect.height - vh);
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / total));

      const n = CHUNKS.length;

      for (let i = 0; i < n; i++) {
        const el = assetRefs.current[i];
        if (!el) continue;

        const startBoundary = i === 0 ? -1 : BOUNDARIES[i - 1];
        const endBoundary = i === n - 1 ? 2 : BOUNDARIES[i];

        const startBegin = i === 0 ? -1 : startBoundary - FADE_HALF;
        const startEnd = i === 0 ? -1 : startBoundary + FADE_HALF;
        const endBegin = i === n - 1 ? 2 : endBoundary - FADE_HALF;
        const endEnd = i === n - 1 ? 2 : endBoundary + FADE_HALF;

        const stableStart = i === 0 ? 0 : startEnd;
        const stableEnd = i === n - 1 ? 1 : endBegin;
        const stableSpan = Math.max(0.0001, stableEnd - stableStart);

        let opacity: number;
        let y: number;

        if (progress < startBegin) {
          opacity = 0;
          y = -SLIDE_DISTANCE;
        } else if (progress < startEnd) {
          const raw = (progress - startBegin) / (startEnd - startBegin);
          const t = smoothstep(raw);
          opacity = t;
          y = -SLIDE_DISTANCE + t * SLIDE_DISTANCE;
        } else if (progress < endBegin) {
          const raw = (progress - stableStart) / stableSpan;
          const t = smoothstep(Math.max(0, Math.min(1, raw)));
          opacity = 1;
          y = t * DRIFT_DISTANCE;
        } else if (progress < endEnd) {
          const raw = (progress - endBegin) / (endEnd - endBegin);
          const t = smoothstep(raw);
          opacity = 1 - t;
          y = DRIFT_DISTANCE + t * SLIDE_DISTANCE;
        } else {
          opacity = 0;
          y = DRIFT_DISTANCE + SLIDE_DISTANCE;
        }

        el.style.opacity = String(opacity);
        el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
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
    <section ref={sectionRef} className="relative bg-black">
      {CHUNKS.map((chunk, i) => {
        const words = chunk.body.split(" ");
        if (!wordsRefs.current[i]) wordsRefs.current[i] = [];
        return (
          <div
            key={i}
            className="relative flex min-h-screen items-center overflow-hidden"
            style={{ backgroundColor: chunk.bg }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 overflow-hidden"
            >
              <div
                className="absolute rounded-full"
                style={{
                  left: chunk.accent.x,
                  top: chunk.accent.y,
                  width: chunk.accent.size,
                  height: chunk.accent.size,
                  background: `radial-gradient(circle, ${chunk.accent.color} 0%, transparent 62%)`,
                  filter: "blur(120px)",
                }}
              />
              <div className="absolute inset-0 bg-black/35" />
            </div>

            <div className="relative w-full px-8 py-24 md:w-[55%] md:px-14 md:py-32 lg:px-20 lg:py-40">
              <div className="max-w-[720px]">
                <div className="mb-8 font-sans text-[11px] font-medium tracking-[0.35em] text-white/70 uppercase md:mb-10 md:text-xs">
                  {chunk.kicker}
                </div>
                <p
                  ref={(el) => {
                    paraRefs.current[i] = el;
                  }}
                  className="font-display text-3xl leading-[1.18] text-white md:text-4xl lg:text-[3rem] lg:leading-[1.12]"
                >
                  {words.map((word, wi) => (
                    <span key={wi}>
                      <span
                        ref={(el) => {
                          wordsRefs.current[i][wi] = el;
                        }}
                        style={{
                          opacity: 0.15,
                          transition: "opacity 80ms linear",
                        }}
                      >
                        {word}
                      </span>
                      {wi < words.length - 1 && " "}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] md:block">
        <div className="sticky top-0 flex h-screen items-center justify-center p-10">
          <div className="relative h-[min(50vh,440px)] w-[min(38vh,360px)]">
            {CHUNKS.map((chunk, i) => (
              <div
                key={i}
                ref={(el) => {
                  assetRefs.current[i] = el;
                }}
                className="absolute inset-0"
                style={{
                  opacity: i === 0 ? 1 : 0,
                  willChange: "opacity, transform",
                }}
              >
                <div
                  className="absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${chunk.glow} 0%, transparent 62%)`,
                    filter: "blur(70px)",
                  }}
                />
                <div
                  className={`relative h-full w-full ${
                    chunk.ambient === "spin" ? "asset-spin" : "asset-float"
                  }`}
                >
                  <Image
                    src={chunk.asset}
                    alt=""
                    fill
                    sizes="360px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
