import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Zap } from "lucide-react";

const FinanceAutomation = () => {
  const data = {
    title: "Automation of Finance Systems",
    parentService: "Digital & Modern Accounting",
    parentServicePath: "/services/digital-accounting",
    icon: Zap,
    description: "Streamline financial processes through automation for efficiency, accuracy, and faster processing.",
    longDescription: `Manual financial processes are slow, error-prone, and expensive. At Ashvin K Yagnik & Co., we help businesses automate their finance functions - from invoice processing to bank reconciliation to expense management.

Our automation solutions use a combination of accounting software features, third-party tools, and custom workflows. We focus on high-impact areas where automation delivers maximum ROI.

We understand that automation is a journey, not a destination. We help you start with quick wins and progressively automate more complex processes as your team adapts.`,
    features: [
      "Invoice automation",
      "Expense digitization",
      "Bank reconciliation automation",
      "Payment processing",
      "Receipt management",
      "Approval workflows",
      "Automated reporting",
      "Integration automation"
    ],
    process: [
      { step: "Process Mapping", description: "Document current processes and pain points" },
      { step: "Solution Design", description: "Design automation approach" },
      { step: "Implementation", description: "Configure tools and workflows" },
      { step: "Optimization", description: "Monitor and improve automation" }
    ],
    benefits: [
      "70% time reduction",
      "Fewer errors",
      "Faster processing",
      "Better control",
      "Cost savings",
      "Employee satisfaction"
    ],
    useCases: [
      { title: "Invoice Processing", description: "Automating vendor invoice capture and posting" },
      { title: "Expense Management", description: "Digital expense submission and approval" },
      { title: "Bank Reconciliation", description: "Automatic matching and posting" },
      { title: "Collections", description: "Automated payment reminders" },
      { title: "Reporting", description: "Scheduled automatic reports" },
      { title: "Approvals", description: "Digital approval workflows" }
    ],
    faqs: [
      { question: "Where should we start automation?", answer: "Start with high-volume, rule-based processes like bank reconciliation, expense processing, or invoice posting. These give quick wins and build team confidence." },
      { question: "What investment is required?", answer: "Depends on scope and complexity. Many automations use existing software features at no extra cost. Others may need additional tools. We provide ROI analysis before recommending." },
      { question: "Will automation replace our accountants?", answer: "Automation replaces repetitive tasks, not people. Your accountants shift to higher-value work - analysis, advisory, and exception handling." },
      { question: "How long until we see benefits?", answer: "Quick wins in 2-4 weeks. Full benefits typically in 2-3 months as processes stabilize and team adapts." }
    ],
    stats: [
      { number: "100+", label: "Processes Automated" },
      { number: "70%", label: "Time Saved" },
      { number: "95%", label: "Error Reduction" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default FinanceAutomation;
