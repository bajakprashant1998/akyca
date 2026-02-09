import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Lightbulb } from "lucide-react";

const data = {
  title: "GST Advisory & Compliance",
  parentService: "GST Services",
  parentServicePath: "/services/gst",
  icon: Lightbulb,
  description: "Strategic GST advisory services covering tax planning, rate classification, and compliance optimization for business operations.",
  longDescription: `GST Advisory goes beyond routine compliance to help businesses optimize their GST position strategically. Correct classification, proper documentation, and proactive planning can significantly impact your tax efficiency and compliance health.

Our GST advisory services help businesses navigate complex GST issues including HSN classification, place of supply determination, ITC eligibility, and reverse charge applicability. We provide practical solutions that work within the law.

We work with businesses to structure transactions optimally, implement robust compliance processes, and stay updated with frequent GST law changes. Our advisory adds value by preventing issues before they arise.`,
  features: [
    "HSN/SAC code classification advisory",
    "GST rate determination for complex supplies",
    "Place of supply determination",
    "Input tax credit eligibility analysis",
    "Reverse charge mechanism compliance",
    "E-invoicing and e-way bill advisory",
    "Anti-profiteering compliance",
    "GST impact assessment for new transactions"
  ],
  process: [
    { step: "Business Analysis", description: "Understand your business model, supplies, and transaction patterns" },
    { step: "Compliance Review", description: "Review current GST practices and identify improvement areas" },
    { step: "Strategy Formulation", description: "Develop strategies for compliance optimization" },
    { step: "Implementation", description: "Support implementation of recommended changes" }
  ],
  benefits: [
    "Optimized GST position through proper classification",
    "Reduced litigation risk with correct compliance",
    "Maximum ITC through proper documentation",
    "Cost savings from better planning",
    "Proactive updates on law changes",
    "Expert guidance on complex matters"
  ],
  useCases: [
    { title: "New Product Launches", description: "Businesses launching new products needing HSN classification" },
    { title: "Complex Contracts", description: "Companies with composite/mixed supply determinations" },
    { title: "Inter-state Operations", description: "Businesses needing place of supply clarity" },
    { title: "Import/Export", description: "Traders with cross-border GST implications" },
    { title: "Real Estate", description: "Developers with complex GST provisions" },
    { title: "Government Contractors", description: "Suppliers to government with unique provisions" }
  ],
  faqs: [
    { question: "How is HSN classification determined?", answer: "HSN classification is based on the nature of goods as per Customs Tariff Act. We analyze product specifications, composition, and use to determine the correct code. Incorrect classification can lead to wrong rate and future demands." },
    { question: "What is place of supply and why is it important?", answer: "Place of supply determines whether a transaction is inter-state (IGST) or intra-state (CGST+SGST). Wrong determination leads to incorrect tax type, affecting ITC and creating compliance issues." },
    { question: "What expenses are not eligible for ITC?", answer: "ITC is blocked on motor vehicles (with exceptions), food and beverages, club memberships, personal expenses, and supplies used for exempt outputs. Claiming blocked ITC leads to reversals with interest." },
    { question: "What is reverse charge mechanism?", answer: "Under reverse charge, the recipient pays GST instead of supplier. It applies to specified goods/services and imports. Non-compliance results in tax liability with interest and penalties." },
    { question: "How do GST law changes affect compliance?", answer: "GST law changes frequently through notifications and circulars. We provide timely updates and help implement changes in your processes to ensure continued compliance." }
  ],
  stats: [
    { number: "500+", label: "Advisory Assignments" },
    { number: "₹100Cr+", label: "Tax Impact Analyzed" },
    { number: "50+", label: "Industry Sectors" },
    { number: "100%", label: "Client Satisfaction" }
  ],
  relatedServices: [
    { title: "GST Litigation", description: "Handling notices and appeals", link: "/services/gst/litigation" },
    { title: "Tax Planning", description: "Strategic direct tax planning", link: "/services/taxation/tax-planning" },
    { title: "Business Structuring", description: "Optimal entity structure advice", link: "/services/financial/business-structuring" },
    { title: "Virtual CFO", description: "Strategic financial leadership", link: "/services/financial/virtual-cfo" },
    { title: "GST Audit", description: "GSTR-9C certification", link: "/services/gst/audit" },
    { title: "Export Import Services", description: "Cross-border trade advisory", link: "/services/industry/export-import" }
  ]
};

const GSTAdvisory = () => <SubServiceTemplate data={data} />;

export default GSTAdvisory;
