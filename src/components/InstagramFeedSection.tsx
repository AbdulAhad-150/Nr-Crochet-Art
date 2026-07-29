import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { INSTAGRAM_POSTS, INSTAGRAM_URL } from '../data/products';

export const InstagramFeedSection: React.FC = () => {
  return (
    <section className="py-14 bg-gradient-to-b from-stone-50 via-rose-50/30 to-amber-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-xs">
            <Instagram className="w-3.5 h-3.5" />
            <span>@crochet_art_1014</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900">
            Follow Our Crochet Journey
          </h2>
          <p className="text-stone-600 text-sm">
            Check out our latest handmade creations, behind-the-scenes stitching videos, and customer tags on Instagram.
          </p>
        </div>

        {/* Instagram Post Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-3xl overflow-hidden border border-rose-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block"
            >
              <div className="aspect-square overflow-hidden bg-stone-100 relative">
                <img
                  src={post.image}
                  alt="Crochet Art Instagram Post"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-4 text-center">
                  <Instagram className="w-8 h-8 mb-2 stroke-2" />
                  <div className="flex items-center gap-4 text-xs font-bold my-1">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4 fill-white" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 fill-white" /> {post.comments}
                    </span>
                  </div>
                  <span className="text-[11px] font-medium underline mt-2 flex items-center gap-1">
                    View on Instagram <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>

              <div className="p-4 bg-white">
                <p className="text-stone-700 text-xs line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram Banner Button */}
        <div className="mt-10 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-transform hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            <span>Follow @crochet_art_1014 on Instagram</span>
          </a>
        </div>

      </div>
    </section>
  );
};
