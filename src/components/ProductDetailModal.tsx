import React, { useState } from 'react';
import { Product } from '../types';
import { BRAND_INFO } from '../data/brandData';
import { X, MessageCircle, Share2, Check, Sparkles, Ruler, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenEnquiry: (productName: string, selectedSize?: string) => void;
  onOpenSizeGuide: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenEnquiry,
  onOpenSizeGuide,
}) => {
  if (!product) return null;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || '');
  const [copied, setCopied] = useState(false);

  const activeImage = product.images[selectedImageIndex] || product.images[0];

  const handleShare = async () => {
    const textToCopy = `Check out the ${product.product_name} on Little Panda! DM @${BRAND_INFO.instagramUsername} to order.`;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const dmMessage = `Hi Little Panda! 👋 I am interested in purchasing:
• Product: ${product.product_name} (${product.code || 'LP'})
• Selected Size: ${selectedSize || 'Not specified'}
Could you please confirm availability and ordering details?`;

  const dmUrl = `${BRAND_INFO.instagramDmUrl}?text=${encodeURIComponent(dmMessage)}`;

  return (
    <div 
      id="product-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div 
        className="relative bg-[#FAF8F5] w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-[#E7E1D8] my-8 flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-product-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs border border-[#E7E1D8] text-[#232323] hover:bg-[#232323] hover:text-white flex items-center justify-center transition-all shadow-xs"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Images Gallery */}
        <div className="w-full md:w-1/2 bg-[#F3EFEA] p-4 sm:p-6 flex flex-col justify-between overflow-y-auto">
          {/* Main Large Image */}
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-white shadow-xs mb-3">
            <img
              src={activeImage}
              alt={product.product_name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
            {product.new_arrival && (
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#FAF8F5]/90 text-[0.7rem] font-semibold tracking-wider text-[#232323] uppercase border border-[#E7E1D8]">
                New Collection
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-16 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                    selectedImageIndex === idx
                      ? 'border-[#E5A93C] shadow-xs'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.product_name} preview ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Product Details & Purchase Journey */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Header info */}
            <div className="flex items-center justify-between gap-2 text-xs uppercase tracking-widest text-[#7C756D] mb-2">
              <span className="font-semibold text-[#E5A93C]">{product.collection}</span>
              {product.code && <span className="font-mono text-[#A8A196]">{product.code}</span>}
            </div>

            <h2 id="modal-product-title" className="font-serif text-2xl sm:text-3xl text-[#232323] font-medium leading-tight mb-2">
              {product.product_name}
            </h2>

            {/* Price & Stock */}
            <div className="flex items-center gap-3 mb-5">
              {product.price ? (
                <span className="font-serif text-xl sm:text-2xl font-semibold text-[#232323]">
                  {product.price}
                </span>
              ) : (
                <span className="text-sm text-[#7C756D] italic">
                  Price upon enquiry via Instagram
                </span>
              )}
              <span className="px-2.5 py-0.5 rounded-full text-[0.7rem] font-medium bg-[#E7E1D8]/60 text-[#4E4841]">
                {product.availability}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-[#5A544C] leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#232323]">
                  Select Age / Size
                </span>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenSizeGuide();
                  }}
                  className="text-xs text-[#E5A93C] hover:text-[#C58B24] font-medium inline-flex items-center gap-1 transition-colors"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Size Chart</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2 px-3.5 rounded-xl text-xs font-medium transition-all ${
                      selectedSize === sz
                        ? 'bg-[#232323] text-[#FAF8F5] shadow-xs'
                        : 'bg-white text-[#4A453F] border border-[#D9D2C7] hover:border-[#232323]'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Fabric Details */}
            {product.fabric && (
              <div className="mb-4 p-3.5 rounded-xl bg-white border border-[#E7E1D8] text-xs">
                <span className="font-semibold text-[#232323] block mb-1">Fabric & Material:</span>
                <span className="text-[#6B655D]">{product.fabric}</span>
              </div>
            )}

            {/* Care Guidance */}
            {product.care_instructions && product.care_instructions.length > 0 && (
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#232323] block mb-1.5">
                  Garment Care:
                </span>
                <ul className="text-xs text-[#6B655D] space-y-1 list-disc list-inside">
                  {product.care_instructions.map((ins, i) => (
                    <li key={i}>{ins}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-[#E7E1D8] flex flex-col gap-2.5">
            {/* Primary Instagram DM CTA */}
            <a
              id="modal-order-instagram-btn"
              href={dmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#232323] text-[#FAF8F5] text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#3B3834] transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#E5A93C]" />
              <span>Order via Instagram DM ({selectedSize || 'Choose Size'})</span>
            </a>

            {/* Secondary: Quick Enquiry Modal Form */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenEnquiry(product.product_name, selectedSize);
                }}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-[#D9D2C7] bg-white text-[#232323] text-xs font-medium hover:bg-[#F3EFEA] transition-colors"
              >
                <span>Ask About Product</span>
              </button>

              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-[#D9D2C7] bg-white text-[#6B655D] text-xs font-medium hover:bg-[#F3EFEA] transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Details' : 'Share Style'}</span>
              </button>
            </div>

            <p className="text-[0.7rem] text-center text-[#7C756D] mt-1">
              DM us on Instagram @{BRAND_INFO.instagramUsername} to confirm stock and place order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
