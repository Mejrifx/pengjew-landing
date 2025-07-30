import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import HowToBuy from "@/components/HowToBuy";
import Footer from "@/components/Footer";
import ScrollingBanner from "@/components/ScrollingBanner";
import FallingStars from "@/components/FallingStars";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16 relative">
      <FallingStars />
              <div className="relative z-20">
          <Header />
          <Hero />
          <About />
          <Tokenomics />
          <HowToBuy />
          <Footer />
        </div>
      <ScrollingBanner />
    </div>
  );
};

export default Index;
