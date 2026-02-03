import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Building2 } from "lucide-react";

const CompanyIncorporation = () => {
  const data = {
    title: "Company Incorporation",
    parentService: "Company & Corporate Services",
    parentServicePath: "/services/corporate",
    icon: Building2,
    description: "Complete company registration and incorporation services including Private Limited, Public Limited, OPC, and Section 8 companies with end-to-end compliance support.",
    longDescription: `Starting a business in India requires careful planning and adherence to legal requirements under the Companies Act, 2013. At Ashvin K Yagnik & Co., we provide comprehensive company incorporation services that simplify the entire process, from name reservation to certificate of incorporation.

Our experienced team handles all aspects of company formation including drafting of Memorandum and Articles of Association, obtaining Digital Signature Certificates (DSC), Director Identification Numbers (DIN), and filing with the Registrar of Companies (ROC). We ensure your company is structured optimally for taxation, liability protection, and future growth.

Whether you're a startup founder, an entrepreneur expanding operations, or an NRI looking to establish business presence in India, we provide tailored solutions that meet your specific requirements while ensuring full regulatory compliance.`,
    features: [
      "Private Limited Company registration under Companies Act 2013",
      "One Person Company (OPC) incorporation for solo entrepreneurs",
      "Public Limited Company formation with SEBI compliance",
      "Section 8 Company registration for non-profits",
      "Digital Signature Certificate (DSC) procurement",
      "Director Identification Number (DIN) application",
      "MOA and AOA drafting with customized clauses",
      "PAN and TAN registration for the company"
    ],
    process: [
      { step: "Name Approval", description: "Reserve unique company name through RUN (Reserve Unique Name) or SPICe+ form" },
      { step: "Document Preparation", description: "Draft MOA, AOA, and collect KYC documents from directors and shareholders" },
      { step: "Filing & Registration", description: "File SPICe+ form with ROC along with all supporting documents" },
      { step: "Certificate Issuance", description: "Receive Certificate of Incorporation, PAN, TAN, and GSTIN" }
    ],
    benefits: [
      "Limited liability protection for shareholders",
      "Separate legal entity status",
      "Easy fund raising through equity",
      "Enhanced credibility with customers and vendors",
      "Perpetual succession regardless of ownership changes",
      "Tax benefits and deductions available to companies"
    ],
    useCases: [
      { title: "Startup Founders", description: "Entrepreneurs launching tech startups or innovative businesses requiring investor funding" },
      { title: "Family Businesses", description: "Traditional businesses converting from proprietorship to private limited structure" },
      { title: "NRI Entrepreneurs", description: "Non-resident Indians establishing business presence in India" },
      { title: "Joint Ventures", description: "Partners coming together to form a new corporate entity" },
      { title: "NGOs & Trusts", description: "Social organizations requiring Section 8 company status" },
      { title: "Professional Firms", description: "CA, CS, legal firms incorporating as LLPs or private companies" }
    ],
    faqs: [
      { question: "What is the minimum capital required to incorporate a company?", answer: "There is no minimum paid-up capital requirement for Private Limited Companies in India. You can incorporate with any amount of capital based on your business needs." },
      { question: "How long does company incorporation take?", answer: "With complete documents, company incorporation typically takes 10-15 working days from the date of filing SPICe+ form with the ROC." },
      { question: "Can NRIs or foreign nationals be directors?", answer: "Yes, NRIs and foreign nationals can be directors. However, at least one director must be resident in India (stayed in India for at least 182 days in the previous year)." },
      { question: "What is the difference between Private and Public Limited Company?", answer: "Private Limited Companies have restrictions on share transfer and can have 2-200 members. Public Limited Companies can have unlimited members and shares are freely transferable." },
      { question: "Is GST registration mandatory for new companies?", answer: "GST registration is mandatory if annual turnover exceeds ₹40 lakhs (₹20 lakhs for special category states) or if the company is involved in inter-state supply of goods or services." }
    ],
    stats: [
      { number: "500+", label: "Companies Incorporated" },
      { number: "10-15", label: "Days Average Time" },
      { number: "100%", label: "Success Rate" },
      { number: "24/7", label: "Support Available" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default CompanyIncorporation;
