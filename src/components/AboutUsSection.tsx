import React from 'react';
import { Heart, Sparkles, ShieldCheck, Instagram, MessageCircle, RefreshCw } from 'lucide-react';
import { INSTAGRAM_URL, WHATSAPP_DISPLAY, WHATSAPP_NUMBER, HERO_IMAGE } from '../data/products';

export const AboutUsSection: React.FC = () => {
  return (
    <section className="py-14 bg-gradient-to-b from-rose-50/50 via-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Story Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-100/80 px-3.5 py-1 rounded-full">
              Our Handmade Story
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
              Welcome to <span className="text-rose-600">Crochet Art 1014</span>
            </h2>

            <p className="text-stone-600 text-sm leading-relaxed">
              Founded out of a deep passion for needlework and textile artisan craftsmanship, <strong>Crochet Art 1014</strong> brings cute, durable, and aesthetic handmade crochet items to life! Every single loop, stitch, and flower petal is lovingly hand-crafted using 100% premium milk cotton yarn.
            </p>

            <p className="text-stone-600 text-sm leading-relaxed">
              Whether you are looking for a blooming sunflower pot that never fades, cute matching butterfly hair clips, a squishy honeybee amigurumi, or a custom letter keychain for a special gift, we craft each piece with attention to detail and care.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-stone-800">
              <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200/80 flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-100" />
                <span>100% Handmade</span>
              </div>
              <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200/80 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Milk Cotton Yarn</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-sm hover:opacity-90 transition"
              >
                <Instagram className="w-4 h-4" />
                <span>@crochet_art_1014</span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-sm hover:bg-emerald-700 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp ({WHATSAPP_DISPLAY})</span>
              </a>
            </div>

          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img
                src={HERO_IMAGE}
                alt="Crochet Art 1014 Crafting"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
          </div>

        </div>

        {/* Yarn Quality & Washing Care Guide Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <RefreshCw className="w-5 h-5 text-rose-500" />
            <h3 className="font-serif font-bold text-lg text-stone-900">
              Yarn Care & Washing Instructions
            </h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs text-stone-600">
            <div className="p-4 bg-rose-50/50 rounded-2xl border border-rose-100 space-y-1">
              <span className="font-bold text-rose-900 block text-sm">1. Gentle Hand Wash</span>
              <p>Wash gently in cool or lukewarm water with mild shampoo or wool detergent. Do not machine wash or scrub forcefully.</p>
            </div>

            <div className="p-4 bg-amber-50/50 rounded-2xl border border-amber-100 space-y-1">
              <span className="font-bold text-amber-900 block text-sm">2. Do Not Wring</span>
              <p>Press gently between clean dry towels to absorb water. Never twist or wring out yarn fibers to prevent stretching.</p>
            </div>

            <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 space-y-1">
              <span className="font-bold text-emerald-900 block text-sm">3. Flat Drying</span>
              <p>Reshape while damp and lay flat on a drying rack away from direct scorching sunlight to retain vibrant colors.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
