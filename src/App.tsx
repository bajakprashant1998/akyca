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
          <Route path="/services/gst" element={<GSTServices />} />
          <Route path="/services/audit" element={<AuditAssurance />} />
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
