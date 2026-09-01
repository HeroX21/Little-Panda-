import React from 'react';
import { PageId, Product } from '../types';
import { BRAND_INFO, COLLECTIONS, PRODUCTS, INSTAGRAM_POSTS } from '../data/brandData';
import { ProductCard } from '../components/ProductCard';
import { 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  Heart, 
  ShoppingBag, 
  Instagram, 
  Compass, 
  Camera, 
  Ruler, 
  Check, 
  ExternalLink 
} from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onOpenEnquiry: (productName?: string) => void;
  onFilterCategory?: (category: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onOpenEnquiry,
  onFilterCategory,
}) => {
  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 4);

  const handleCollectionClick = (categoryKey: string) => {
    if (onFilterCategory) {
      onFilterCategory(categoryKey);
    }
    onNavigate('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="home-page" className="animate-fade-in">
      
      {/* 1. HERO SECTION */}
      <section 
        id="hero-section"
        className="relative bg-[#F4EFEA] border-b border-[#E7E1D8] overflow-hidden min-h-[580px] lg:min-h-[660px] flex items-center"
      >
        {/* Subtle decorative background blur accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5A93C]/10 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D9D2C7]/30 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Hero Copy (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
              
              {/* Little Panda Brand Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-xs border border-[#E7E1D8] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#E5A93C]"></span>
                <span className="text-[0.72rem] uppercase tracking-[0.2em] font-semibold text-[#232323]">
                  {BRAND_INFO.positioning}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#232323] font-medium tracking-tight leading-[1.12] mb-5">
                {BRAND_INFO.name}
                <span className="block font-normal text-3xl sm:text-4xl lg:text-5xl text-[#5F5850] mt-1.5 italic">
                  {BRAND_INFO.tagline}
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-[#5A544C] leading-relaxed max-w-xl mb-8">
                {BRAND_INFO.subTagline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <button
                  id="hero-explore-collection-btn"
                  onClick={() => { onNavigate('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-xl bg-[#232323] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#3B3733] transition-all shadow-sm group"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4 text-[#E5A93C] transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  id="hero-order-instagram-btn"
                  href={BRAND_INFO.instagramDmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-white text-[#232323] border border-[#D9D2C7] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#F9F7F4] hover:border-[#232323] transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#E5A93C]" />
                  <span>Order via Instagram</span>
                </a>
              </div>

              {/* Verified Brand Trust Note */}
              <div className="mt-8 flex items-center gap-4 text-xs text-[#7C756D] pt-4 border-t border-[#E7E1D8]/60">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#E5A93C]" />
                  Direct Sizing Guidance
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#E5A93C]" />
                  Personalized DM Support
                </span>
              </div>
            </div>

            {/* Hero Visual Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Hero Photo Container */}
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white shadow-xl border border-[#E7E1D8] relative">
                  <img
                    src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=1000&auto=format&fit=crop"
                    alt="Little Panda kidswear collection"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />

                  {/* Gradient Overlay for subtle editorial warmth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

                  {/* Floating badge inside photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 text-[#232323] shadow-md flex items-center justify-between">
                    <div>
                      <span className="text-[0.68rem] uppercase tracking-widest text-[#E5A93C] font-semibold block">
                        New Season Drop
                      </span>
                      <span className="font-serif text-base font-medium text-[#232323]">
                        Twirls, Co-ords & Festive Ethnic
                      </span>
                    </div>
                    <button
                      onClick={() => { onNavigate('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="p-2 rounded-xl bg-[#232323] text-white hover:bg-[#3D3A37] transition-colors"
                      aria-label="View New Season Drop"
                    >
                      <ArrowRight className="w-4 h-4 text-[#E5A93C]" />
                    </button>
                  </div>
                </div>

                {/* Decorative floating detail chip */}
                <div className="absolute -top-3 -left-3 sm:-left-5 bg-white py-2 px-3.5 rounded-xl border border-[#E7E1D8] shadow-md flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-[#E5A93C]" />
                  <span className="text-[0.72rem] font-semibold text-[#232323]">
                    @{BRAND_INFO.instagramUsername}
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. BRAND INTRODUCTION */}
      <section id="brand-intro-section" className="py-16 sm:py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[0.7rem] uppercase tracking-[0.22em] font-semibold text-[#E5A93C] block mb-2">
              Our Vision
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#232323] font-medium tracking-tight mb-4">
              Welcome to Little Panda
            </h2>
            <p className="text-base text-[#5A544C] leading-relaxed">
              Little Panda is a kidswear destination created around the joy of dressing little ones in beautiful, expressive styles.
            </p>
          </div>

          {/* Three Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            <div className="p-8 rounded-2xl bg-white border border-[#E7E1D8] shadow-xs text-left">
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E7E1D8] flex items-center justify-center text-[#232323] mb-5">
                <Sparkles className="w-5 h-5 text-[#E5A93C]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#232323] mb-2">
                Beautifully Styled
              </h3>
              <p className="text-sm text-[#6B655D] leading-relaxed">
                Thoughtfully put together silhouettes, charming color palettes, and contemporary details that parents and little ones adore.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E7E1D8] shadow-xs text-left">
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E7E1D8] flex items-center justify-center text-[#232323] mb-5">
                <Heart className="w-5 h-5 text-[#E5A93C]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#232323] mb-2">
                Made for Little Moments
              </h3>
              <p className="text-sm text-[#6B655D] leading-relaxed">
                From festive gatherings and family celebrations to sunny day adventures, each outfit is designed for happy memories.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E7E1D8] shadow-xs text-left">
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E7E1D8] flex items-center justify-center text-[#232323] mb-5">
                <Compass className="w-5 h-5 text-[#E5A93C]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#232323] mb-2">
                Easy to Discover
              </h3>
              <p className="text-sm text-[#6B655D] leading-relaxed">
                Browse effortlessly, select your favorite cuts, and enjoy personalized assistance directly through our Instagram DM.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. FEATURED COLLECTIONS */}
      <section id="featured-collections-section" className="py-16 sm:py-20 bg-[#F3EFEA] border-y border-[#E7E1D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[0.7rem] uppercase tracking-[0.22em] font-semibold text-[#E5A93C] block mb-2">
                Curated Categories
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#232323] font-medium tracking-tight">
                Featured Collections
              </h2>
            </div>
            <button
              onClick={() => { onNavigate('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#232323] hover:text-[#E5A93C] transition-colors self-start md:self-auto"
            >
              <span>View All Outfits</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Collections 4-column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COLLECTIONS.map((col) => (
              <div
                key={col.id}
                onClick={() => handleCollectionClick(col.categoryKey)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#E7E1D8] shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#FAF8F5]">
                  <img
                    src={col.image}
                    alt={col.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[0.65rem] font-semibold tracking-wider text-[#232323] uppercase">
                      {col.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-[#232323] group-hover:text-[#916215] transition-colors mb-1">
                      {col.title}
                    </h3>
                    <p className="text-xs text-[#6B655D] line-clamp-2 leading-relaxed">
                      {col.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-[#F0EBE3] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#232323]">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E5A93C] transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. EDITORIAL PRODUCT SECTION */}
      <section id="editorial-product-section" className="py-16 sm:py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[0.7rem] uppercase tracking-[0.22em] font-semibold text-[#E5A93C] block mb-2">
              Featured Highlights
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#232323] font-medium tracking-tight mb-3">
              Little Looks, Beautifully Styled
            </h2>
            <p className="text-sm sm:text-base text-[#6B655D]">
              Explore some of our most beloved pieces, ready for direct ordering via Instagram DM.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.product_id}
                product={product}
                onSelect={onSelectProduct}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => { onNavigate('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 py-3 px-8 rounded-xl bg-white border border-[#D9D2C7] text-xs uppercase tracking-[0.16em] font-semibold text-[#232323] hover:bg-[#F3EFEA] hover:border-[#232323] transition-all shadow-xs"
            >
              <span>Explore Complete Catalog</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E5A93C]" />
            </button>
          </div>

        </div>
      </section>

      {/* 5. ETHNIC COLLECTION FEATURE (Girls' Kurtis & Outfits Spotlight) */}
      <section id="ethnic-feature-section" className="py-16 sm:py-20 bg-[#FAF4ED] border-y border-[#E7DECE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Mosaic (6 cols) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-md border border-[#E7E1D8]">
                <img
                  src="https://images.unsplash.com/photo-1617331140180-e8262094733a?q=80&w=1000&auto=format&fit=crop"
                  alt="Ethnic girlswear kurti"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-md border border-[#E7E1D8] mt-6">
                <img
                  src="https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=1000&auto=format&fit=crop"
                  alt="Festive anarkali kurti"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Content (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-[0.7rem] uppercase tracking-[0.22em] font-semibold text-[#E5A93C] block mb-2">
                Celebration Collection
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#232323] font-medium tracking-tight mb-4">
                Tradition, Styled for Little Ones
              </h2>
              <p className="text-base text-[#5A544C] leading-relaxed mb-6">
                Discover charming ethnic-inspired looks made for celebrations, special moments and everyday dressing. Beautiful girls' kurtis, peplum sets, and festive coordinate ensembles.
              </p>

              <div className="space-y-3 mb-8 w-full">
                <div className="flex items-center gap-3 text-sm text-[#403B35]">
                  <span className="w-5 h-5 rounded-full bg-[#E5A93C]/20 text-[#916215] flex items-center justify-center flex-shrink-0 text-xs font-bold">✓</span>
                  <span>Soft, breathable linings designed for sensitive young skin</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#403B35]">
                  <span className="w-5 h-5 rounded-full bg-[#E5A93C]/20 text-[#916215] flex items-center justify-center flex-shrink-0 text-xs font-bold">✓</span>
                  <span>Charming pastel palettes and gentle festive accents</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#403B35]">
                  <span className="w-5 h-5 rounded-full bg-[#E5A93C]/20 text-[#916215] flex items-center justify-center flex-shrink-0 text-xs font-bold">✓</span>
                  <span>Easy slip-on cuts ensuring effortless celebration play</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <button
                  id="ethnic-explore-btn"
                  onClick={() => handleCollectionClick('ethnic')}
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#232323] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#3B3733] transition-all shadow-xs"
                >
                  <span>Explore Ethnic Wear</span>
                  <ArrowRight className="w-4 h-4 text-[#E5A93C]" />
                </button>

                <a
                  href={`${BRAND_INFO.instagramDmUrl}?text=${encodeURIComponent('Hi Little Panda! I would like to explore your Ethnic Wear & Kurti collection for girls.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-white text-[#232323] border border-[#D9D2C7] text-xs uppercase tracking-[0.14em] font-semibold hover:bg-[#FAF8F5]"
                >
                  <MessageCircle className="w-4 h-4 text-[#E5A93C]" />
                  <span>Enquire Ethnic Styles</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. UGC / CREATOR SECTION */}
      <section id="creator-section" className="py-16 sm:py-20 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E7E1D8] shadow-sm relative overflow-hidden">
            
            <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#E7E1D8] flex items-center justify-center text-[#232323] mx-auto mb-6">
              <Camera className="w-6 h-6 text-[#E5A93C]" />
            </div>

            <span className="text-[0.7rem] uppercase tracking-[0.22em] font-semibold text-[#E5A93C] block mb-2">
              Community & Partnerships
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#232323] font-medium tracking-tight mb-4">
              Little Panda Creators
            </h2>
            <p className="text-base text-[#5A544C] leading-relaxed max-w-xl mx-auto mb-8">
              We love seeing Little Panda styles come to life. Parents and creators can connect with us for potential content collaborations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                id="creator-collaborate-btn"
                onClick={() => onOpenEnquiry('Creator Collaboration')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-xl bg-[#232323] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#3B3733] transition-all shadow-xs"
              >
                <span>Collaborate With Us</span>
                <ArrowRight className="w-4 h-4 text-[#E5A93C]" />
              </button>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl border border-[#D9D2C7] bg-[#FAF8F5] text-[#232323] text-xs uppercase tracking-[0.14em] font-semibold hover:bg-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#E5A93C]" />
                <span>Tag @{BRAND_INFO.instagramUsername}</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 7. INSTAGRAM FEED SECTION */}
      <section id="instagram-feed-section" className="py-16 sm:py-20 bg-[#F4EFEA] border-t border-[#E7E1D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[0.7rem] uppercase tracking-[0.22em] font-semibold text-[#E5A93C] block mb-2">
              Social Community
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#232323] font-medium tracking-tight mb-3">
              Follow the Little Panda World
            </h2>
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#232323] hover:text-[#E5A93C] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#E5A93C]" />
              <span>@{BRAND_INFO.instagramUsername}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#A8A196]" />
            </a>
          </div>

          {/* 6-Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-10">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={post.id}
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-2xl overflow-hidden bg-white border border-[#E7E1D8] shadow-xs"
              >
                <img
                  src={post.image}
                  alt="Little Panda Instagram styling post"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover overlay with Instagram icon */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-white text-center">
                  <Instagram className="w-6 h-6 text-[#E5A93C] mb-1" />
                  <span className="text-[0.65rem] uppercase tracking-wider font-semibold">View Post</span>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              id="follow-instagram-cta-btn"
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-[#232323] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#383531] transition-all shadow-xs"
            >
              <Instagram className="w-4 h-4 text-[#E5A93C]" />
              <span>Follow Us on Instagram</span>
            </a>
          </div>

        </div>
      </section>

      {/* 8. FINAL HOMEPAGE CTA */}
      <section id="final-cta-section" className="py-20 bg-[#FAF8F5] border-t border-[#E7E1D8] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <span className="text-[0.7rem] uppercase tracking-[0.22em] font-semibold text-[#E5A93C] block mb-3">
            Start Your Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#232323] font-medium tracking-tight mb-4 leading-tight">
            Find Something Special for Your Little One
          </h2>
          <p className="text-base text-[#5A544C] leading-relaxed max-w-xl mx-auto mb-8">
            Explore our latest kidswear collection or connect with Little Panda directly to place an order.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => { onNavigate('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-xl bg-[#232323] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#3B3733] transition-all shadow-xs"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 text-[#E5A93C]" />
            </button>

            <a
              href={BRAND_INFO.instagramDmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-xl bg-white text-[#232323] border border-[#D9D2C7] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#F4EFEA] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#E5A93C]" />
              <span>DM to Order</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
