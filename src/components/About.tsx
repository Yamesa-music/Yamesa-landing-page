"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const KICKER = "Not Every Artist Gets Heard.";

const PARAGRAPHS = [
  "Yamesa is a curated platform for the music the algorithm keeps quiet. Real ears, real taste, real artists. No payola, no autoplay.",
  "Scroll through short reels of music you've never heard. Every artist is handpicked, every track chosen by real listeners. Discovery that actually discovers, one reel at a time.",
  "Press play and keep going. Yamesa runs in the background of your phone, your day, your commute. Discover, save, and stream while your phone does everything else.",
];

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.registerPlugin(ScrollTrigger, SplitText);

    let cancelled = false;
    let ctx: gsap.Context | undefined;

    const init = () => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        const paragraphs =
          container.querySelectorAll<HTMLElement>(".about-text");
        const splits: SplitText[] = [];

        paragraphs.forEach((p) => {
          const split = SplitText.create(p, {
            type: "lines",
            linesClass: "about-line",
          });
          splits.push(split);

          split.lines.forEach((line) => {
            gsap.to(line, {
              backgroundPositionX: 0,
              ease: "none",
              scrollTrigger: {
                trigger: line as HTMLElement,
                scrub: true,
                start: "top 70%",
                end: "top 45%",
              },
            });
          });
        });

        return () => {
          splits.forEach((s) => s.revert());
        };
      }, container);
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(init);
    } else {
      init();
    }

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative overflow-hidden bg-black"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ transform: "translateZ(0)" }}
      >
        <div
          className="absolute -left-[10%] top-[20%] h-[560px] w-[560px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(201,163,106,0.22) 0%, transparent 62%)",
            filter: "blur(90px)",
            transform: "translateZ(0)",
          }}
        />
        <div
          className="absolute -right-[12%] top-[62%] h-[640px] w-[640px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(176,36,36,0.22) 0%, transparent 62%)",
            filter: "blur(95px)",
            transform: "translateZ(0)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-[10vh] pb-[18vh] md:px-12 md:pt-[12vh] md:pb-[22vh] lg:px-20 lg:pt-[14vh] lg:pb-[26vh]">
        <div className="md:ml-[14%] lg:ml-[22%]">
          <div className="max-w-[640px]">
            <div className="mb-14 font-sans text-[10px] font-semibold tracking-[0.32em] text-[#EDEDED] uppercase md:mb-20 md:text-[11px]">
              {KICKER}
            </div>

            <div className="space-y-9 md:space-y-16 lg:space-y-20">
              {PARAGRAPHS.map((paragraph, i) => (
                <p
                  key={i}
                  className="about-text font-display font-normal tracking-[-0.012em] text-[#EDEDED] text-[1.5rem] leading-[1.28] md:text-[2.5rem] md:leading-[1.18] lg:text-[3.25rem] lg:leading-[1.12]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
