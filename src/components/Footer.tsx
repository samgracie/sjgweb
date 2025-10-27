const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-screen-xl mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-tertiary text-sm font-mono">
            © {new Date().getFullYear()} Sam J Gracie. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="#hero"
              className="text-text-tertiary hover:text-primary text-sm transition-colors duration-fast"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
