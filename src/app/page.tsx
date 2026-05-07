import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Waitlist from "@/components/Waitlist";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Waitlist />
      <Team />
      <Footer />
    </main>
  );
}
