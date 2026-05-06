"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative h-dvh overflow-hidden bg-[#0B0A0B]">
      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-5 md:px-10 lg:px-14 lg:py-6">
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/logos/white-logo-bg-less.png"
            alt=""
            width={32}
            height={32}
            className="h-7 w-7 object-contain md:h-8 md:w-8"
          />
          <span className="font-sans text-lg font-bold tracking-[0.04em] text-white uppercase md:text-xl">
            Yamesa
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          <a
            href="#about"
            className="font-sans text-[15px] text-white transition-colors hover:text-white/70"
          >
            About Us
          </a>
          <a
            href="#waitlist"
            className="font-sans text-[15px] text-white transition-colors hover:text-white/70"
          >
            Contact Us
          </a>
          <a
            href="#waitlist"
            className="rounded-full border border-white/40 px-5 py-2 font-sans text-[13px] font-medium text-white transition-colors hover:border-white hover:bg-white/5"
          >
            Join Waitlist
          </a>
        </div>

        <a
          href="#waitlist"
          className="rounded-full border border-white/40 px-4 py-1.5 font-sans text-[12px] font-medium text-white md:hidden"
        >
          Join Waitlist
        </a>
      </nav>

      {/* Heading */}
      <h1
        className="absolute inset-x-0 z-10 text-center font-heading font-semibold leading-[1] tracking-[0.02em] text-white px-4 top-[11%] text-[6vw] md:text-[5.2vw]"
        style={{ backdropFilter: "blur(2px)" }}
      >
        For those who listen with
        <br />
        <span className="text-white/40">intention not impulse</span>
      </h1>

      {/* Phone */}
      <div
        className="absolute left-1/2 z-0 -translate-x-1/2 top-[28%] w-[42vw] md:top-[26%] md:w-[26vw]"
        style={{ aspectRatio: "663 / 994" }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-[14.9%/9.96%]">
          <Image
            src="/figma-designs-screenshot/assets/mobile-display-asset.png"
            alt=""
            fill
            sizes="(max-width: 767px) 42vw, 30vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Card 1 */}
      <div
        className="absolute z-20 flex items-center rounded-[32px] px-4 py-3 md:rounded-[42px] md:px-5 md:py-4 backdrop-blur-xl"
        style={{
          width: "20%",
          height: "18%",
          top: "37%",
          left: "40%",
          background: "linear-gradient(135deg, rgba(40,40,40,0.5) 0%, rgba(0,0,0,0.85) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.5)",
        }}
      >
        <p className="ml-3 md:ml-5 font-heading text-[1.5vw] font-extrabold leading-[1.3] text-white md:text-[0.9vw]">
          Swipe to discover. Stay to listen.
          <br />
          Reels to full tracks, in one place.
        </p>
      </div>

      {/* Card 2 */}
      <div
        className="absolute z-20 flex items-center rounded-[32px] px-4 py-3 md:rounded-[42px] md:px-5 md:py-4 backdrop-blur-xl"
        style={{
          width: "16%",
          height: "16%",
          top: "60%",
          left: "27%",
          background: "linear-gradient(135deg, rgba(40,40,40,0.5) 0%, rgba(0,0,0,0.85) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.5)",
        }}
      >
        <p className="font-heading text-[1.5vw] font-extrabold leading-[1.3] text-white md:text-[0.8vw]">
          Find what&apos;s next.
          <br />
          Not what an algorithm decides.
        </p>
      </div>

      {/* Card 3 */}
      <div
        className="absolute z-20 flex items-center rounded-[32px] px-4 py-3 md:rounded-[42px] md:px-5 md:py-4 backdrop-blur-xl"
        style={{
          width: "16%",
          height: "16%",
          top: "73%",
          left: "54%",
          background: "linear-gradient(135deg, rgba(40,40,40,0.5) 0%, rgba(0,0,0,0.85) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.5)",
        }}
      >
        <p className="font-heading text-[1.5vw] font-extrabold leading-[1.1] text-white md:text-[0.95vw]">
          Hear them first.
          <br />
          Before the world does.
        </p>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute inset-x-0 bottom-0 z-30 pointer-events-none"
        style={{
          height: "22.4%",
          background: "linear-gradient(360deg, #0B0A0B 20.35%, rgba(1, 1, 1, 0) 100%)",
        }}
      />
    </section>
  );
}
