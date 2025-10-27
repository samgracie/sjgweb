import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-md bg-background/80">
      <div className="max-w-screen-xl mx-auto px-4 md:px-16">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-foreground font-display text-lg font-semibold hover:text-primary transition-colors duration-fast"
          >
            SJG
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("work")}
              className="text-text-secondary hover:text-primary transition-colors duration-fast text-sm"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-text-secondary hover:text-primary transition-colors duration-fast text-sm"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-text-secondary hover:text-primary transition-colors duration-fast text-sm"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("work")}
                className="text-text-secondary hover:text-primary transition-colors duration-fast text-sm text-left"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-text-secondary hover:text-primary transition-colors duration-fast text-sm text-left"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-text-secondary hover:text-primary transition-colors duration-fast text-sm text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
