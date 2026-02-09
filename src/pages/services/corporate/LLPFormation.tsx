import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Users } from "lucide-react";

const LLPFormation = () => {
  const data = {
    title: "LLP Formation & Registration",
    parentService: "Company & Corporate Services",
    parentServicePath: "/services/corporate",
    icon: Users,
    description: "Expert LLP registration services combining partnership flexibility with limited liability protection. Ideal for professionals and small businesses.",
    longDescription: `Limited Liability Partnership (LLP) is a unique business structure that combines the benefits of both partnership and company forms. Governed by the LLP Act, 2008, it offers limited liability protection to partners while maintaining the flexibility of a partnership.

At Ashvin K Yagnik & Co., we provide end-to-end LLP formation services including name reservation, DPIN application, LLP Agreement drafting, and registration with the Ministry of Corporate Affairs. Our team ensures that your LLP is structured to maximize tax efficiency and operational flexibility.

LLPs are particularly popular among professionals like chartered accountants, lawyers, architects, and consultants, as well as small businesses seeking limited liability without the compliance burden of a private limited company. We help you navigate the registration process smoothly while setting up proper internal governance structures.`,
    features: [
      "LLP name reservation through RUN-LLP form",
      "Designated Partner Identification Number (DPIN) application",
      "Customized LLP Agreement drafting",
      "Digital Signature Certificate (DSC) for all partners",
      "Filing of FiLLiP form with MCA",
      "PAN and TAN registration for LLP",
      "Post-incorporation compliance setup",
      "Partner contribution and profit-sharing structuring"
    ],
    process: [
      { step: "Name Reservation", description: "Apply for unique LLP name through RUN-LLP on MCA portal" },
      { step: "DPIN & DSC", description: "Obtain DPIN for designated partners and DSC for all partners" },
      { step: "Agreement Drafting", description: "Prepare comprehensive LLP Agreement defining rights and duties" },
      { step: "Registration", description: "File FiLLiP form and receive Certificate of Incorporation" }
    ],
    benefits: [
      "Limited liability for all partners",
      "No minimum capital requirement",
      "Lower compliance compared to companies",
      "Flexibility in management and operations",
      "No dividend distribution tax",
      "Easy admission and retirement of partners"
    ],
    useCases: [
      { title: "Professional Firms", description: "CA, CS, lawyers, architects forming partnership with limited liability" },
      { title: "Consulting Businesses", description: "Management consultants and advisors seeking flexible structure" },
      { title: "Small Businesses", description: "Traders and service providers wanting limited liability" },
      { title: "Partnership Conversion", description: "Traditional partnerships converting to LLP for liability protection" },
      { title: "Family Businesses", description: "Family members partnering with defined roles and limited risk" },
      { title: "Freelancer Collaborations", description: "Independent professionals collaborating on projects" }
    ],
    faqs: [
      { question: "What is the minimum number of partners required for LLP?", answer: "A minimum of 2 partners is required to form an LLP. There is no maximum limit on the number of partners." },
      { question: "Can a company or LLP be a partner in another LLP?", answer: "Yes, a company or another LLP can become a partner in an LLP through its authorized representative." },
      { question: "Is audit mandatory for LLP?", answer: "Audit is mandatory only if the annual turnover exceeds ₹40 lakhs or contribution exceeds ₹25 lakhs. Otherwise, LLPs are exempt from audit." },
      { question: "What is the difference between LLP and Private Limited Company?", answer: "LLP offers more flexibility in operations, lower compliance, and no dividend distribution tax. However, Private Limited Companies are better for raising equity funding from investors." },
      { question: "Can an LLP be converted to a Private Limited Company?", answer: "Yes, an LLP can be converted to a Private Limited Company following the procedure prescribed under Companies Act, 2013." }
    ],
    stats: [
      { number: "300+", label: "LLPs Registered" },
      { number: "7-10", label: "Days Processing" },
      { number: "100%", label: "Compliance Rate" },
      { number: "45+", label: "Years Experience" }
    ],
    relatedServices: [
      { title: "Company Incorporation", description: "Private Limited Company registration", link: "/services/corporate/company-incorporation" },
      { title: "GST Registration", description: "Tax registration for LLP", link: "/services/gst/registration" },
      { title: "ROC Compliance", description: "Annual filing requirements", link: "/services/corporate/roc-compliance" },
      { title: "Statutory Audit", description: "LLP audit services", link: "/services/audit/statutory-audit" },
      { title: "Tax Planning", description: "Strategic tax planning", link: "/services/taxation/tax-planning" },
      { title: "Virtual Accounting", description: "Outsourced accounting", link: "/services/digital/virtual-accounting" }
    ]
  };

  return <SubServiceTemplate data={data} />;
};

export default LLPFormation;
