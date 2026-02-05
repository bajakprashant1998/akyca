 import { Link } from "react-router-dom";
 import { Phone, Mail, ArrowRight, MessageCircle, Calendar, Users } from "lucide-react";
 import arpanImg from "@/assets/team/arpan-yagnik.png";
 import ashwinImg from "@/assets/team/ashwin-yagnik.png";
 import japanImg from "@/assets/team/japan-yagnik.png";

export const CTASection = () => {
  return (
     <section className="py-24 bg-gradient-to-br from-navy via-navy-dark to-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

       {/* Floating Team Images */}
       <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block">
         <div className="relative">
           <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl absolute -left-2 -top-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
             <img src={arpanImg} alt="Team member" className="w-full h-full object-cover" />
           </div>
           <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
             <img src={ashwinImg} alt="Team member" className="w-full h-full object-cover" />
           </div>
           <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl absolute -right-6 -bottom-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
             <img src={japanImg} alt="Team member" className="w-full h-full object-cover" />
           </div>
         </div>
       </div>
 
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full mb-6">
             <Users className="w-4 h-4 text-gold" />
             <span className="text-cream text-sm font-medium">9+ Expert CAs Ready to Help</span>
           </div>
           
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Ready to Simplify Your
            <span className="text-cream block">Financial Compliance?</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
             Join 1000+ businesses who trust us with their taxation and compliance. 
             Get your free consultation and see how much you could save.
          </p>

           {/* CTA Buttons - Multiple Options */}
           <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link
              to="/contact"
               className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-cream transition-colors inline-flex items-center gap-2 group"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+919825046598"
               className="bg-white/10 text-white px-6 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
             <a
               href="https://wa.me/919825046598"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center gap-2"
             >
               <MessageCircle className="w-5 h-5" />
               WhatsApp
             </a>
          </div>

           {/* Quick Contact Options */}
           <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-white/10">
             <a href="tel:+919825046598" className="flex items-center gap-3 text-white/70 hover:text-cream transition-colors group">
               <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                 <Phone className="w-5 h-5 text-gold" />
              </div>
               <div className="text-left">
                 <div className="text-sm text-white/50">Call us</div>
                 <div className="font-medium">+91 98250 46598</div>
               </div>
            </a>
             <a href="mailto:info@aky.co.in" className="flex items-center gap-3 text-white/70 hover:text-cream transition-colors group">
               <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                 <Mail className="w-5 h-5 text-gold" />
               </div>
               <div className="text-left">
                 <div className="text-sm text-white/50">Email us</div>
                 <div className="font-medium">info@aky.co.in</div>
              </div>
            </a>
             <div className="flex items-center gap-3 text-white/70">
               <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                 <Calendar className="w-5 h-5 text-gold" />
               </div>
               <div className="text-left">
                 <div className="text-sm text-white/50">Office hours</div>
                 <div className="font-medium">Mon-Sat, 10AM-7PM</div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
