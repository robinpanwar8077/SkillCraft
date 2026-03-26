import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Prizes } from "@/components/prizes";
import { Schedule } from "@/components/schedule";
import { Rules } from "@/components/rules";
import Gallery from "@/components/gallery";
import { Contact } from "@/components/contact";
import { Reviews } from "@/components/reviews";
import { Sponsor } from "@/components/sponsor";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 font-sans">
      <Header />
      <Hero />
      <Sponsor />
      <Prizes />
      <Schedule />
      <Rules />
      <Gallery />
      <Contact />
      <Reviews />
      <Footer />
    </main>
  );
}

