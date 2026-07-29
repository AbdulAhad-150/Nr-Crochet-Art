import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductCard } from './components/ProductCard';
import { ProductDetailsModal } from './components/ProductDetailsModal';
import { CustomOrderBuilder } from './components/CustomOrderBuilder';
import { CartDrawer } from './components/CartDrawer';
import { InstagramFeedSection } from './components/InstagramFeedSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { AboutUsSection } from './components/AboutUsSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { Footer } from './components/Footer';

import { PRODUCTS, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from './data/products';
import { Product, CartItem, Category } from './types';
import { Sparkles, Filter, Search, Heart, MessageCircle, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Persistence for Cart & Wishlist
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('crochet_art_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('crochet_art_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('crochet_art_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('crochet_art_wishlist', JSON.stringify(wishlistIds));
    } catch (e) {
      console.error(e);
    }
  }, [wishlistIds]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Cart Handlers
  const handleAddToCart = (
    product: Product,
    selectedColor?: string,
    quantity: number = 1,
    customNote?: string
  ) => {
    setCartItems((prev) => {
      const color = selectedColor || (product.colors?.[0] ?? 'Standard');
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === color
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        if (customNote) updated[existingIndex].customNote = customNote;
        return updated;
      } else {
        return [...prev, { product, quantity, selectedColor: color, customNote }];
      }
    });

    showToast(`Added "${product.name}" to cart! 🌸`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Removed item from cart');
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Wishlist Handlers
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      if (prev.includes(product.id)) {
        showToast(`Removed from Wishlist`);
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Saved to Wishlist 💕`);
        return [...prev, product.id];
      }
    });
  };

  // Filtered Products
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'All Handmade', icon: '🌸' },
    { id: 'keychains', label: 'Keychains', icon: '🔑' },
    { id: 'clips', label: 'Butterfly Clips', icon: '🦋' },
    { id: 'flowers', label: 'Flowers & Pots', icon: '🌻' },
    { id: 'plushies', label: 'Amigurumi Plushies', icon: '🧸' },
    { id: 'bookmarks', label: 'Bookmarks', icon: '📖' },
    { id: 'custom', label: 'Custom Gifts', icon: '✨' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-rose-200 selection:text-rose-900 flex flex-col justify-between">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 bg-stone-900 text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-2xl border border-stone-700 animate-fadeIn flex items-center gap-2">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => {
          setActiveTab('shop');
          showToast('Showing your saved wishlist items below!');
        }}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat as Category);
          setActiveTab('shop');
        }}
      />

      <main className="flex-1">
        
        {/* Tab Switch Routing */}
        {activeTab === 'home' && (
          <>
            <HeroSection
              onExplore={() => {
                setActiveTab('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onCustomOrder={() => {
                setActiveTab('custom-builder');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat as Category);
                setActiveTab('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Featured Best Sellers Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-100/80 px-3 py-1 rounded-full">
                    Customer Favorites
                  </span>
                  <h2 className="font-serif text-3xl font-extrabold text-stone-900 mt-2">
                    Featured Handmade Best Sellers
                  </h2>
                </div>

                <button
                  onClick={() => setActiveTab('shop')}
                  className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 hover:underline"
                >
                  View All Products ({PRODUCTS.length}) <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Best Sellers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4).map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={(p) => setQuickViewProduct(p)}
                    onAddToCart={handleAddToCart}
                    onToggleWishlist={handleToggleWishlist}
                    isWishlisted={wishlistIds.includes(product.id)}
                  />
                ))}
              </div>
            </section>

            {/* Custom Request Banner Card */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center md:text-left max-w-xl z-10">
                  <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold">
                    <Sparkles className="w-4 h-4" /> Custom Colorways & Designs
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                    Need a custom color combination or gift box?
                  </h3>
                  <p className="text-rose-50 text-xs sm:text-sm">
                    Specify custom colors, add initial tags, or design a custom flower bouquet for weddings and birthdays directly on WhatsApp!
                  </p>
                </div>

                <div className="z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    onClick={() => {
                      setActiveTab('custom-builder');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-white text-rose-900 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-md hover:bg-rose-50 transition"
                  >
                    Open Custom Builder
                  </button>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Crochet Art 1014! I want to ask about custom colors.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-md transition flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp ({WHATSAPP_DISPLAY})
                  </a>
                </div>
              </div>
            </section>

            {/* Instagram Feed */}
            <InstagramFeedSection />

            {/* Reviews */}
            <ReviewsSection />

            {/* FAQ */}
            <FAQSection />
          </>
        )}

        {activeTab === 'shop' && (
          <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Page Title */}
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
              <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900">
                Handmade Crochet Catalog
              </h1>
              <p className="text-stone-600 text-sm">
                Explore keychains, butterfly clips, potted flowers, plushies, bookmarks & custom gifts.
              </p>
            </div>

            {/* Category Tab Selector */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as Category)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition whitespace-nowrap flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? 'bg-rose-500 text-white shadow-md'
                      : 'bg-white text-stone-700 border border-stone-200 hover:border-rose-300'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 max-w-md mx-auto space-y-3">
                <p className="font-serif font-bold text-stone-800 text-lg">No items match your filter</p>
                <p className="text-stone-500 text-xs">Try searching for a different term or selecting "All Handmade".</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="bg-rose-100 text-rose-800 font-bold text-xs px-4 py-2 rounded-xl"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={(p) => setQuickViewProduct(p)}
                    onAddToCart={handleAddToCart}
                    onToggleWishlist={handleToggleWishlist}
                    isWishlisted={wishlistIds.includes(product.id)}
                  />
                ))}
              </div>
            )}

          </section>
        )}

        {activeTab === 'custom-builder' && <CustomOrderBuilder />}
        {activeTab === 'about' && <AboutUsSection />}
        {activeTab === 'reviews' && <ReviewsSection />}
        {activeTab === 'faq' && <FAQSection />}
        {activeTab === 'contact' && <ContactSection />}

      </main>

      {/* Persistent Floating WhatsApp Button */}
      <FloatingWhatsAppButton />

      {/* Footer */}
      <Footer
        onSelectNav={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat as Category);
          setActiveTab('shop');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Modals & Drawers */}
      <ProductDetailsModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
