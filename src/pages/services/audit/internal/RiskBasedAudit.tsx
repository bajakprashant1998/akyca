import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Shield, AlertTriangle, Search, Lock, Eye, FileWarning } from "lucide-react";

const data = {
  title: "Risk-Based Audit",
  parentService: "Internal Audit",
  parentServicePath: "/services/audit/internal-audit",
  icon: Shield,
  description: "Focused audit approach prioritizing high-risk areas to provide assurance on the management of significant business risks.",
  longDescription: `Risk-Based Internal Audit (RBIA) is a methodology that links internal audit to an organization's overall risk management framework. It allows internal audit to provide assurance to the board that risk management processes are managing risks effectively.
  
  Instead of auditing everything equally, we focus our resources on the areas of highest risk to your business. This ensures that your audit budget is spent where it matters most - protecting your organization from significant threats.
  
  Our approach involves creating a dynamic audit plan that evolves with your business risks, ensuring that emerging threats are addressed promptly and effectively.`,
  features: [
    "Comprehensive risk assessment",
    "Risk-weighted audit planning",
    "Focus on high-impact areas",
    "Evaluation of risk mitigation strategies",
    "Dynamic audit scoping",
    "Alignment with corporate objectives"
  ],
  process: [
    { step: "Risk Mapping", description: "Identify and prioritize business risks" },
    { step: "Audit Strategy", description: "Align audit plan with high-risk areas" },
    { step: "Execution", description: "Test controls in priority areas" },
    { step: "Reporting", description: "Report on risk management effectiveness" }
  ],
  benefits: [
    "Efficient use of audit resources",
    "Focus on what truly matters",
    "Proactive risk management",
    "Better strategic alignment",
    "Early warning of issues",
    "Board-level assurance"
  ],
  useCases: [
    { title: "Financial Services", description: "Managing credit, market, and operational risks" },
    { title: "High-Growth Tech", description: "Addressing scalability and data security risks" },
    { title: "Conglomerates", description: "Managing diverse risks across multiple business units" },
    { title: "New Market Entry", description: "Assessing risks in new geographies or product lines" }
  ],
  faqs: [
    { question: "Why choose risk-based audit over traditional audit?", answer: "Risk-based audit matches audit efforts to risk levels, ensuring that critical risks get the attention they deserve, which is more efficient than a 'tick-box' approach." },
    { question: "How do you determine the risks?", answer: "We work with management to understand business objectives and the risks threatening them, often facilitating risk workshops and reviewing risk registers." },
    { question: "Is this compliant with internal audit standards?", answer: "Yes, the Institute of Internal Auditors (IIA) standards strictly recommend a risk-based approach to internal auditing." }
  ],
  stats: [
    { number: "500+", label: "Risks Assessed" },
    { number: "95%", label: "Critical Coverage" },
    { number: "40%", label: "Time Saved" },
    { number: "24/7", label: "Risk Monitoring" }
  ]
};

const RiskBasedAudit = () => <SubServiceTemplate data={data} />;

export default RiskBasedAudit;
