import { ServiceCategoryTemplate, ServiceCategoryData } from "@/components/services/ServiceCategoryTemplate";
import { Shield, AlertCircle, Scale, Building } from "lucide-react";

const data: ServiceCategoryData = {
  icon: Shield,
  badge: "Regulatory Services",
  titleLine1: "Compliance &",
  titleLine2: "Regulatory",
  description: "Stay compliant with India's complex regulatory landscape with our comprehensive compliance services covering all statutory requirements.",
  ctaLabel: "Get Compliance Assessment",
  highlights: [
    { icon: Shield, title: "Zero Penalties", description: "100% on-time compliance record", color: "from-emerald-500/20 to-emerald-600/10" },
    { icon: AlertCircle, title: "Proactive Alerts", description: "Never miss a deadline", color: "from-blue-500/20 to-blue-600/10" },
    { icon: Scale, title: "Multi-Law Coverage", description: "All regulations under one roof", color: "from-amber-500/20 to-amber-600/10" },
    { icon: Building, title: "Industry Expertise", description: "Sector-specific knowledge", color: "from-purple-500/20 to-purple-600/10" }
  ],
  services: [
    { title: "Annual Compliance Management", description: "Comprehensive annual compliance covering all statutory requirements with proactive tracking.", features: ["Compliance calendar management", "Deadline tracking & alerts", "Filing coordination", "Compliance health reporting"], link: "/services/compliance/annual-compliance", highlight: "Popular" },
    { title: "Labour Law Compliance", description: "Complete labour law compliance including PF, ESIC, PT, and Shops Act.", features: ["PF/ESIC registration & returns", "Professional Tax compliance", "Shops Act registration", "Labour welfare fund"], link: "/services/compliance/labour-law" },
    { title: "Factory Act & Industrial Law", description: "Comprehensive compliance for manufacturing units under Factories Act.", features: ["Factory license renewal", "Safety compliance", "Pollution control", "Industrial licenses"], link: "/services/compliance/factory-act" },
    { title: "RBI, FEMA & SEBI Compliance", description: "Expert guidance on foreign exchange and capital market regulations.", features: ["FEMA compliance", "ECB/FDI compliance", "SEBI regulations", "RBI reporting"], link: "/services/compliance/rbi-fema-sebi" },
    { title: "NBFC Compliance", description: "Specialized compliance for Non-Banking Financial Companies.", features: ["RBI return filings", "Capital adequacy", "Asset classification", "Fair practice code"], link: "/services/compliance/nbfc" },
    { title: "Trust, Society & NGO Compliance", description: "Regulatory compliance for trusts, societies, and NGOs.", features: ["12A/80G registration", "FCRA compliance", "Annual returns", "Charitable status maintenance"], link: "/services/compliance/trust-ngo" }
  ],
  stats: [
    { number: "500+", label: "Compliance Clients" },
    { number: "0", label: "Penalties for Clients" },
    { number: "15+", label: "Regulations Covered" },
    { number: "45+", label: "Years Experience" }
  ],
  seo: {
    title: "Compliance & Regulatory – Labour Law, FEMA, NBFC & NGO",
    description: "Complete compliance services: Annual Compliance, Labour Law, FEMA, NBFC, Trust & NGO. Zero penalty record. Trusted compliance partner in Ahmedabad.",
    keywords: "compliance services, labour law compliance, FEMA compliance, NBFC compliance, NGO compliance, CA Ahmedabad",
    canonicalUrl: "/services/compliance"
  }
};

const ComplianceRegulatory = () => <ServiceCategoryTemplate data={data} />;
export default ComplianceRegulatory;
