import React, { useState } from 'react';
import {
  ShoppingBag,
  Heart,
  Search,
  Menu,
  X,
  Instagram,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { INSTAGRAM_URL, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '../data/products';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectCategory: (cat: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  searchQuery,
  setSearchQuery,
  onSelectCategory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop All' },
    { id: 'custom-builder', label: 'Custom Order ✨' },
    { id: 'about', label: 'About Us' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hi Crochet Art 1014! I came from your website and would like to ask about a handmade crochet order.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-amber-50/90 backdrop-blur-md border-b border-rose-100">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 text-white text-[10px] sm:text-xs font-medium py-2 px-2 sm:px-4 text-center flex items-center justify-center gap-1 sm:gap-2 shadow-sm">
        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
        <span className="line-clamp-2 sm:line-clamp-none">
          🌸 Handmade Crochet • Custom Orders via WhatsApp
        </span>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1 underline underline-offset-2 hover:opacity-80 transition ml-2"
        >
          <Instagram className="w-3 h-3" /> @crochet_art_1014
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo & Brand */}
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer min-w-0" onClick={() => handleNavClick('home')}>
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-rose-200 to-amber-100 flex items-center justify-center shadow-inner border border-rose-200/60 transform hover:scale-105 transition">
              <span className="text-lg sm:text-xl lg:text-2xl" role="img" aria-label="crochet yarn ball">🧶</span>
            </div>
            <div className="min-w-0">
             <span className="font-serif text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-stone-800 truncate">
                Crochet Art
                {/* <span className="text-rose-500 font-sans font-light text-xl">1014</span> */}
              </span>
              <p className="text-[11px] text-stone-500 tracking-wider font-medium -mt-1 uppercase">
                Handmade Crochet & Gifts
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all ${isActive
                      ? 'bg-rose-100/80 text-rose-800 shadow-sm font-semibold'
                      : 'text-stone-700 hover:text-rose-600 hover:bg-rose-50/60'
                    }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Actions & Buttons */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">

            {/* Search Input toggle */}
            <div className="relative">
              {showSearchInput ? (
                <div className="flex items-center bg-white border border-rose-200 rounded-full px-3 py-1.5 shadow-sm w-[140px] xs:w-[170px] sm:w-60 max-w-full">
                  <Search className="w-4 h-4 text-stone-400 mr-2 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      if (activeTab !== 'shop') setActiveTab('shop');
                    }}
                    autoFocus
                    className="w-full text-xs text-stone-700 bg-transparent focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      setShowSearchInput(false);
                      setSearchQuery('');
                    }}
                    className="text-stone-400 hover:text-stone-600 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setShowSearchInput(true);
                    if (activeTab !== 'shop') setActiveTab('shop');
                  }}
                  className="p-2.5 rounded-full text-stone-600 hover:text-rose-600 hover:bg-rose-100/50 transition"
                  title="Search items"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Wishlist Icon */}
            <button
              onClick={onOpenWishlist}
              className="hidden sm:flex relative p-2.5 rounded-full text-stone-600 hover:text-rose-600 hover:bg-rose-100/50 transition"
              title="Saved Items"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Icon */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full text-stone-700 hover:text-rose-600 hover:bg-rose-100/50 transition"
              title="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-emerald-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* WhatsApp Quick Order Header Button */}
            <button
              onClick={handleWhatsAppClick}
              className="hidden sm:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2 rounded-full shadow-sm transition-transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-100 text-emerald-600" />
              <span>WhatsApp {WHATSAPP_DISPLAY}</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl lg:hidden text-stone-700 hover:bg-rose-100/50 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-amber-50/95 border-b border-rose-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-fadeIn">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition ${activeTab === link.id
                    ? 'bg-rose-200/70 text-rose-900 font-bold'
                    : 'text-stone-700 hover:bg-rose-100/50'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-rose-200/70 flex flex-col gap-2.5">
            <button
              onClick={handleWhatsAppClick}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white text-sm font-semibold py-4 rounded-2xl shadow-sm hover:bg-emerald-700 transition"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp ({WHATSAPP_DISPLAY})</span>
            </button>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold py-4 rounded-2xl shadow-sm hover:opacity-95 transition"
            >
              <Instagram className="w-5 h-5" />
              <span>Follow on Instagram (@crochet_art_1014)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
