import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { TrustBar } from "@/components/home/TrustBar";
import { HeroSection } from "@/components/home/HeroSection";
import { ValuePillars } from "@/components/home/ValuePillars";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { PopularServicesGrid } from "@/components/home/PopularServicesGrid";
import { ResultsShowcase } from "@/components/home/ResultsShowcase";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ClientLogos } from "@/components/home/ClientLogos";
import { AboutPreview } from "@/components/home/AboutPreview";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Best CA Firm in Ahmedabad | Top Chartered Accountants in Gujarat"
        description="Ashvin K Yagnik & Co. – Best CA firm in Ahmedabad & Mehsana. RBI Category-I chartered accountants with 45+ years. Expert income tax, GST, audit, company registration & financial advisory services in Gujarat, India. Trusted by 1000+ businesses."
        keywords="best CA firm in Ahmedabad, best chartered accountants in Ahmedabad, best CA in Mehsana, best chartered accountants in Mehsana, Ashwin Yagnik chartered accountants, best CA firm in Gujarat, best chartered accountants in Gujarat, top CA firm Ahmedabad, chartered accountant near me, income tax consultant Ahmedabad, GST consultant Gujarat, tax audit Ahmedabad, company registration Ahmedabad, RBI Category-I CA firm, financial advisory Gujarat, NRI taxation India, startup CA Ahmedabad, virtual CFO Gujarat, ITR filing Ahmedabad, best tax consultant Ahmedabad"
        canonicalUrl="/"
      />
      <TrustBar />
      <HeroSection />
      <ValuePillars />
      <ServicesPreview />
      <PopularServicesGrid />
      <ResultsShowcase />
      <WhyChooseUs />
      <ClientLogos />
      <AboutPreview />
      <InsightsPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
