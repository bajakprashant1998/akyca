import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Users } from "lucide-react";

const data = {
  title: "Management Audit",
  parentService: "Audit & Assurance",
  parentServicePath: "/services/audit",
  icon: Users,
  description: "Comprehensive review of management practices, organizational effectiveness, and strategic alignment. Our management audit services help enhance business performance and governance quality.",
  longDescription: `Management audit is a systematic examination of an organization's management practices, effectiveness, and alignment with strategic objectives. Unlike financial audits that focus on numbers, management audit evaluates how well the organization is managed.

Our approach assesses the quality of management decisions, organizational structure, planning processes, and performance measurement systems. We benchmark practices against industry standards and best practices to identify improvement opportunities.

This service is particularly valuable during organizational transitions, performance challenges, or when preparing for significant growth. Our recommendations are practical and actionable, helping management teams enhance their effectiveness and the organization's overall performance.`,
  features: [
    "Strategic objective evaluation and alignment",
    "Management efficiency and effectiveness review",
    "Organizational structure analysis",
    "Performance measurement system assessment",
    "Decision-making process evaluation",
    "Best practice benchmarking"
  ],
  process: [
    { step: "Objective Assessment", description: "Understand organizational goals and strategic direction" },
    { step: "Process Evaluation", description: "Review management processes, practices, and systems" },
    { step: "Gap Analysis", description: "Identify gaps between current state and best practices" },
    { step: "Recommendations", description: "Provide actionable improvement suggestions" }
  ],
  benefits: [
    "Better alignment of operations with strategy",
    "Identification and elimination of inefficiencies",
    "Strengthened management oversight and governance",
    "Data-driven management improvements",
    "Enhanced organizational effectiveness",
    "Improved decision-making processes"
  ],
  useCases: [
    { title: "Organizational Restructuring", description: "Companies undergoing structural changes" },
    { title: "Performance Challenges", description: "Businesses facing declining performance" },
    { title: "Pre-Acquisition Due Diligence", description: "Assessing management quality before investment" },
    { title: "Family Business Succession", description: "Preparing for generational transition" },
    { title: "ISO/Quality Certification", description: "Pre-certification management assessment" },
    { title: "Expansion Planning", description: "Assessing readiness for significant growth" }
  ],
  faqs: [
    { question: "What is covered in a management audit?", answer: "Management audit covers planning processes, organizational structure, management controls, performance measurement, leadership effectiveness, and overall management practices." },
    { question: "How is management audit different from operational audit?", answer: "Management audit focuses on management practices and decision-making effectiveness, while operational audit focuses on specific operational processes and procedures." },
    { question: "Who should undergo management audit?", answer: "Any organization seeking to improve management effectiveness, especially those facing performance challenges, planning significant changes, or undergoing succession." },
    { question: "What is the typical duration of a management audit?", answer: "Duration varies based on organization size and scope, typically ranging from 2-8 weeks for comprehensive coverage." },
    { question: "Is management audit mandatory?", answer: "Management audit is not legally mandated but is often required by investors, boards, or undertaken voluntarily for improvement." }
  ],
  stats: [
    { number: "200+", label: "Management Audits" },
    { number: "50+", label: "Industries Covered" },
    { number: "40%", label: "Avg. Efficiency Improvement" },
    { number: "Expert", label: "Multidisciplinary Team" }
  ]
};

const ManagementAudit = () => <SubServiceTemplate data={data} />;

export default ManagementAudit;
