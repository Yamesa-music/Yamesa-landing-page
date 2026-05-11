"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B0A0B]"
    >
      {/* Desktop layout */}
      <div className="relative hidden lg:flex w-full h-dvh mx-auto items-center justify-center">
        <div className="relative w-full" style={{ height: "80%" }}>
          {/* Center heading */}
          <h2
            className="absolute font-heading font-semibold text-center leading-[1.2] flex items-center justify-center"
            style={{
              width: "32%",
              left: "34%",
              top: "30%",
              fontSize: "3.8vw",
            }}
          >
            <span className="bg-gradient-to-r from-[#FF69B4] via-[#FFB347] to-[#FF69B4] bg-clip-text text-transparent bg-[length:200%_100%]">
              No algorithm
              <br />
              No agenda
              <br />
              Just discovery
            </span>
          </h2>

          {/* Oval around "discovery" — Vector 1 */}
          <Image
            src="/vectors/Vector 1.png"
            alt=""
            width={383}
            height={100}
            className="absolute pointer-events-none"
            style={{
              width: "21%",
              height: "auto",
              left: "44%",
              top: "53.5%",
              transform: "rotate(-2.06deg)",
            }}
          />

          {/* Top center text */}
          <div
            className="absolute flex items-center"
            style={{ width: "20%", left: "40%", top: "2%" }}
          >
            <p className="font-heading font-medium text-[1.08vw] leading-[1.2] text-white text-center w-full">
              Most platforms push what already performs, leaving much music unheard.{" "}
              <span className="font-bold">YAMESA</span> curates music algorithms don&apos;t surface.
            </p>
          </div>

          {/* Left-top text */}
          <div
            className="absolute flex items-center"
            style={{ width: "21.3%", left: "4.83%", top: "15%" }}
          >
            <p className="font-heading font-medium text-[1.08vw] leading-[1.2] text-white">
              Users progress based on engagement, unlocking deeper participation and added recognition within the platform.
            </p>
          </div>

          {/* Right-top text */}
          <div
            className="absolute flex items-center"
            style={{ width: "21.36%", left: "73.81%", top: "15%" }}
          >
            <p className="font-heading font-medium text-[1.08vw] leading-[1.2] text-white">
              Discover new music through short, scrollable reels designed for quick and effortless exploration.
            </p>
          </div>

          {/* Left-bottom text */}
          <div
            className="absolute flex items-center"
            style={{ width: "21.3%", left: "4.83%", top: "63%" }}
          >
            <p className="font-heading font-medium text-[1.08vw] leading-[1.2] text-white">
              Enable artists and listeners to connect and form real-world or digital gigs directly through the platform.
            </p>
          </div>

          {/* Right-bottom text */}
          <div
            className="absolute flex items-center"
            style={{ width: "21.36%", left: "73.81%", top: "63%" }}
          >
            <p className="font-heading font-medium text-[1.08vw] leading-[1.2] text-white">
              Users can earn badges tied to artists, creating a sense of early support and a visible stake in their journey.
            </p>
          </div>

          {/* Bottom center text */}
          <div
            className="absolute flex items-center"
            style={{ width: "20%", left: "40%", top: "82%" }}
          >
            <p className="font-heading font-medium text-[1.08vw] leading-[1.2] text-white text-center w-full">
              Every artist is handpicked and every track chosen by real listeners, ensuring discovery is intentional and not driven by automated systems.
            </p>
          </div>

          {/* === ARROWS === */}
          {/* All arrow PNGs are exported from Figma with rotation baked in. No CSS transforms needed. */}

          {/* Top arrow (points UP from heading to top text) */}
          <Image src="/vectors/Vector 4.png" alt="" width={4} height={96} className="absolute pointer-events-none" style={{ height: "8%", width: "auto", left: "49.5%", top: "19%" }} />
          <Image src="/vectors/Vector 14.png" alt="" width={22} height={12} className="absolute pointer-events-none" style={{ width: "1.2%", height: "auto", left: "49%", top: "18.5%" }} />

          {/* Top-left arrow — mirrored top-right */}
          <Image src="/vectors/arrow-top-left.svg" alt="" width={100} height={100} className="absolute pointer-events-none" style={{ width: "6%", height: "auto", left: "30%", top: "24%" }} />

          {/* Top-right arrow */}
          <Image src="/vectors/arrow-top-right.svg" alt="" width={100} height={100} className="absolute pointer-events-none" style={{ width: "6%", height: "auto", left: "64%", top: "24%" }} />

          {/* Bottom-left arrow — bottom-right flipped horizontally */}
          <Image src="/vectors/arrow-bottom-right.svg" alt="" width={100} height={100} className="absolute pointer-events-none" style={{ width: "6%", height: "auto", left: "30%", top: "56%", transform: "scaleX(-1)" }} />

          {/* Bottom-right arrow */}
          <Image src="/vectors/arrow-bottom-right.svg" alt="" width={100} height={100} className="absolute pointer-events-none" style={{ width: "6%", height: "auto", left: "64%", top: "56%" }} />

          {/* Bottom arrow — top arrow (Vector 4+14) rotated 180deg */}
          <Image src="/vectors/Vector 4.png" alt="" width={4} height={96} className="absolute pointer-events-none" style={{ height: "8%", width: "auto", left: "49.5%", top: "68%", transform: "rotate(180deg)" }} />
          <Image src="/vectors/Vector 14.png" alt="" width={22} height={12} className="absolute pointer-events-none" style={{ width: "1.2%", height: "auto", left: "49%", top: "75.5%", transform: "rotate(180deg)" }} />
        </div>
      </div>

      {/* Mobile layout */}
      <div className="flex flex-col items-center px-6 py-16 lg:hidden">
        <h2 className="font-heading font-semibold text-[10vw] leading-[1.2] text-center mb-12">
          <span className="bg-gradient-to-r from-[#FF69B4] via-[#FFB347] to-[#FF69B4] bg-clip-text text-transparent bg-[length:200%_100%]">
            No algorithm
            <br />
            No agenda
            <br />
            Just discovery
          </span>
        </h2>
        <div className="flex flex-col gap-8 max-w-sm">
          <p className="font-heading font-medium text-[4vw] leading-[1.3] text-white text-center">
            Most platforms push what already performs, leaving much music unheard.{" "}
            <span className="font-bold">YAMESA</span> curates music algorithms don&apos;t surface.
          </p>
          <p className="font-heading font-medium text-[4vw] leading-[1.3] text-white text-center">
            Discover new music through short, scrollable reels designed for quick and effortless exploration.
          </p>
          <p className="font-heading font-medium text-[4vw] leading-[1.3] text-white text-center">
            Users progress based on engagement, unlocking deeper participation and added recognition within the platform.
          </p>
          <p className="font-heading font-medium text-[4vw] leading-[1.3] text-white text-center">
            Enable artists and listeners to connect and form real-world or digital gigs directly through the platform.
          </p>
          <p className="font-heading font-medium text-[4vw] leading-[1.3] text-white text-center">
            Users can earn badges tied to artists, creating a sense of early support and a visible stake in their journey.
          </p>
          <p className="font-heading font-medium text-[4vw] leading-[1.3] text-white text-center">
            Every artist is handpicked and every track chosen by real listeners, ensuring discovery is intentional and not driven by automated systems.
          </p>
        </div>
      </div>
    </section>
  );
}
