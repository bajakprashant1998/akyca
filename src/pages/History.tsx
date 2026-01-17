import { Layout } from "@/components/layout/Layout";
import { Award, Users, Building, MapPin, Star } from "lucide-react";

const milestones = [
  {
    year: "1978",
    title: "The Beginning",
    description: "Commencement of professional journey by founder Ashvin K Yagnik. A visionary step that laid the foundation for decades of excellence.",
    icon: Star,
  },
  {
    year: "2001",
    title: "Growing Together",
    description: "Addition of new partners to strengthen the firm's capabilities and expand service offerings.",
    icon: Users,
  },
  {
    year: "2006",
    title: "Expanding Expertise",
    description: "Strength of partners increased to 6, bringing diverse expertise across multiple domains of chartered accountancy.",
    icon: Users,
  },
  {
    year: "2009",
    title: "Building Strength",
    description: "Strength of partners increased to 9, establishing a robust leadership team capable of handling complex assignments.",
    icon: Users,
  },
  {
    year: "2011",
    title: "Government Recognition",
    description: "Achieved Category-I Firm status with RBI (Reserve Bank of India), recognizing our expertise and credibility in the financial sector.",
    icon: Award,
  },
  {
    year: "2019",
    title: "Geographic Expansion",
    description: "Opening of Ahmedabad Branch, extending our presence to Gujarat's commercial capital and serving a wider client base.",
    icon: Building,
  },
];

const History = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-cream font-medium text-sm tracking-wider uppercase mb-4 block">
              Our Journey
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              History & Milestones
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Over four decades of building trust, expanding expertise, and 
              delivering excellence in chartered accountancy services.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Timeline Container */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-cream transform md:-translate-x-1/2"></div>

              {/* Milestones */}
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"} ml-20 md:ml-0`}>
                    <div className={`bg-white rounded-xl p-6 shadow-lg border border-border hover:border-cream transition-colors inline-block ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                      <div className="text-3xl font-display font-bold text-navy mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-grey text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2">
                    <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center border-4 border-cream shadow-lg">
                      <milestone.icon className="w-7 h-7 text-cream" />
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}

              {/* Future */}
              <div className="relative flex items-start gap-8">
                <div className="flex-1 md:text-right md:pr-16 ml-20 md:ml-0">
                  <div className="bg-navy rounded-xl p-6 shadow-lg inline-block md:ml-auto">
                    <div className="text-3xl font-display font-bold text-cream mb-2">
                      Future
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Continuing the Legacy
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      With a strong foundation and unwavering commitment to excellence, 
                      we continue to evolve and expand, ready to serve the next generation 
                      of businesses and individuals across India.
                    </p>
                  </div>
                </div>

                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2">
                  <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center border-4 border-navy shadow-lg">
                    <MapPin className="w-7 h-7 text-navy" />
                  </div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default History;
