import { Users, Workflow, Target, MessageSquare } from "lucide-react";

const HowIWork = () => {
  const principles = [
    {
      icon: Users,
      title: "Extension of Your Team",
      description: "Embedded as an extension of you or your GTM leadership."
    },
    {
      icon: Workflow,
      title: "Flexible Approach",
      description: "Support flexes between strategy, execution, and technical problem-solving based on priorities."
    },
    {
      icon: Target,
      title: "Revenue-Oriented",
      description: "All work is anchored in building predictable pipeline and scalable revenue."
    },
    {
      icon: MessageSquare,
      title: "Collaboration",
      description: "Live (video or phone) or async (Slack, email, docs, Looms, etc.)"
    }
  ];

  return (
    <section id="how-i-work" className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Approach
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Built for Results
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {principles.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl card-gradient border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div id="contact" className="text-center p-10 rounded-2xl border border-primary/20 bg-primary/5">
          <h3 className="text-2xl font-serif mb-4">Ready to scale your revenue engine?</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Let's set up a diagnostic call to discuss your goals and opportunities.
          </p>
          <a 
            href="mailto:kiritimanne@gmail.com"
            className="text-primary font-semibold hover:underline"
          >
            Email me at kiritimanne@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
