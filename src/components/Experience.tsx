const experiences = [
  {
    company: "Apple",
    role: "Design Leader, AI/ML Tooling",
    period: "2023_PRESENT",
    description:
      "Leading design for internal AI/ML tooling platforms. Building sophisticated workflows for model development, training, and deployment at scale.",
  },
  {
    company: "AI Startup",
    role: "CPO & Cofounder",
    period: "2021_2023",
    description:
      "Chief Product Officer and cofounder building AI platform for data scientists and ML engineers. Led product strategy, design, and go-to-market.",
  },
  {
    company: "Amazon",
    role: "Product/UX Design, SageMaker Studio",
    period: "2018_2021",
    description:
      "Led product and UX design for SageMaker Studio launch. Built IDE-style environment for ML development with integrated tooling and workflows.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-16">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary">
            EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 text-foreground">
            Career Timeline
          </h2>
        </div>

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 border-l-2 border-border pl-6 md:pl-0 md:border-l-0"
            >
              <div className="md:col-span-3">
                <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary">
                  {exp.period}
                </span>
              </div>

              <div className="md:col-span-9 space-y-3">
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-medium mt-1">{exp.company}</p>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
