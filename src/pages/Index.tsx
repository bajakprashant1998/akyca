import { Layout } from "@/components/layout/Layout";
import { TrustBar } from "@/components/home/TrustBar";
import { HeroSection } from "@/components/home/HeroSection";
import { ValuePillars } from "@/components/home/ValuePillars";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ResultsShowcase } from "@/components/home/ResultsShowcase";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ClientLogos } from "@/components/home/ClientLogos";
import { AboutPreview } from "@/components/home/AboutPreview";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <TrustBar />
      <HeroSection />
      <ValuePillars />
      <ServicesPreview />
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
