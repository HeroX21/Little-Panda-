import React, { useState } from 'react';
import { PageId, Product } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { ProductDetailModal } from './components/ProductDetailModal';
import { EnquiryModal } from './components/EnquiryModal';
import { LegalModal } from './components/LegalModal';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { AboutPage } from './pages/AboutPage';
import { SizeGuidePage } from './pages/SizeGuidePage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState<string>('');
  const [enquirySize, setEnquirySize] = useState<string>('');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [shopInitialCategory, setShopInitialCategory] = useState<string>('all');

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleOpenEnquiry = (productName?: string, selectedSize?: string) => {
    setEnquiryProduct(productName || '');
    setEnquirySize(selectedSize || '');
    setEnquiryModalOpen(true);
  };

  const handleFilterCategory = (categoryKey: string) => {
    setShopInitialCategory(categoryKey);
    setCurrentPage('shop');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#232323] relative">
      
      {/* Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Main Content Pages */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onOpenEnquiry={handleOpenEnquiry}
            onFilterCategory={handleFilterCategory}
          />
        )}

        {currentPage === 'shop' && (
          <ShopPage
            onSelectProduct={handleSelectProduct}
            onNavigate={handleNavigate}
            initialCategory={shopInitialCategory}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'size-guide' && (
          <SizeGuidePage
            onNavigate={handleNavigate}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Sticky Mobile CTA Bar */}
      <StickyMobileBar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenEnquiry={(prod, sz) => handleOpenEnquiry(prod, sz)}
        onOpenSizeGuide={() => {
          setSelectedProduct(null);
          handleNavigate('size-guide');
        }}
      />

      {/* Quick Order Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => {
          setEnquiryModalOpen(false);
          setEnquiryProduct('');
          setEnquirySize('');
        }}
        initialProduct={enquiryProduct}
        initialSize={enquirySize}
      />

      {/* Legal Documentation Modal (Privacy & Terms) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}
