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
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-4">
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
        <div className="font-sans text-[11px] font-medium tracking-[0.4em] text-white/85 uppercase md:text-xs">
          Join the Waitlist
        </div>

        <p className="mt-5 font-display text-3xl leading-[1.15] text-white md:text-5xl lg:text-[3.5rem]">
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
                className={`relative z-10 flex-1 rounded-full px-5 py-2 font-sans text-[11px] font-medium tracking-[0.18em] uppercase transition-colors duration-300 md:text-xs ${
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
                className={`relative z-10 flex-1 rounded-full px-5 py-2 font-sans text-[11px] font-medium tracking-[0.18em] uppercase transition-colors duration-300 md:text-xs ${
                  role === "creator" ? "text-black" : "text-white/75"
                }`}
              >
                I&apos;m a Creator
              </button>
            </div>

            <form
              onSubmit={onSubmit}
              className="mt-5 flex items-center gap-1 rounded-full border border-white/25 bg-white/10 p-1.5 backdrop-blur-md"
            >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              suppressHydrationWarning
              className="w-56 bg-transparent px-5 py-2 text-sm text-white placeholder:text-white/55 outline-none md:w-72"
            />
            <button
              type="submit"
              suppressHydrationWarning
              className="rounded-full bg-white px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/85"
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
