import React, { useState, useEffect } from 'react';
import { BRAND_INFO } from '../data/brandData';
import { X, MessageCircle, Send, CheckCircle2, Copy } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  initialSize?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialProduct = '',
  initialSize = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [productName, setProductName] = useState(initialProduct);
  const [size, setSize] = useState(initialSize);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialProduct) setProductName(initialProduct);
    if (initialSize) setSize(initialSize);
  }, [initialProduct, initialSize]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !contact) return;
    setSubmitted(true);
  };

  const getInstagramMessage = () => {
    return `Hi Little Panda! 👋
Name: ${fullName || 'Parent'}
Contact: ${contact || 'N/A'}
Product of Interest: ${productName || 'Kidswear Collection'}
Preferred Size: ${size || 'Not sure'}
Note: ${message || 'Please let me know about availability and price.'}`;
  };

  const handleCopyToClipboard = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(getInstagramMessage());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const instagramDmDirect = `${BRAND_INFO.instagramDmUrl}?text=${encodeURIComponent(getInstagramMessage())}`;

  return (
    <div 
      id="order-enquiry-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative bg-[#FAF8F5] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-[#E7E1D8] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white border border-[#E7E1D8] text-[#232323] hover:bg-[#232323] hover:text-white flex items-center justify-center transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-[#232323] font-medium mb-2">
              Enquiry Form Ready!
            </h3>
            <p className="text-sm text-[#6B655D] mb-6 max-w-sm mx-auto">
              Your inquiry details have been formatted. To ensure an immediate response from Little Panda, you can send it directly to our Instagram DM now.
            </p>

            <div className="p-4 bg-white rounded-2xl border border-[#E7E1D8] text-left text-xs font-mono text-[#5A544C] mb-6 whitespace-pre-line">
              {getInstagramMessage()}
            </div>

            <div className="flex flex-col gap-2.5">
              <a
                href={instagramDmDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#232323] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#383531]"
              >
                <MessageCircle className="w-4 h-4 text-[#E5A93C]" />
                <span>Send to Little Panda on Instagram</span>
              </a>

              <button
                type="button"
                onClick={handleCopyToClipboard}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-[#D9D2C7] bg-white text-[#232323] text-xs font-medium hover:bg-[#F3EFEA]"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Inquiry Message'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-[#7C756D] hover:underline mt-2"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-[0.68rem] uppercase tracking-widest font-semibold text-[#E5A93C]">
                Direct Customer Assistance
              </span>
              <h3 className="font-serif text-2xl text-[#232323] font-medium mt-1">
                Order & Sizing Enquiry
              </h3>
              <p className="text-xs text-[#6B655D] mt-1">
                Fill in what you need and connect directly with Little Panda via Instagram DM.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#4A453F] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Priya Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9D2C7] bg-white text-sm focus:outline-none focus:border-[#232323] text-[#232323]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#4A453F] mb-1">
                  Email / Phone / Instagram Handle *
                </label>
                <input
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="e.g. @priya_insta or 9876543210"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9D2C7] bg-white text-sm focus:outline-none focus:border-[#232323] text-[#232323]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#4A453F] mb-1">
                    Product Style
                  </label>
                  <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="e.g. Aurelia Kurti Set"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9D2C7] bg-white text-sm focus:outline-none focus:border-[#232323] text-[#232323]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#4A453F] mb-1">
                    Size / Age
                  </label>
                  <input
                    type="text"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    placeholder="e.g. 4-5 Y or not sure"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9D2C7] bg-white text-sm focus:outline-none focus:border-[#232323] text-[#232323]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#4A453F] mb-1">
                  Message / Special Request
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about delivery timeline, custom fit, or styling advice..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9D2C7] bg-white text-sm focus:outline-none focus:border-[#232323] text-[#232323]"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#232323] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold hover:bg-[#383531] transition-all shadow-xs"
                >
                  <Send className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>Prepare Enquiry</span>
                </button>

                <a
                  href={BRAND_INFO.instagramDmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#D9D2C7] bg-white text-[#232323] text-xs font-medium hover:bg-[#F3EFEA]"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>Open Instagram DM Directly</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
