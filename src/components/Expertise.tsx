const capabilities = [
  {
    title: "AI/ML Platform Design",
    description: "End-to-end product design for machine learning platforms, IDE environments, and data science tooling.",
  },
  {
    title: "Design Systems for Technical Products",
    description: "Scalable design systems built for complex developer tools and AI applications with sophisticated workflows.",
  },
  {
    title: "Notebook/IDE Environments",
    description: "Interaction design for Jupyter-style notebooks, code editors, and integrated development environments.",
  },
  {
    title: "Data Visualization & Analytics",
    description: "Advanced data visualization systems for ML metrics, model performance, and analytical dashboards.",
  },
  {
    title: "Developer Experience (DX)",
    description: "User-centered design for developer-facing tools, APIs, SDKs, and technical documentation.",
  },
  {
    title: "Product Leadership",
    description: "Strategic product direction, roadmap planning, and cross-functional team leadership for AI/ML products.",
  },
];

const Expertise = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-screen-xl mx-auto px-4 md:px-16">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary">
            EXPERTISE
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 text-foreground">
            Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="space-y-3">
              <h3 className="font-mono text-sm uppercase tracking-wider text-primary">
                {capability.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
