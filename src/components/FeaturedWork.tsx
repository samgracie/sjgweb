import { useState } from "react";
import ProjectDetailModal from "./ProjectDetailModal";

const projects = [
  {
    company: "Apple",
    title: "Machine Learning Platform & Technology",
    description:
      "Principal Designer leading AI/ML design initiatives in Apple's AIML organization. Working at the intersection of human interaction, AI, and engineering to shape the future of machine learning tools and platforms that empower developers and researchers.",
    tags: ["AI_UX", "ML_PLATFORM", "DESIGN_LEADERSHIP"],
    image: "/placeholder.svg",
  },
  {
    company: "WhyLabs",
    title: "AI Control Center & Design System",
    description:
      "As Co-Founder & CPO, defined UX strategy and built enterprise-grade AI observability platform adopted by Fortune 500 companies across healthcare, retail, and financial services. Developed comprehensive design system including data visualization style guide and component library, scaling from concept to production in under 12 months.",
    tags: ["PRODUCT_LEADERSHIP", "ENTERPRISE_UX", "DESIGN_SYSTEM"],
    image: "/placeholder.svg",
  },
  {
    company: "Amazon Web Services",
    title: "SageMaker Studio Launch",
    description:
      "Led UX and managed team of 3 for the launch of SageMaker Studio at re:Invent 2019—the first web-based IDE for machine learning workflows. Directed end-to-end UX and visual design including light/dark theme system, setting the foundation for AWS's flagship ML development environment.",
    tags: ["ML_PLATFORM", "IDE_DESIGN", "PRODUCT_LAUNCH"],
    image: "/placeholder.svg",
  },
  {
    company: "Amazon",
    title: "ML Platform Transformation (Eider)",
    description:
      "Transformed Amazon's internal ML platform from experimental tool to company-wide solution, achieving 133x growth in weekly active users (15 to 2,000+). Designed notebook repository, multi-kernel support, compute management, and orchestration capabilities while establishing metrics strategy that drove measurable improvements in usability and satisfaction.",
    tags: ["GROWTH", "ML_PLATFORM", "DATA_SCIENCE"],
    image: "/placeholder.svg",
  },
];

const FeaturedWork = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof projects[number]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section id="work" className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 md:px-16">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary">
              FEATURED_WORK
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 text-foreground">
              AI Product Portfolio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <article
                key={index}
                onClick={() => handleProjectClick(project)}
                className="group bg-surface border border-border hover:border-primary transition-colors duration-base cursor-pointer"
              >
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-surface-elevated relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-text-tertiary font-mono text-xs">
                    [ PROJECT_VISUAL ]
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="font-mono text-xs text-text-tertiary uppercase tracking-wider">
                      {project.company}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-fast">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="font-mono text-xs text-text-tertiary border border-border px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
};

export default FeaturedWork;
