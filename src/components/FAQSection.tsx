import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle, Search } from 'lucide-react';
import { FAQS, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '../data/products';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq1');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [query, setQuery] = useState<string>('');

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(query.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppAsk = () => {
    const text = encodeURIComponent("Hi Crochet Art 1014! I have a question about handmade crochet ordering/customization.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section className="py-14 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 text-xs font-bold px-3.5 py-1 rounded-full">
            <HelpCircle className="w-4 h-4 text-rose-500" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-600 text-sm">
            Everything you need to know about placing custom crochet orders, care tips, and delivery.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search questions (e.g. wash instructions, custom turn-around time)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full text-xs sm:text-sm pl-11 pr-4 py-3 rounded-2xl bg-white border border-stone-200 focus:outline-none focus:border-rose-300 shadow-xs"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All FAQs' },
              { id: 'ordering', label: 'Ordering & Payment' },
              { id: 'custom', label: 'Custom Requests' },
              { id: 'care', label: 'Washing & Care' },
              { id: 'shipping', label: 'Dispatch & Shipping' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition ${
                  selectedCategory === cat.id
                    ? 'bg-rose-500 text-white shadow-xs font-bold'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-rose-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 bg-white rounded-3xl border border-stone-200 text-stone-500 text-xs">
              No matching questions found. Send us a message on WhatsApp directly!
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-rose-100/80 overflow-hidden shadow-2xs transition"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? '' : faq.id)}
                    className="w-full p-4 text-left font-serif font-bold text-stone-800 text-sm sm:text-base flex items-center justify-between gap-4 hover:text-rose-600 transition"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-rose-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3 bg-rose-50/20">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Ask on WhatsApp Prompt */}
        <div className="mt-10 p-6 bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50 rounded-3xl border border-emerald-200/80 text-center space-y-3">
          <h4 className="font-serif font-bold text-stone-900 text-base">
            Still have a specific question about your custom design?
          </h4>
          <p className="text-xs text-stone-600 max-w-md mx-auto">
            We love chatting about crochet ideas! Send us your query or reference picture on WhatsApp for instant assistance.
          </p>
          <button
            onClick={handleWhatsAppAsk}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-md transition"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-100 text-emerald-600" />
            <span>Chat with Us on WhatsApp ({WHATSAPP_DISPLAY})</span>
          </button>
        </div>

      </div>
    </section>
  );
};
