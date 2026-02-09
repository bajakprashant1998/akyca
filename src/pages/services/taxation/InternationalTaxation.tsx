import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Globe } from "lucide-react";

const data = {
  title: "International Taxation",
  parentService: "Taxation Services",
  parentServicePath: "/services/taxation",
  icon: Globe,
  description: "Expert guidance on cross-border transactions, DTAA benefits, and international tax compliance for businesses with global operations.",
  longDescription: `International Taxation is increasingly important as businesses expand globally and individuals have cross-border income and assets. Navigating the complex web of domestic laws, tax treaties, and international regulations requires specialized expertise.

Our international tax team provides comprehensive support for all aspects of cross-border taxation. We help businesses structure their international operations tax-efficiently while ensuring compliance with both Indian and foreign tax regulations.

From Double Taxation Avoidance Agreements (DTAA) to transfer pricing, from expatriate taxation to foreign remittance compliance, we cover the full spectrum of international tax issues. Our goal is to help you minimize global tax liability while avoiding double taxation.`,
  features: [
    "DTAA treaty benefit analysis and optimization",
    "Cross-border transaction structuring",
    "Expatriate taxation and tax equalization",
    "Foreign income tax compliance (Schedule FA)",
    "Outbound investment structuring",
    "Inbound investment advisory",
    "Tax residency certificate assistance",
    "POEM (Place of Effective Management) advisory"
  ],
  process: [
    { step: "Treaty Analysis", description: "Analyze applicable tax treaties to identify available benefits" },
    { step: "Structure Optimization", description: "Design tax-efficient structures for international operations" },
    { step: "Withholding Compliance", description: "Ensure proper withholding tax on cross-border payments" },
    { step: "Reporting & Filing", description: "Complete all reporting requirements including foreign asset disclosure" }
  ],
  benefits: [
    "Avoidance of double taxation through DTAA benefits",
    "Tax-optimized international structures",
    "Complete compliance with domestic and foreign regulations",
    "Expert representation in transfer pricing matters",
    "Reduced withholding tax on cross-border payments",
    "Strategic planning for global expansion"
  ],
  useCases: [
    { title: "Exporters", description: "Businesses with significant export revenue requiring treaty benefits" },
    { title: "Multinational Companies", description: "Entities with operations in multiple countries" },
    { title: "Foreign Investors", description: "Non-residents investing in Indian companies" },
    { title: "Indian MNCs", description: "Indian companies with foreign subsidiaries" },
    { title: "Expatriates", description: "Foreign nationals working in India or Indians working abroad" },
    { title: "Tech Companies", description: "IT/ITES companies with foreign clients and operations" }
  ],
  faqs: [
    { question: "What is DTAA and how does it help?", answer: "DTAA (Double Taxation Avoidance Agreement) is a treaty between two countries to avoid taxing the same income twice. India has DTAAs with over 90 countries. These treaties can reduce withholding tax rates and provide relief from double taxation." },
    { question: "How is tax residency determined?", answer: "For individuals, it's based on physical presence in India (182 days or more). For companies, POEM (Place of Effective Management) determines residency. Treaty tie-breaker rules apply when dual residency exists." },
    { question: "What is transfer pricing?", answer: "Transfer pricing involves setting prices for transactions between related parties in different countries. It must be at arm's length (market rate) to avoid profit shifting. Non-compliance can result in significant penalties." },
    { question: "Do I need to report foreign assets?", answer: "Yes, Indian residents must disclose foreign assets and income in Schedule FA of the income tax return. Non-disclosure can result in penalties of ₹10 lakhs and prosecution under the Black Money Act." },
    { question: "How can withholding tax be reduced?", answer: "Withholding tax can be reduced by claiming DTAA benefits (lower treaty rates), obtaining a lower deduction certificate from tax authorities, or restructuring transactions appropriately." }
  ],
  stats: [
    { number: "50+", label: "Countries Covered" },
    { number: "₹500Cr+", label: "Cross-border Advisory" },
    { number: "200+", label: "MNC Clients" },
    { number: "100%", label: "Treaty Compliance" }
  ],
  relatedServices: [
    { title: "NRI Taxation", description: "Tax services for non-residents", link: "/services/taxation/nri-taxation" },
    { title: "Corporate Taxation", description: "Domestic corporate tax compliance", link: "/services/taxation/corporate-taxation" },
    { title: "Tax Planning", description: "Strategic tax advisory", link: "/services/taxation/tax-planning" },
    { title: "Income Tax Return", description: "ITR filing services", link: "/services/taxation/income-tax-return" },
    { title: "Business Structuring", description: "Global business structuring", link: "/services/financial/business-structuring" },
    { title: "FEMA Compliance", description: "RBI & FEMA compliance", link: "/services/compliance/rbi-fema-sebi" }
  ]
};

const InternationalTaxation = () => <SubServiceTemplate data={data} />;

export default InternationalTaxation;
