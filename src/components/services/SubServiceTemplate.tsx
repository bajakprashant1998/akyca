import { Layout } from "@/components/layout/Layout";
import { CheckCircle, ChevronRight, ArrowRight, Target, Award, BadgeCheck, TrendingUp, HelpCircle, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQ {
  question: string;
  answer: string;
}

interface UseCase {
  title: string;
  description: string;
}

interface SubServiceData {
  title: string;
  parentService: string;
  parentServicePath: string;
  icon: LucideIcon;
  bannerImage?: string;
  description: string;
  longDescription: string;
  features: string[];
  process: { step: string; description: string }[];
  benefits: string[];
  useCases: UseCase[];
  faqs: FAQ[];
  stats?: { number: string; label: string }[];
}

interface SubServiceTemplateProps {
  data: SubServiceData;
}

const FAQItem = ({ faq, isOpen, onClick }: { faq: FAQ; isOpen: boolean; onClick: () => void }) => (
  <div className="border border-border rounded-xl overflow-hidden">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-cream/30 transition-colors"
    >
      <span className="font-display font-semibold text-navy pr-4">{faq.question}</span>
      <ChevronDown className={cn("w-5 h-5 text-navy flex-shrink-0 transition-transform duration-300", isOpen && "rotate-180")} />
    </button>
    <div className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-96" : "max-h-0")}>
      <div className="p-6 pt-0 text-grey leading-relaxed">
        {faq.answer}
      </div>
    </div>
  </div>
);

export const SubServiceTemplate = ({ data }: SubServiceTemplateProps) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const IconComponent = data.icon;

  return (
    <Layout>
      {/* Hero Section with Banner */}
      <section className="relative bg-navy py-20 overflow-hidden">
        {data.bannerImage && (
          <div className="absolute inset-0 opacity-20">
            <img src={data.bannerImage} alt="" className="w-full h-full object-cover" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center">
                <IconComponent className="w-8 h-8 text-navy" />
              </div>
              <Link 
                to={data.parentServicePath}
                className="text-cream/80 font-medium text-sm tracking-wider uppercase hover:text-cream transition-colors"
              >
                {data.parentService}
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {data.title}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              {data.description}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-cream/30 py-4">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
              <li><Link to="/" className="text-grey hover:text-navy transition-colors">Home</Link></li>
              <ChevronRight className="w-4 h-4 text-grey" aria-hidden="true" />
              <li><Link to="/services" className="text-grey hover:text-navy transition-colors">Services</Link></li>
              <ChevronRight className="w-4 h-4 text-grey" aria-hidden="true" />
              <li><Link to={data.parentServicePath} className="text-grey hover:text-navy transition-colors">{data.parentService}</Link></li>
              <ChevronRight className="w-4 h-4 text-grey" aria-hidden="true" />
              <li><span className="text-navy font-medium">{data.title}</span></li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Full Description */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-navy mb-6">
              About This Service
            </h2>
            <div className="prose prose-lg text-grey leading-relaxed">
              <p>{data.longDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features & Benefits */}
      <section className="py-16 bg-cream/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Key Features */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                  <BadgeCheck className="w-6 h-6 text-gold" />
                </div>
                <h2 className="text-2xl font-display font-bold text-navy">Key Features</h2>
              </div>
              <ul className="space-y-4">
                {data.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-grey text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-navy" />
                </div>
                <h2 className="text-2xl font-display font-bold text-navy">Benefits</h2>
              </div>
              <ul className="space-y-4">
                {data.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <TrendingUp className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-grey text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process / How It Works */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our streamlined process ensures efficient and effective service delivery
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                      <span className="text-navy font-bold">{index + 1}</span>
                    </div>
                    <Target className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display font-semibold text-white text-lg mb-2">{step.step}</h3>
                  <p className="text-white/70 text-sm">{step.description}</p>
                </div>
                {index < data.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gold/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
              Use Cases
            </h2>
            <p className="text-grey max-w-2xl mx-auto">
              See how this service can benefit different scenarios
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <CheckCircle className="w-6 h-6 text-navy" />
                </div>
                <h3 className="font-display font-semibold text-navy text-lg mb-2">{useCase.title}</h3>
                <p className="text-grey">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats (if provided) */}
      {data.stats && data.stats.length > 0 && (
        <section className="py-12 bg-cream/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold text-navy mb-1">
                    {stat.number}
                  </div>
                  <div className="text-grey text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {data.faqs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <HelpCircle className="w-8 h-8 text-gold" />
                  <h2 className="text-3xl font-display font-bold text-navy">
                    Frequently Asked Questions
                  </h2>
                </div>
                <p className="text-grey">
                  Get answers to common questions about this service
                </p>
              </div>
              <div className="space-y-4">
                {data.faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    faq={faq}
                    isOpen={openFAQ === index}
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-navy to-navy/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Connect with our experts to discuss your requirements and get personalized solutions for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cta-secondary inline-flex items-center justify-center gap-2"
            >
              Enquire Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919825046598"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-navy transition-all inline-flex items-center justify-center gap-2"
            >
              Call: +91 98250 46598
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SubServiceTemplate;
