import { ArrowRight, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-16 py-16 md:py-24 w-full">
        <div className="max-w-4xl">
          {/* Category Labels */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary">
              AI_PRODUCT_DESIGN
            </span>
            <span className="text-text-tertiary">/</span>
            <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary">
              ML_PLATFORMS
            </span>
            <span className="text-text-tertiary">/</span>
            <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary">
              DESIGN_SYSTEMS
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-foreground">
            Sam J Gracie
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-text-secondary mb-8">
            Design Leader, AI/ML Products
          </p>

          {/* Bio */}
          <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-12 max-w-3xl">
            Senior design leader with proven success scaling ML/AI products from 0-1, including co-founding WhyLabs—a venture-backed startup—and driving 133x user growth for Amazon's ML platform. With a track record of building high-performing teams and delivering enterprise-grade UX in complex technical domains, I'm excited to embark on a new challenge and make a real impact.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("work")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary-hover transition-colors duration-fast"
            >
              VIEW_WORK
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary hover:bg-primary/10 transition-colors duration-fast"
            >
              CONTACT
              <Mail size={18} />
            </button>
          </div>
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none hidden lg:block">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
