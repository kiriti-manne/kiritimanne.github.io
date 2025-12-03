const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with Kiriti has strengthened Webdox's entire revenue engine. His strategic thinking and guidance reshaped how we approach outbound, inbound, pipeline progression, and ultimately our growth flywheel across countries. He's been a critical thought partner for our growth team.",
      name: "Jose Manuel",
      title: "CEO",
      company: "Webdox"
    },
    {
      quote: "Our outbound email results were terrible and Kiriti helped us diagnose problems across every step of the funnel, from deliverability issues to our email copy. With his guidance, we doubled conversion in a matter of weeks and now have a sustainable experimentation process.",
      name: "Olivia",
      title: "CEO",
      company: "Tenor"
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
