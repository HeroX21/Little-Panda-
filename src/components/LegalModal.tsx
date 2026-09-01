import React from 'react';
import { BRAND_INFO } from '../data/brandData';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative bg-[#FAF8F5] w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-[#E7E1D8] p-6 sm:p-8 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white border border-[#E7E1D8] text-[#232323] hover:bg-[#232323] hover:text-white flex items-center justify-center transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#E5A93C] mb-1">
              <Shield className="w-4 h-4" />
              <span>Legal Documentation</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#232323] font-medium mb-4">
              Privacy Policy
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#5A544C] leading-relaxed">
              <p>
                <strong>Welcome to Little Panda ({BRAND_INFO.displayName}).</strong>
              </p>
              <p>
                We value your privacy and trust. As our official digital storefront and catalog, this website is currently designed for style discovery, size consultation, and customer inquiries connecting to our official Instagram channel (@{BRAND_INFO.instagramUsername}).
              </p>

              <h4 className="font-serif text-base text-[#232323] font-medium pt-2">1. Information Collection</h4>
              <p>
                When you interact with our enquiry forms or message us via Instagram Direct Message, we only receive the details you choose to share (such as your name, preferred sizing, and product interests) strictly to assist with your order inquiries.
              </p>

              <h4 className="font-serif text-base text-[#232323] font-medium pt-2">2. Direct Communication</h4>
              <p>
                All communications and order arrangements take place directly between you and the verified Little Panda team. We do not sell or trade your contact information to any third parties.
              </p>

              <h4 className="font-serif text-base text-[#232323] font-medium pt-2">3. Updates & Policy Terms</h4>
              <p>
                As Little Panda expands its online shopping capabilities, this policy will be updated accordingly. For any questions regarding your data or to update your preferences, please reach out directly on Instagram DM.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#E5A93C] mb-1">
              <FileText className="w-4 h-4" />
              <span>Legal Documentation</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#232323] font-medium mb-4">
              Terms & Conditions
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#5A544C] leading-relaxed">
              <p>
                <strong>Little Panda Kidswear Terms of Service ({BRAND_INFO.year})</strong>
              </p>
              <p>
                These terms govern your use of the Little Panda website and our direct messaging order consultation process.
              </p>

              <h4 className="font-serif text-base text-[#232323] font-medium pt-2">1. Product Information & Pricing</h4>
              <p>
                We strive to present all children's clothing styles, colors, and sizing guidelines as accurately as possible. Due to screen calibration differences, natural studio lighting, and fabric batches, subtle variations may occur.
              </p>

              <h4 className="font-serif text-base text-[#232323] font-medium pt-2">2. Order Confirmation Process</h4>
              <p>
                Orders are currently confirmed on an individual basis via Instagram Direct Message (@{BRAND_INFO.instagramUsername}). Pricing, stock availability, and delivery timelines are verified with you directly before payment confirmation.
              </p>

              <h4 className="font-serif text-base text-[#232323] font-medium pt-2">3. Intellectual Property</h4>
              <p>
                All brand marks, logos, photography, styling concepts, and editorial content belong to Little Panda and may not be reproduced without prior written permission.
              </p>
            </div>
          </div>
        )}

        <div className="pt-6 mt-6 border-t border-[#E7E1D8] flex justify-end">
          <button
            onClick={onClose}
            className="py-2.5 px-5 rounded-xl bg-[#232323] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#383531]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
