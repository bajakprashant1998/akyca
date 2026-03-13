import { useState, useEffect, useRef } from "react";
import { Award, CheckCircle } from "lucide-react";

const milestones = [
  { year: "1978", title: "Foundation", desc: "Firm established by visionary CA Ashvin K Yagnik" },
  { year: "2000s", title: "Growth", desc: "Expanded to 9+ partners with diverse expertise" },
  { year: "2011", title: "RBI Category-I", desc: "Achieved prestigious government recognition" },
  { year: "Today", title: "Pan-India Reach", desc: "Serving 1000+ clients from Ahmedabad & Mehsana" },
];

export const OurStory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="story" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">Our Journey</span>
            <h2 className="section-heading mb-4">The AKYCO Story</h2>
            <p className="section-subheading mx-auto">
              A legacy of trust, expertise, and unwavering commitment to professional excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Story Content */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-foreground leading-relaxed text-base">
                Ashvin K Yagnik & Co. has a vintage of more than 45 years in providing
                quality and sustainable professional services to clients. We have been
                consistent as well as up to date in the dynamic taxation and finance world.
              </p>
              <p className="text-foreground leading-relaxed text-base">
                Founded in 1978 by visionary Chartered Accountant Ashvin K Yagnik,
                our firm has grown from a single-partner practice to a robust team
                of 9+ partners and numerous professionals serving clients across India.
              </p>
              <p className="text-foreground leading-relaxed text-base">
                In 2011, we achieved a significant milestone by becoming an RBI Category-I
                firm, recognizing our expertise and credibility in the financial sector.
              </p>

              {/* RBI Badge */}
              <div className="bg-primary rounded-2xl p-6 text-primary-foreground mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-cream rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-cream text-lg">RBI Category-I Firm</div>
                    <div className="text-primary-foreground/70 text-sm">Government Recognized Since 2011</div>
                  </div>
                </div>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mt-4">
                  Our RBI Category-I status recognizes our expertise in handling
                  complex financial matters and positions us as a trusted partner
                  for government and regulatory compliance work.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
                <div className="space-y-8">
                  {milestones.map((m, i) => (
                    <div
                      key={i}
                      className={`relative pl-12 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                      style={{ transitionDelay: `${i * 150}ms` }}
                    >
                      <div className="absolute left-0 top-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-4 border-background">
                        <CheckCircle className="w-4 h-4 text-cream" />
                      </div>
                      <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
                        <div className="text-gold font-display font-bold text-sm mb-1">{m.year}</div>
                        <div className="font-display font-semibold text-card-foreground mb-1">{m.title}</div>
                        <div className="text-foreground text-sm">{m.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
