import { ServiceCategoryTemplate, ServiceCategoryData } from "@/components/services/ServiceCategoryTemplate";
import { TrendingUp, PieChart, DollarSign, Users, LineChart } from "lucide-react";

const data: ServiceCategoryData = {
  icon: TrendingUp,
  badge: "Strategic Finance",
  titleLine1: "Financial",
  titleLine2: "Advisory",
  description: "Strategic financial advisory services to help businesses make informed decisions, raise capital, and optimize financial performance.",
  ctaLabel: "Book Advisory Session",
  highlights: [
    { icon: PieChart, title: "Strategic Planning", description: "Data-driven financial strategies", color: "from-blue-500/20 to-blue-600/10" },
    { icon: DollarSign, title: "₹500Cr+ Raised", description: "Funds raised for clients", color: "from-emerald-500/20 to-emerald-600/10" },
    { icon: Users, title: "Expert Advisors", description: "CFO-level professionals", color: "from-amber-500/20 to-amber-600/10" },
    { icon: LineChart, title: "Growth Focus", description: "Sustainable business growth", color: "from-purple-500/20 to-purple-600/10" }
  ],
  services: [
    { title: "Business Structuring", description: "Strategic advisory on optimal business structure for tax efficiency, liability protection, and growth.", features: ["Entity selection advisory", "Holding structure design", "Tax-efficient structuring", "Family business structuring"], link: "/services/financial/business-structuring" },
    { title: "Project Finance", description: "Comprehensive project finance including feasibility studies, modeling, and bank financing.", features: ["Feasibility study preparation", "Financial projections", "Bank proposal preparation", "Term sheet negotiation"], link: "/services/financial/project-finance" },
    { title: "Fund Raising Support", description: "End-to-end support for equity and debt fundraising with investor documentation.", features: ["Investor presentation development", "Due diligence preparation", "Valuation support", "Transaction documentation"], link: "/services/financial/fund-raising" },
    { title: "Valuation Services", description: "Independent business and asset valuations for M&A, taxation, and regulatory compliance.", features: ["Business valuation (DCF, Market)", "Share/Equity valuation", "Intangible asset valuation", "Valuation for tax purposes"], link: "/services/financial/valuation-services" },
    { title: "Virtual CFO Services", description: "Part-time CFO services providing strategic financial leadership and MIS reporting.", features: ["Financial strategy development", "MIS & dashboard reporting", "Cash flow management", "Board presentation support"], link: "/services/financial/virtual-cfo", highlight: "Popular" }
  ],
  stats: [
    { number: "₹500Cr+", label: "Funds Raised" },
    { number: "200+", label: "Projects Financed" },
    { number: "50+", label: "Virtual CFO Clients" },
    { number: "45+", label: "Years Experience" }
  ],
  seo: {
    title: "Financial Advisory – Business Structuring, Fund Raising & CFO",
    description: "Strategic financial advisory: Business Structuring, Project Finance, Fund Raising, Valuation, Virtual CFO. ₹500Cr+ raised for clients.",
    keywords: "financial advisory, virtual CFO, business valuation, fund raising, project finance, CA Ahmedabad",
    canonicalUrl: "/services/financial-advisory"
  }
};

const FinancialAdvisory = () => <ServiceCategoryTemplate data={data} />;
export default FinancialAdvisory;
