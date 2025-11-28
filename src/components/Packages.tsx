import { Check } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      name: "Option A",
      commitment: "~4 hours/month",
      bestFor: "Teams who need guidance, clarity, and quick access to an experienced GTM operator.",
      features: [
        "Monthly strategy call with on-demand support for questions and ad-hoc reviews",
        "OR weekly syncs"
      ],
      highlighted: false
    },
    {
      name: "Option B",
      commitment: "8–12 hours/month",
      bestFor: "Teams building or refining their GTM system and needing both strategic guidance and hands-on support.",
      features: [
        "Bi-weekly sessions",
        "Full-funnel GTM review + targeted recommendations",
        "Support across inbound and outbound",
        "Slack access"
      ],
      highlighted: false
    },
    {
      name: "Option C",
      label: "Fractional GTM",
      commitment: "20+ hours/month",
      bestFor: "Companies that need a part-time GTM leader to drive execution and operational excellence.",
      features: [
        "Hands-on execution (inbound, outbound, systems)",
        "Owning workflows, reporting, and pipeline operations",
        "Hiring + interviewing support for GTM roles",
        "Forecasting + board slides"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="packages" className="py-24 px-6">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Advisory Packages
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Flexible Engagement Models
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the level of support that fits your team's needs and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-2xl border border-border card-gradient hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
            >
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{pkg.name}</h3>
                  {pkg.label && (
                    <span className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                      {pkg.label}
                    </span>
                  )}
                </div>
                <p className="text-primary font-medium">{pkg.commitment}</p>
              </div>

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {pkg.bestFor}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className="block w-full py-3 text-center rounded-lg font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 mt-auto"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
