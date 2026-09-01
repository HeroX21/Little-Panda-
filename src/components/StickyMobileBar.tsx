import React from 'react';
import { PageId } from '../types';
import { BRAND_INFO } from '../data/brandData';
import { ShoppingBag, MessageCircle } from 'lucide-react';

interface StickyMobileBarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ currentPage, onNavigate }) => {
  return (
    <aside 
      id="sticky-mobile-cta-bar"
      aria-label="Quick mobile actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#E7E1D8] px-4 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] pb-[max(0.625rem,env(safe-area-inset-bottom))]"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        
        {/* Shop Button */}
        <button
          onClick={() => {
            onNavigate('shop');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
            currentPage === 'shop'
              ? 'bg-[#E7E1D8] text-[#232323]'
              : 'bg-white text-[#232323] border border-[#D9D2C7] hover:bg-[#F3EFEA]'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5 text-[#E5A93C]" />
          <span>Shop Looks</span>
        </button>

        {/* Instagram DM Order Button */}
        <a
          href={BRAND_INFO.instagramDmUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#232323] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#383531] shadow-xs active:scale-[0.98] transition-all"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#E5A93C]" />
          <span>DM to Order</span>
        </a>

      </div>
    </aside>
  );
};
