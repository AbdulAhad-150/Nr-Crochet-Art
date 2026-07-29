import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, MessageCircle, ArrowRight, Gift } from 'lucide-react';
import { CartItem } from '../types';
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [giftNote, setGiftNote] = useState('');
  const [includeGiftWrap, setIncludeGiftWrap] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    let text = `Hi Crochet Art 1014! 🌸\nI would like to order the following items from my website cart:\n\n`;

    items.forEach((item, index) => {
      text += `${index + 1}. *${item.product.name}*\n` +
        `   • Qty: ${item.quantity}\n` +
        `   • Color/Shade: ${item.selectedColor || 'Standard'}\n` +
        `   • Price: Rs ${item.product.price} x ${item.quantity} = Rs ${item.product.price * item.quantity}\n\n`;
    });

    text += `*Subtotal:* Rs ${subtotal.toLocaleString()}\n`;
    if (includeGiftWrap) {
      text += `*Packaging:* Gift Wrap requested 🎁\n`;
    }
    if (giftNote) {
      text += `*Special Note:* ${giftNote}\n`;
    }

    text += `\nPlease confirm availability and share payment/delivery options!`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-rose-100 shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-rose-100 bg-amber-50/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-rose-500" />
              <h2 className="font-serif font-bold text-lg text-stone-800">Your Shopping Cart</h2>
              <span className="bg-rose-200 text-rose-800 text-xs font-bold px-2 py-0.5 rounded-full">
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-stone-500 hover:text-stone-800 hover:bg-rose-100 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-stone-400">
                  <ShoppingBag className="w-8 h-8 text-rose-300" />
                </div>
                <p className="font-serif font-semibold text-stone-800 text-base">Your cart is empty</p>
                <p className="text-stone-500 text-xs">Explore our handmade crochet collection and add your favorite items!</p>
              </div>
            ) : (
              items.map((item) => (
                <div 
                  key={`${item.product.id}-${item.selectedColor}`}
                  className="flex gap-3.5 p-3 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-rose-200 transition"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 rounded-xl object-cover border border-stone-200 flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between text-xs">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif font-bold text-stone-800 text-sm leading-tight line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-stone-400 hover:text-rose-600 transition p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-stone-500 mt-0.5">Shade: <span className="font-semibold text-rose-600">{item.selectedColor || 'Standard'}</span></p>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center bg-white rounded-lg border border-stone-200">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="px-2 py-1 text-stone-600 hover:text-rose-600 font-bold"
                        >
                          -
                        </button>
                        <span className="px-2 font-bold text-stone-800">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 text-stone-600 hover:text-rose-600 font-bold"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-extrabold text-stone-900 text-sm">
                        Rs {(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}

            {items.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-stone-200">
                <label className="flex items-center gap-2 text-xs font-semibold text-stone-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeGiftWrap}
                    onChange={(e) => setIncludeGiftWrap(e.target.checked)}
                    className="rounded text-rose-500 focus:ring-rose-400"
                  />
                  <Gift className="w-4 h-4 text-rose-500" />
                  <span>Gift Box & Handwritten Ribbon Tag</span>
                </label>

                <input
                  type="text"
                  placeholder="Add custom note for seller..."
                  value={giftNote}
                  onChange={(e) => setGiftNote(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:outline-none focus:border-rose-300"
                />
              </div>
            )}
          </div>

          {/* Drawer Footer / Checkout CTA */}
          {items.length > 0 && (
            <div className="p-5 border-t border-rose-100 bg-amber-50/40 space-y-3">
              <div className="flex justify-between text-sm text-stone-600 font-medium">
                <span>Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items):</span>
                <span className="font-extrabold text-stone-900 text-base">
                  Rs {subtotal.toLocaleString()}
                </span>
              </div>

              <p className="text-[11px] text-stone-500 leading-snug">
                Clicking checkout opens WhatsApp directly with your preformatted order details.
              </p>

              <button
                onClick={handleWhatsAppCheckout}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3.5 rounded-2xl shadow-lg transition active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-emerald-100 text-emerald-600" />
                <span>Checkout via WhatsApp ({WHATSAPP_DISPLAY})</span>
              </button>

              <button
                onClick={onClearCart}
                className="w-full text-center text-xs text-stone-400 hover:text-stone-600 py-1"
              >
                Clear Cart
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
