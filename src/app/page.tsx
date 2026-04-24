import Hero from "@/components/Hero";
import About from "@/components/About";
import Waitlist from "@/components/Waitlist";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Waitlist />
      <Team />
      <Footer />
    </main>
  );
}
