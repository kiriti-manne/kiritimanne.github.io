import { TrendingUp, Database, Zap } from "lucide-react";

const Experience = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: "GTM Strategy",
      description: "Clear go-to-market strategy from awareness to revenue"
    },
    {
      icon: Zap,
      title: "Hands-On Execution",
      description: "Not just advice—actual implementation and optimization"
    },
    {
      icon: Database,
      title: "Data & AI",
      description: "Real technical depth in data infrastructure, data science and AI automation"
    }
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Experience
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Nearly a decade of GTM experience
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From seed-stage startups to post-IPO, expertise spans GTM strategy, execution, and data/AI. Includes helping Samsara scale from $10M to $1B+ ARR through IPO and advising several startups through their own growth phase.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Seed to IPO
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Full Funnel
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Sales & Marketing
              </span>
            </div>
          </div>
          
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl card-gradient border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
