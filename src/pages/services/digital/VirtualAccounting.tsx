import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Laptop } from "lucide-react";

const VirtualAccounting = () => {
  const data = {
    title: "Virtual Accounting Department",
    parentService: "Digital & Modern Accounting",
    parentServicePath: "/services/digital-accounting",
    icon: Laptop,
    description: "Complete outsourced accounting function providing bookkeeping, compliance, and financial reporting.",
    longDescription: `Not every business needs or can afford a full in-house accounting team. At Ashvin K Yagnik & Co., we offer Virtual Accounting Department services - a complete outsourced finance function that handles your accounting end-to-end.

Our virtual accounting team handles daily bookkeeping, vendor and customer invoicing, bank reconciliation, GST compliance, TDS management, monthly closings, and financial statement preparation. You get a dedicated team without the overhead of full-time hires.

This service is ideal for startups, SMEs, and businesses looking to focus on their core operations while leaving finance to experts.`,
    features: [
      "Daily bookkeeping",
      "Accounts payable management",
      "Accounts receivable management",
      "Bank reconciliation",
      "GST compliance",
      "TDS management",
      "Monthly closings",
      "Financial statements"
    ],
    process: [
      { step: "Onboarding", description: "Understand business, setup systems access" },
      { step: "Process Setup", description: "Establish workflows and communication" },
      { step: "Ongoing Operations", description: "Daily/weekly accounting activities" },
      { step: "Reporting", description: "Monthly/quarterly financial reports" }
    ],
    benefits: [
      "Cost savings vs in-house",
      "Expert team",
      "Scalable capacity",
      "Business continuity",
      "Focus on core business",
      "Compliance assured"
    ],
    useCases: [
      { title: "Startup", description: "Complete accounting without hiring" },
      { title: "SME", description: "Augmenting limited in-house team" },
      { title: "New Business Unit", description: "Accounting for new operation" },
      { title: "Transition Period", description: "Coverage during team changes" },
      { title: "Growth Phase", description: "Scaling finance without fixed costs" },
      { title: "Multi-Entity", description: "Consolidated multi-company accounting" }
    ],
    faqs: [
      { question: "How do we communicate with the virtual team?", answer: "We establish regular communication channels - email, calls, video meetings as needed. You get a dedicated relationship manager as your single point of contact." },
      { question: "How do you access our systems?", answer: "We work in your cloud accounting system or can set up systems for you. Access is secure with proper user management and audit trails." },
      { question: "What about document handling?", answer: "We set up digital document collection - email, shared folders, or apps. Physical documents can be scanned and sent. We ensure proper documentation for all entries." },
      { question: "How quickly can you start?", answer: "We can be operational within 1-2 weeks for standard requirements. Complex setups may take longer for proper transition." }
    ],
    stats: [
      { number: "100+", label: "Clients Served" },
      { number: "50%", label: "Cost Savings" },
      { number: "99%", label: "Accuracy Rate" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Cloud Accounting", description: "Accounting platform setup", link: "/services/digital/cloud-accounting" },
      { title: "Finance Automation", description: "Efficiency tools", link: "/services/digital/finance-automation" },
      { title: "MIS Dashboards", description: "Performance reporting", link: "/services/digital/mis-dashboards" },
      { title: "GST Return Filing", description: "Compliance included", link: "/services/gst/return-filing" },
      { title: "Labour Law", description: "Payroll compliance", link: "/services/compliance/labour-law" },
      { title: "TDS Compliance", description: "Tax deductions", link: "/services/taxation/tds-compliance" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default VirtualAccounting;
