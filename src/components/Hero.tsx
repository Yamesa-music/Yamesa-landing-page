"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#0B0A0B]">
      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="relative hidden md:block h-dvh">
        {/* Heading */}
        <h1
          className="absolute inset-x-0 z-10 text-center font-heading font-semibold leading-[1] tracking-[0.02em] text-white px-4 top-[11%] text-[5.2vw]"
          style={{ backdropFilter: "blur(2px)" }}
        >
          For those who listen with
          <br />
          <span className="text-white/40">intention not impulse</span>
        </h1>

        {/* Phone */}
        <div
          className="absolute left-1/2 z-0 -translate-x-1/2 top-[26%] w-[26vw]"
          style={{ aspectRatio: "663 / 994" }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-[14.9%/9.96%]">
            <Image
              src="/figma-designs-screenshot/assets/mobile-display-asset.png"
              alt=""
              fill
              sizes="30vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Card 1 — Mini player */}
        <div
          className="absolute z-20 flex flex-col gap-4 rounded-[42px] p-5 backdrop-blur-xl"
          style={{
            width: "20%",
            top: "35%",
            left: "40%",
            background: "linear-gradient(135deg, rgba(40,40,40,0.5) 0%, rgba(0,0,0,0.85) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.5)",
          }}
        >
          <div className="flex items-start gap-3">
            <Image
              src="/vectors/sound-wave-icon.png"
              alt=""
              width={48}
              height={48}
              className="w-[18%] h-auto opacity-90"
            />
            <div>
              <p className="font-heading text-[0.9vw] font-bold leading-[1.4] text-white">
                Swipe to discover.
                <br />
                Stay to listen.
              </p>
              <p className="font-heading text-[0.7vw] leading-[1.4] text-white/50">
                Reels to full tracks, in one place
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between mb-1">
              <span className="font-heading text-[0.6vw] text-white/50">1:15</span>
              <span className="font-heading text-[0.6vw] text-white/50">3:42</span>
            </div>
            <div className="relative w-full h-[2px] bg-white/20 rounded-full">
              <div className="absolute left-0 top-0 h-full w-[35%] bg-white/60 rounded-full" />
              <div className="absolute top-1/2 -translate-y-1/2 left-[35%] w-[6px] h-[6px] bg-white rounded-full" />
            </div>
          </div>
        </div>

        {/* Card 2 — Now playing */}
        <div
          className="absolute z-20 flex flex-col gap-4 rounded-[42px] p-5 backdrop-blur-xl"
          style={{
            width: "18%",
            top: "60%",
            left: "26%",
            background: "linear-gradient(135deg, rgba(40,40,40,0.5) 0%, rgba(0,0,0,0.85) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.5)",
          }}
        >
          <div className="flex items-center gap-3">
            <Image
              src="/vectors/album-cover.png"
              alt=""
              width={56}
              height={56}
              className="w-[18%] h-auto rounded-[6px]"
            />
            <div>
              <p className="font-heading text-[0.9vw] font-bold leading-[1.4] text-white">
                Find what&apos;s next.
              </p>
              <p className="font-heading text-[0.7vw] leading-[1.4] text-white/50">
                Not what an algorithm decides
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between px-1">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="opacity-70">
              <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M4 4l17 17" />
            </svg>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white" className="opacity-70">
              <polygon points="19,20 9,12 19,4" /><line x1="5" y1="4" x2="5" y2="20" stroke="white" strokeWidth="2" />
            </svg>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="opacity-90">
              <circle cx="12" cy="12" r="10" /><polygon points="10,8 16,12 10,16" fill="white" stroke="none" />
            </svg>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white" className="opacity-70">
              <polygon points="5,4 15,12 5,20" /><line x1="19" y1="4" x2="19" y2="20" stroke="white" strokeWidth="2" />
            </svg>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,105,180,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        </div>

        {/* Card 3 — Early access CTA */}
        <div
          className="absolute z-20 flex items-center gap-2 rounded-[42px] pl-5 pr-3 py-4 backdrop-blur-xl"
          style={{
            width: "17%",
            top: "73%",
            left: "55%",
            background: "linear-gradient(135deg, rgba(40,40,40,0.5) 0%, rgba(0,0,0,0.85) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.5)",
          }}
        >
          <div className="flex-1">
            <span className="font-heading text-[0.6vw] font-medium tracking-[0.2em] text-white/40 uppercase">
              Early Access
            </span>
            <p className="font-heading text-[0.9vw] font-bold leading-[1.4] text-white mt-1">
              Hear them first
            </p>
            <p className="font-heading text-[0.75vw] leading-[1.4] text-white/50">
              Before the world does
            </p>
            <a
              href="#waitlist"
              className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 transition"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                <polygon points="5,3 19,12 5,21" />
              </svg>
              <span className="font-heading text-[0.65vw] font-medium text-white">Join Waitlist</span>
            </a>
          </div>
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-full"
            style={{
              width: "3.5vw",
              height: "3.5vw",
              background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "inset 0 1px 1px rgba(255,255,255,0.1), 0 4px 16px rgba(0,0,0,0.3)",
            }}
          >
            <Image
              src="/vectors/earbuds.png"
              alt=""
              width={40}
              height={40}
              className="w-[60%] h-auto"
            />
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div
          className="absolute inset-x-0 bottom-0 z-30 pointer-events-none"
          style={{
            height: "22.4%",
            background: "linear-gradient(360deg, #0B0A0B 20.35%, rgba(1, 1, 1, 0) 100%)",
          }}
        />
      </div>

      {/* ===== MOBILE LAYOUT ===== */}
      <div className="relative md:hidden min-h-dvh flex flex-col items-center px-5 pt-20 pb-8">
        {/* Heading */}
        <h1
          className="text-center font-heading font-semibold leading-[1] tracking-[0.02em] text-white text-[9vw]"
        >
          For those who listen with
          <br />
          <span className="text-white/40">intention not impulse</span>
        </h1>

        {/* Phone */}
        <div className="relative mt-8 w-[55vw]" style={{ aspectRatio: "663 / 994" }}>
          <div className="absolute inset-0 overflow-hidden rounded-[14.9%/9.96%]">
            <Image
              src="/figma-designs-screenshot/assets/mobile-display-asset.png"
              alt=""
              fill
              sizes="55vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Cards stacked */}
        <div className="relative z-20 flex flex-col gap-3 w-full mt-6">
          {/* Card 1 — Mini player */}
          <div
            className="flex flex-col gap-3 rounded-[24px] p-4 backdrop-blur-xl"
            style={{
              background: "linear-gradient(135deg, rgba(40,40,40,0.5) 0%, rgba(0,0,0,0.85) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex items-start gap-3">
              <Image
                src="/vectors/sound-wave-icon.png"
                alt=""
                width={32}
                height={32}
                className="w-8 h-8 opacity-90"
              />
              <div>
                <p className="font-heading text-[13px] font-bold leading-[1.4] text-white">
                  Swipe to discover. Stay to listen.
                </p>
                <p className="font-heading text-[11px] leading-[1.4] text-white/50">
                  Reels to full tracks, in one place
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between mb-1">
                <span className="font-heading text-[9px] text-white/50">1:15</span>
                <span className="font-heading text-[9px] text-white/50">3:42</span>
              </div>
              <div className="relative w-full h-[2px] bg-white/20 rounded-full">
                <div className="absolute left-0 top-0 h-full w-[35%] bg-white/60 rounded-full" />
                <div className="absolute top-1/2 -translate-y-1/2 left-[35%] w-[5px] h-[5px] bg-white rounded-full" />
              </div>
            </div>
          </div>

          {/* Card 2 — Now playing */}
          <div
            className="flex flex-col gap-3 rounded-[24px] p-4 backdrop-blur-xl"
            style={{
              background: "linear-gradient(135deg, rgba(40,40,40,0.5) 0%, rgba(0,0,0,0.85) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/vectors/album-cover.png"
                alt=""
                width={40}
                height={40}
                className="w-10 h-10 rounded-[4px]"
              />
              <div>
                <p className="font-heading text-[13px] font-bold leading-[1.4] text-white">
                  Find what&apos;s next.
                </p>
                <p className="font-heading text-[11px] leading-[1.4] text-white/50">
                  Not what an algorithm decides
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between px-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="opacity-70">
                <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M4 4l17 17" />
              </svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" className="opacity-70">
                <polygon points="19,20 9,12 19,4" /><line x1="5" y1="4" x2="5" y2="20" stroke="white" strokeWidth="2" />
              </svg>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="opacity-90">
                <circle cx="12" cy="12" r="10" /><polygon points="10,8 16,12 10,16" fill="white" stroke="none" />
              </svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" className="opacity-70">
                <polygon points="5,4 15,12 5,20" /><line x1="19" y1="4" x2="19" y2="20" stroke="white" strokeWidth="2" />
              </svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,105,180,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
          </div>

          {/* Card 3 — Early access CTA */}
          <div
            className="flex items-center gap-3 rounded-[24px] p-4 backdrop-blur-xl"
            style={{
              background: "linear-gradient(135deg, rgba(40,40,40,0.5) 0%, rgba(0,0,0,0.85) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex-1">
              <span className="font-heading text-[9px] font-medium tracking-[0.2em] text-white/40 uppercase">
                Early Access
              </span>
              <p className="font-heading text-[13px] font-bold leading-[1.4] text-white mt-1">
                Hear them first
              </p>
              <p className="font-heading text-[11px] leading-[1.4] text-white/50">
                Before the world does
              </p>
              <a
                href="#waitlist"
                className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15"
              >
                <svg width="8" height="8" viewBox="0 0 24 24" fill="white">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
                <span className="font-heading text-[10px] font-medium text-white">Join Waitlist</span>
              </a>
            </div>
            <div
              className="flex-shrink-0 flex items-center justify-center rounded-full w-14 h-14"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.1), 0 4px 16px rgba(0,0,0,0.3)",
              }}
            >
              <Image
                src="/vectors/earbuds.png"
                alt=""
                width={32}
                height={32}
                className="w-8 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
