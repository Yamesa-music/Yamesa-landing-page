"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const n = new Date();
      const h = String(n.getHours()).padStart(2, "0");
      const m = String(n.getMinutes()).padStart(2, "0");
      const s = String(n.getSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="px-6 pt-10 text-sm md:hidden">
        <div className="flex items-center justify-between">
          <div className="font-sans">Yamesa&reg;</div>
          <div
            className="font-sans tabular-nums text-[11px] text-white/55"
            suppressHydrationWarning
          >
            {time ? `${time} Bangalore` : " "}
          </div>
        </div>
        <div className="mt-1.5 font-sans text-white/60">
          Curated Music Discovery
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-[13px] text-white/60">
          <a href="#about" className="transition-colors hover:text-white">
            About
          </a>
          <a href="#team" className="transition-colors hover:text-white">
            Team
          </a>
          <a href="#waitlist" className="transition-colors hover:text-white">
            Waitlist
          </a>
          <a
            href="#waitlist"
            className="ml-auto text-white transition-colors hover:text-white/70"
          >
            Join waitlist →
          </a>
        </div>
      </div>

      <div className="hidden gap-6 px-8 pt-12 text-sm md:grid md:grid-cols-5 md:px-14 md:pt-16 lg:px-20">
        <div className="font-sans">Yamesa&reg;</div>
        <div className="font-sans text-white/60">Curated Music Discovery</div>
        <div
          className="font-sans tabular-nums text-white/60"
          suppressHydrationWarning
        >
          {time ? `${time} Bangalore` : " "}
        </div>
        <div className="space-y-1 font-sans leading-snug text-white/60">
          <a
            href="#about"
            className="block transition-colors hover:text-white"
          >
            About
          </a>
          <a
            href="#team"
            className="block transition-colors hover:text-white"
          >
            Team
          </a>
          <a
            href="#waitlist"
            className="block transition-colors hover:text-white"
          >
            Waitlist
          </a>
        </div>
        <div className="font-sans md:text-right">
          <a
            href="#waitlist"
            className="transition-colors hover:text-white/70"
          >
            Join waitlist!
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-12 px-6 pb-6 pt-14 md:grid-cols-3 md:gap-6 md:px-14 md:pb-8 md:pt-20 lg:px-20 lg:pb-10 lg:pt-24">
        <div>
          <p className="font-heading text-[1.5rem] font-semibold leading-tight text-white/90 md:text-[1.75rem] lg:text-[1.875rem]">
            Music deserves to be
            <br />
            discovered, not decided.
          </p>
          <p className="mt-4 font-heading text-[13px] text-white/40">
            The Yamesa Philosophy
          </p>
        </div>

        <div className="space-y-6 text-sm">
          <div>

          </div>
          <div className="leading-relaxed text-white/70">
            Bangalore
            <br />
            India
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/70 transition-colors hover:text-white"
          >
            <span aria-hidden className="text-xs leading-none">
              &#8599;
            </span>
            Instagram
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/70 transition-colors hover:text-white"
          >
            <span aria-hidden className="text-xs leading-none">
              &#8599;
            </span>
            X
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/70 transition-colors hover:text-white"
          >
            <span aria-hidden className="text-xs leading-none">
              &#8599;
            </span>
            LinkedIn
          </a>
        </div>
      </div>

      <div className="relative px-4 pb-6 md:px-8 md:pb-8 lg:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute right-[4vw] top-1/2 hidden w-[min(40vh,380px)] -translate-y-1/2 opacity-45 md:block"
        >
          <Image
            src="/logos/white-logo-bg-less.png"
            alt=""
            width={400}
            height={400}
            sizes="200px"
            className="h-auto w-full object-contain"
          />
        </div>
        <h2 className="relative z-10 select-none font-display text-[24vw] font-bold leading-[0.82] tracking-[-0.03em] text-white md:text-[min(20vw,42vh,20rem)]">
          Yamesa
        </h2>
      </div>
    </footer>
  );
}
