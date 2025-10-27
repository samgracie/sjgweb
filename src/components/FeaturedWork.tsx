const projects = [
  {
    company: "Amazon",
    title: "SageMaker Studio Platform",
    description:
      "Led product and UX design for the launch of SageMaker Studio, Amazon's integrated ML development environment. Built IDE-style tooling for ML engineers.",
    tags: ["ML_PLATFORM", "IDE_DESIGN", "DATA_VIZ"],
    image: "/placeholder.svg",
  },
  {
    company: "Apple",
    title: "AI/ML Developer Tooling",
    description:
      "Design leadership for internal AI/ML tooling platforms, creating sophisticated workflows for ML model development and deployment at scale.",
    tags: ["AI_UX", "DESIGN_SYSTEM", "DEV_TOOLS"],
    image: "/placeholder.svg",
  },
  {
    company: "AI Startup",
    title: "AI Platform & Design System",
    description:
      "As CPO & cofounder, built end-to-end AI product platform and design system serving data scientists and ML engineers with complex analytical workflows.",
    tags: ["PRODUCT_LEADERSHIP", "AI_PLATFORM", "DESIGN_SYSTEM"],
    image: "/placeholder.svg",
  },
  {
    company: "Amazon",
    title: "Notebook Environment Innovation",
    description:
      "Pioneered new interaction patterns for Jupyter-style notebooks within SageMaker, focusing on seamless data science workflows and reproducibility.",
    tags: ["NOTEBOOK_UX", "DATA_SCIENCE", "INNOVATION"],
    image: "/placeholder.svg",
  },
];

const FeaturedWork = () => {
  return (
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
  );
};

export default FeaturedWork;
