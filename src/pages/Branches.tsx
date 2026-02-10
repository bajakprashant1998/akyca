import { Layout } from "@/components/layout/Layout";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const branches = [
  {
    name: "Ahmedabad Branch",
    address: "502, 5th Floor, 3rd Eye Vision, I.I.M./A.M.A. Road, Nr. Panjrapol Circle, Ahmedabad – 380015",
    phone: "079 – 26304598",
    hours: "Mon - Sat: 10:00 AM - 7:00 PM",
    mapUrl: "https://maps.google.com/maps?q=Ashvin%20K.%20Yagnik%20%26%20Co.%20Ahmedabad%203rd%20Eye%20Vision&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    name: "Mehsana Branch",
    address: "2nd Floor, Ambizone, Near Apollo Enclave, Highway, Mehsana – 384002",
    phone: "02762 – 253598 / 257898",
    hours: "Mon - Sat: 10:00 AM - 7:00 PM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9684!2d72.3891!3d23.5880!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzE3LjAiTiA3MsKwMjMnMjEuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  },
];

const Branches = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-cream font-medium text-sm tracking-wider uppercase mb-4 block">
              Locations
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Branch Offices
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Visit us at our conveniently located offices in Ahmedabad and Mehsana,
              Gujarat. Our doors are always open to serve you.
            </p>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border hover:border-cream transition-colors"
              >
                {/* Map */}
                <div className="h-64 bg-cream/30 relative">
                  <iframe
                    src={branch.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${branch.name} Map`}
                  ></iframe>
                </div>

                {/* Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-display font-semibold text-navy mb-6">
                    {branch.name}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-navy" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">Address</p>
                        <p className="text-grey text-sm">{branch.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-navy" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">Phone</p>
                        <a href={`tel:${branch.phone.replace(/[^0-9]/g, "")}`} className="text-navy hover:underline text-sm">
                          {branch.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-navy" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">Working Hours</p>
                        <p className="text-grey text-sm">{branch.hours}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-navy" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">Email</p>
                        <a href="mailto:info@aky.co.in" className="text-navy hover:underline text-sm">
                          info@aky.co.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact */}
      <section className="py-16 bg-cream/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-navy mb-4">
            Prefer to Reach Us Directly?
          </h2>
          <p className="text-grey mb-6 max-w-xl mx-auto">
            Call our main line or email us for any inquiries. Our team is here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="tel:+919825046598"
              className="cta-primary inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              +91 98250 46598
            </a>
            <a
              href="mailto:info@aky.co.in"
              className="cta-secondary inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              info@aky.co.in
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Branches;
