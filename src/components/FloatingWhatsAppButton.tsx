import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '../data/products';

export const FloatingWhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const text = encodeURIComponent("Hi Crochet Art 1014! 🌸 I am visiting your website and would like to ask about a custom handmade crochet order.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 group animate-bounce-slow">
      
      {/* Tooltip badge */}
      <div className="hidden sm:flex items-center gap-2 bg-stone-900/90 text-white text-xs font-semibold px-3.5 py-2 rounded-2xl shadow-xl backdrop-blur-md border border-stone-700/50 group-hover:scale-105 transition-transform">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Custom Order: <strong>{WHATSAPP_DISPLAY}</strong></span>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={handleClick}
        className="relative bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:shadow-emerald-300/50 transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center border-2 border-white"
        aria-label="Contact on WhatsApp 032726481747"
        title="Instant Custom Order on WhatsApp 032726481747"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 border-2 border-white rounded-full animate-pulse" />
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-emerald-100 text-emerald-600" />
      </button>

    </div>
  );
};
