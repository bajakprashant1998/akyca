import { Layout } from "@/components/layout/Layout";
import { CheckCircle, Users, Target, Award, Briefcase, Shield } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Ethical Practice",
    description: "We uphold the highest standards of professional ethics and integrity in all our dealings.",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description: "Our clients' success is our priority. We tailor solutions to meet their unique needs.",
  },
  {
    icon: Target,
    title: "Deep Regulatory Knowledge",
    description: "Stay ahead with our comprehensive understanding of ever-changing tax laws and regulations.",
  },
  {
    icon: Award,
    title: "Multi-Partner Expertise",
    description: "Our team of 9+ partners brings diverse expertise across all domains of CA practice.",
  },
  {
    icon: Briefcase,
    title: "Long-term Relationships",
    description: "We believe in building lasting partnerships, not just transactional relationships.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Rigorous quality controls ensure accuracy and excellence in every service we provide.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-cream font-medium text-sm tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Building Trust Through Excellence
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              For over 45 years, Ashvin K Yagnik & Co. has been at the forefront of 
              chartered accountancy services in India, helping businesses navigate 
              the complex world of taxation and finance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Story */}
            <div>
              <h2 className="section-heading mb-6">Our Story</h2>
              <p className="text-grey leading-relaxed mb-6">
                Ashvin K Yagnik & Co. has a vintage of more than 45 years in providing 
                quality and sustainable professional services to clients. We have been 
                consistent as well as up to date in the dynamic taxation and finance world.
              </p>
              <p className="text-grey leading-relaxed mb-6">
                Founded in 1978 by visionary Chartered Accountant Ashvin K Yagnik, 
                our firm has grown from a single-partner practice to a robust team 
                of 9+ partners and numerous professionals serving clients across India.
              </p>
              <p className="text-grey leading-relaxed mb-6">
                In 2011, we achieved a significant milestone by becoming an RBI Category-I 
                firm, recognizing our expertise and credibility in the financial sector. 
                This government recognition positions us among the elite chartered 
                accountancy firms in India.
              </p>
              <p className="text-grey leading-relaxed">
                Today, with branches in Ahmedabad and Mehsana, we continue our mission 
                of delivering exceptional professional services while maintaining the 
                core values of integrity, excellence, and client satisfaction that 
                have defined our practice since inception.
              </p>
            </div>

            {/* Stats & Highlights */}
            <div>
              <div className="bg-cream/50 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-display font-semibold text-navy mb-6">
                  Key Highlights
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center">
                    <div className="text-4xl font-display font-bold text-navy mb-2">45+</div>
                    <div className="text-grey text-sm">Years of Experience</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center">
                    <div className="text-4xl font-display font-bold text-navy mb-2">9+</div>
                    <div className="text-grey text-sm">Expert Partners</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center">
                    <div className="text-4xl font-display font-bold text-navy mb-2">1000+</div>
                    <div className="text-grey text-sm">Happy Clients</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center">
                    <div className="text-4xl font-display font-bold text-navy mb-2">2</div>
                    <div className="text-grey text-sm">Branch Offices</div>
                  </div>
                </div>
              </div>

              <div className="bg-navy rounded-2xl p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <div className="font-semibold text-cream">RBI Category-I</div>
                    <div className="text-white/60 text-sm">Government Recognized Firm</div>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Our RBI Category-I status recognizes our expertise in handling 
                  complex financial matters and positions us as a trusted partner 
                  for government and regulatory compliance work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
              What Drives Us
            </span>
            <h2 className="section-heading mb-4">Our Core Values</h2>
            <p className="section-subheading mx-auto">
              These principles guide every interaction and service we provide to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-cream rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-navy" />
                </div>
                <h3 className="text-xl font-display font-semibold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-grey text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
