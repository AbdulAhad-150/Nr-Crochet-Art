import React, { useState } from 'react';
import { MessageCircle, Instagram, Send, Clock, PhoneCall, Sparkles } from 'lucide-react';
import { INSTAGRAM_URL, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '../data/products';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Custom Order Inquiry');
  const [message, setMessage] = useState('');

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;

    const fullMsg = `Hi Crochet Art 1014! 🌸\n\n*Name:* ${name || 'Valued Customer'}\n*Phone:* ${phone || 'N/A'}\n*Subject:* ${subject}\n\n*Message:* ${message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMsg)}`, '_blank');
  };

  return (
    <section className="py-14 bg-gradient-to-b from-stone-50 via-rose-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-100/80 px-3.5 py-1 rounded-full">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900">
            Contact Crochet Art 1014
          </h2>
          <p className="text-stone-600 text-sm">
            Have a question, custom request, or gift idea? Reach out to us via WhatsApp or Instagram!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <div className="bg-emerald-50 rounded-3xl p-6 border border-emerald-200/80 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-600 text-white rounded-2xl shadow-xs">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-stone-900 text-base">Direct WhatsApp</h3>
                  <p className="text-emerald-800 text-sm font-semibold">{WHATSAPP_DISPLAY}</p>
                </div>
              </div>
              <p className="text-xs text-stone-600">
                Instant reply for custom orders, color selections, and order status updates!
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-3 rounded-xl transition"
              >
                <span>Open WhatsApp Chat ({WHATSAPP_DISPLAY})</span>
              </a>
            </div>

            {/* Instagram Card */}
            <div className="bg-pink-50 rounded-3xl p-6 border border-pink-200/80 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl shadow-xs">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-stone-900 text-base">Instagram Page</h3>
                  <p className="text-pink-800 text-sm font-semibold">@crochet_art_1014</p>
                </div>
              </div>
              <p className="text-xs text-stone-600">
                DM us directly on Instagram to discuss design photos or tag us in your unboxing videos!
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold py-3 rounded-xl transition hover:opacity-95"
              >
                <span>Visit @crochet_art_1014</span>
              </a>
            </div>

            {/* Shop Working Info */}
            <div className="bg-white rounded-3xl p-5 border border-stone-200 space-y-2 text-xs text-stone-600">
              <div className="flex items-center gap-2 text-stone-900 font-bold">
                <Clock className="w-4 h-4 text-rose-500" />
                <span>Response & Dispatch Hours:</span>
              </div>
              <p>Monday – Sunday: 10:00 AM – 10:00 PM (PKT)</p>
              <p className="text-rose-600 font-medium">⚡ Average response time: under 30 minutes on WhatsApp.</p>
            </div>

          </div>

          {/* Right Column: Interactive Quick Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-xl space-y-4">
            
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="font-serif font-bold text-xl text-stone-900">
                Send an Instant Message
              </h3>
              <Sparkles className="w-5 h-5 text-rose-400" />
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-4 text-xs">
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Your Name:</label>
                  <input
                    type="text"
                    placeholder="e.g. Maham Fatima"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:border-rose-400 bg-stone-50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">WhatsApp / Phone Number:</label>
                  <input
                    type="text"
                    placeholder="e.g. 032726481747"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:border-rose-400 bg-stone-50"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Subject / Inquiry Type:</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:border-rose-400 bg-stone-50 text-stone-800"
                >
                  <option value="Custom Order Inquiry">Custom Crochet Order</option>
                  <option value="Color Choice & Customization">Color Choice & Customization</option>
                  <option value="Bulk Order for Event/Party Favors">Bulk Order for Event/Party Favors</option>
                  <option value="Existing Order Status">Existing Order Status</option>
                  <option value="General Question">General Question</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Your Message:</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe what you would like to order or ask..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:border-rose-400 bg-stone-50"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3.5 rounded-2xl shadow-md transition"
              >
                <Send className="w-4 h-4" />
                <span>Send via WhatsApp ({WHATSAPP_DISPLAY})</span>
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
