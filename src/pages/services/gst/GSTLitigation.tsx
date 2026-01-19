import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Gavel } from "lucide-react";

const data = {
  title: "GST Litigation & Notice Handling",
  parentService: "GST Services",
  parentServicePath: "/services/gst",
  icon: Gavel,
  description: "Expert representation and handling of GST notices, assessments, and litigation matters before GST authorities.",
  longDescription: `GST Litigation requires specialized expertise to navigate assessment proceedings, appeals, and disputes effectively. With the GST regime still evolving, taxpayers often face notices on various grounds including classification, ITC claims, and procedural non-compliances.

Our GST litigation team has extensive experience representing taxpayers before GST authorities at all levels. We handle everything from initial notice response to appeals before Appellate Authorities, AAAR, and High Courts.

We combine technical GST knowledge with practical litigation experience to provide effective representation. Our track record includes successful defense of significant demands and favorable rulings on complex matters.`,
  features: [
    "GST notice response drafting and filing",
    "Assessment proceedings representation",
    "Appeal preparation before Appellate Authority",
    "AAAR (Appellate Authority for Advance Ruling) matters",
    "Advance Ruling applications before AAR",
    "Writ petitions in High Court",
    "Refund litigation and follow-up",
    "Show cause notice defense"
  ],
  process: [
    { step: "Notice Analysis", description: "Carefully analyze the notice to understand issues and department's position" },
    { step: "Strategy Development", description: "Develop defense strategy based on facts, law, and precedents" },
    { step: "Response Preparation", description: "Prepare detailed written submissions with supporting documents" },
    { step: "Representation", description: "Present the case before appropriate authority and argue effectively" }
  ],
  benefits: [
    "Expert handling by experienced professionals",
    "Timely response within stipulated time limits",
    "Significant reduction in disputed demands",
    "Professional representation at all levels",
    "Strategic approach to minimize exposure",
    "Complete documentation for defense"
  ],
  useCases: [
    { title: "SCN Recipients", description: "Businesses receiving show cause notices under GST" },
    { title: "ITC Disputes", description: "Taxpayers facing ITC denial or reversal demands" },
    { title: "Classification Disputes", description: "Cases involving HSN/rate classification issues" },
    { title: "Refund Rejections", description: "Exporters facing refund claim rejections" },
    { title: "E-way Bill Issues", description: "Matters involving e-way bill violations" },
    { title: "Search & Seizure", description: "Post-search proceedings under GST" }
  ],
  faqs: [
    { question: "What should I do upon receiving a GST notice?", answer: "Don't ignore it. Note the response deadline and contact us immediately. We will analyze the notice, understand the issues, and prepare an appropriate response within time. Ignoring notices leads to adverse ex-parte orders." },
    { question: "What is the time limit to respond to notices?", answer: "Time limits vary by notice type. SCNs typically give 30 days. Some notices have shorter periods. We ensure responses are filed well within time to avoid procedural issues." },
    { question: "What is Advance Ruling and when should I apply?", answer: "Advance Ruling is a binding ruling from AAR on GST treatment of proposed or ongoing transactions. Apply when you need certainty on classification, rate, or place of supply for significant transactions." },
    { question: "Can GST orders be appealed?", answer: "Yes, orders can be appealed to the First Appellate Authority within 3 months. Further appeals lie to AAAR (within 1 month) and High Court on questions of law. We handle appeals at all levels." },
    { question: "How are GST penalties defended?", answer: "Penalties can be challenged on merits (if underlying demand is incorrect) or on grounds of reasonable cause. We analyze each case to identify the best defense strategy and have successfully defended many penalty matters." }
  ],
  stats: [
    { number: "500+", label: "Notices Handled" },
    { number: "70%+", label: "Success Rate" },
    { number: "₹100Cr+", label: "Demands Defended" },
    { number: "100%", label: "Timely Responses" }
  ]
};

const GSTLitigation = () => <SubServiceTemplate data={data} />;

export default GSTLitigation;
