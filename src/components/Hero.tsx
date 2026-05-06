"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative h-dvh overflow-hidden bg-[#0B0A0B]">

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
