import React, { useState } from 'react';
import { X, Star, Heart, MessageCircle, ShoppingBag, Truck, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../data/products';

interface ProductDetailsModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, selectedColor?: string, quantity?: number, customNote?: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors && product.colors.length > 0 ? product.colors[0] : ''
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [customNote, setCustomNote] = useState<string>('');
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  const images = product.galleryImages || [product.image];

  const handleWhatsAppInstantOrder = () => {
    const total = product.price * quantity;
    const msg = `Hi Crochet Art 1014! 🌸\n\nI want to place an order for:\n*Item:* ${product.name}\n*Quantity:* ${quantity}\n*Color/Shade:* ${selectedColor || 'Standard'}\n*Price:* Rs ${product.price} x ${quantity} = Rs ${total}\n${customNote ? `*Custom Note/Request:* ${customNote}\n` : ''}\nPlease let me know delivery details and payment options!`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleAddToCart = () => {
    onAddToCart(product, selectedColor, quantity, customNote);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-sm animate-fadeIn">
      
      {/* Modal Container */}
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-rose-100 shadow-2xl relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8">
          
          {/* Left Column: Image Gallery */}
          <div className="space-y-3">
            <div className="relative rounded-2xl overflow-hidden bg-stone-100 aspect-square border border-stone-200">
              <img
                src={activeImage}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => onToggleWishlist(product)}
                className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md shadow-md transition ${
                  isWishlisted ? 'bg-rose-500 text-white' : 'bg-white/80 text-stone-600 hover:text-rose-500'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Thumbnail selector */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition ${
                      activeImage === img ? 'border-rose-500 ring-2 ring-rose-200' : 'border-stone-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}

            {/* Quality Specs Badges */}
            <div className="bg-rose-50/60 rounded-2xl p-4 border border-rose-100 space-y-2 text-xs text-stone-700">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-500" />
                <span className="font-semibold">Yarn Type:</span> {product.yarnType}
              </div>
              {product.dimensions && (
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Dimensions:</span> {product.dimensions}
                </div>
              )}
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold">Handcrafting Time:</span> {product.leadTime}
              </div>
            </div>
          </div>

          {/* Right Column: Information & WhatsApp Actions */}
          <div className="flex flex-col justify-between space-y-4">
            
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 bg-rose-100/70 px-2.5 py-1 rounded-md">
                  {product.category}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-bold text-stone-800">{product.rating}</span>
                  <span className="text-xs text-stone-500">({product.reviewsCount} customer reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                {product.name}
              </h2>

              {/* Price */}
              <div className="flex items-baseline gap-3 my-3">
                <span className="text-2xl font-extrabold text-stone-900 font-sans">
                  Rs {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-stone-400 line-through">
                    Rs {product.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-xs text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full">
                  In Stock • 100% Handmade
                </span>
              </div>

              {/* Description */}
              <p className="text-stone-600 text-sm leading-relaxed my-3">
                {product.description}
              </p>

              {/* Details list */}
              <ul className="text-xs text-stone-600 space-y-1.5 my-3 list-disc list-inside">
                {product.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>

              {/* Color Options */}
              {product.colors && product.colors.length > 0 && (
                <div className="my-4">
                  <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                    Select Color / Shade:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition ${
                          selectedColor === color
                            ? 'bg-rose-500 text-white border-rose-500 shadow-sm'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-rose-200'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="my-4 flex items-center gap-4">
                <label className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                  Quantity:
                </label>
                <div className="flex items-center bg-stone-100 rounded-xl border border-stone-200">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 text-stone-600 hover:text-rose-600 font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 text-sm font-bold text-stone-800">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 text-stone-600 hover:text-rose-600 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Custom Instructions Input */}
              <div className="my-4">
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1">
                  Custom Request / Gift Note (Optional):
                </label>
                <input
                  type="text"
                  placeholder="e.g., Add letter 'S' tag, gift wrap with pink ribbon"
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-rose-400 bg-stone-50"
                />
              </div>

            </div>

            {/* Actions */}
            <div className="space-y-2.5 pt-2 border-t border-stone-100">
              
              <button
                onClick={handleWhatsAppInstantOrder}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3.5 rounded-2xl shadow-lg transition active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-emerald-100 text-emerald-600" />
                <span>Order Instant on WhatsApp ({WHATSAPP_DISPLAY})</span>
              </button>

              <button
                onClick={handleAddToCart}
                className={`w-full flex items-center justify-center gap-2 font-semibold text-sm py-3 rounded-2xl border transition ${
                  addedSuccess
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : 'bg-rose-100/70 hover:bg-rose-200/80 text-rose-900 border-rose-200'
                }`}
              >
                {addedSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Shopping Cart</span>
                  </>
                )}
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
