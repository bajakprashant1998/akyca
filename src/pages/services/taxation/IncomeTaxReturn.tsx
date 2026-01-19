import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { FileText } from "lucide-react";

const data = {
  title: "Income Tax Return Filing",
  parentService: "Taxation Services",
  parentServicePath: "/services/taxation",
  icon: FileText,
  description: "Expert preparation and timely filing of income tax returns for individuals, businesses, and corporations with maximum deductions and complete compliance.",
  longDescription: `Our Income Tax Return Filing service provides comprehensive support for individuals and businesses to fulfill their tax obligations accurately and on time. With over 45 years of experience, we have filed thousands of returns with a 100% compliance record.

Our expert team analyzes your financial situation to identify all eligible deductions and exemptions, ensuring you pay only what is legally required. We handle everything from simple salary-based returns to complex business and corporate filings, including multiple sources of income, capital gains, and foreign income.

We use the latest e-filing technology and maintain complete documentation for future reference. Our service includes post-filing support for any notices or queries from the Income Tax Department.`,
  features: [
    "Accurate computation of taxable income from all sources",
    "Identification of all eligible deductions under Chapter VI-A",
    "E-filing with instant acknowledgment receipt",
    "Capital gains computation and optimization",
    "Foreign income and asset reporting (Schedule FA)",
    "Assessment and notice follow-up support",
    "Previous year return rectification",
    "Belated and revised return filing"
  ],
  process: [
    { step: "Document Collection", description: "Gather Form 16, bank statements, investment proofs, and other relevant documents" },
    { step: "Income Computation", description: "Calculate income from all sources and classify appropriately" },
    { step: "Deduction Optimization", description: "Identify and apply all eligible deductions to minimize tax liability" },
    { step: "Filing & Verification", description: "E-file the return and complete e-verification for instant processing" }
  ],
  benefits: [
    "Zero penalty guarantee with timely filing",
    "Maximum tax savings through expert computation",
    "Complete peace of mind with professional handling",
    "Audit support included at no extra cost",
    "Year-round tax planning advice",
    "Quick refund processing assistance"
  ],
  useCases: [
    { title: "Salaried Individuals", description: "Employees with salary income, HRA claims, and standard deductions" },
    { title: "Business Owners", description: "Proprietors and partners with business/professional income" },
    { title: "Freelancers", description: "Self-employed professionals with multiple income sources" },
    { title: "Investors", description: "Individuals with capital gains from stocks, mutual funds, and property" },
    { title: "NRIs", description: "Non-residents with Indian income requiring ITR filing" },
    { title: "Senior Citizens", description: "Retirees with pension, interest, and other income sources" }
  ],
  faqs: [
    { question: "What is the deadline for filing ITR?", answer: "For individuals without audit requirements, the deadline is July 31st of the assessment year. For audit cases, it's October 31st. Belated returns can be filed until December 31st with a late fee." },
    { question: "Which ITR form should I file?", answer: "The form depends on your income sources. ITR-1 is for salaried individuals with income up to ₹50 lakhs. ITR-2 is for individuals with capital gains. ITR-3 is for business income. Our experts will determine the correct form for you." },
    { question: "What documents are needed for ITR filing?", answer: "Key documents include Form 16, Form 26AS, bank statements, investment proofs (80C, 80D), property documents (if applicable), and previous year's ITR acknowledgment." },
    { question: "Can I revise my ITR after filing?", answer: "Yes, you can file a revised return until December 31st of the assessment year or before the completion of assessment, whichever is earlier." },
    { question: "What happens if I miss the deadline?", answer: "You can file a belated return with a late fee of ₹5,000 (₹1,000 if income is below ₹5 lakhs). However, certain benefits like carrying forward losses may be lost." }
  ],
  stats: [
    { number: "10,000+", label: "Returns Filed" },
    { number: "100%", label: "Compliance Rate" },
    { number: "₹50Cr+", label: "Refunds Processed" },
    { number: "45+", label: "Years Experience" }
  ]
};

const IncomeTaxReturn = () => <SubServiceTemplate data={data} />;

export default IncomeTaxReturn;
