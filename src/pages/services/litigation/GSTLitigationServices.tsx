import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Gavel } from "lucide-react";

const GSTLitigationServices = () => {
  const data = {
    title: "GST Litigation Services",
    parentService: "Litigation & Representation",
    parentServicePath: "/services/litigation",
    icon: Gavel,
    description: "Comprehensive GST litigation support including show cause notice replies, adjudication hearings, appeals, and advance ruling applications.",
    longDescription: `GST disputes require specialized handling given the complexity of the law and the multiple forums involved. At Ashvin K Yagnik & Co., we provide complete GST litigation services from the first show cause notice through appellate proceedings.

Our GST litigation team handles responses to show cause notices, representation during adjudication proceedings, appeals before First Appellate Authority and GST Tribunal, and advance ruling applications. We combine technical GST expertise with advocacy skills for effective representation.

Whether you're facing a demand for alleged short payment, ITC reversal, or classification disputes, our experienced team prepares comprehensive defenses and represents your case effectively at every stage.`,
    features: [
      "Show cause notice response drafting",
      "Personal hearing representation",
      "Appeal before First Appellate Authority",
      "GST Tribunal representation",
      "Advance ruling applications",
      "Revision and rectification petitions",
      "Stay applications on disputed demand",
      "Writ petitions in High Court"
    ],
    process: [
      { step: "Notice Analysis", description: "Review SCN and identify technical and legal issues" },
      { step: "Defense Preparation", description: "Compile evidence and prepare detailed reply" },
      { step: "Representation", description: "Present case during personal hearing" },
      { step: "Appeal Management", description: "File and argue appeals if needed" }
    ],
    benefits: [
      "Expert GST representation",
      "Comprehensive defense strategy",
      "Technical accuracy",
      "Timely responses",
      "Demand mitigation",
      "Precedent-based arguments"
    ],
    useCases: [
      { title: "ITC Disputes", description: "Challenges to input tax credit claims" },
      { title: "Classification Issues", description: "HSN/SAC classification disputes" },
      { title: "Valuation Matters", description: "Disputes on transaction value" },
      { title: "E-way Bill Cases", description: "Penalty for e-way bill violations" },
      { title: "Transitional Credit", description: "TRAN-1 and TRAN-2 disputes" },
      { title: "Export Refunds", description: "Disputes on IGST refund claims" }
    ],
    faqs: [
      { question: "What is the timeline for replying to GST show cause notice?", answer: "Typically 30 days from receipt, extendable by further 30 days on request. Some notices may have shorter timelines that must be carefully noted." },
      { question: "Can GST demand be stayed during appeal?", answer: "Yes, pre-deposit of 10% is required for first appeal and additional 10% for second appeal. Remaining demand is automatically stayed during appeal." },
      { question: "Is GST Tribunal operational?", answer: "As of now, GST Tribunals are being constituted state by state. Appeals filed with the Tribunal will be taken up once benches are operational." },
      { question: "What is the role of advance ruling?", answer: "Advance ruling provides clarity on classification, rate, or ITC eligibility before taking a position. It's binding on the applicant and the jurisdictional officer." },
      { question: "Can we go to High Court in GST matters?", answer: "Yes, writ petitions can be filed for violation of natural justice, jurisdictional issues, or when alternative remedy is not effective. Direct appeals lie only from Tribunal." }
    ],
    stats: [
      { number: "200+", label: "GST Cases Handled" },
      { number: "70%", label: "Success Rate" },
      { number: "₹50Cr+", label: "Demand Defended" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default GSTLitigationServices;
