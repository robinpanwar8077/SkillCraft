import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Prizes } from "@/components/prizes";
import { Schedule } from "@/components/schedule";
import { Rules } from "@/components/rules";
import { Contact } from "@/components/contact";
import { Reviews } from "@/components/reviews";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 font-sans">
      <Header />
      <Hero />
      <Prizes />
      <Schedule />
      <Rules />
      <Contact />
      <Reviews />
      <Footer />
    </main>
  );
}

