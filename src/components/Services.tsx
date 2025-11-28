import { ArrowRight } from "lucide-react";

const Services = () => {
  const gtmServices = {
    top: {
      title: "Top of Funnel",
      subtitle: "Awareness → Demand",
      items: [
        "Inbound engine (website flows, forms, routing, qualification logic)",
        "Outbound engine (SDR motions, message refinement, tooling, AE handoff)",
        "Email as a channel (infrastructure, deliverability, list design)",
        "Channel mix + execution (digital ads, direct mail, events, webinars, referrals)"
      ]
    },
    middle: {
      title: "Middle of Funnel",
      subtitle: "Demand → Pipeline",
      items: [
        "Lead qualification, routing, and conversion workflows",
        "Account prioritization + enrichment workflows",
        "SDR to AE handoff optimization"
      ]
    },
    bottom: {
      title: "Bottom of Funnel",
      subtitle: "Pipeline → Revenue",
      items: [
        "Sales + rep process optimization & coaching",
        "CRM design & setup (stages, fields, routing)",
        "Forecasting & pipeline planning"
      ]
    }
  };

  const dataServices = [
    {
      category: "TAM & Segmentation",
      items: ["High-level TAM sizing + segmentation", "Account sourcing to increase TAM coverage"]
    },
    {
      category: "Data Modeling",
      items: ["Attribution models", "Account scoring & prioritization", "Propensity-to-buy and forecasting models"]
    },
    {
      category: "Data Infrastructure",
      items: ["Full stack GTM infrastructure (warehouse, pipelines, monitoring, governance)"]
    },
    {
      category: "Dashboards & Analytics",
      items: ["Marketing & sales dashboards", "Funnel analytics"]
    },
    {
      category: "AI & Automation",
      items: ["Automated account research", "Data enrichment workflows", "Trigger-based automation", "AI-assisted sales workflows"]
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            What I Do
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Comprehensive GTM Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            End-to-end design and execution of the revenue engine across awareness, demand, pipeline and revenue.
          </p>
        </div>

        {/* Full-Funnel GTM */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif mb-8 flex items-center gap-3">
            <span className="text-primary">01</span>
            Full-Funnel GTM
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(gtmServices).map(([key, section]) => (
              <div key={key} className="p-6 rounded-xl card-gradient border border-border">
                <div className="mb-4">
                  <h4 className="font-semibold text-xl">{section.title}</h4>
                  <p className="text-primary text-base">{section.subtitle}</p>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-base text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Data, Analytics & Automation */}
        <div>
          <h3 className="text-2xl font-serif mb-8 flex items-center gap-3">
            <span className="text-primary">02</span>
            Data, Analytics & Automation
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The infrastructure, insights, and automation that power the GTM system.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataServices.map((service, index) => (
              <div 
                key={index}
                className="p-5 rounded-xl border border-border hover:border-primary/30 transition-colors bg-card/50"
              >
                <h4 className="font-semibold text-lg mb-3 text-primary">{service.category}</h4>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-base text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
