"use client";

import Image from "next/image";
import { useState, type SVGProps } from "react";

type Person = {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: { x: string; linkedin: string; email: string };
};

const TEAM: Person[] = [
  {
    name: "Yash Agrawal",
    role: "Founder & CEO",
    bio: "I bring vision and I drive Yamesa's overall direction across product and technology.",
    image: "/yash-img.jpeg",
    socials: {
      x: "https://x.com/Yash__Sensei",
      linkedin: "https://www.linkedin.com/in/yash-agrawal-208841307/",
      email: "mailto:yashagrawalrkt123@gmail.com",
    },
  },
  {
    name: "Mehar Parnami",
    role: "Co-founder & CMO",
    bio: "I don't market brands, I make them impossible to ignore. At Yamesa, I design what people reach for next.",
    image: "/mehar3-img.jpeg",
    socials: {
      x: "https://x.com/meharparnami14",
      linkedin: "https://www.linkedin.com/in/mehar-parnami-152594273/",
      email: "mailto:meharparnami14@gmail.com",
    },
  },
  {
    name: "Sagar Gupta",
    role: "Co-founder & CFO",
    bio: "I'm not just building this product, I'm building ecosystem",
    image: "/sagar-img.jpeg",
    socials: {
      x: "",
      linkedin: "https://www.linkedin.com/in/sagarguptaa08/",
      email: "mailto:sagargupta08072003@gmail.com",
    },
  },
];

const EASE = "cubic-bezier(0.32, 0.72, 0, 1)";

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
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

function Socials({ socials, name }: { socials: Person["socials"]; name: string }) {
  return (
    <div className="flex items-center gap-4">
      <a
        href={socials.x}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name} on X`}
        className="text-white/65 transition-colors hover:text-white"
      >
        <XIcon className="h-[16px] w-[16px]" />
      </a>
      <a
        href={socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name} on LinkedIn`}
        className="text-white/65 transition-colors hover:text-white"
      >
        <LinkedInIcon className="h-[16px] w-[16px]" />
      </a>
      <a
        href={socials.email}
        aria-label={`Email ${name}`}
        className="text-white/65 transition-colors hover:text-white"
      >
        <MailIcon className="h-[18px] w-[18px]" />
      </a>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-black">
      <div className="px-6 pt-12 pb-10 text-center md:pt-16 md:pb-12 lg:pt-20 lg:pb-16">
        <div className="mb-3 font-sans text-[10px] font-medium tracking-[0.4em] text-white/60 uppercase md:text-[11px]">
          The Crew
        </div>
        <h2 className="font-display text-3xl italic leading-[1.05] text-white md:text-5xl lg:text-[3.5rem]">
          Meet the founders.
        </h2>
      </div>

      <PillRow />
      <MobileStack />

      <div className="h-12 md:h-16 lg:h-20" />
    </section>
  );
}

function PillRow() {
  const [hovered, setHovered] = useState<number | null>(null);

  const getFlex = (i: number) => {
    if (hovered === null) return 1;
    if (hovered === i) return 3.6;
    return 0.7;
  };

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className="mx-auto hidden h-[420px] w-full max-w-7xl gap-3 px-6 md:flex md:h-[440px] md:px-10 lg:h-[500px] lg:gap-4 lg:px-16"
    >
      {TEAM.map((person, i) => (
        <Pill
          key={person.name}
          person={person}
          index={i}
          isActive={hovered === i}
          someoneActive={hovered !== null}
          flex={getFlex(i)}
          onMouseEnter={() => setHovered(i)}
        />
      ))}
    </div>
  );
}

function Pill({
  person,
  index,
  isActive,
  someoneActive,
  flex,
  onMouseEnter,
}: {
  person: Person;
  index: number;
  isActive: boolean;
  someoneActive: boolean;
  flex: number;
  onMouseEnter: () => void;
}) {
  const idle = !someoneActive;

  return (
    <div
      onMouseEnter={onMouseEnter}
      className="relative h-full cursor-pointer overflow-hidden rounded-[2rem]"
      style={{
        flexGrow: flex,
        flexBasis: 0,
        transition: `flex-grow 600ms ${EASE}`,
        willChange: "flex-grow",
      }}
    >
      <Image
        src={person.image}
        alt={person.name}
        fill
        sizes="(max-width: 767px) 0px, (max-width: 1280px) 70vw, 900px"
        className="object-cover"
        style={{
          transform: isActive ? "scale(1.02)" : "scale(1.08)",
          transition: `transform 800ms ${EASE}, filter 600ms ${EASE}`,
          filter: isActive ? "brightness(1)" : "brightness(0.78)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: isActive
            ? "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 38%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0.35) 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.55) 100%)",
          transition: `background 600ms ${EASE}`,
        }}
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-6 lg:p-8"
        style={{
          opacity: idle ? 1 : isActive ? 0 : 0.4,
          transition: `opacity 400ms ${EASE}`,
        }}
      >
        <span className="font-sans text-[10px] font-medium tracking-[0.32em] text-white/85 uppercase lg:text-[11px]">
          {person.name.split(" ")[0]}
        </span>
        <span className="font-sans text-[10px] font-medium tracking-[0.32em] text-white/55 uppercase lg:text-[11px]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 flex items-end justify-center pb-10 lg:pb-12"
        style={{
          opacity: isActive ? 0 : 1,
          transform: isActive ? "translateY(8px)" : "translateY(0)",
          transition: `opacity 350ms ${EASE}, transform 500ms ${EASE}`,
        }}
      >
        <div className="font-sans text-[10px] font-semibold tracking-[0.5em] text-white uppercase whitespace-nowrap [writing-mode:vertical-rl] rotate-180 lg:text-[11px]">
          {person.role}
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-8 lg:p-10"
        style={{
          opacity: isActive ? 1 : 0,
          transform: isActive ? "translateY(0)" : "translateY(24px)",
          transitionProperty: "opacity, transform",
          transitionDuration: isActive ? "650ms, 750ms" : "250ms, 400ms",
          transitionTimingFunction: EASE,
          transitionDelay: isActive ? "180ms" : "0ms",
          pointerEvents: isActive ? "auto" : "none",
        }}
      >
        <div className="mb-3 font-sans text-[10px] font-medium tracking-[0.32em] text-white/70 uppercase lg:text-[11px]">
          {person.role}
        </div>
        <h3 className="mb-4 font-display text-3xl leading-[1.05] text-white lg:text-[2.5rem]">
          {person.name}
        </h3>
        <p className="mb-6 max-w-md font-display text-[15px] leading-[1.4] text-white/85 lg:text-base lg:leading-[1.45]">
          {person.bio}
        </p>
        <Socials socials={person.socials} name={person.name} />
      </div>
    </div>
  );
}

function MobileStack() {
  return (
    <div className="flex flex-col gap-5 px-5 md:hidden">
      {TEAM.map((person, i) => (
        <div
          key={person.name}
          className="relative aspect-[5/7] overflow-hidden rounded-[1.5rem]"
        >
          <Image
            src={person.image}
            alt={person.name}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 22%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.35) 100%)",
            }}
          />
          <div className="absolute right-5 top-5">
            <span className="font-sans text-[10px] font-medium tracking-[0.32em] text-white/55 uppercase">
              {String(i + 1).padStart(2, "0")} / 03
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex flex-col px-6 pt-8 pb-7">
            <div className="mb-2.5 font-sans text-[10px] font-medium tracking-[0.32em] text-[#C9A36A] uppercase">
              {person.role}
            </div>
            <h3 className="mb-3 font-display text-[1.625rem] leading-[1.08] text-white">
              {person.name}
            </h3>
            <p className="mb-5 font-display text-[14px] leading-[1.42] text-white/85">
              {person.bio}
            </p>
            <Socials socials={person.socials} name={person.name} />
          </div>
        </div>
      ))}
    </div>
  );
}
