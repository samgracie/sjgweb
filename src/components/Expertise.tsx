const capabilities = [
  {
    title: "Product Vision & Strategy",
    description: "Strategic product direction, roadmap planning, and design organization leadership. Proven track record scaling products from 0-1 and driving enterprise go-to-market strategy.",
  },
  {
    title: "AI/ML Platform Design",
    description: "End-to-end UX for machine learning platforms, MLOps tools, and data science environments. Deep domain knowledge in AI/ML workflows and technical product design.",
  },
  {
    title: "Design Systems Architecture",
    description: "Scalable design systems for complex technical products. Expert in component libraries, data visualization style guides, and design documentation for enterprise applications.",
  },
  {
    title: "Data Visualization & Analytics",
    description: "Advanced data visualization systems for ML metrics, model performance, and analytical dashboards. Patent holder for innovative graphical indicator techniques.",
  },
  {
    title: "Cross-Functional Leadership",
    description: "Building and leading high-performing design teams. Expert in stakeholder management, executive communication, and design operations optimization.",
  },
  {
    title: "Technical Design & Development",
    description: "Hands-on technical UI design and prototyping with frontend development skills (HTML/CSS/JS, Python, SQL). Deep understanding of developer experience and engineering workflows.",
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
