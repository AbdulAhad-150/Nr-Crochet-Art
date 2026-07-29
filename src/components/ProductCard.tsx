import React, { useState } from 'react';
import { Star, Heart, Eye, MessageCircle, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../data/products';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, selectedColor?: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors && product.colors.length > 0 ? product.colors[0] : ''
  );
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Hi Crochet Art 1014! 🌸\nI would like to order:\n\n*Product:* ${product.name}\n*Price:* Rs ${product.price}\n*Color/Variant:* ${selectedColor || 'Default'}\n*Quantity:* 1\n\nPlease let me know total with delivery charges!`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedColor);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  return (
    <div 
      onClick={() => onQuickView(product)}
      className="group bg-white rounded-3xl border border-rose-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
    >
      
      {/* Top Image & Badges Container */}
      <div className="relative aspect-4/3 bg-stone-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
        />

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isBestSeller && (
            <span className="bg-amber-400 text-amber-950 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
              ★ Best Seller
            </span>
          )}
          {product.isNew && (
            <span className="bg-rose-500 text-white font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
              New Arrival
            </span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all z-10 ${
            isWishlisted 
              ? 'bg-rose-500 text-white shadow-md' 
              : 'bg-white/80 text-stone-600 hover:text-rose-500 hover:bg-white'
          }`}
          title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Hover Overlay */}
        <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="bg-white/95 text-stone-800 text-xs font-semibold px-4 py-2 rounded-full shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5" /> Quick View
          </span>
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          
          {/* Category & Yarn Type */}
          <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
            <span className="font-medium capitalize text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">
              {product.category}
            </span>
            <span className="text-[11px] text-stone-400">{product.yarnType.split('+')[0]}</span>
          </div>

          {/* Product Title */}
          <h3 className="font-serif font-bold text-stone-800 text-base group-hover:text-rose-600 transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>

          {/* Ratings */}
          <div className="flex items-center gap-1 my-2">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
            </div>
            <span className="text-xs font-semibold text-stone-700">{product.rating}</span>
            <span className="text-xs text-stone-400">({product.reviewsCount})</span>
          </div>

          {/* Color Options */}
          {product.colors && product.colors.length > 0 && (
            <div className="my-2.5" onClick={(e) => e.stopPropagation()}>
              <p className="text-[11px] text-stone-500 mb-1 font-medium">Available Shade:</p>
              <div className="flex flex-wrap gap-1">
                {product.colors.map((col) => (
                  <button
                    key={col}
                    onClick={() => setSelectedColor(col)}
                    className={`text-[10px] px-2 py-0.5 rounded-full border transition ${
                      selectedColor === col
                        ? 'bg-rose-100 text-rose-900 border-rose-300 font-semibold'
                        : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    {col}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Pricing & Order Actions */}
        <div className="mt-3 pt-3 border-t border-stone-100">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg font-bold text-stone-900 font-sans">
              Rs {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-stone-400 line-through">
                Rs {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2" onClick={(e) => e.stopPropagation()}>
            {/* Direct WhatsApp Order Button */}
            <button
              onClick={handleWhatsAppOrder}
              className="w-full flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 px-2 rounded-xl transition shadow-xs active:scale-95"
              title="Order this product directly on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-100 text-emerald-600" />
              <span>WhatsApp</span>
            </button>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-1 text-xs font-semibold py-2.5 px-2 rounded-xl transition shadow-xs ${
                addedAnimation
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
