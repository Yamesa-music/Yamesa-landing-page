import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden bg-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute left-1/2 top-[58%] h-[115vh] w-[85vw] max-w-[1200px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(ellipse 48% 52% at 50% 50%, rgba(255,108,40,0.48) 0%, rgba(210,60,22,0.4) 22%, rgba(130,30,14,0.26) 44%, rgba(60,14,8,0.13) 65%, transparent 82%)",
            filter: "blur(55px)",
          }}
        />

        <div
          className="absolute -left-[10%] -top-[12%] h-[70vh] w-[58vw]"
          style={{
            background:
              "radial-gradient(ellipse 70% 62% at 55% 55%, rgba(225,78,30,0.45) 0%, rgba(170,46,20,0.32) 28%, rgba(110,26,12,0.2) 52%, transparent 80%)",
            filter: "blur(80px)",
          }}
        />

        <div
          className="absolute right-[-4%] top-[52%] h-[58vh] w-[46vw]"
          style={{
            background:
              "radial-gradient(ellipse 72% 60% at 48% 52%, rgba(198,58,20,0.38) 0%, rgba(92,22,12,0.2) 52%, transparent 80%)",
            filter: "blur(88px)",
          }}
        />

        <div
          className="absolute left-[18%] bottom-[6%] h-[32vh] w-[30vw]"
          style={{
            background:
              "radial-gradient(ellipse 65% 60% at 55% 45%, rgba(178,44,18,0.3) 0%, rgba(70,16,10,0.13) 55%, transparent 80%)",
            filter: "blur(72px)",
          }}
        />

        <div
          className="absolute right-[22%] top-[8%] h-[24vh] w-[22vw]"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(160,40,18,0.26) 0%, transparent 72%)",
            filter: "blur(68px)",
          }}
        />
      </div>

      <div className="absolute left-[5vw] top-1/2 -translate-y-1/2 md:left-[6vw] lg:left-[7vw]">
        <h1 className="font-display text-[clamp(3.5rem,16vw,22rem)] font-black uppercase leading-[0.88] tracking-[-0.02em] text-white whitespace-nowrap select-none md:text-[min(16vw,28vh,22rem)]">
          Yamesa
        </h1>
        <p className="mt-[2vh] font-display italic text-white/85 text-base md:mt-[2.5vh] md:text-xl lg:text-[1.75rem]">
          Music found, not fed.
        </p>
        <div className="mt-[1.5vh] font-sans text-[11px] font-medium tracking-[0.4em] text-white/65 uppercase md:mt-[2vh] md:text-xs">
          Coming Soon
        </div>
      </div>

      <div className="absolute bottom-[2vh] right-[6vw] w-[min(52vw,68vh,740px)]">
        <Image
          src="/waitlist-asset.png"
          alt=""
          width={800}
          height={1200}
          priority
          sizes="740px"
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  );
}
