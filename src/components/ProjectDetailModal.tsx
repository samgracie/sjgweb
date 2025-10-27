import { X } from "lucide-react";
import { useEffect } from "react";

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    company: string;
    title: string;
    description: string;
    tags: string[];
  } | null;
}

const ProjectDetailModal = ({ isOpen, onClose, project }: ProjectDetailModalProps) => {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-60 p-3 border border-border hover:border-primary hover:text-primary transition-colors duration-fast"
        aria-label="Close modal"
      >
        <X size={24} />
      </button>

      <div
        className="min-h-screen max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <header className="mb-16 md:mb-24">
          <div className="mb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary">
              {project.company}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground leading-tight">
            {project.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-4xl">
            {project.description}
          </p>
        </header>

        {/* Hero Image Section */}
        <section className="mb-24">
          <div className="relative w-full aspect-[21/9] bg-surface-elevated mb-6">
            <div className="absolute inset-0 flex items-center justify-center text-text-tertiary font-mono text-sm">
              [ HERO_IMAGE ]
            </div>
          </div>
          <p className="font-mono text-xs text-text-tertiary uppercase tracking-wider">
            Primary Interface Design
          </p>
        </section>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
                Overview
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  This project represents a critical initiative in the evolution of AI/ML platform design, 
                  combining sophisticated technical capabilities with intuitive user experience. The work 
                  demonstrates a deep understanding of developer workflows, data science methodologies, and 
                  enterprise-scale requirements.
                </p>
                <p>
                  Through iterative design, user research, and close collaboration with engineering teams, 
                  we transformed complex technical challenges into elegant, scalable solutions that empower 
                  users to achieve their goals more efficiently.
                </p>
              </div>
            </section>

            {/* Call-Out Section */}
            <div className="border-l-4 border-primary pl-6 py-6 bg-surface-elevated">
              <blockquote className="text-xl md:text-2xl font-display font-semibold text-foreground leading-relaxed mb-4">
                "Scale isn't just about handling more data—it's about creating systems that 
                make complex work feel effortless."
              </blockquote>
            </div>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-mono text-sm uppercase tracking-wider text-primary mb-2">
                    01. Platform Architecture
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Designed a scalable foundation supporting diverse workflows and enterprise requirements.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-mono text-sm uppercase tracking-wider text-primary mb-2">
                    02. Developer Experience
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Optimized interaction patterns to reduce cognitive load and increase productivity.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-mono text-sm uppercase tracking-wider text-primary mb-2">
                    03. Data Visualization
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Created intuitive visualizations for complex technical data and performance metrics.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-mono text-sm uppercase tracking-wider text-primary mb-2">
                    04. Design System
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Established comprehensive component library and design guidelines for consistency.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="border border-border p-6 bg-surface">
              <h3 className="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-4">
                PROJECT_INFO
              </h3>
              <dl className="space-y-4">
                <div>
                  <dt className="font-mono text-xs text-text-tertiary uppercase tracking-wider mb-1">
                    Company
                  </dt>
                  <dd className="text-foreground font-semibold">{project.company}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-text-tertiary uppercase tracking-wider mb-1">
                    Role
                  </dt>
                  <dd className="text-text-secondary">Principal Designer</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-text-tertiary uppercase tracking-wider mb-1">
                    Timeline
                  </dt>
                  <dd className="text-text-secondary">2019—2024</dd>
                </div>
              </dl>
            </div>

            <div className="border border-border p-6 bg-surface">
              <h3 className="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-4">
                TECHNIQUES
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="font-mono text-xs text-text-tertiary border border-border px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Image Gallery */}
        <section className="space-y-8 mb-24">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-foreground">
            Design Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-[4/3] bg-surface-elevated flex items-center justify-center text-text-tertiary font-mono text-sm">
              [ DETAIL_01 ]
            </div>
            <div className="aspect-[4/3] bg-surface-elevated flex items-center justify-center text-text-tertiary font-mono text-sm">
              [ DETAIL_02 ]
            </div>
          </div>
        </section>

        {/* Full-Width Image */}
        <section className="mb-24">
          <div className="relative w-full aspect-[21/9] bg-surface-elevated">
            <div className="absolute inset-0 flex items-center justify-center text-text-tertiary font-mono text-sm">
              [ FULL_WIDTH_SHOWCASE ]
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="border-l-2 border-primary pl-6">
            <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
              133x
            </div>
            <p className="text-text-secondary font-mono text-sm uppercase tracking-wider">
              User Growth
            </p>
          </div>
          <div className="border-l-2 border-primary pl-6">
            <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
              10+
            </div>
            <p className="text-text-secondary font-mono text-sm uppercase tracking-wider">
              Fortune 500 Clients
            </p>
          </div>
          <div className="border-l-2 border-primary pl-6">
            <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
              $2B+
            </div>
            <p className="text-text-secondary font-mono text-sm uppercase tracking-wider">
              Annual Revenue
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-12">
          <p className="text-text-tertiary font-mono text-xs uppercase tracking-wider text-center">
            END_OF_CASE_STUDY
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ProjectDetailModal;

