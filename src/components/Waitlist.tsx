"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
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
            You&apos;re on the role.
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-10 flex items-center gap-1 rounded-full border border-white/25 bg-white/10 p-1.5 backdrop-blur-md"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-56 bg-transparent px-5 py-2 text-sm text-white placeholder:text-white/55 outline-none md:w-72"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/85"
            >
              Notify Me
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
