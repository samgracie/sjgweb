const experiences = [
  {
    company: "Apple",
    role: "Principal Designer, Machine Learning Platform and Technology",
    period: "2025_PRESENT",
    description:
      "AI/ML design leader in Apple's AIML org, working at the intersection of human interaction, AI, and engineering. Shaping the future of machine learning tools and platforms that empower developers and researchers.",
  },
  {
    company: "WhyLabs",
    role: "Co-Founder & Chief Product Officer",
    period: "DEC_2019_2024",
    description:
      "Defined UX strategy for WhyLabs' AI Control Center, driving adoption at Fortune 500 companies across healthcare, retail, and financial services. Scaled WhyLabs from concept to enterprise-ready platform in <12 months, leading front-end team to ship 1-2 major releases per quarter. Developed WhyLabs Design System including data viz style guide and enterprise component library.",
  },
  {
    company: "Amazon Web Services",
    role: "Principal UX Designer, SageMaker Studio",
    period: "SEP_DEC_2019",
    description:
      "Led UX and managed a team of 3 for SageMaker Studio launch at re:Invent 2019, the first web-based IDE for ML workflows. Directed UX and visual design for light/dark UI themes.",
  },
  {
    company: "Amazon",
    role: "Principal UX Designer - Machine Learning Platform",
    period: "OCT_2018_AUG_2019",
    description:
      "Transformed Amazon's internal ML platform (Eider) from experimental tool to company-wide solution, achieving 133x growth in weekly active users (15 to 2,000+) through iterative design and close partnership with customers. Launched notebook repository fostering collaboration and knowledge sharing.",
  },
  {
    company: "Amazon",
    role: "Sr. UX Designer - Core AI",
    period: "DEC_2016_SEP_2018",
    description:
      "Designed key capabilities like multi-kernel support, compute management, orchestration, and instant data warehouse access for Amazon's ML platform. Developed metrics strategy to measure success, driving significant improvements in System Usability Score (SUS) and Net Promoter Score (NPS).",
  },
  {
    company: "Amazon",
    role: "Sr. UX Designer - Amazon Advertising",
    period: "OCT_2014_NOV_2016",
    description:
      "Led UX for Amazon's first programmatic advertising platform, evolving from MVP to industry-leading DSP generating $2B+ annual revenue (2016). Delivered scalable UX for campaign management workflows and performance reporting dashboards. Designed self-service component library as an extension to Amazon's retail UI.",
  },
  {
    company: "Early Career",
    role: "UX Design & Product Leadership",
    period: "FOUNDATION",
    description:
      "Led end-to-end UX strategy for digital signage SaaS platform at Codigo, reducing customer onboarding time through iterative user testing. Co-founded music tech startup Resonant Vibes, securing $900k seed funding and building e-commerce platform with 6% conversion rate through data-driven UX optimization. Scaled content partnerships to 10k+ record labels in 18 months.",
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
