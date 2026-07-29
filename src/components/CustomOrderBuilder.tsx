import React, { useState } from 'react';
import { Sparkles, MessageCircle, Heart, CheckCircle2, Gift } from 'lucide-react';
import { CustomOrderRequest } from '../types';
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '../data/products';

export const CustomOrderBuilder: React.FC = () => {
  const [form, setForm] = useState<CustomOrderRequest>({
    itemType: 'Crochet Keychain',
    primaryColor: 'Pastel Pink',
    secondaryColor: 'Cream White',
    customText: '',
    giftBox: true,
    specialInstructions: '',
    customerName: '',
    contactNumber: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const itemTypes = [
    { label: '🔑 Crochet Keychain', value: 'Crochet Keychain' },
    { label: '🦋 Butterfly Hair Clips', value: 'Butterfly Hair Clips' },
    { label: '🌸 Flower Bouquet / Pot', value: 'Flower Bouquet in Pot' },
    { label: '🧸 Amigurumi Plushie', value: 'Amigurumi Plushie' },
    { label: '📖 Sprout/Rose Bookmark', value: 'Handmade Bookmark' },
    { label: '✨ Custom Monogram Letter', value: 'Custom Monogram Letter' },
    { label: '🎁 Special Gift Basket', value: 'Special Gift Basket' },
  ];

  const colors = [
    { name: 'Pastel Pink', bg: 'bg-pink-200' },
    { name: 'Sage Green', bg: 'bg-emerald-200' },
    { name: 'Warm Lavender', bg: 'bg-purple-200' },
    { name: 'Sunshine Yellow', bg: 'bg-amber-200' },
    { name: 'Cream White', bg: 'bg-stone-100' },
    { name: 'Sky Blue', bg: 'bg-sky-200' },
    { name: 'Coral Rose', bg: 'bg-rose-300' },
    { name: 'Matcha Green', bg: 'bg-lime-200' },
  ];

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hi Crochet Art 1014! 🌸\n\nI would like to place a *CUSTOM CROCHET ORDER*:\n\n` +
      `*Item Type:* ${form.itemType}\n` +
      `*Primary Color:* ${form.primaryColor}\n` +
      `*Secondary Color:* ${form.secondaryColor}\n` +
      `${form.customText ? `*Custom Name/Initial:* ${form.customText}\n` : ''}` +
      `*Gift Box Packaging:* ${form.giftBox ? 'Yes (Includes Ribbon & Tag)' : 'Standard'}\n` +
      `${form.specialInstructions ? `*Special Notes:* ${form.specialInstructions}\n` : ''}` +
      `${form.customerName ? `*Customer Name:* ${form.customerName}\n` : ''}` +
      `\nPlease quote price and handcrafting estimated time!`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      
      {/* Header Banner */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 text-xs font-bold px-4 py-1.5 rounded-full">
          <Sparkles className="w-4 h-4 text-rose-500" />
          <span>Tailor Made Just For You</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900">
          Custom Crochet Order Studio
        </h2>
        <p className="text-stone-600 max-w-xl mx-auto text-sm">
          Have a specific color theme, initial tag, or custom plushie idea in mind? Build your request below and send it directly to our WhatsApp ({WHATSAPP_DISPLAY})!
        </p>
      </div>

      {/* Main Builder Form Card */}
      <div className="bg-white rounded-3xl border border-rose-200 p-6 sm:p-10 shadow-xl relative overflow-hidden">
        
        {/* Soft decorative background ribbon */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-rose-200/50 to-amber-200/50 rounded-full blur-2xl pointer-events-none" />

        <form onSubmit={handleSubmitWhatsApp} className="space-y-8 relative z-10">
          
          {/* Step 1: Select Item Type */}
          <div>
            <label className="block text-sm font-bold text-stone-800 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center">1</span>
              Choose Item Type:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {itemTypes.map((item) => (
                <button
                  type="button"
                  key={item.value}
                  onClick={() => setForm({ ...form, itemType: item.value })}
                  className={`p-3.5 rounded-2xl text-xs sm:text-sm font-semibold border text-left transition flex items-center justify-between ${
                    form.itemType === item.value
                      ? 'bg-rose-50 border-rose-400 text-rose-900 shadow-xs ring-2 ring-rose-200'
                      : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-rose-200'
                  }`}
                >
                  <span>{item.label}</span>
                  {form.itemType === item.value && <CheckCircle2 className="w-4 h-4 text-rose-500" />}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Color Scheme */}
          <div className="grid md:grid-cols-2 gap-6">
            
            <div>
              <label className="block text-sm font-bold text-stone-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center">2</span>
                Primary Yarn Shade:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {colors.map((c) => (
                  <button
                    type="button"
                    key={c.name}
                    onClick={() => setForm({ ...form, primaryColor: c.name })}
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-xs font-medium transition ${
                      form.primaryColor === c.name
                        ? 'bg-rose-100 border-rose-400 text-rose-900 font-bold'
                        : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-white'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full ${c.bg} border border-stone-300 shadow-2xs`} />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-stone-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center">3</span>
                Secondary Accent Color:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {colors.map((c) => (
                  <button
                    type="button"
                    key={c.name}
                    onClick={() => setForm({ ...form, secondaryColor: c.name })}
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-xs font-medium transition ${
                      form.secondaryColor === c.name
                        ? 'bg-purple-100 border-purple-400 text-purple-900 font-bold'
                        : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-white'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full ${c.bg} border border-stone-300 shadow-2xs`} />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Step 3: Custom Details & Text */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                Custom Name / Initial Tag (Optional):
              </label>
              <input
                type="text"
                placeholder="e.g. Letter 'M' or 'Happy Birthday Sarah'"
                value={form.customText}
                onChange={(e) => setForm({ ...form, customText: e.target.value })}
                className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:border-rose-400 bg-stone-50"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                Your Name / Contact Reference:
              </label>
              <input
                type="text"
                placeholder="Your name for WhatsApp reference"
                value={form.customerName}
                onChange={(e) => setForm({ ...form, customerName: e.target.value })}
                className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:border-rose-400 bg-stone-50"
              />
            </div>
          </div>

          {/* Special Instructions & Gift Option */}
          <div className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                Special Instructions / References:
              </label>
              <textarea
                rows={3}
                placeholder="Describe any specific design requests, dimensions, or details..."
                value={form.specialInstructions}
                onChange={(e) => setForm({ ...form, specialInstructions: e.target.value })}
                className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:border-rose-400 bg-stone-50"
              />
            </div>

            <label className="flex items-center gap-3 p-3.5 bg-amber-50 rounded-2xl border border-amber-200 cursor-pointer">
              <input
                type="checkbox"
                checked={form.giftBox}
                onChange={(e) => setForm({ ...form, giftBox: e.target.checked })}
                className="w-4 h-4 text-rose-600 rounded focus:ring-rose-400"
              />
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
                <Gift className="w-4 h-4 text-rose-500" />
                <span>Include Premium Handmade Gift Box with Ribbon & Custom Card</span>
              </div>
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-4 border-t border-stone-200">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base py-4 rounded-2xl shadow-xl transition-transform active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-100 text-emerald-600" />
              <span>Send Custom Request to WhatsApp ({WHATSAPP_DISPLAY})</span>
            </button>
            <p className="text-center text-[11px] text-stone-500 mt-2">
              Opens WhatsApp directly with pre-filled custom specifications. Zero online payment required upfront.
            </p>
          </div>

        </form>

      </div>

    </div>
  );
};
