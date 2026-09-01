import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { BRAND_INFO } from '../data/brandData';
import { Logo } from './Logo';
import { Menu, X, Instagram, ArrowRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (productName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop Collections' },
    { id: 'about', label: 'Our Story' },
    { id: 'size-guide', label: 'Size Guide & Care' },
    { id: 'contact', label: 'Contact & FAQ' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Announcement Bar */}
      <div 
        id="announcement-banner"
        className="bg-[#232323] text-[#FAF8F5] text-[0.72rem] sm:text-xs py-2 px-4 text-center tracking-wider font-medium flex items-center justify-center gap-2"
      >
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E5A93C] animate-pulse"></span>
        <span>Curated Kids Fashion & Ethnic Wear • Order directly via Instagram DM</span>
        <a 
          href={BRAND_INFO.instagramUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1 text-[#E5A93C] hover:underline ml-2"
        >
          {BRAND_INFO.instagramHandle}
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      {/* Main Sticky Header */}
      <header 
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs py-3.5 border-b border-[#E7E1D8]/60' 
            : 'bg-[#FAF8F5] py-4 sm:py-5 border-b border-[#E7E1D8]/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Logo onClick={() => handleNavClick('home')} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-[0.82rem] font-medium tracking-[0.12em] uppercase transition-colors relative py-1 ${
                    isActive 
                      ? 'text-[#232323] font-semibold' 
                      : 'text-[#6B655D] hover:text-[#232323]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div 
                      layoutId="headerActiveIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E5A93C] rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-instagram-link"
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#232323] hover:text-[#E5A93C] transition-colors rounded-full border border-[#E7E1D8] hover:border-[#E5A93C]"
              title="Follow on Instagram"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span className="hidden md:inline">@little_panda_clothing_</span>
            </a>

            <a
              id="header-dm-order-btn"
              href={BRAND_INFO.instagramDmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.14em] font-medium bg-[#232323] text-[#FAF8F5] hover:bg-[#383531] rounded-full transition-all duration-200 shadow-xs hover:shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>DM to Order</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#232323] hover:text-[#E5A93C] rounded-md transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden fixed top-[108px] left-0 right-0 z-30 bg-[#FAF8F5] border-b border-[#E7E1D8] shadow-lg overflow-hidden"
          >
            <div className="max-w-md mx-auto px-6 py-6 flex flex-col gap-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-left text-base font-serif tracking-wide py-2.5 px-3 rounded-lg flex items-center justify-between transition-colors ${
                        isActive 
                          ? 'bg-[#E7E1D8]/40 text-[#232323] font-semibold' 
                          : 'text-[#5A544C] hover:bg-[#F3EFEA]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive ? (
                        <span className="w-2 h-2 rounded-full bg-[#E5A93C]"></span>
                      ) : (
                        <ArrowRight className="w-4 h-4 text-[#A8A196]" />
                      )}
                    </button>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-[#E7E1D8] flex flex-col gap-3">
                <a
                  href={BRAND_INFO.instagramDmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#232323] text-[#FAF8F5] text-sm font-medium tracking-wide uppercase shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#E5A93C]" />
                  <span>Order via Instagram DM</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#D9D2C7] text-[#232323] text-sm font-medium hover:bg-[#F3EFEA]"
                >
                  <span>Quick Order Enquiry</span>
                </button>

                <div className="flex items-center justify-center gap-2 pt-2 text-xs text-[#7C756D]">
                  <Instagram className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>Official Instagram: @little_panda_clothing_</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
