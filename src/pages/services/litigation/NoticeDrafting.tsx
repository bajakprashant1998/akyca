import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { FileText } from "lucide-react";

const NoticeDrafting = () => {
  const data = {
    title: "Notice Drafting & Replies",
    parentService: "Litigation & Representation",
    parentServicePath: "/services/litigation",
    icon: FileText,
    description: "Expert drafting of replies to notices from Income Tax, GST, ROC, Labour, and other regulatory authorities with comprehensive documentation.",
    longDescription: `Responding to regulatory notices requires technical accuracy, legal precision, and strategic thinking. At Ashvin K Yagnik & Co., we provide expert notice reply drafting services that protect your interests while maintaining professional relationships with authorities.

Our team handles notices from various regulators including Income Tax Department, GST authorities, Registrar of Companies, Labour Department, and other agencies. We analyze each notice carefully, gather relevant documentation, and craft responses that address concerns while protecting your position.

Whether it's a simple information request or a complex show cause notice, our experienced team ensures your response is comprehensive, timely, and strategically sound.`,
    features: [
      "Income tax notice analysis and reply",
      "GST SCN response drafting",
      "ROC compliance notices",
      "Labour department notices",
      "PF/ESI inquiry responses",
      "Bank and NBFC regulatory notices",
      "Environmental compliance notices",
      "Consumer forum reply drafting"
    ],
    process: [
      { step: "Notice Analysis", description: "Review notice, identify issues, and determine response strategy" },
      { step: "Information Gathering", description: "Collect all relevant documents and information" },
      { step: "Draft Preparation", description: "Prepare comprehensive reply with supporting evidence" },
      { step: "Review & Filing", description: "Final review and timely submission" }
    ],
    benefits: [
      "Technical accuracy",
      "Legal soundness",
      "Timely responses",
      "Comprehensive documentation",
      "Strategic positioning",
      "Professional presentation"
    ],
    useCases: [
      { title: "Scrutiny Notices", description: "Income tax scrutiny selection responses" },
      { title: "Mismatch Notices", description: "GST mismatch and discrepancy notices" },
      { title: "Deficiency Notices", description: "ROC compliance deficiency notices" },
      { title: "Information Requests", description: "General information requests from authorities" },
      { title: "Show Cause Notices", description: "Pre-prosecution and penalty notices" },
      { title: "Inquiry Notices", description: "Investigation and inquiry proceedings" }
    ],
    faqs: [
      { question: "What is the typical timeline for notice replies?", answer: "Timelines vary by notice type. Income tax scrutiny typically allows 15-30 days. GST notices allow 30-60 days. ROC notices usually give 30 days. We recommend starting early." },
      { question: "Can we request extension of time?", answer: "Most authorities allow reasonable extension requests. We can prepare and file extension applications where needed, with valid reasons." },
      { question: "What happens if we don't reply to a notice?", answer: "Non-reply may lead to ex-parte orders, penalties, or adverse inferences. It's always better to respond, even if partially, within the deadline." },
      { question: "Do you help with document compilation?", answer: "Yes, we guide you on documents needed, help organize them properly, and create indexed compilations for submission." },
      { question: "Can you attend hearings after filing reply?", answer: "Absolutely. Notice reply is often followed by personal hearings. We provide complete representation through the proceedings." }
    ],
    stats: [
      { number: "1000+", label: "Notices Handled" },
      { number: "95%", label: "On-Time Response" },
      { number: "80%", label: "Favorable Outcomes" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Income Tax Appeals", description: "Tax litigation", link: "/services/litigation/income-tax-appeals" },
      { title: "GST Advisory", description: "GST opinions", link: "/services/gst/advisory" },
      { title: "Corporate Taxation", description: "Tax compliance", link: "/services/taxation/corporate-taxation" },
      { title: "Tax Representation", description: "Department liaison", link: "/services/taxation/tax-representation" },
      { title: "TDS Compliance", description: "TDS notices", link: "/services/taxation/tds-compliance" },
      { title: "Labour Law", description: "Labour notices", link: "/services/compliance/labour-law" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default NoticeDrafting;
