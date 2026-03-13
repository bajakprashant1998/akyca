import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { TeamSection } from "@/components/about/TeamSection";
import { CoreValues } from "@/components/about/CoreValues";
import { AboutCTA } from "@/components/about/AboutCTA";

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Us – Best CA Firm in Ahmedabad Since 1978"
        description="About Ashvin K Yagnik & Co. – Best chartered accountants in Ahmedabad & Gujarat. RBI Category-I CA firm founded in 1978 by CA Ashwin Yagnik. 9+ expert partners serving 1000+ clients in Ahmedabad, Mehsana & across India."
        keywords="best CA firm in Ahmedabad, Ashwin Yagnik chartered accountants, best chartered accountants in Gujarat, CA firm history Ahmedabad, RBI Category-I CA firm India, top chartered accountants Mehsana, about AKYCO, best CA in Gujarat, chartered accountant partners Ahmedabad"
        canonicalUrl="/about"
      />
      <AboutHero />
      <OurStory />
      <TeamSection />
      <CoreValues />
      <AboutCTA />
    </Layout>
  );
};

export default About;
