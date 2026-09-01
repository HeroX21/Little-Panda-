import React, { useState } from 'react';
import { PageId } from '../types';
import { BRAND_INFO, FAQS } from '../data/brandData';
import { 
  Instagram, 
  MessageCircle, 
  Send, 
  ChevronDown, 
  CheckCircle2, 
  HelpCircle, 
  ExternalLink,
  Sparkles 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');
  const [fullName, setFullName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [productName, setProductName] = useState('');
  const [size, setSize] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !contactInfo) return;
    setFormSubmitted(true);
  };

  const getInstagramFormattedMessage = () => {
    return `Hi Little Panda! 👋
• Name: ${fullName}
• Contact: ${contactInfo}
• Product: ${productName || 'General Enquiry'}
• Size: ${size || 'Not Specified'}
• Note: ${message || 'I would like to enquire about Little Panda styles.'}`;
  };

  const dmEnquiryUrl = `${BRAND_INFO.instagramDmUrl}?text=${encodeURIComponent(getInstagramFormattedMessage())}`;

  return (
    <div id="contact-page" className="bg-[#FAF8F5] min-h-screen py-12 sm:py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[0.7rem] uppercase tracking-[0.22em] font-semibold text-[#E5A93C] block mb-2">
            Get In Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#232323] font-medium tracking-tight mb-3">
            LET'S TALK
          </h1>
          <p className="text-base text-[#6B655D]">
            Have a question about a Little Panda style? We'd love to hear from you.
          </p>
        </div>

        {/* Main Grid: Contact Options & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-start">
          
          {/* Left Column: Official Contact Method (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Instagram Direct Channel */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E1D8] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E7E1D8] flex items-center justify-center text-[#232323] mb-5">
                <Instagram className="w-6 h-6 text-[#E5A93C]" />
              </div>

              <span className="text-[0.7rem] uppercase tracking-widest font-semibold text-[#E5A93C] block mb-1">
                Official Communication Channel
              </span>
              <h2 className="font-serif text-2xl text-[#232323] font-medium mb-3">
                Instagram Direct Message
              </h2>
              <p className="text-sm text-[#6B655D] leading-relaxed mb-6">
                Our primary communication channel is Instagram DM. Whether you want to place an order, ask about sizes, or check stock availability, message us directly for fast assistance.
              </p>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E7E1D8] flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs text-[#7C756D] block">Instagram Profile</span>
                  <span className="font-semibold text-sm text-[#232323]">@{BRAND_INFO.instagramUsername}</span>
                </div>
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white border border-[#D9D2C7] text-[#232323] hover:text-[#E5A93C]"
                  aria-label="Open Instagram Profile in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <a
                id="contact-dm-btn"
                href={BRAND_INFO.instagramDmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#232323] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold hover:bg-[#383531] transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#E5A93C]" />
                <span>DM Us on Instagram</span>
              </a>
            </div>

            {/* Parent Assistance Note */}
            <div className="bg-[#F3EFEA] rounded-3xl p-6 border border-[#E7E1D8]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#232323] mb-2">
                <Sparkles className="w-4 h-4 text-[#E5A93C]" />
                <span>Personalized Service</span>
              </div>
              <p className="text-xs text-[#6B655D] leading-relaxed">
                As a boutique kidswear brand, we love helping parents pick the exact right fit and style. Feel free to share your child's age, height, or event theme when messaging!
              </p>
            </div>

          </div>

          {/* Right Column: Order Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E7E1D8] shadow-xs">
              
              <div className="mb-6 pb-6 border-b border-[#E7E1D8]">
                <h2 className="font-serif text-2xl text-[#232323] font-medium">
                  Send an Order Enquiry
                </h2>
                <p className="text-xs text-[#7C756D] mt-1">
                  Submit your styling query below to format your message for Little Panda.
                </p>
              </div>

              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#232323] font-medium mb-2">
                    Enquiry Prepared!
                  </h3>
                  <p className="text-sm text-[#6B655D] max-w-md mx-auto mb-6">
                    Your details have been arranged. Send it directly to our Instagram DM to connect with the Little Panda team.
                  </p>

                  <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#E7E1D8] text-left text-xs font-mono text-[#5A544C] mb-6 whitespace-pre-line">
                    {getInstagramFormattedMessage()}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={dmEnquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#232323] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#383531]"
                    >
                      <MessageCircle className="w-4 h-4 text-[#E5A93C]" />
                      <span>Send to Little Panda DM</span>
                    </a>

                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFullName('');
                        setContactInfo('');
                        setProductName('');
                        setSize('');
                        setMessage('');
                      }}
                      className="py-3 px-5 rounded-xl border border-[#D9D2C7] bg-white text-[#232323] text-xs font-medium hover:bg-[#F3EFEA]"
                    >
                      New Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A453F] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sen"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#D9D2C7] bg-[#FAF8F5] text-sm text-[#232323] focus:outline-none focus:bg-white focus:border-[#232323]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A453F] mb-1.5">
                      Email / Phone / Instagram Handle *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. @ananya_insta or 9876543210"
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#D9D2C7] bg-[#FAF8F5] text-sm text-[#232323] focus:outline-none focus:bg-white focus:border-[#232323]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A453F] mb-1.5">
                        Product Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Aurelia Kurti Set"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#D9D2C7] bg-[#FAF8F5] text-sm text-[#232323] focus:outline-none focus:bg-white focus:border-[#232323]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A453F] mb-1.5">
                        Preferred Size / Child Age
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 4-5 Years"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#D9D2C7] bg-[#FAF8F5] text-sm text-[#232323] focus:outline-none focus:bg-white focus:border-[#232323]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A453F] mb-1.5">
                      Message / Special Request
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us what you are looking for, celebration dates, or questions on delivery..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#D9D2C7] bg-[#FAF8F5] text-sm text-[#232323] focus:outline-none focus:bg-white focus:border-[#232323]"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#232323] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold hover:bg-[#383531] transition-all shadow-xs"
                    >
                      <Send className="w-4 h-4 text-[#E5A93C]" />
                      <span>Send Enquiry</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* 2. FREQUENTLY ASKED QUESTIONS (FAQ Accordions) */}
        <section id="faq-section" className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
              Clear Answers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#232323] font-medium mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#6B655D] mt-2">
              Everything you need to know about our products, sizing, and direct Instagram ordering.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#E7E1D8] shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full text-left py-4 sm:py-5 px-6 flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-medium text-[#232323] hover:text-[#916215] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#A8A196] flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'transform rotate-180 text-[#E5A93C]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5A544C] leading-relaxed border-t border-[#F0EBE3]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Still have questions */}
          <div className="mt-10 p-6 rounded-2xl bg-[#F3EFEA] border border-[#E7E1D8] text-center">
            <span className="font-serif text-lg text-[#232323] font-medium block mb-1">
              Have another question not answered here?
            </span>
            <p className="text-xs text-[#6B655D] mb-4">
              Please contact Little Panda directly on Instagram DM for the latest information.
            </p>
            <a
              href={BRAND_INFO.instagramDmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-[#232323] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#383531]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>Ask Little Panda on Instagram</span>
            </a>
          </div>

        </section>

      </div>
    </div>
  );
};
