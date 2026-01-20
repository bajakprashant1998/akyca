import { SubServiceTemplate } from "@/components/services/SubServiceTemplate";
import { Package } from "lucide-react";

const data = {
  title: "Stock Audit",
  parentService: "Audit & Assurance",
  parentServicePath: "/services/audit",
  icon: Package,
  description: "Physical verification and valuation of inventory for banks and businesses. Our stock audit services ensure accurate inventory records and adequate collateral security for lending institutions.",
  longDescription: `Stock audit is a critical verification process that provides assurance on the existence, condition, and valuation of inventory. For banks, it serves as a vital tool to protect their security interest in working capital financing. For businesses, it ensures accurate financial reporting.

Our stock audit methodology combines physical verification with analytical procedures to identify discrepancies, slow-moving items, and valuation issues. We verify stock records against physical inventory across all locations, including warehouses, godowns, and manufacturing sites.

Beyond counting and valuation, we assess the adequacy of storage conditions, insurance coverage, and the overall inventory management system. Our reports provide banks with confidence in their collateral and help businesses improve their inventory practices.`,
  features: [
    "Physical stock verification and counting",
    "Valuation as per applicable accounting standards",
    "Stock statement reconciliation with books",
    "Collateral adequacy assessment for banks",
    "Slow-moving and obsolete inventory identification",
    "Insurance coverage adequacy review"
  ],
  process: [
    { step: "Physical Verification", description: "Count and verify physical inventory at all locations" },
    { step: "Valuation Review", description: "Assess valuation methodology and market prices" },
    { step: "Record Reconciliation", description: "Match physical count with book records" },
    { step: "Report Preparation", description: "Detailed stock audit report with observations" }
  ],
  benefits: [
    "Accurate inventory valuation for financials",
    "Protection of bank's security interest",
    "Early detection of stock misrepresentation",
    "Reliable stock statements for banks",
    "Improved inventory management practices",
    "Insurance claim support documentation"
  ],
  useCases: [
    { title: "Bank-Financed Businesses", description: "Working capital borrowers requiring stock verification" },
    { title: "Manufacturing Companies", description: "Businesses with large raw material and finished goods inventory" },
    { title: "Trading Businesses", description: "Wholesalers and retailers with significant stock holdings" },
    { title: "M&A Transactions", description: "Inventory verification for business acquisitions" },
    { title: "Insurance Claims", description: "Stock valuation for insurance claim settlements" },
    { title: "Year-End Audits", description: "Physical verification for statutory audit purposes" }
  ],
  faqs: [
    { question: "How often should stock audit be conducted?", answer: "For bank-financed parties, stock audit is typically conducted quarterly or half-yearly as per the bank's credit monitoring requirements." },
    { question: "What is the difference between stock audit and physical verification?", answer: "Stock audit includes physical verification plus valuation assessment, record reconciliation, and collateral adequacy review, making it more comprehensive." },
    { question: "Who appoints stock auditors?", answer: "For bank purposes, stock auditors are appointed by the lending bank. For internal purposes, the company management appoints the auditors." },
    { question: "What happens if stock shortages are found?", answer: "Shortages are reported to the bank/management. The borrower must explain the discrepancy, and banks may adjust drawing power accordingly." },
    { question: "Is surprise stock audit required?", answer: "Banks often require at least one surprise stock audit per year, conducted without prior notice to the borrower." }
  ],
  stats: [
    { number: "1,000+", label: "Stock Audits Completed" },
    { number: "₹500Cr+", label: "Inventory Verified" },
    { number: "Pan-India", label: "Coverage" },
    { number: "48 Hrs", label: "Report Turnaround" }
  ]
};

const StockAudit = () => <SubServiceTemplate data={data} />;

export default StockAudit;
