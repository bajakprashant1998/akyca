import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import History from "./pages/History";
import Branches from "./pages/Branches";
import Contact from "./pages/Contact";
import TaxTools from "./pages/TaxTools";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminSetup from "./pages/AdminSetup";
import TaxationServices from "./pages/services/TaxationServices";
import GSTServices from "./pages/services/GSTServices";
import AuditAssurance from "./pages/services/AuditAssurance";
import CompanyCorporate from "./pages/services/CompanyCorporate";
import FinancialAdvisory from "./pages/services/FinancialAdvisory";
import ComplianceRegulatory from "./pages/services/ComplianceRegulatory";
import LitigationRepresentation from "./pages/services/LitigationRepresentation";
import StartupServices from "./pages/services/StartupServices";
import IndustrySpecific from "./pages/services/IndustrySpecific";
import AdvancedFinancial from "./pages/services/AdvancedFinancial";
import DigitalAccounting from "./pages/services/DigitalAccounting";
import PersonalWealth from "./pages/services/PersonalWealth";

// Taxation Sub-services
import IncomeTaxReturn from "./pages/services/taxation/IncomeTaxReturn";
import TaxPlanning from "./pages/services/taxation/TaxPlanning";
import CorporateTaxation from "./pages/services/taxation/CorporateTaxation";
import InternationalTaxation from "./pages/services/taxation/InternationalTaxation";
import NRITaxation from "./pages/services/taxation/NRITaxation";
import TDSCompliance from "./pages/services/taxation/TDSCompliance";
import TaxRepresentation from "./pages/services/taxation/TaxRepresentation";

// GST Sub-services
import GSTRegistration from "./pages/services/gst/GSTRegistration";
import GSTReturnFiling from "./pages/services/gst/GSTReturnFiling";
import GSTAudit from "./pages/services/gst/GSTAudit";
import GSTAdvisory from "./pages/services/gst/GSTAdvisory";
import GSTLitigation from "./pages/services/gst/GSTLitigation";

// Audit Sub-services
import StatutoryAudit from "./pages/services/audit/StatutoryAudit";
import InternalAudit from "./pages/services/audit/InternalAudit";
import TaxAudit from "./pages/services/audit/TaxAudit";
import ConcurrentAudit from "./pages/services/audit/ConcurrentAudit";
import BankAudit from "./pages/services/audit/BankAudit";
import StockAudit from "./pages/services/audit/StockAudit";
import ManagementAudit from "./pages/services/audit/ManagementAudit";
import CooperativeSocietyAudit from "./pages/services/audit/CooperativeSocietyAudit";

// Corporate Sub-services
import CompanyIncorporation from "./pages/services/corporate/CompanyIncorporation";
import LLPFormation from "./pages/services/corporate/LLPFormation";
import ROCCompliance from "./pages/services/corporate/ROCCompliance";
import SecretarialServices from "./pages/services/corporate/SecretarialServices";
import DueDiligence from "./pages/services/corporate/DueDiligence";
import MergersAcquisitions from "./pages/services/corporate/MergersAcquisitions";

// Financial Advisory Sub-services
import BusinessStructuring from "./pages/services/financial/BusinessStructuring";
import ProjectFinance from "./pages/services/financial/ProjectFinance";
import FundRaising from "./pages/services/financial/FundRaising";
import ValuationServices from "./pages/services/financial/ValuationServices";
import VirtualCFO from "./pages/services/financial/VirtualCFO";

// Compliance Sub-services
import AnnualCompliance from "./pages/services/compliance/AnnualCompliance";
import LabourLaw from "./pages/services/compliance/LabourLaw";
import FactoryAct from "./pages/services/compliance/FactoryAct";
import RBIFEMASEBICompliance from "./pages/services/compliance/RBIFEMASEBICompliance";
import NBFCCompliance from "./pages/services/compliance/NBFCCompliance";
import TrustNGOCompliance from "./pages/services/compliance/TrustNGOCompliance";

// Litigation Sub-services
import IncomeTaxAppeals from "./pages/services/litigation/IncomeTaxAppeals";
import GSTLitigationServices from "./pages/services/litigation/GSTLitigationServices";
import TribunalProceedings from "./pages/services/litigation/TribunalProceedings";
import NoticeDrafting from "./pages/services/litigation/NoticeDrafting";
import SearchSurvey from "./pages/services/litigation/SearchSurvey";
import BlackMoneyAct from "./pages/services/litigation/BlackMoneyAct";

// Startup Sub-services
import DPIITRegistration from "./pages/services/startup/DPIITRegistration";
import AngelTaxAdvisory from "./pages/services/startup/AngelTaxAdvisory";
import ESOPStructuring from "./pages/services/startup/ESOPStructuring";
import BusinessPlanning from "./pages/services/startup/BusinessPlanning";
import PitchDeckSupport from "./pages/services/startup/PitchDeckSupport";
import FundingSupport from "./pages/services/startup/FundingSupport";

// Industry-Specific Sub-services
import RealEstate from "./pages/services/industry/RealEstate";
import Healthcare from "./pages/services/industry/Healthcare";
import Manufacturing from "./pages/services/industry/Manufacturing";
import ExportImport from "./pages/services/industry/ExportImport";
import Ecommerce from "./pages/services/industry/Ecommerce";
import Education from "./pages/services/industry/Education";
import NGOTrust from "./pages/services/industry/NGOTrust";

// Personal Wealth Sub-services
import PersonalTaxPlanning from "./pages/services/wealth/PersonalTaxPlanning";
import HUFFamilyOffice from "./pages/services/wealth/HUFFamilyOffice";
import SuccessionPlanning from "./pages/services/wealth/SuccessionPlanning";
import EstateWill from "./pages/services/wealth/EstateWill";
import HNIAdvisory from "./pages/services/wealth/HNIAdvisory";
import NRIWealth from "./pages/services/wealth/NRIWealth";

// Advanced Financial Sub-services
import RiskAssessment from "./pages/services/advanced/RiskAssessment";
import ForensicAudit from "./pages/services/advanced/ForensicAudit";
import BusinessValuation from "./pages/services/advanced/BusinessValuation";
import IBCSupport from "./pages/services/advanced/IBCSupport";
import TurnaroundRestructuring from "./pages/services/advanced/TurnaroundRestructuring";
import CorporateGovernance from "./pages/services/advanced/CorporateGovernance";

// Digital Accounting Sub-services
import CloudAccounting from "./pages/services/digital/CloudAccounting";
import FinanceAutomation from "./pages/services/digital/FinanceAutomation";
import MISDashboards from "./pages/services/digital/MISDashboards";
import VirtualAccounting from "./pages/services/digital/VirtualAccounting";
import ERPAdvisory from "./pages/services/digital/ERPAdvisory";
import DataMigration from "./pages/services/digital/DataMigration";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />

          {/* Taxation Services */}
          <Route path="/services/taxation" element={<TaxationServices />} />
          <Route path="/services/taxation/income-tax-return" element={<IncomeTaxReturn />} />
          <Route path="/services/taxation/tax-planning" element={<TaxPlanning />} />
          <Route path="/services/taxation/corporate-taxation" element={<CorporateTaxation />} />
          <Route path="/services/taxation/international-taxation" element={<InternationalTaxation />} />
          <Route path="/services/taxation/nri-taxation" element={<NRITaxation />} />
          <Route path="/services/taxation/tds-compliance" element={<TDSCompliance />} />
          <Route path="/services/taxation/tax-representation" element={<TaxRepresentation />} />

          {/* GST Services */}
          <Route path="/services/gst" element={<GSTServices />} />
          <Route path="/services/gst/registration" element={<GSTRegistration />} />
          <Route path="/services/gst/return-filing" element={<GSTReturnFiling />} />
          <Route path="/services/gst/audit" element={<GSTAudit />} />
          <Route path="/services/gst/advisory" element={<GSTAdvisory />} />
          <Route path="/services/gst/litigation" element={<GSTLitigation />} />

          {/* Audit Services */}
          <Route path="/services/audit" element={<AuditAssurance />} />
          <Route path="/services/audit/statutory-audit" element={<StatutoryAudit />} />
          <Route path="/services/audit/internal-audit" element={<InternalAudit />} />
          <Route path="/services/audit/tax-audit" element={<TaxAudit />} />
          <Route path="/services/audit/concurrent-audit" element={<ConcurrentAudit />} />
          <Route path="/services/audit/bank-audit" element={<BankAudit />} />
          <Route path="/services/audit/stock-audit" element={<StockAudit />} />
          <Route path="/services/audit/management-audit" element={<ManagementAudit />} />
          <Route path="/services/audit/cooperative-society-audit" element={<CooperativeSocietyAudit />} />

          {/* Corporate Services */}
          <Route path="/services/corporate" element={<CompanyCorporate />} />
          <Route path="/services/corporate/company-incorporation" element={<CompanyIncorporation />} />
          <Route path="/services/corporate/llp-formation" element={<LLPFormation />} />
          <Route path="/services/corporate/roc-compliance" element={<ROCCompliance />} />
          <Route path="/services/corporate/secretarial-services" element={<SecretarialServices />} />
          <Route path="/services/corporate/due-diligence" element={<DueDiligence />} />
          <Route path="/services/corporate/mergers-acquisitions" element={<MergersAcquisitions />} />

          {/* Financial Advisory Services */}
          <Route path="/services/financial-advisory" element={<FinancialAdvisory />} />
          <Route path="/services/financial/business-structuring" element={<BusinessStructuring />} />
          <Route path="/services/financial/project-finance" element={<ProjectFinance />} />
          <Route path="/services/financial/fund-raising" element={<FundRaising />} />
          <Route path="/services/financial/valuation-services" element={<ValuationServices />} />
          <Route path="/services/financial/virtual-cfo" element={<VirtualCFO />} />

          {/* Compliance Services */}
          <Route path="/services/compliance" element={<ComplianceRegulatory />} />
          <Route path="/services/compliance/annual-compliance" element={<AnnualCompliance />} />
          <Route path="/services/compliance/labour-law" element={<LabourLaw />} />
          <Route path="/services/compliance/factory-act" element={<FactoryAct />} />
          <Route path="/services/compliance/rbi-fema-sebi" element={<RBIFEMASEBICompliance />} />
          <Route path="/services/compliance/nbfc" element={<NBFCCompliance />} />
          <Route path="/services/compliance/trust-ngo" element={<TrustNGOCompliance />} />

          {/* Litigation Services */}
          <Route path="/services/litigation" element={<LitigationRepresentation />} />
          <Route path="/services/litigation/income-tax-appeals" element={<IncomeTaxAppeals />} />
          <Route path="/services/litigation/gst-litigation" element={<GSTLitigationServices />} />
          <Route path="/services/litigation/tribunal-proceedings" element={<TribunalProceedings />} />
          <Route path="/services/litigation/notice-drafting" element={<NoticeDrafting />} />
          <Route path="/services/litigation/search-survey" element={<SearchSurvey />} />
          <Route path="/services/litigation/black-money-act" element={<BlackMoneyAct />} />

          {/* Startup Services */}
          <Route path="/services/startup" element={<StartupServices />} />
          <Route path="/services/startup/dpiit-registration" element={<DPIITRegistration />} />
          <Route path="/services/startup/angel-tax-advisory" element={<AngelTaxAdvisory />} />
          <Route path="/services/startup/esop-structuring" element={<ESOPStructuring />} />
          <Route path="/services/startup/business-planning" element={<BusinessPlanning />} />
          <Route path="/services/startup/pitch-deck-support" element={<PitchDeckSupport />} />
          <Route path="/services/startup/funding-support" element={<FundingSupport />} />

          {/* Industry-Specific Services */}
          <Route path="/services/industry" element={<IndustrySpecific />} />
          <Route path="/services/industry/real-estate" element={<RealEstate />} />
          <Route path="/services/industry/healthcare" element={<Healthcare />} />
          <Route path="/services/industry/manufacturing" element={<Manufacturing />} />
          <Route path="/services/industry/export-import" element={<ExportImport />} />
          <Route path="/services/industry/ecommerce" element={<Ecommerce />} />
          <Route path="/services/industry/education" element={<Education />} />
          <Route path="/services/industry/ngo-trust" element={<NGOTrust />} />

          {/* Personal Wealth Services */}
          <Route path="/services/personal-wealth" element={<PersonalWealth />} />
          <Route path="/services/wealth/personal-tax-planning" element={<PersonalTaxPlanning />} />
          <Route path="/services/wealth/huf-family-office" element={<HUFFamilyOffice />} />
          <Route path="/services/wealth/succession-planning" element={<SuccessionPlanning />} />
          <Route path="/services/wealth/estate-will" element={<EstateWill />} />
          <Route path="/services/wealth/hni-advisory" element={<HNIAdvisory />} />
          <Route path="/services/wealth/nri-wealth" element={<NRIWealth />} />

          {/* Advanced Financial Services */}
          <Route path="/services/advanced-financial" element={<AdvancedFinancial />} />
          <Route path="/services/advanced/risk-assessment" element={<RiskAssessment />} />
          <Route path="/services/advanced/forensic-audit" element={<ForensicAudit />} />
          <Route path="/services/advanced/business-valuation" element={<BusinessValuation />} />
          <Route path="/services/advanced/ibc-support" element={<IBCSupport />} />
          <Route path="/services/advanced/turnaround-restructuring" element={<TurnaroundRestructuring />} />
          <Route path="/services/advanced/corporate-governance" element={<CorporateGovernance />} />

          {/* Digital Accounting Services */}
          <Route path="/services/digital-accounting" element={<DigitalAccounting />} />
          <Route path="/services/digital/cloud-accounting" element={<CloudAccounting />} />
          <Route path="/services/digital/finance-automation" element={<FinanceAutomation />} />
          <Route path="/services/digital/mis-dashboards" element={<MISDashboards />} />
          <Route path="/services/digital/virtual-accounting" element={<VirtualAccounting />} />
          <Route path="/services/digital/erp-advisory" element={<ERPAdvisory />} />
          <Route path="/services/digital/data-migration" element={<DataMigration />} />

          {/* Other Pages */}
          <Route path="/history" element={<History />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tax-tools" element={<TaxTools />} />

          {/* Admin Panel */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
