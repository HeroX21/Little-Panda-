import React from 'react';
import { PageId } from '../types';
import { BRAND_INFO } from '../data/brandData';
import { Logo } from './Logo';
import { Instagram, MessageCircle, Heart, ShieldCheck, Sparkles, Ruler, HelpCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  return (
    <footer id="main-footer" className="bg-[#1C1B1A] text-[#EDE7DF] pt-16 pb-24 lg:pb-12 border-t border-[#312E2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#312E2B]">
          
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8">
            <div className="bg-[#FAF8F5] p-2.5 rounded-xl inline-block mb-4">
              <Logo onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
            </div>
            
            <p className="font-serif text-lg text-[#FDFBF7] font-normal mb-2 italic">
              "Little styles for big personalities."
            </p>
            <p className="text-sm text-[#A8A196] leading-relaxed max-w-sm mb-6">
              A boutique kidswear destination focused on charming girlswear, modern co-ord sets, twirl dresses, and graceful ethnic wear.
            </p>

            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
                Direct Sales & Orders
              </span>
              <a
                href={BRAND_INFO.instagramDmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#FAF8F5] hover:text-[#E5A93C] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#E5A93C]" />
                <span>DM on Instagram to order: <strong>@{BRAND_INFO.instagramUsername}</strong></span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FAF8F5] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-[#A8A196]">
              <li>
                <button 
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Shop Collections
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  About Little Panda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('size-guide'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Size Chart & Sizing Tips
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Contact Us & FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FAF8F5] mb-4">
              Collections
            </h3>
            <ul className="space-y-2.5 text-sm text-[#A8A196]">
              <li>
                <button 
                  onClick={() => { onNavigate('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Girls' Kurtis & Ethnic
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Two-Piece Co-ord Sets
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Twirl Dresses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Everyday Girlswear
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#FAF8F5] transition-colors text-[#E5A93C]"
                >
                  New Arrivals
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care & Direct Order Notice */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FAF8F5] mb-4">
                Ordering Support
              </h3>
              <p className="text-xs text-[#A8A196] leading-relaxed mb-4">
                Our official e-commerce checkout is currently in development. In the meantime, we offer personalized shopping and direct sizing assistance through Instagram DM.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#282624] border border-[#3A3632]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#FAF8F5] mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />
                <span>Need Sizing Advice?</span>
              </div>
              <p className="text-[0.75rem] text-[#A8A196] mb-3">
                Send us a DM with your child's age & height for personalized recommendations.
              </p>
              <a
                href={BRAND_INFO.instagramDmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium rounded-lg bg-[#E5A93C] text-[#232323] hover:bg-[#DDA135] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>DM Little Panda</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7C756D]">
          <div>
            © {BRAND_INFO.year} {BRAND_INFO.name}. All rights reserved. Kids Clothing | Premium Collection.
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#FAF8F5] transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#FAF8F5] transition-colors underline-offset-4 hover:underline"
            >
              Terms & Conditions
            </button>
            <a 
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E5A93C] transition-colors flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
