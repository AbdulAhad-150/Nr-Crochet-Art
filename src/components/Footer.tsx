import React from 'react';
import { Heart, Instagram, MessageCircle, ArrowUp, Sparkles } from 'lucide-react';
import { INSTAGRAM_URL, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '../data/products';

interface FooterProps {
  onSelectNav: (tab: string) => void;
  onSelectCategory: (cat: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectNav, onSelectCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-10 border-t border-rose-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-300 text-xl">
                🧶
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                Crochet Art <span className="text-rose-400 font-sans font-light text-xl">1014</span>
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Handcrafted crochet keychains, floral potted bouquets, amigurumi plushies, butterfly hair clips, and personalized gifts made with soft milk cotton yarn.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-stone-800 hover:bg-rose-500 text-stone-300 hover:text-white transition"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-stone-800 hover:bg-emerald-600 text-stone-300 hover:text-white transition"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm mb-4 uppercase tracking-wider text-rose-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => onSelectNav('home')} className="hover:text-rose-300 transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onSelectNav('shop')} className="hover:text-rose-300 transition">
                  Shop All Products
                </button>
              </li>
              <li>
                <button onClick={() => onSelectNav('custom-builder')} className="hover:text-rose-300 transition">
                  Custom Order Studio ✨
                </button>
              </li>
              <li>
                <button onClick={() => onSelectNav('about')} className="hover:text-rose-300 transition">
                  About Us & Care Instructions
                </button>
              </li>
              <li>
                <button onClick={() => onSelectNav('reviews')} className="hover:text-rose-300 transition">
                  Customer Reviews
                </button>
              </li>
              <li>
                <button onClick={() => onSelectNav('faq')} className="hover:text-rose-300 transition">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => onSelectNav('contact')} className="hover:text-rose-300 transition">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm mb-4 uppercase tracking-wider text-rose-300">
              Handmade Categories
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => onSelectCategory('keychains')} className="hover:text-rose-300 transition">
                  🔑 Crochet Keychains
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('clips')} className="hover:text-rose-300 transition">
                  🦋 Butterfly Clips
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('flowers')} className="hover:text-rose-300 transition">
                  🌸 Flowers & Potted Bouquets
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('plushies')} className="hover:text-rose-300 transition">
                  🧸 Amigurumi Plushies
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('bookmarks')} className="hover:text-rose-300 transition">
                  📖 Leaf & Rose Bookmarks
                </button>
              </li>
              
              <li>
                <button onClick={() => onSelectCategory('BagHangingCharms')} className="hover:text-rose-300 transition">
                  🎀 Bag Hanging Charms
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('ScarfPins')} className="hover:text-rose-300 transition">
                  🧷 Scarf Pins
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('custom')} className="hover:text-rose-300 transition">
                  ✨ Custom Monogram Gifts
                </button>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Ordering Info */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider text-emerald-400">
              WhatsApp Ordering
            </h4>
            <p className="text-xs text-stone-400">
              Custom requests and direct instant ordering via WhatsApp:
            </p>
            <div className="bg-stone-800/80 p-3.5 rounded-2xl border border-stone-700 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                <MessageCircle className="w-4 h-4 fill-emerald-400 text-stone-900" />
                <span>{WHATSAPP_DISPLAY}</span>
              </div>
              <p className="text-[11px] text-stone-400">
                Send your design, color combinations, or questions for fast support!
              </p>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-rose-400 hover:underline inline-block pt-1"
            >
              Instagram: @crochet_art_1014
            </a>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Crochet Art 1014. Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>All rights reserved.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-white transition bg-stone-800 px-3 py-1.5 rounded-full"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
