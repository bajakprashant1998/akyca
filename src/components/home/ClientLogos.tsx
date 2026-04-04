import { useState, useEffect, useRef } from "react";
import { Shield, Award, Building2, FileCheck } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

const certIcons = [Shield, Award, Building2, FileCheck];

export const ClientLogos = () => {
  const { getList } = useSiteContent("home");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const certTitles = getList("client_logos", "cert_titles", ["RBI Category-I", "ICAI Member", "GST Practitioner", "Insolvency Professional"]);
  const certDescs = getList("client_logos", "cert_descs", ["Authorized Bank Auditors", "Institute of Chartered Accountants", "Registered GST Consultants", "IBBI Registered IPs"]);
  const industries = getList("client_logos", "industries", [
    "Manufacturing", "IT & Software", "Healthcare", "Real Estate", "Education",
    "Retail", "Export-Import", "Hospitality", "E-commerce", "Banking & NBFC",
  ]);

  const certifications = certTitles.map((title, i) => ({
    icon: certIcons[i % certIcons.length],
    title,
    description: certDescs[i] || "",
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-12 md:py-16 bg-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-4 md:p-6 bg-white/5 rounded-xl md:rounded-2xl border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-11 h-11 md:w-14 md:h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-2.5 md:mb-3 group-hover:scale-110 transition-transform">
                <cert.icon className="w-5 h-5 md:w-7 md:h-7 text-gold" />
              </div>
              <h4 className="text-cream font-semibold text-sm md:text-base mb-0.5 md:mb-1">{cert.title}</h4>
              <p className="text-white/50 text-xs md:text-sm">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-white/50 text-xs md:text-sm mb-4 md:mb-6 uppercase tracking-wider font-medium">
            Trusted by businesses across industries
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="px-3 md:px-4 py-1.5 md:py-2 bg-white/5 text-cream text-xs md:text-sm rounded-full border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-300 cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
