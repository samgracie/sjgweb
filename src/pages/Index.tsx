import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <FeaturedWork />
        <Expertise />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
