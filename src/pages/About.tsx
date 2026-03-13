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
        title="About Us – 45+ Years of CA Excellence"
        description="Learn about Ashvin K Yagnik & Co., an RBI Category-I CA firm founded in 1978. Meet our 9+ partners with expertise in taxation, audit, GST, and financial advisory in Ahmedabad."
        keywords="about AKYCO, CA firm history Ahmedabad, chartered accountant partners Gujarat, RBI Category-I CA firm India"
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
