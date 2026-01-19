import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { FileCheck } from "lucide-react";

const data = {
  title: "GST Registration",
  parentService: "GST Services",
  parentServicePath: "/services/gst",
  icon: FileCheck,
  description: "Complete assistance with GST registration process including application preparation, documentation, and obtaining GSTIN for new businesses.",
  longDescription: `GST Registration is mandatory for businesses with turnover exceeding ₹40 lakhs (₹20 lakhs for services and special category states). Even below this threshold, voluntary registration offers benefits like input tax credit and business credibility.

Our GST registration service handles the complete process from document preparation to GSTIN issuance. We ensure error-free applications that get approved quickly without queries or rejections.

Whether you're starting a new business, expanding to new states, or need to migrate from old registrations, we provide expert guidance at every step. We also handle amendments, cancellations, and revocations as needed.`,
  features: [
    "New GST registration for all business types",
    "State-wise registration for multi-state operations",
    "Voluntary registration for small businesses",
    "Amendment in existing registration details",
    "Cancellation of GST registration",
    "Revocation of cancelled registration",
    "Migration from old tax registrations",
    "Composition scheme registration"
  ],
  process: [
    { step: "Document Collection", description: "Gather PAN, Aadhaar, business proof, bank details, and photos" },
    { step: "Application Preparation", description: "Fill application accurately on GST portal with proper classification" },
    { step: "ARN Generation", description: "Submit application and receive Application Reference Number" },
    { step: "GSTIN Issuance", description: "Obtain GST registration certificate with 15-digit GSTIN" }
  ],
  benefits: [
    "Quick registration within 3-7 working days",
    "Error-free application avoiding rejections",
    "Expert guidance on business classification",
    "Post-registration compliance support",
    "Multiple state registration handling",
    "Complete documentation for records"
  ],
  useCases: [
    { title: "New Businesses", description: "Startups and new ventures needing first-time GST registration" },
    { title: "E-commerce Sellers", description: "Online sellers mandatorily requiring GST registration" },
    { title: "Inter-state Suppliers", description: "Businesses making inter-state sales regardless of turnover" },
    { title: "Exporters", description: "Export businesses needing GST for LUT and refund claims" },
    { title: "Casual Taxable Persons", description: "Occasional suppliers needing temporary registration" },
    { title: "Input Service Distributors", description: "Entities distributing ITC to branches" }
  ],
  faqs: [
    { question: "What is the threshold for GST registration?", answer: "₹40 lakhs for goods suppliers (₹20 lakhs in special category states). ₹20 lakhs for service providers (₹10 lakhs in special category states). Certain businesses need mandatory registration regardless of turnover." },
    { question: "What documents are needed for GST registration?", answer: "PAN card, Aadhaar, photograph, business registration proof, bank statement/cancelled cheque, rental agreement or property papers, digital signature (for companies), and authorization letter." },
    { question: "How long does GST registration take?", answer: "Typically 3-7 working days if all documents are in order. In case of queries from the department, it may take longer. We ensure applications are complete to minimize delays." },
    { question: "Can registration be cancelled?", answer: "Yes, you can apply for cancellation if business is discontinued or turnover falls below threshold. There are certain conditions and procedures to be followed, and we assist with the complete process." },
    { question: "Do I need separate registration for each state?", answer: "Yes, GST registration is state-specific. If you have business operations in multiple states, you need separate registration in each state. We help with multi-state registration requirements." }
  ],
  stats: [
    { number: "5,000+", label: "Registrations Done" },
    { number: "98%", label: "First-time Approval" },
    { number: "3 Days", label: "Average Processing" },
    { number: "50+", label: "Cities Covered" }
  ]
};

const GSTRegistration = () => <SubServiceTemplate data={data} />;

export default GSTRegistration;
