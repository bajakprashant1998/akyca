import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Heart } from "lucide-react";

const Healthcare = () => {
  const data = {
    title: "Healthcare & Hospital Accounting",
    parentService: "Industry-Specific Services",
    parentServicePath: "/services/industry",
    icon: Heart,
    description: "Specialized accounting and compliance services for hospitals, clinics, diagnostic centers, and healthcare providers.",
    longDescription: `The healthcare sector presents unique accounting and compliance challenges - from complex revenue recognition for bundled services to regulatory compliance under Clinical Establishments Act and NABH standards. At Ashvin K Yagnik & Co., we bring deep healthcare sector expertise.

Our services cover the full spectrum of healthcare entities - from single-doctor clinics to multi-specialty hospitals and diagnostic chains. We handle specialized requirements like department-wise cost centers, doctor revenue sharing, package billing accounting, and healthcare-specific GST provisions.

We also assist with regulatory compliance including PCPNDT Act, AERB licenses for radiology, and state-specific clinical establishment registrations. Our team understands healthcare operations and provides practical, compliant solutions.`,
    features: [
      "Hospital accounting systems setup",
      "Cost center and department accounting",
      "Revenue recognition for packages",
      "Healthcare GST compliance",
      "Doctor fee structuring",
      "TDS on professional fees",
      "Regulatory license management",
      "NABH documentation support"
    ],
    process: [
      { step: "Assessment", description: "Understand hospital structure, departments, and revenue streams" },
      { step: "System Setup", description: "Implement accounting system with proper cost centers" },
      { step: "Compliance", description: "Handle ongoing tax, GST, and regulatory compliance" },
      { step: "Reporting", description: "Generate MIS, cost analysis, and financial statements" }
    ],
    benefits: [
      "Accurate revenue recognition",
      "Department-wise profitability",
      "Tax-efficient doctor structures",
      "Regulatory compliance",
      "Better financial control",
      "Industry best practices"
    ],
    useCases: [
      { title: "Multi-Specialty Hospital", description: "Complete accounting and compliance for large hospitals" },
      { title: "Diagnostic Chain", description: "Multi-location accounting and GST compliance" },
      { title: "Clinic Setup", description: "New clinic incorporation and compliance setup" },
      { title: "Doctor Groups", description: "Revenue sharing and partnership structuring" },
      { title: "Medical Tourism", description: "Foreign patient billing and FEMA compliance" },
      { title: "Pharmacy Operations", description: "In-house pharmacy accounting and GST" }
    ],
    faqs: [
      { question: "How is GST handled for healthcare services?", answer: "Most healthcare services are exempt from GST. However, cosmetic procedures, room rent above ₹5000/day, and medicines to non-patients attract GST. We ensure proper classification and compliance." },
      { question: "How to account for package billing?", answer: "Package billing requires proper allocation across services, accommodation, and consumables. We set up systems for accurate revenue allocation and cost tracking." },
      { question: "What structure works best for doctor fees?", answer: "Options include salary, retainership, or revenue sharing. We design structures optimizing tax for both hospital and doctors while ensuring TDS compliance." },
      { question: "What regulatory registrations are needed?", answer: "Requirements include Clinical Establishment registration, PCPNDT, AERB (if radiology), BMW registration, and state-specific licenses. We manage all registrations." }
    ],
    stats: [
      { number: "50+", label: "Healthcare Clients" },
      { number: "₹1000Cr+", label: "Revenue Managed" },
      { number: "100%", label: "Compliance Rate" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Tax Planning", description: "Doctor tax planning", link: "/services/taxation/tax-planning" },
      { title: "Virtual Accounting", description: "Clinic accounting", link: "/services/digital/virtual-accounting" },
      { title: "Internal Audit", description: "Hospital audit", link: "/services/audit/internal-audit" },
      { title: "Trust & NGO Compliance", description: "Charitable hospital", link: "/services/compliance/trust-ngo-compliance" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default Healthcare;
