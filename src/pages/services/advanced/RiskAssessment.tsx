import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Shield } from "lucide-react";

const RiskAssessment = () => {
  const data = {
    title: "Risk Assessment & Internal Controls",
    parentService: "Advanced Financial Services",
    parentServicePath: "/services/advanced-financial",
    icon: Shield,
    description: "Comprehensive assessment of business risks and internal control systems to prevent fraud and ensure operational efficiency.",
    longDescription: `Every business faces risks - operational, financial, compliance, and strategic. At Ashvin K Yagnik & Co., we help organizations identify, assess, and mitigate these risks through robust internal control frameworks.

Our risk assessment services go beyond checklists. We understand your business operations, identify vulnerabilities, evaluate existing controls, and design practical solutions. We use frameworks like COSO for comprehensive risk management.

Our approach is practical and tailored to your organization's size, complexity, and risk appetite. We help build a risk-aware culture while maintaining operational efficiency.`,
    features: [
      "Enterprise risk mapping",
      "Control environment assessment",
      "Process-level control testing",
      "Gap analysis and recommendations",
      "Control design and documentation",
      "Fraud risk assessment",
      "Compliance risk review",
      "IT general controls review"
    ],
    process: [
      { step: "Risk Identification", description: "Map all risks across the organization" },
      { step: "Control Assessment", description: "Evaluate design and effectiveness of controls" },
      { step: "Gap Analysis", description: "Identify control weaknesses and gaps" },
      { step: "Remediation", description: "Design and implement improved controls" }
    ],
    benefits: [
      "Risk visibility",
      "Fraud prevention",
      "Operational efficiency",
      "Regulatory compliance",
      "Stakeholder confidence",
      "Better governance"
    ],
    useCases: [
      { title: "Pre-IPO Assessment", description: "Risk and control readiness for IPO" },
      { title: "Post-Fraud Review", description: "Strengthening controls after fraud" },
      { title: "Regulatory Mandate", description: "Compliance with control requirements" },
      { title: "M&A Due Diligence", description: "Target company control assessment" },
      { title: "Annual Assessment", description: "Periodic risk and control review" },
      { title: "New Operations", description: "Control framework for new business" }
    ],
    faqs: [
      { question: "What framework do you use for risk assessment?", answer: "We primarily use COSO framework adapted to Indian context. For IT risks, we incorporate COBIT elements. The approach is customized to your organization's needs." },
      { question: "How long does a risk assessment take?", answer: "Depends on organization size and scope. A mid-sized company typically takes 4-6 weeks for comprehensive assessment. We can also do focused assessments in 2-3 weeks." },
      { question: "What's the difference between risk assessment and internal audit?", answer: "Risk assessment identifies and evaluates risks and control design. Internal audit tests control effectiveness over time. We offer both services, often starting with risk assessment." },
      { question: "Do you help implement recommendations?", answer: "Yes, we provide implementation support including control design, process documentation, training, and monitoring setup." }
    ],
    stats: [
      { number: "100+", label: "Assessments Done" },
      { number: "500+", label: "Risks Identified" },
      { number: "90%", label: "Risks Mitigated" },
      { number: "45+", label: "Years Experience" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default RiskAssessment;
