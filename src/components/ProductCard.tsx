import React from 'react';
import { Product } from '../types';
import { Sparkles, Eye, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuickOrder?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, onQuickOrder }) => {
  const primaryImage = product.images[0] || 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1000&auto=format&fit=crop';
  const hoverImage = product.images[1] || primaryImage;

  return (
    <div 
      id={`product-card-${product.product_id}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E7E1D8]/70 shadow-xs hover:shadow-md transition-all duration-300 relative"
    >
      {/* Image Container */}
      <div 
        className="relative aspect-[3/4] w-full overflow-hidden bg-[#F3EFEA] cursor-pointer"
        onClick={() => onSelect(product)}
      >
        <img
          src={primaryImage}
          alt={product.product_name}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Secondary hover image if present */}
        {product.images.length > 1 && (
          <img
            src={hoverImage}
            alt={`${product.product_name} alternative view`}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"
          />
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.new_arrival && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FAF8F5]/90 backdrop-blur-xs text-[0.68rem] font-semibold tracking-wider text-[#232323] uppercase border border-[#E7E1D8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]"></span>
              New
            </span>
          )}
          {product.availability === 'Made to Order' && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#232323]/80 backdrop-blur-xs text-[0.65rem] font-medium tracking-wide text-[#FAF8F5] uppercase">
              Made to Order
            </span>
          )}
        </div>

        {/* Hover Quick Action Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(product);
            }}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/95 text-[#232323] text-xs font-semibold hover:bg-white transition-colors shadow-xs"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Details</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Code */}
          <div className="flex items-center justify-between text-[0.72rem] uppercase tracking-wider text-[#7C756D] mb-1.5">
            <span>{product.collection}</span>
            {product.code && <span className="font-mono text-[0.65rem] text-[#A8A196]">{product.code}</span>}
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelect(product)}
            className="font-serif text-base sm:text-lg font-medium text-[#232323] group-hover:text-[#916215] transition-colors leading-snug line-clamp-1 cursor-pointer"
          >
            {product.product_name}
          </h3>

          {/* Description Snippet */}
          <p className="text-xs text-[#6B655D] mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="pt-4 mt-3 border-t border-[#F0EBE3] flex items-center justify-between gap-2">
          {/* Price or DM Notice */}
          <div>
            {product.price ? (
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-base sm:text-lg font-semibold text-[#232323]">
                  {product.price}
                </span>
                {product.sale_price && (
                  <span className="text-xs line-through text-[#A8A196]">
                    {product.sale_price}
                  </span>
                )}
              </div>
            ) : (
              <span className="text-xs text-[#7C756D] italic">
                Price upon enquiry
              </span>
            )}
          </div>

          {/* DM Action Button */}
          <a
            href={`${BRAND_INFO.instagramDmUrl}?text=${encodeURIComponent(`Hi Little Panda! I'd like to ask about the ${product.product_name} (${product.code || ''}).`)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.72rem] font-semibold tracking-wider uppercase bg-[#FAF8F5] text-[#232323] border border-[#D9D2C7] hover:border-[#232323] hover:bg-[#232323] hover:text-[#FAF8F5] transition-all"
            title="DM us to purchase or inquire"
          >
            <MessageCircle className="w-3 h-3 text-[#E5A93C]" />
            <span>DM to Order</span>
          </a>
        </div>
      </div>
    </div>
  );
};
