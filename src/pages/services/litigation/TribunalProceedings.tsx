import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Building2 } from "lucide-react";

const TribunalProceedings = () => {
  const data = {
    title: "Tribunal Proceedings",
    parentService: "Litigation & Representation",
    parentServicePath: "/services/litigation",
    icon: Building2,
    description: "Expert representation before various tribunals including ITAT, CESTAT, NCLT, SAT, and other quasi-judicial forums with comprehensive case preparation.",
    longDescription: `Tribunals provide specialized adjudication for various regulatory matters. At Ashvin K Yagnik & Co., we provide expert representation before multiple tribunals dealing with taxation, corporate matters, securities, and other regulatory disputes.

Our tribunal practice covers Income Tax Appellate Tribunal (ITAT), Customs Excise and Service Tax Appellate Tribunal (CESTAT), National Company Law Tribunal (NCLT), Securities Appellate Tribunal (SAT), and other specialized forums. We handle appeals, applications, and other proceedings.

With decades of experience in tribunal advocacy, our team prepares compelling written submissions, presents oral arguments effectively, and follows through to ensure favorable outcomes for our clients.`,
    features: [
      "ITAT appeals and cross objections",
      "CESTAT appeals for customs and excise",
      "NCLT matters including IBC cases",
      "SAT appeals for SEBI matters",
      "AAR/AAAR applications",
      "DRT matters for banking disputes",
      "Written submissions and paper books",
      "Stay and interim relief applications"
    ],
    process: [
      { step: "Case Briefing", description: "Understand facts, issues, and previous orders" },
      { step: "Legal Research", description: "Research precedents and prepare legal strategy" },
      { step: "Documentation", description: "Prepare appeal memo, paper book, and written submissions" },
      { step: "Hearing & Follow-up", description: "Argue matter and follow through to order" }
    ],
    benefits: [
      "Specialized tribunal expertise",
      "Strong advocacy skills",
      "Comprehensive documentation",
      "Timely hearing attendance",
      "Regular status updates",
      "Higher success rates"
    ],
    useCases: [
      { title: "Tax Appeals", description: "ITAT proceedings for income tax matters" },
      { title: "Customs Matters", description: "CESTAT appeals for customs duty disputes" },
      { title: "Corporate Disputes", description: "NCLT for oppression, mismanagement, and winding up" },
      { title: "Insolvency Cases", description: "NCLT proceedings under IBC" },
      { title: "Securities Matters", description: "SAT appeals against SEBI orders" },
      { title: "Banking Disputes", description: "DRT proceedings for recovery matters" }
    ],
    faqs: [
      { question: "What is the appeal limitation period for tribunals?", answer: "It varies by tribunal. ITAT is 60 days, CESTAT is 3 months, NCLT is 45 days, SAT is 45 days. Condonation of delay is possible with valid reasons." },
      { question: "Can we appear ourselves before tribunals?", answer: "Authorized representatives like CAs can appear before ITAT and CESTAT. NCLT and SAT may require advocates or specific professionals." },
      { question: "How long do tribunal proceedings take?", answer: "Timeline varies by tribunal and bench. ITAT matters may take 1-3 years. NCLT matters range from few months to years depending on nature." },
      { question: "Is the tribunal order final?", answer: "Tribunal orders can be challenged in High Court on substantial questions of law. NCLT orders can be appealed to NCLAT." },
      { question: "What is the cost of tribunal proceedings?", answer: "Costs include filing fees (which vary), professional fees, and incidental expenses. We provide transparent fee estimates upfront." }
    ],
    stats: [
      { number: "400+", label: "Tribunal Matters" },
      { number: "75%", label: "Success Rate" },
      { number: "20+", label: "Years Tribunal Practice" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default TribunalProceedings;
