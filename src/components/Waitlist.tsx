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
    <section id="waitlist" className="relative min-h-dvh overflow-hidden bg-[#0B0A0B] flex items-center">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-8">
        {/* Left side */}
        <div className="md:w-[40%]">
          <span className="font-heading text-[11px] font-medium tracking-[0.3em] text-white/50 uppercase">
            Early Access
          </span>
          <h2 className="mt-5 font-heading font-bold text-[2.5rem] leading-[1.1] text-left md:text-[3rem] lg:text-[3.2rem]">
            <span className="text-white">Be the first to</span>
            <br />
            <span className="bg-gradient-to-r from-[#FF69B4] via-[#FFB347] to-[#FF69B4] bg-clip-text text-transparent bg-[length:200%_100%]">
              experience
            </span>{" "}
            <span className="text-white">it</span>
          </h2>
          <p className="mt-5 font-heading font-medium text-[0.95rem] leading-[1.4] text-white/50 text-left max-w-[360px]">
            Join the waitlist for early access and be among the first to know
          </p>
        </div>

        {/* Right side — Ticket card */}
        <div className="md:w-[60%] lg:w-[58%]">
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(179.75deg, rgba(0,0,0,0.15) 0.22%, rgba(0,0,0,0) 52.11%), linear-gradient(75.21deg, rgba(255,250,254,0) 63.57%, rgba(224,109,201,0.126) 100.24%), linear-gradient(39.86deg, rgba(0,0,0,0.2) 39.65%, rgba(102,102,102,0.2) 93.23%)",
              border: "2px solid rgba(255,255,255,0.39)",
              boxShadow: "0px 20px 60px 0px rgba(234,198,227,0.13)",
            }}
          >
            <div className="flex">
              {/* Main ticket area */}
              <div className="flex-1 pl-8 pr-6 py-8 md:pl-10 md:pr-8 md:py-10">
                {/* Logo */}
                <div className="flex items-center gap-2.5 mb-14">
                  <Image
                    src="/logos/white-logo-bg-less.png"
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                  <span className="font-sans text-[15px] font-semibold text-white/70 tracking-wide">
                    YAMESA
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-[1.8rem] md:text-[2.2rem] text-white leading-[1.1]">
                  All Access Pass
                </h3>
                <p className="mt-2 font-heading text-[14px] text-white/40">
                  Access, before the rest.
                </p>

                {/* Form */}
                {submitted ? (
                  <div className="mt-10 font-heading text-sm text-white/80">
                    You&apos;re on the list. We&apos;ll be in touch soon.
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="mt-10 flex items-center rounded-[50px] max-w-[447px] h-[46px]" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)", backdropFilter: "blur(40px) saturate(2)", WebkitBackdropFilter: "blur(40px) saturate(2)", border: "1.5px solid rgba(255,255,255,0.28)", boxShadow: "inset 0 1px 1px rgba(255,255,255,0.25), inset 0 -1px 1px rgba(0,0,0,0.15), 0 2px 12px rgba(0,0,0,0.3)" }}>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      suppressHydrationWarning
                      className="flex-1 bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/35 outline-none"
                    />
                    <button
                      type="submit"
                      suppressHydrationWarning
                      className="shrink-0 rounded-[50px] px-10 py-2.5 text-[13px] font-semibold text-white transition"
                      style={{
                        background: "linear-gradient(180deg, rgba(255,91,145,0.2) 0%, rgba(254,55,86,0.12) 100%)",
                        backdropFilter: "blur(20px) saturate(1.8)",
                        WebkitBackdropFilter: "blur(20px) saturate(1.8)",
                        border: "1.5px solid rgba(255,100,150,0.3)",
                        boxShadow: "inset 0 1px 1px rgba(255,180,200,0.2), inset 0 -1px 1px rgba(0,0,0,0.15), 0 2px 12px rgba(255,80,120,0.1)",
                      }}
                    >
                      Join Waitlist
                    </button>
                  </form>
                )}
              </div>

              {/* Stub / right section with dashed border */}
              <div className="hidden md:flex flex-col justify-center w-[200px] border-l border-dashed border-white/20 pl-6 pr-5 py-8">
                <span className="font-heading text-[11px] font-medium tracking-[0.2em] text-white/40 uppercase">
                  Admit One
                </span>
                <span className="mt-4 font-heading text-[2.2rem] font-bold text-white/70 tracking-wider">
                  000148
                </span>
                <p className="mt-5 font-heading text-[10px] font-semibold text-white/50 tracking-wide">
                  Discover YAMESA early.
                </p>
                <p className="font-heading text-[13px] text-white/60 mt-1">
                  We will be in touch soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
