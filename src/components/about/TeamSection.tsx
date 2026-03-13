import { useState, useEffect, useRef } from "react";
import { Linkedin, Mail, ChevronDown } from "lucide-react";
import ashwinYagnik from "@/assets/team/ashwin-yagnik.png";
import japanYagnik from "@/assets/team/japan-yagnik.png";
import arpanYagnik from "@/assets/team/arpan-yagnik.png";

const boardOfDirectors = [
  {
    name: "CA Ashwin Yagnik",
    role: "Founding Partner",
    image: ashwinYagnik,
    description: "With over 45 years of experience, CA Ashwin Yagnik founded the firm in 1978 and has been instrumental in establishing AKYCO as a leading CA firm in Gujarat. His expertise in taxation and financial advisory has helped countless businesses thrive.",
    qualifications: "B.Com, FCA",
    specializations: ["Taxation", "Financial Advisory", "Business Strategy"],
  },
  {
    name: "CA Japan Yagnik",
    role: "Senior Partner",
    image: japanYagnik,
    description: "CA Japan Yagnik brings extensive expertise in corporate taxation, GST compliance, and audit services. His strategic vision and commitment to excellence have significantly contributed to the firm's growth and reputation.",
    qualifications: "B.Com, FCA",
    specializations: ["Corporate Tax", "GST Compliance", "Audit"],
  },
  {
    name: "CA Arpan Yagnik",
    role: "Partner",
    image: arpanYagnik,
    description: "CA Arpan Yagnik specializes in financial advisory, startup services, and digital accounting solutions. His modern approach combined with traditional values helps bridge the gap between technology and professional services.",
    qualifications: "B.Com, FCA",
    specializations: ["Financial Advisory", "Startups", "Digital Accounting"],
  },
];

export const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
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
    <section ref={ref} id="team" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
            Leadership
          </span>
          <h2 className="section-heading mb-4">Board of Directors</h2>
          <p className="section-subheading mx-auto">
            Meet the visionary leaders who guide our firm with their expertise, experience, and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {boardOfDirectors.map((member, index) => (
            <div
              key={index}
              className={`group bg-background rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Social on hover */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <a href="#" className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center text-primary hover:bg-cream transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center text-primary hover:bg-cream transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-display font-bold text-card-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold font-medium text-sm">{member.role}</p>
                  <p className="text-muted-foreground text-xs mt-1">{member.qualifications}</p>
                </div>

                {/* Specialization Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.specializations.map((spec, i) => (
                    <span key={i} className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Expandable Bio */}
                <button
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                  className="w-full flex items-center justify-center gap-1 text-sm text-muted-foreground hover:text-card-foreground transition-colors py-2"
                >
                  {expandedCard === index ? "Show Less" : "Read Bio"}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedCard === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${expandedCard === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-foreground text-sm leading-relaxed pt-2 border-t border-border">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
