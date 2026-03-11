import { ServiceCategoryTemplate, ServiceCategoryData } from "@/components/services/ServiceCategoryTemplate";
import { Gavel, Shield, Scale, Users } from "lucide-react";

const data: ServiceCategoryData = {
  icon: Gavel,
  badge: "Legal Support",
  titleLine1: "Litigation &",
  titleLine2: "Representation",
  description: "Strong advocacy and expert representation before tax authorities and tribunals at all levels — from Assessing Officer to Supreme Court.",
  ctaLabel: "Get Legal Consultation",
  highlights: [
    { icon: Gavel, title: "500+ Cases", description: "Successfully handled across all levels", color: "from-orange-500/20 to-orange-600/10" },
    { icon: Shield, title: "85% Success Rate", description: "Strong track record in appeals", color: "from-emerald-500/20 to-emerald-600/10" },
    { icon: Scale, title: "All Levels", description: "AO to Supreme Court representation", color: "from-blue-500/20 to-blue-600/10" },
    { icon: Users, title: "Expert Team", description: "45+ years of litigation experience", color: "from-purple-500/20 to-purple-600/10" }
  ],
  services: [
    { title: "Income Tax Appeals & Assessments", description: "Professional representation in income tax assessments and appeals at all levels.", features: ["Assessment proceedings", "CIT(A) appeals", "ITAT representation", "High Court matters"], link: "/services/litigation/income-tax-appeals", highlight: "Most Common" },
    { title: "GST Litigation", description: "Expert handling of GST disputes and litigation matters.", features: ["Notice response", "Assessment challenges", "Appellate proceedings", "Advance rulings"], link: "/services/litigation/gst-litigation" },
    { title: "Tribunal & Commissioner Proceedings", description: "Skilled representation before tribunals and commissioners.", features: ["Case preparation", "Written submissions", "Oral arguments", "Cross-examination"], link: "/services/litigation/tribunal-proceedings" },
    { title: "Notice Drafting & Reply", description: "Expert drafting of responses to tax authority notices.", features: ["Notice analysis", "Reply preparation", "Document compilation", "Timely submission"], link: "/services/litigation/notice-drafting" },
    { title: "Search & Survey Case Handling", description: "Specialized support during and after search operations.", features: ["On-ground support", "Post-search handling", "Settlement matters", "Block assessment"], link: "/services/litigation/search-survey", highlight: "Specialized" },
    { title: "Black Money & Benami Act Advisory", description: "Expert advisory on Black Money and Benami Act matters.", features: ["Compliance advisory", "Disclosure assistance", "Notice handling", "Penalty mitigation"], link: "/services/litigation/black-money-act" }
  ],
  stats: [
    { number: "500+", label: "Cases Handled" },
    { number: "85%", label: "Success Rate" },
    { number: "45+", label: "Years Experience" },
    { number: "All", label: "AO to Supreme Court" }
  ],
  seo: {
    title: "Litigation & Representation – Tax Appeals, GST & Tribunal",
    description: "Expert litigation services: Income Tax Appeals, GST Litigation, Tribunal Proceedings, Notice Handling, Search Cases. 85% success rate.",
    keywords: "tax litigation, income tax appeal, GST litigation, tribunal representation, tax notice reply, CA Ahmedabad",
    canonicalUrl: "/services/litigation"
  }
};

const LitigationRepresentation = () => <ServiceCategoryTemplate data={data} />;
export default LitigationRepresentation;
