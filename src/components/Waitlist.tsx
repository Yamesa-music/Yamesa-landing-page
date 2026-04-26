"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

type Role = "listener" | "creator";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("listener");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section id="waitlist" className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-black px-6 md:min-h-screen md:px-4">
      <Image
        src="/download (2).webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center text-center">
        <div className="font-sans text-[10px] font-medium tracking-[0.36em] text-white/85 uppercase md:text-xs md:tracking-[0.4em]">
          Join the Waitlist
        </div>

        <p className="mt-5 font-display text-[1.875rem] leading-[1.15] text-white md:text-5xl lg:text-[3.5rem]">
          Be first to hear what you&apos;ve been missing.
        </p>

        {submitted ? (
          <div className="mt-10 font-sans text-sm tracking-[0.18em] text-white/90 uppercase">
            You&apos;re on the list.
          </div>
        ) : (
          <>
            <div
              role="radiogroup"
              aria-label="I am a"
              className="relative mt-9 inline-flex items-stretch rounded-full border border-white/25 bg-white/5 p-1 backdrop-blur-md"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-1 top-1 rounded-full bg-white"
                style={{
                  left: "4px",
                  width: "calc(50% - 4px)",
                  transform:
                    role === "creator" ? "translateX(100%)" : "translateX(0)",
                  transition:
                    "transform 320ms cubic-bezier(0.65, 0, 0.35, 1)",
                  willChange: "transform",
                }}
              />
              <button
                type="button"
                role="radio"
                aria-checked={role === "listener"}
                onClick={() => setRole("listener")}
                suppressHydrationWarning
                className={`relative z-10 flex-1 whitespace-nowrap rounded-full px-5 py-2.5 font-sans text-[10px] font-medium tracking-[0.16em] uppercase transition-colors duration-300 md:py-2 md:text-xs md:tracking-[0.18em] ${
                  role === "listener" ? "text-black" : "text-white/75"
                }`}
              >
                I&apos;m a Listener
              </button>
              <button
                type="button"
                role="radio"
                aria-checked={role === "creator"}
                onClick={() => setRole("creator")}
                suppressHydrationWarning
                className={`relative z-10 flex-1 whitespace-nowrap rounded-full px-5 py-2.5 font-sans text-[10px] font-medium tracking-[0.16em] uppercase transition-colors duration-300 md:py-2 md:text-xs md:tracking-[0.18em] ${
                  role === "creator" ? "text-black" : "text-white/75"
                }`}
              >
                I&apos;m a Creator
              </button>
            </div>

            <form
              onSubmit={onSubmit}
              className="mt-5 flex w-full max-w-md items-center gap-1 rounded-full border border-white/25 bg-white/10 p-1.5 backdrop-blur-md"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                suppressHydrationWarning
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-base text-white placeholder:text-white/55 outline-none md:px-5 md:py-2 md:text-sm"
              />
              <button
                type="submit"
                suppressHydrationWarning
                className="shrink-0 whitespace-nowrap rounded-full bg-white px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-white/85 md:px-6 md:py-2.5 md:text-[11px] md:tracking-[0.18em]"
              >
                Notify Me
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
