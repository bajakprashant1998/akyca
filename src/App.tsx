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
          <Route path="/services/taxation" element={<TaxationServices />} />
          <Route path="/services/taxation/income-tax-return" element={<IncomeTaxReturn />} />
          <Route path="/services/taxation/tax-planning" element={<TaxPlanning />} />
          <Route path="/services/taxation/corporate-taxation" element={<CorporateTaxation />} />
          <Route path="/services/taxation/international-taxation" element={<InternationalTaxation />} />
          <Route path="/services/taxation/nri-taxation" element={<NRITaxation />} />
          <Route path="/services/taxation/tds-compliance" element={<TDSCompliance />} />
          <Route path="/services/taxation/tax-representation" element={<TaxRepresentation />} />
          <Route path="/services/gst" element={<GSTServices />} />
          <Route path="/services/gst/registration" element={<GSTRegistration />} />
          <Route path="/services/gst/return-filing" element={<GSTReturnFiling />} />
          <Route path="/services/gst/audit" element={<GSTAudit />} />
          <Route path="/services/gst/advisory" element={<GSTAdvisory />} />
          <Route path="/services/gst/litigation" element={<GSTLitigation />} />
          <Route path="/services/audit" element={<AuditAssurance />} />
          <Route path="/services/audit/statutory-audit" element={<StatutoryAudit />} />
          <Route path="/services/audit/internal-audit" element={<InternalAudit />} />
          <Route path="/services/audit/tax-audit" element={<TaxAudit />} />
          <Route path="/services/audit/concurrent-audit" element={<ConcurrentAudit />} />
          <Route path="/services/audit/bank-audit" element={<BankAudit />} />
          <Route path="/services/audit/stock-audit" element={<StockAudit />} />
          <Route path="/services/audit/management-audit" element={<ManagementAudit />} />
          <Route path="/services/audit/cooperative-society-audit" element={<CooperativeSocietyAudit />} />
          <Route path="/services/corporate" element={<CompanyCorporate />} />
          <Route path="/services/financial-advisory" element={<FinancialAdvisory />} />
          <Route path="/services/compliance" element={<ComplianceRegulatory />} />
          <Route path="/services/litigation" element={<LitigationRepresentation />} />
          <Route path="/services/startup" element={<StartupServices />} />
          <Route path="/services/industry" element={<IndustrySpecific />} />
          <Route path="/services/advanced-financial" element={<AdvancedFinancial />} />
          <Route path="/services/digital-accounting" element={<DigitalAccounting />} />
          <Route path="/services/personal-wealth" element={<PersonalWealth />} />
          <Route path="/history" element={<History />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tax-tools" element={<TaxTools />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
