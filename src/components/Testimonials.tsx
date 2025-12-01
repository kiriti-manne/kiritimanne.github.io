const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with them transformed our go-to-market approach. The combination of strategic thinking and hands-on execution was exactly what we needed to scale.",
      name: "Jane Smith",
      title: "VP of Marketing",
      company: "TechCorp"
    },
    {
      quote: "Their deep understanding of data infrastructure and GTM strategy helped us build a predictable revenue engine. Highly recommend for any growth-stage company.",
      name: "John Doe",
      title: "CEO",
      company: "GrowthStartup"
    }
  ];

  return (
    <section id="testimonials" className="pt-12 pb-24 px-6">
      <div className="container max-w-6xl">
        <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4 text-center">
          Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl font-serif mb-12 leading-tight text-center">
          What clients say
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl card-gradient border border-border hover:border-primary/30 transition-colors"
            >
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.title}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
