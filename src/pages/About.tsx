import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { CheckCircle, Users, Target, Award, Briefcase, Shield, Linkedin, Mail } from "lucide-react";
import ashwinYagnik from "@/assets/team/ashwin-yagnik.png";
import japanYagnik from "@/assets/team/japan-yagnik.png";
import arpanYagnik from "@/assets/team/arpan-yagnik.png";

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

const boardOfDirectors = [
  {
    name: "CA Ashwin Yagnik",
    role: "Founding Partner",
    image: ashwinYagnik,
    description: "With over 45 years of experience, CA Ashwin Yagnik founded the firm in 1978 and has been instrumental in establishing AKYCO as a leading CA firm in Gujarat. His expertise in taxation and financial advisory has helped countless businesses thrive.",
    qualifications: "B.Com, FCA",
  },
  {
    name: "CA Japan Yagnik",
    role: "Senior Partner",
    image: japanYagnik,
    description: "CA Japan Yagnik brings extensive expertise in corporate taxation, GST compliance, and audit services. His strategic vision and commitment to excellence have significantly contributed to the firm's growth and reputation.",
    qualifications: "B.Com, FCA",
  },
  {
    name: "CA Arpan Yagnik",
    role: "Partner",
    image: arpanYagnik,
    description: "CA Arpan Yagnik specializes in financial advisory, startup services, and digital accounting solutions. His modern approach combined with traditional values helps bridge the gap between technology and professional services.",
    qualifications: "B.Com, FCA",
  },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Us – 45+ Years of CA Excellence"
        description="Learn about Ashvin K Yagnik & Co., an RBI Category-I CA firm founded in 1978. Meet our 9+ partners with expertise in taxation, audit, GST, and financial advisory in Ahmedabad."
        keywords="about AKYCO, CA firm history Ahmedabad, chartered accountant partners Gujarat, RBI Category-I CA firm India"
        canonicalUrl="/about"
      />
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

      {/* Board of Directors / Core Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
              Leadership
            </span>
            <h2 className="section-heading mb-4">Board of Directors</h2>
            <p className="section-subheading mx-auto">
              Meet the visionary leaders who guide our firm with their expertise, experience, and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {boardOfDirectors.map((member, index) => (
              <div
                key={index}
                className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social Icons on Hover */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-navy hover:bg-cream transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-navy hover:bg-cream transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-display font-bold text-navy mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-grey text-xs mb-4">{member.qualifications}</p>
                  <p className="text-grey text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
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
