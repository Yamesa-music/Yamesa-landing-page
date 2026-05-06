"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const travelingBustRef = useRef<HTMLDivElement>(null);
  const zone2BustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const travelingBust = travelingBustRef.current;
    const zone2Bust = zone2BustRef.current;
    if (!section || !travelingBust || !zone2Bust) return;

    let rafId = 0;
    const update = () => {
      rafId = 0;

      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        travelingBust.style.opacity = "0";
        zone2Bust.style.opacity = "1";
        return;
      }

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const sectionVisible = rect.bottom > 0 && rect.top < vh;

      if (!sectionVisible) {
        travelingBust.style.opacity = "0";
        zone2Bust.style.opacity = "0";
        return;
      }

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / vh));
      const eased = progress * progress * (3 - 2 * progress);

      const dxVw = -eased * 25;
      const dyVh = -eased * 6;
      travelingBust.style.transform = `translate3d(calc(-50% + ${dxVw.toFixed(3)}vw), calc(-50% + ${dyVh.toFixed(3)}vh), 0)`;

      const FADE_HALF = 0.04 * vh;
      const boundary = vh;
      let travelingHandoff: number;
      let zone2Handoff: number;
      if (scrolled < boundary - FADE_HALF) {
        travelingHandoff = 1;
        zone2Handoff = 0;
      } else if (scrolled < boundary + FADE_HALF) {
        const t = (scrolled - (boundary - FADE_HALF)) / (FADE_HALF * 2);
        travelingHandoff = 1 - t;
        zone2Handoff = t;
      } else {
        travelingHandoff = 0;
        zone2Handoff = 1;
      }

      const entryFade = Math.max(0, Math.min(1, (vh - rect.top) / (vh * 0.25)));
      const exitFade = Math.max(0, Math.min(1, rect.bottom / (vh * 0.35)));
      const visibilityFade = Math.min(entryFade, exitFade, 1);

      travelingBust.style.opacity = String(travelingHandoff * visibilityFade);
      zone2Bust.style.opacity = String(zone2Handoff * visibilityFade);
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
    <section id="hero" ref={sectionRef} className="relative overflow-hidden bg-black">
      <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-2 pt-[6vh] pb-[1vh] md:min-h-screen md:px-4">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{ transform: "translateZ(0)" }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(179.75deg, rgba(0,0,0,0.15) 0.22%, rgba(0,0,0,0) 52.11%), linear-gradient(75.21deg, rgba(255,250,254,0) 63.57%, rgba(224,109,201,0.126) 100.24%), linear-gradient(39.86deg, rgba(0,0,0,0.2) 39.65%, rgba(102,102,102,0.2) 93.23%)",
            }}
          />
        </div>

        <h1 className="relative z-10 font-display font-black uppercase leading-[0.9] tracking-[-0.02em] text-white whitespace-nowrap select-none text-[24vw] md:text-[min(30vw,32vh,26rem)]">
          Yamesa
        </h1>

        <div
          aria-hidden
          className="invisible relative hidden w-[min(50vw,58vh,720px)] -mt-[min(28vw,24vh)] md:block"
          style={{ aspectRatio: "2 / 3" }}
        />
      </div>

      <div className="relative grid grid-cols-1 overflow-hidden md:min-h-screen md:grid-cols-2">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: "linear-gradient(179.75deg, rgba(0,0,0,0.15) 0.22%, rgba(0,0,0,0) 52.11%), linear-gradient(75.21deg, rgba(255,250,254,0) 63.57%, rgba(224,109,201,0.126) 100.24%), linear-gradient(39.86deg, rgba(0,0,0,0.2) 39.65%, rgba(102,102,102,0.2) 93.23%)",
          }}
        />

        <div className="relative flex items-center justify-center px-6 pt-10 pb-4 md:px-8 md:py-20">
          <div
            ref={zone2BustRef}
            className="w-[min(70vw,55vh,420px)] md:w-[min(48vw,58vh,580px)]"
            style={{ opacity: 0, willChange: "opacity" }}
          >
            <Image
              src="/waitlist-asset.png"
              alt=""
              width={800}
              height={1200}
              sizes="(max-width: 767px) 70vw, 580px"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center px-6 pt-2 pb-14 text-center md:items-start md:px-14 md:py-20 md:text-left lg:px-20">
          <p className="font-display italic text-white/90 text-[1.35rem] leading-[1.22] md:text-3xl lg:text-[2.25rem] lg:leading-[1.15]">
            For those who listen with intention, not impulse.
          </p>
          <div className="mt-5 w-fit max-w-full rounded-full border border-white/25 px-4 py-2 font-sans text-[9px] font-medium tracking-[0.24em] text-white/85 uppercase md:mt-10 md:whitespace-nowrap md:px-5 md:text-xs md:tracking-[0.32em]">
            <span className="md:hidden">Beyond The Algorithm</span>
            <span className="hidden md:inline">
              Discovery Redefined Beyond The Algorithm
            </span>
          </div>
        </div>
      </div>

      <div
        ref={travelingBustRef}
        className="pointer-events-none fixed z-30 w-[min(48vw,58vh,580px)]"
        style={{
          left: "50%",
          top: "56%",
          transform: "translate3d(-50%, -50%, 0)",
          opacity: 0,
          willChange: "transform, opacity",
        }}
      >
        <Image
          src="/waitlist-asset.png"
          alt=""
          width={800}
          height={1200}
          priority
          sizes="580px"
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  );
}
