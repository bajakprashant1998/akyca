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
        title="Best Chartered Accountants in Ahmedabad | Ashvin K Yagnik & Co."
        description="Ashvin K Yagnik & Co. – RBI Category-I CA firm with 45+ years of excellence. Expert income tax, GST, audit, company law & financial advisory services in Ahmedabad, Mehsana & across India."
        keywords="best CA firm Ahmedabad, chartered accountant Ahmedabad, income tax consultant, GST services Gujarat, audit firm Ahmedabad, tax planning India, RBI Category-I CA firm"
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
