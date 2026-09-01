import React from 'react';
import { PageId } from '../types';
import { BRAND_INFO } from '../data/brandData';
import { Sparkles, Heart, Smile, Users, ArrowRight, Instagram, MessageCircle } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div id="about-page" className="bg-[#FAF8F5] min-h-screen animate-fade-in">
      
      {/* 1. HERO SECTION */}
      <section className="py-12 sm:py-20 bg-[#F4EFEA] border-b border-[#E7E1D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[0.7rem] uppercase tracking-[0.22em] font-semibold text-[#E5A93C] block mb-3">
            About The Brand
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#232323] font-medium tracking-tight mb-4">
            {BRAND_INFO.name}
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-[#5F5850] italic max-w-2xl mx-auto">
            "Kidswear with a little more personality."
          </p>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
              Our Vision
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#232323] font-medium mt-2">
              OUR STORY
            </h2>
          </div>

          <div className="prose prose-stone mx-auto text-base sm:text-lg text-[#5A544C] leading-relaxed text-center space-y-6">
            <p className="font-serif text-xl text-[#232323] leading-relaxed">
              Little Panda was created with a simple idea: children's clothing can be comfortable, expressive and beautifully styled.
            </p>
            <p className="text-sm sm:text-base text-[#6B655D] max-w-2xl mx-auto">
              We believe every child has a unique spark that deserves to be celebrated. Whether it’s a twirl dress for special milestones, breezy coordinates for sunny afternoons, or graceful ethnic outfits for festive celebrations, our curations are put together with love, warmth, and attention to detail.
            </p>
          </div>

        </div>
      </section>

      {/* 3. OUR APPROACH (3 Pillars) */}
      <section className="py-16 bg-[#F3EFEA] border-y border-[#E7E1D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
              Core Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#232323] font-medium mt-2">
              OUR APPROACH
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-2xl bg-white border border-[#E7E1D8] shadow-xs text-center">
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E7E1D8] flex items-center justify-center text-[#232323] mx-auto mb-5">
                <Sparkles className="w-5 h-5 text-[#E5A93C]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#232323] mb-2 uppercase tracking-wide">
                Style
              </h3>
              <p className="text-sm text-[#6B655D] leading-relaxed">
                Thoughtfully styled looks for little personalities.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E7E1D8] shadow-xs text-center">
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E7E1D8] flex items-center justify-center text-[#232323] mx-auto mb-5">
                <Heart className="w-5 h-5 text-[#E5A93C]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#232323] mb-2 uppercase tracking-wide">
                Simplicity
              </h3>
              <p className="text-sm text-[#6B655D] leading-relaxed">
                An easy way for parents to discover and order kidswear.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E7E1D8] shadow-xs text-center">
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E7E1D8] flex items-center justify-center text-[#232323] mx-auto mb-5">
                <Smile className="w-5 h-5 text-[#E5A93C]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#232323] mb-2 uppercase tracking-wide">
                Expression
              </h3>
              <p className="text-sm text-[#6B655D] leading-relaxed">
                Clothing that lets little ones show their personality.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. WHY LITTLE PANDA (4 Cards) */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
              The Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#232323] font-medium mt-2">
              WHY LITTLE PANDA
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-white border border-[#E7E1D8] shadow-xs">
              <span className="text-xs font-mono text-[#A8A196] block mb-2">01</span>
              <h3 className="font-serif text-lg font-medium text-[#232323] mb-2">
                Curated Styles
              </h3>
              <p className="text-xs sm:text-sm text-[#6B655D] leading-relaxed">
                Each collection is specifically styled to bring harmonious colors and balanced silhouettes together.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E7E1D8] shadow-xs">
              <span className="text-xs font-mono text-[#A8A196] block mb-2">02</span>
              <h3 className="font-serif text-lg font-medium text-[#232323] mb-2">
                Kidswear Focus
              </h3>
              <p className="text-xs sm:text-sm text-[#6B655D] leading-relaxed">
                Dedicated exclusively to children's fashion, understanding the needs of both active kids and styling parents.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E7E1D8] shadow-xs">
              <span className="text-xs font-mono text-[#A8A196] block mb-2">03</span>
              <h3 className="font-serif text-lg font-medium text-[#232323] mb-2">
                Modern Looks
              </h3>
              <p className="text-xs sm:text-sm text-[#6B655D] leading-relaxed">
                Contemporary, aesthetic, and playful designs that break away from generic cartoonish clothes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E7E1D8] shadow-xs">
              <span className="text-xs font-mono text-[#A8A196] block mb-2">04</span>
              <h3 className="font-serif text-lg font-medium text-[#232323] mb-2">
                Parent-Friendly Experience
              </h3>
              <p className="text-xs sm:text-sm text-[#6B655D] leading-relaxed">
                Direct, honest communication via Instagram DM with size recommendations tailored to your child.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. BRAND IMAGE FULL-WIDTH EDITORIAL BANNER */}
      <section className="relative h-80 sm:h-96 w-full overflow-hidden flex items-center justify-center border-y border-[#E7E1D8]">
        <img
          src="https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=1600&auto=format&fit=crop"
          alt="Little Panda brand editorial"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45 flex items-center justify-center p-6 text-center">
          <div className="max-w-xl text-white">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal italic leading-snug drop-shadow-md">
              "Small moments.
              <br />
              Beautifully dressed."
            </h2>
            <div className="mt-6">
              <button
                onClick={() => { onNavigate('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-[#FAF8F5] text-[#232323] text-xs uppercase tracking-widest font-semibold hover:bg-white transition-all shadow-md"
              >
                <span>View Our Collections</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E5A93C]" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
