import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquarePlus, X, Send } from 'lucide-react';
import { REVIEWS } from '../data/products';
import { Review } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [showAddReview, setShowAddReview] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [productName, setProductName] = useState('Crochet Sunflower Pot');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleAddReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      customerName: name,
      rating: rating,
      date: 'Just now',
      comment: comment,
      productName: productName,
      verified: true
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setShowAddReview(false);
      setName('');
      setComment('');
    }, 1200);
  };

  return (
    <section className="py-14 bg-amber-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-100/80 px-3 py-1 rounded-full">
              Customer Feedback
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 mt-2">
              Loved by Handmade Enthusiasts
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Read verified customer experiences from our crochet lovers!
            </p>
          </div>

          <button
            onClick={() => setShowAddReview(true)}
            className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-2xl shadow-md transition"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsList.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 border border-rose-100 shadow-sm flex flex-col justify-between hover:shadow-md transition"
            >
              <div className="space-y-3">
                
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-stone-200'}`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>

              </div>

              {/* Author Info */}
              <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1">
                    <span>{review.customerName}</span>
                    {review.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                    )}
                  </div>
                  <span className="text-[11px] text-rose-600 font-medium">{review.productName}</span>
                </div>
                <span className="text-stone-400 text-[10px]">{review.date}</span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {showAddReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-rose-100 shadow-2xl relative">
            
            <button
              onClick={() => setShowAddReview(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-serif font-bold text-xl text-stone-900 mb-1">
              Share Your Crochet Experience
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              Your feedback helps us stitch even better handmade creations!
            </p>

            <form onSubmit={handleAddReviewSubmit} className="space-y-4 text-xs">
              
              <div>
                <label className="block font-bold text-stone-700 mb-1">Your Name:</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Sarah Fatima"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-rose-400 bg-stone-50"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Product Purchased:</label>
                <select
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-rose-400 bg-stone-50 text-stone-700"
                >
                  <option value="Crochet Sunflower Pot">Crochet Sunflower Pot</option>
                  <option value="Butterfly Hair Clips">Butterfly Hair Clips</option>
                  <option value="Amigurumi Honeybee Plushie">Amigurumi Honeybee Plushie</option>
                  <option value="Crochet Strawberry Keychain">Crochet Strawberry Keychain</option>
                  <option value="Sprout Bookmark">Sprout Bookmark</option>
                  <option value="Custom Order Item">Custom Order Item</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Rating:</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      className="p-1 text-amber-400 hover:scale-110 transition"
                    >
                      <Star className={`w-6 h-6 ${star <= rating ? 'fill-amber-400 text-amber-400' : 'text-stone-300'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Review Details:</label>
                <textarea
                  rows={3}
                  required
                  placeholder="How did you like the yarn softness, packaging, and delivery?"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-rose-400 bg-stone-50"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 rounded-2xl shadow-md transition"
              >
                <Send className="w-4 h-4" />
                <span>{submittedMessage ? 'Submitted! Thank you 🌸' : 'Post Review'}</span>
              </button>

            </form>

          </div>
        </div>
      )}

    </section>
  );
};
