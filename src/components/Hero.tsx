const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center hero-gradient overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
      
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-6 animate-fade-up">
            Growth Advisory
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-8 animate-fade-up-delay-1">
            Build Revenue Systems <br />
            <span className="text-gradient italic">That Actually Scale</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up-delay-2">
            I help B2B companies design, build, and optimize their go-to-market engine end-to-end—from demand generation to revenue—powered by data, analytics, and automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
            <a 
              href="#packages" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              View Advisory Packages
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
