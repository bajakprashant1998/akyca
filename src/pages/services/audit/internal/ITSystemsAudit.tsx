import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Server, Lock, Database, Code, ShieldCheck, Wifi } from "lucide-react";

const data = {
  title: "IT & Systems Audit",
  parentService: "Internal Audit",
  parentServicePath: "/services/audit/internal-audit",
  icon: Server,
  description: "Assessment of IT infrastructure, security controls, and system reliability to ensure data integrity and business continuity.",
  longDescription: `In today's digital age, IT risks are business risks. Our IT & Systems Audit services provide assurance that your technology assets are secure, reliable, and aligned with business goals.
  
  We cover the spectrum from IT General Controls (ITGC) to specific application controls. Our audit ensures that your data is safe, your systems are available, and your IT investments are delivering value.
  
  While not a full-scale cyber-security penetration test, our audit focuses on the governance, risk, and compliance aspects of your IT environment, bridging the gap between technical IT teams and board-level assurance needs.`,
  features: [
    "IT General Controls (ITGC) review",
    "Application control testing",
    "Data migration audit",
    "Access management review",
    "Disaster recovery readiness",
    "ERP implementation assurance"
  ],
  process: [
    { step: "Scoping", description: "Identify critical systems and IT assets" },
    { step: "Assessment", description: "Review policies, configurations, and logs" },
    { step: "Testing", description: "Validate access controls and backups" },
    { step: "Reporting", description: "Highlight vulnerabilities and risks" }
  ],
  benefits: [
    "Enhanced data security",
    "System reliability and uptime",
    "Compliance with IT acts/policies",
    "Protection of intellectual property",
    "Reduced downtime risk",
    "Confidence in IT systems"
  ],
  useCases: [
    { title: "Banks & Fintech", description: "Ensuring security of sensitive financial data" },
    { title: "E-commerce", description: "Validating transaction processing systems" },
    { title: "ERP Migrations", description: "Assurance during SAP/Oracle implementations" },
    { title: "Remote Work", description: "Auditing security of remote access controls" }
  ],
  faqs: [
    { question: "Is this a penetration test?", answer: "No, a penetration test is a technical attack simulation. Our IT audit is a broader review of IT governance, controls, policies, and procedures, though it touches upon security configurations." },
    { question: "Do we need IT audit if we are a small company?", answer: "If you rely on computers for invoicing, accounting, or customer data, you have IT risks. A scaled-down IT audit is valuable for businesses of all sizes." },
    { question: "Can you audit our ERP system?", answer: "Yes, we specialize in auditing controls within major ERPs like SAP, Oracle, and Microsoft Dynamics to ensure they are configured correctly." }
  ],
  stats: [
    { number: "50+", label: "Systems Audited" },
    { number: "99.9%", label: "Uptime Focus" },
    { number: "100%", label: "Data Integrity" },
    { number: "ISO", label: "Standard Aligned" }
  ]
};

const ITSystemsAudit = () => <SubServiceTemplate data={data} />;

export default ITSystemsAudit;
