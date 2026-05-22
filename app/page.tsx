import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Ecosystem from "@/components/Ecosystem";
import FounderQuote from "@/components/FounderQuote";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Ticker />
      <Services />
      <Approach />
      <Ecosystem />
      <FounderQuote />
      <CTABanner />
      <Footer />
    </main>
  );
}
