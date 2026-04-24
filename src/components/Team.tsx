"use client";

import { useEffect, useRef } from "react";
import DistortionImage from "./DistortionImage";

type Person = {
  name: string;
  role: string;
  bio: string;
  image: string;
  x: string;
  linkedin: string;
  email: string;
};

const TEAM: Person[] = [
  {
    name: "Yash Agrawal",
    role: "Founder & Curator",
    bio: "An indie music obsessive building Yamesa for the artists the algorithm forgets. Raised on mixtapes and small-venue shows, building the platform that was always needed.",
    image: "https://picsum.photos/seed/yamesa-founder/1600/2000",
    x: "#",
    linkedin: "#",
    email: "mailto:yash@yamesa.com",
  },
  {
    name: "Mehar Parnami",
    role: "Design & Brand",
    bio: "Shaping the visual voice of Yamesa. Believes the best discoveries happen at the intersection of taste and trust, and that every artist deserves a story told well.",
    image: "https://picsum.photos/seed/yamesa-design/1600/2000",
    x: "#",
    linkedin: "#",
    email: "mailto:mehar@yamesa.com",
  },
  {
    name: "Sagar Gupta",
    role: "Engineering",
    bio: "Building the infrastructure behind Yamesa's curated feed. Obsessed with making technology serve artists, not the other way around.",
    image: "https://picsum.photos/seed/yamesa-engineer/1600/2000",
    x: "#",
    linkedin: "#",
    email: "mailto:sagar@yamesa.com",
  },
];

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m21 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L3 7" />
    </svg>
  );
}

const TRANSITION_WIDTH = 0.16;

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const noiseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let rafId = 0;
    const update = () => {
      rafId = 0;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = Math.max(1, rect.height - vh);
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / total));

      const n = TEAM.length;
      const seg = 1 / n;
      const half = seg / 2;
      const tw = TRANSITION_WIDTH;

      let topIdx = 0;
      let topOp = -1;
      const opacities: number[] = [];
      const transitionTs: number[] = [];
      const signedDs: number[] = [];

      slideRefs.current.forEach((el, i) => {
        if (!el) return;
        const center = (i + 0.5) * seg;
        const distance = Math.abs(progress - center);
        const signed = progress - center;

        let opacity: number;
        let transitionT: number;
        if (distance < half - tw / 2) {
          opacity = 1;
          transitionT = 0;
        } else if (distance < half + tw / 2) {
          const raw = (distance - (half - tw / 2)) / tw;
          opacity = 1 - Math.pow(raw, 2);
          transitionT = Math.sin(raw * Math.PI);
        } else {
          opacity = 0;
          transitionT = 0;
        }
        opacity = Math.max(0, Math.min(1, opacity));
        opacities[i] = opacity;
        transitionTs[i] = transitionT;
        signedDs[i] = signed;

        if (opacity > topOp) {
          topOp = opacity;
          topIdx = i;
        }
      });

      slideRefs.current.forEach((el, i) => {
        if (!el) return;
        el.style.opacity = String(opacities[i]);
        el.style.pointerEvents = i === topIdx ? "auto" : "none";

        const isLast = i === TEAM.length - 1;
        if (isLast) {
          el.style.filter = "none";
          el.style.transform = "none";
        } else {
          const transitionT = transitionTs[i];
          const signed = signedDs[i];
          const blur = transitionT * 5;
          const contrast = 1 + transitionT * 0.25;
          const scale = 1 - transitionT * 0.04;
          const rotation = (signed < 0 ? 1 : -1) * transitionT * 3;
          el.style.filter = `blur(${blur.toFixed(2)}px) contrast(${contrast.toFixed(3)})`;
          el.style.transform = `scale(${scale.toFixed(4)}) rotate(${rotation.toFixed(3)}deg)`;
        }
      });

      let noiseOpacity = 0;
      for (let i = 1; i < n; i++) {
        const boundary = i * seg;
        const d = Math.abs(progress - boundary);
        if (d < tw / 2) {
          noiseOpacity = Math.max(noiseOpacity, 1 - d / (tw / 2));
        }
      }
      if (noiseRef.current) {
        noiseRef.current.style.opacity = String(noiseOpacity * 0.8);
      }
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black"
      style={{ height: `${TEAM.length * 130}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {TEAM.map((person, i) => (
          <div
            key={i}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
            className="absolute inset-0"
            style={{
              opacity: i === 0 ? 1 : 0,
              pointerEvents: i === 0 ? "auto" : "none",
              willChange: "opacity, transform, filter",
            }}
          >
            <div className="pointer-events-none absolute inset-0 bg-neutral-900" />
            <DistortionImage src={person.image} alt={person.name} />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

            <div className="pointer-events-none absolute left-8 top-8 font-sans text-[11px] font-medium tracking-[0.35em] text-white/90 uppercase md:left-14 md:top-10 md:text-xs">
              {person.name}
            </div>

            <div className="pointer-events-none absolute right-8 top-8 font-sans text-[11px] font-medium tracking-[0.3em] text-white/70 uppercase md:right-14 md:top-10 md:text-xs">
              {String(i + 1).padStart(2, "0")} /{" "}
              {String(TEAM.length).padStart(2, "0")}
            </div>

            <div className="pointer-events-none absolute bottom-12 left-8 max-w-[640px] md:bottom-16 md:left-14 lg:bottom-20 lg:left-20">
              <div className="mb-4 font-sans text-[11px] font-medium tracking-[0.35em] text-white/70 uppercase md:mb-5 md:text-xs">
                {person.role}
              </div>
              <p className="font-display text-2xl leading-[1.12] text-white md:text-4xl lg:text-5xl lg:leading-[1.08]">
                {person.bio}
              </p>
            </div>

            <div className="absolute bottom-12 right-8 flex items-center gap-5 md:bottom-16 md:right-14 lg:bottom-20 lg:right-20">
              <a
                href={person.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${person.name} on X`}
                className="text-white/65 transition-colors hover:text-white"
              >
                <XIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${person.name} on LinkedIn`}
                className="text-white/65 transition-colors hover:text-white"
              >
                <LinkedInIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={person.email}
                aria-label={`Email ${person.name}`}
                className="text-white/65 transition-colors hover:text-white"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        ))}

        <div
          ref={noiseRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 mix-blend-screen"
          style={{
            opacity: 0,
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.35' numOctaves='2' stitchTiles='stitch' seed='7'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.85 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            backgroundSize: "240px 240px",
            backgroundRepeat: "repeat",
            animation: "noise-shift 0.18s steps(6) infinite",
          }}
        />
      </div>
    </section>
  );
}
