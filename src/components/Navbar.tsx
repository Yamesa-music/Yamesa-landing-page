"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-5 md:px-10 lg:px-14 lg:py-6">
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
  );
}
