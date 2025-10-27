import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-surface">
      <div className="max-w-screen-xl mx-auto px-4 md:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary">
            GET_IN_TOUCH
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6 text-foreground">
            Let's Connect
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-12">
            Interested in collaborating on AI/ML product design projects or discussing 
            opportunities in building technical platforms for developers and data scientists.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:sam@example.com"
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary-hover transition-colors duration-fast"
            >
              <Mail size={20} />
              sam@example.com
            </a>

            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border text-text-secondary hover:border-primary hover:text-primary transition-colors duration-fast"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border text-text-secondary hover:border-primary hover:text-primary transition-colors duration-fast"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
