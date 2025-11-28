const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Kiriti Manne. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#packages" className="hover:text-foreground transition-colors">Packages</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
