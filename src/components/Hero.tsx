import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 py-20 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute -top-[42vh] left-[-8%] h-[95vh] w-[75vw]"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 55% 55%, rgba(160,36,18,0.45) 0%, rgba(230,90,32,0.85) 38%, rgba(255,128,50,0.95) 46%, rgba(190,54,20,0.65) 58%, rgba(90,18,10,0.25) 76%, transparent 90%)",
            filter: "blur(34px)",
          }}
        />
        <div
          className="absolute -top-[48vh] right-[-12%] h-[100vh] w-[80vw]"
          style={{
            background:
              "radial-gradient(ellipse 58% 52% at 45% 60%, rgba(150,34,18,0.45) 0%, rgba(220,82,28,0.85) 40%, rgba(250,122,48,0.9) 48%, rgba(180,50,18,0.6) 60%, rgba(80,16,10,0.25) 76%, transparent 90%)",
            filter: "blur(38px)",
          }}
        />
        <div
          className="absolute -bottom-[45vh] left-[-15%] h-[100vh] w-[85vw]"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 50% 40%, rgba(140,32,16,0.4) 0%, rgba(215,78,28,0.8) 40%, rgba(248,120,48,0.9) 48%, rgba(170,46,18,0.55) 60%, rgba(70,14,8,0.25) 78%, transparent 92%)",
            filter: "blur(42px)",
          }}
        />
        <div
          className="absolute -bottom-[50vh] right-[-10%] h-[105vh] w-[78vw]"
          style={{
            background:
              "radial-gradient(ellipse 58% 50% at 50% 38%, rgba(130,28,14,0.4) 0%, rgba(205,72,26,0.8) 42%, rgba(240,114,44,0.88) 50%, rgba(160,42,16,0.55) 62%, rgba(70,14,8,0.22) 78%, transparent 92%)",
            filter: "blur(44px)",
          }}
        />
        <div
          className="absolute left-[35%] top-[42%] h-[45vh] w-[40vw] opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(180,46,20,0.5) 0%, rgba(140,30,14,0.3) 50%, transparent 80%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <h1 className="relative font-display text-[clamp(4.5rem,23vw,22rem)] font-black uppercase leading-[0.9] tracking-[-0.02em] text-white whitespace-nowrap select-none">
        Yamesa
      </h1>

      <div className="relative z-10 -mt-[16vw] w-[min(580px,62vw)]">
        <Image
          src="/waitlist-asset.png"
          alt=""
          width={800}
          height={1200}
          priority
          sizes="(max-width: 768px) 62vw, 580px"
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="relative mt-8 font-sans text-[11px] font-medium tracking-[0.4em] text-white/80 uppercase md:mt-12 md:text-xs">
        Coming Soon
      </div>
    </section>
  );
}
