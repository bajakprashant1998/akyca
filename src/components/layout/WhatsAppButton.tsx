import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919825046598";
const WHATSAPP_MESSAGE = "Hello! I would like to enquire about your CA services.";

export const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Animation */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30"></div>
      
      {/* Button */}
      <div className="relative flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline font-semibold text-sm whitespace-nowrap">
          Chat with us
        </span>
      </div>
      
      {/* Tooltip for mobile */}
      <div className="sm:hidden absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-navy text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat on WhatsApp
      </div>
    </a>
  );
};
