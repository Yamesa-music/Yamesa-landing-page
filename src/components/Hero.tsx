import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-[6vh] pb-[1vh]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div
            className="absolute left-1/2 top-[58%] h-[115vh] w-[85vw] max-w-[1200px] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "radial-gradient(ellipse 48% 52% at 50% 50%, rgba(255,108,40,0.55) 0%, rgba(210,60,22,0.45) 22%, rgba(130,30,14,0.3) 44%, rgba(60,14,8,0.15) 65%, transparent 82%)",
              filter: "blur(55px)",
            }}
          />

          <div
            className="absolute -left-[10%] -top-[12%] h-[70vh] w-[58vw]"
            style={{
              background:
                "radial-gradient(ellipse 70% 62% at 55% 55%, rgba(225,78,30,0.5) 0%, rgba(170,46,20,0.35) 28%, rgba(110,26,12,0.22) 52%, transparent 80%)",
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
                "radial-gradient(ellipse 65% 60% at 55% 45%, rgba(178,44,18,0.34) 0%, rgba(70,16,10,0.15) 55%, transparent 80%)",
              filter: "blur(72px)",
            }}
          />

          <div
            className="absolute right-[22%] top-[8%] h-[24vh] w-[22vw]"
            style={{
              background:
                "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(160,40,18,0.28) 0%, transparent 72%)",
              filter: "blur(68px)",
            }}
          />
        </div>

        <h1 className="relative font-display font-black uppercase leading-[0.9] tracking-[-0.02em] text-white whitespace-nowrap select-none text-[min(30vw,32vh,26rem)]">
          Yamesa
        </h1>

        <div className="relative z-10 w-[min(50vw,58vh,720px)] -mt-[min(28vw,24vh)]">
          <Image
            src="/waitlist-asset.png"
            alt=""
            width={800}
            height={1200}
            priority
            sizes="(max-width: 768px) 50vw, 580px"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      <div className="relative flex flex-col items-center px-4 pt-[4vh] pb-[8vh] md:pt-[5vh] md:pb-[10vh]">
        <p className="font-display italic text-white/85 text-xl md:text-2xl lg:text-[1.75rem]">
          Music found, not fed.
        </p>
        <div className="mt-[1.5vh] font-sans text-[11px] font-medium tracking-[0.4em] text-white/70 uppercase md:mt-[2vh] md:text-xs">
          Coming Soon
        </div>
      </div>
    </section>
  );
}
