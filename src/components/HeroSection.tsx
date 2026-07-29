import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, Heart, ShieldCheck, Truck, Palette } from 'lucide-react';
import { HERO_IMAGE, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '../data/products';

interface HeroSectionProps {
  onExplore: () => void;
  onCustomOrder: () => void;
  onSelectCategory: (category: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplore,
  onCustomOrder,
  onSelectCategory,
}) => {
  const handleWhatsAppCustom = () => {
    const text = encodeURIComponent(`Hi Crochet Art 1014! I'm interested in ordering a custom handmade crochet item. Please let me know available colors and pricing for WhatsApp: ${WHATSAPP_DISPLAY}.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-rose-50/50 to-stone-50 py-10 lg:py-16">
      
      {/* Soft background decor blobs */}
      <div className="absolute top-12 left-10 w-72 h-72 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 bg-rose-100/90 border border-rose-200/80 px-4 py-1.5 rounded-full text-rose-800 text-xs sm:text-sm font-medium shadow-xs">
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span>Handcrafted Stitches • Pure Milk Cotton Yarn</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
              Handmade Crochet <br />
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-600 bg-clip-text text-transparent">
                Stitched with Love & Art
              </span>
            </h1>

            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Discover unique crochet keychains, floral potted bouquets, cute amigurumi plushies, butterfly hair clips, and custom gifts. Made with premium soft yarn for your special moments.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onExplore}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold px-7 py-3.5 rounded-2xl shadow-lg shadow-rose-200 hover:shadow-rose-300 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsAppCustom}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3.5 rounded-2xl shadow-md transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-emerald-100 text-emerald-600" />
                <span>Custom Order ({WHATSAPP_DISPLAY})</span>
              </button>
            </div>

            {/* Feature Badges Bar */}
            <div className="pt-6 border-t border-rose-200/60 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-1.5 text-stone-800 font-semibold text-xs sm:text-sm">
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-100" />
                  <span>100% Handmade</span>
                </div>
                <span className="text-[11px] text-stone-500 mt-0.5">Crafted with care</span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-1.5 text-stone-800 font-semibold text-xs sm:text-sm">
                  <Palette className="w-4 h-4 text-purple-500" />
                  <span>Custom Colors</span>
                </div>
                <span className="text-[11px] text-stone-500 mt-0.5">Pick your shade</span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-1.5 text-stone-800 font-semibold text-xs sm:text-sm">
                  <Truck className="w-4 h-4 text-emerald-600" />
                  <span>Fast Dispatch</span>
                </div>
                <span className="text-[11px] text-stone-500 mt-0.5">Safe packaging</span>
              </div>
            </div>

          </div>

          {/* Right Showcase Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame with soft glow */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src={HERO_IMAGE}
                  alt="Crochet Art 1014 Handmade Showcase"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 lg:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-3.5 border border-rose-100 shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider block">@crochet_art_1014</span>
                    <p className="text-stone-800 font-serif font-bold text-sm">Keychains, Flowers, Plushies & Clips</p>
                  </div>
                  <button
                    onClick={onCustomOrder}
                    className="bg-rose-500 text-white text-xs font-semibold px-3 py-1.5 rounded-xl hover:bg-rose-600 transition"
                  >
                    Customize ✨
                  </button>
                </div>
              </div>

              {/* Floating Star Badge */}
              <div className="absolute -top-4 -right-4 bg-amber-100 text-amber-900 border border-amber-300 px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2 transform rotate-3">
                <span className="text-xl">🌟</span>
                <div className="text-left">
                  <p className="text-xs font-bold leading-none">5.0 Star Rated</p>
                  <p className="text-[10px] text-amber-700 mt-0.5">Loved by 500+ happy buyers</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Category Chips Bar */}
        <div className="mt-12 pt-8 border-t border-stone-200/60">
          <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider text-center mb-4">
            Popular Handmade Categories
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: 'keychains', label: '🔑 Keychains', bg: 'bg-rose-100/70 hover:bg-rose-200/80 text-rose-900' },
              { id: 'clips', label: '🦋 Butterfly Clips', bg: 'bg-purple-100/70 hover:bg-purple-200/80 text-purple-900' },
              { id: 'flowers', label: '🌸 Flowers & Pots', bg: 'bg-amber-100/70 hover:bg-amber-200/80 text-amber-900' },
              { id: 'plushies', label: '🧸 Amigurumi Plushies', bg: 'bg-emerald-100/70 hover:bg-emerald-200/80 text-emerald-900' },
              { id: 'bookmarks', label: '📖 Leaf Bookmarks', bg: 'bg-sky-100/70 hover:bg-sky-200/80 text-sky-900' },
              { id: 'custom', label: '✨ Custom Letter Gifts', bg: 'bg-pink-100/70 hover:bg-pink-200/80 text-pink-900' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-transform hover:scale-105 active:scale-95 shadow-xs border border-stone-200/60 ${cat.bg}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
