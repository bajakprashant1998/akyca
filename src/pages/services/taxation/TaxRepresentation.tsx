import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Scale } from "lucide-react";

const data = {
  title: "Representation before Tax Authorities",
  parentService: "Taxation Services",
  parentServicePath: "/services/taxation",
  icon: Scale,
  description: "Professional representation before Income Tax authorities for assessments, appeals, and dispute resolution at all levels.",
  longDescription: `When you receive a notice from the Income Tax Department, it requires prompt and professional response. Our experienced team provides complete representation before tax authorities at all levels, from initial assessments to the highest appellate forums.

With decades of experience in tax litigation, we understand the procedures, precedents, and strategies that work. We handle scrutiny assessments, appeals before CIT(A), ITAT, and higher courts, and settlement commission matters.

Our approach combines technical expertise with practical insights. We work to minimize additional tax liability while ensuring complete compliance with procedural requirements. Our success rate in appeals speaks to our expertise in this area.`,
  features: [
    "Scrutiny assessment handling and response",
    "Appeal drafting and filing before CIT(A)",
    "ITAT (Income Tax Appellate Tribunal) representation",
    "High Court and Supreme Court matters",
    "Settlement Commission applications",
    "Revision petitions under Section 264",
    "Rectification applications under Section 154",
    "Advance Ruling applications"
  ],
  process: [
    { step: "Case Analysis", description: "Thorough review of the case facts, law, and department's position" },
    { step: "Strategy Development", description: "Formulate the best approach for defense and resolution" },
    { step: "Documentation Preparation", description: "Compile evidence and prepare written submissions" },
    { step: "Representation", description: "Appear before authorities and present the case effectively" }
  ],
  benefits: [
    "Expert advocacy by experienced professionals",
    "Higher success rate in appeals and assessments",
    "Significant reduction in disputed tax liability",
    "Complete peace of mind during proceedings",
    "Strategic approach to minimize exposure",
    "Timely compliance with all procedural requirements"
  ],
  useCases: [
    { title: "Scrutiny Cases", description: "Taxpayers selected for detailed scrutiny assessment" },
    { title: "High-Value Additions", description: "Cases with significant additions by Assessing Officer" },
    { title: "Penalty Matters", description: "Appeals against penalties for concealment or misreporting" },
    { title: "Refund Disputes", description: "Cases where refunds are denied or delayed" },
    { title: "Search & Survey", description: "Post-search and survey assessment matters" },
    { title: "Transfer Pricing", description: "International taxation and transfer pricing disputes" }
  ],
  faqs: [
    { question: "What should I do if I receive a scrutiny notice?", answer: "Don't panic. Contact us immediately. We will analyze the notice, understand the issues, and respond appropriately within the given time. Do not ignore the notice as it can lead to adverse orders." },
    { question: "What is the time limit for filing an appeal?", answer: "Appeals before CIT(A) must be filed within 30 days of receiving the order. ITAT appeals have a 60-day limit. High Court matters have 120 days. We ensure timely filing with proper grounds." },
    { question: "What are the chances of success in appeal?", answer: "Success depends on the merits of the case. We provide an honest assessment upfront. Our historical success rate is above 70% for cases we take up, as we advise against pursuing weak cases." },
    { question: "How long do tax cases take to resolve?", answer: "CIT(A) matters typically take 1-2 years. ITAT matters can take 2-5 years. High Court and Supreme Court matters can take longer. We work to expedite where possible." },
    { question: "Can penalty be avoided?", answer: "Penalties can be challenged if the addition itself is deleted or if you can prove reasonable cause for the default. We have successfully defended many penalty matters on both grounds." }
  ],
  stats: [
    { number: "70%+", label: "Success Rate" },
    { number: "₹500Cr+", label: "Demands Defended" },
    { number: "1,000+", label: "Cases Handled" },
    { number: "45+", label: "Years Experience" }
  ]
};

const TaxRepresentation = () => <SubServiceTemplate data={data} />;

export default TaxRepresentation;
