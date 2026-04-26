"use client";

import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";

export default function Footer() {
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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

  function onSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  }

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="px-6 pt-10 text-sm md:hidden">
        <div className="flex items-center justify-between">
          <div className="font-sans">Yamesa&reg;</div>
          <div
            className="font-sans tabular-nums text-[11px] text-white/55"
            suppressHydrationWarning
          >
            {time ? `${time} Mumbai` : " "}
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
          {time ? `${time} Mumbai` : " "}
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
          <p className="mb-6 font-display text-[1.625rem] italic leading-tight md:mb-8 md:text-[1.75rem] lg:text-3xl">
            Subscribe to our
            <br />
            newsletter
          </p>
          {subscribed ? (
            <div className="font-sans text-sm tracking-wide text-white/80">
              You&apos;re subscribed.
            </div>
          ) : (
            <form
              onSubmit={onSubscribe}
              className="flex items-center border-b border-white/30 pb-1 transition-colors focus-within:border-white/70"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Address mail"
                suppressHydrationWarning
                className="flex-1 bg-transparent py-2 text-base text-white outline-none placeholder:text-white/40 md:text-sm"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                suppressHydrationWarning
                className="ml-3 text-white/60 transition-colors hover:text-white"
              >
                <svg
                  viewBox="0 0 14 14"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
                </svg>
              </button>
            </form>
          )}
        </div>

        <div className="space-y-6 text-sm">
          <div>
            <a
              href="mailto:contact@yamesa.com"
              className="transition-colors hover:text-white/70"
            >
              contact@yamesa.com
            </a>
          </div>
          <div className="leading-relaxed text-white/70">
            Mumbai
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
