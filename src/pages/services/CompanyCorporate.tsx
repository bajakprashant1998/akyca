import { ServiceCategoryTemplate, ServiceCategoryData } from "@/components/services/ServiceCategoryTemplate";
import { Building2, Shield, Users, Scale } from "lucide-react";

const data: ServiceCategoryData = {
  icon: Building2,
  badge: "Corporate Services",
  titleLine1: "Company &",
  titleLine2: "Corporate",
  description: "End-to-end corporate services from incorporation to M&A. Expert guidance on company formation, compliance, and corporate structuring.",
  ctaLabel: "Start Incorporation",
  highlights: [
    { icon: Building2, title: "500+ Companies", description: "Incorporated across various industries", color: "from-amber-500/20 to-amber-600/10" },
    { icon: Shield, title: "100% Compliance", description: "Never missed a filing deadline", color: "from-emerald-500/20 to-emerald-600/10" },
    { icon: Users, title: "Expert Team", description: "CS, CA & legal professionals", color: "from-blue-500/20 to-blue-600/10" },
    { icon: Scale, title: "End-to-End", description: "From incorporation to exit", color: "from-purple-500/20 to-purple-600/10" }
  ],
  services: [
    { title: "Company Incorporation", description: "End-to-end incorporation services including Private Limited, Public Limited, OPC, and Section 8 Companies.", features: ["Name availability check", "DSC & DIN procurement", "MOA/AOA drafting", "Certificate of Incorporation"], link: "/services/corporate/company-incorporation" },
    { title: "LLP Formation", description: "Complete LLP formation services with agreement drafting and LLP Act compliance.", features: ["DPIN & DSC acquisition", "LLP Agreement drafting", "Registration filing", "PAN & TAN application"], link: "/services/corporate/llp-formation" },
    { title: "ROC Compliance", description: "Annual and event-based ROC compliance including returns and e-forms filing.", features: ["Annual return filing (MGT-7)", "Financial statement filing (AOC-4)", "Event-based compliance", "Director KYC updation"], link: "/services/corporate/roc-compliance" },
    { title: "Secretarial Services", description: "Comprehensive company secretarial services including board meetings and register maintenance.", features: ["Board meeting coordination", "Minutes & resolutions drafting", "Statutory registers", "Share transfer management"], link: "/services/corporate/secretarial-services" },
    { title: "Due Diligence", description: "Thorough legal, financial, and tax due diligence for M&A, investments, and transactions.", features: ["Financial due diligence", "Tax compliance review", "Legal documentation review", "Risk assessment reports"], link: "/services/corporate/due-diligence" },
    { title: "Mergers & Acquisitions", description: "Advisory and execution support for mergers, demergers, acquisitions, and restructuring.", features: ["Valuation advisory", "Transaction structuring", "Regulatory approvals", "Post-merger integration"], link: "/services/corporate/mergers-acquisitions" }
  ],
  stats: [
    { number: "500+", label: "Companies Incorporated" },
    { number: "100+", label: "M&A Transactions" },
    { number: "1000+", label: "Annual Filings" },
    { number: "99%", label: "Client Satisfaction" }
  ],
  seo: {
    title: "Company & Corporate Services – Incorporation, LLP, ROC & M&A",
    description: "Complete corporate services: Company Incorporation, LLP Formation, ROC Compliance, Secretarial Services, Due Diligence, M&A. 500+ companies incorporated.",
    keywords: "company incorporation, LLP formation, ROC compliance, secretarial services, M&A advisory, CA Ahmedabad",
    canonicalUrl: "/services/corporate"
  }
};

const CompanyCorporate = () => <ServiceCategoryTemplate data={data} />;
export default CompanyCorporate;
