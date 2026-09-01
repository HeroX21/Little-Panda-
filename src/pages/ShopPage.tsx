import React, { useState, useMemo } from 'react';
import { Product, PageId } from '../types';
import { PRODUCTS, BRAND_INFO } from '../data/brandData';
import { ProductCard } from '../components/ProductCard';
import { Search, SlidersHorizontal, MessageCircle, Sparkles, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ShopPageProps {
  onSelectProduct: (product: Product) => void;
  onNavigate: (page: PageId) => void;
  initialCategory?: string;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  onSelectProduct,
  onNavigate,
  initialCategory = 'all',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'name-asc' | 'newest'>('featured');

  const categories = [
    { id: 'all', label: 'All Styles' },
    { id: 'dress', label: 'Dresses' },
    { id: 'coord', label: 'Co-ords' },
    { id: 'girlswear', label: 'Girlswear' },
    { id: 'ethnic', label: 'Ethnic Wear' },
    { id: 'new_arrival', label: 'New Arrivals' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      let matchesCategory = true;
      if (selectedCategory === 'new_arrival') {
        matchesCategory = Boolean(product.new_arrival);
      } else if (selectedCategory !== 'all') {
        matchesCategory = product.category === selectedCategory;
      }

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = query === '' || 
        product.product_name.toLowerCase().includes(query) ||
        product.collection.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        (product.code && product.code.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'newest') return (b.new_arrival ? 1 : 0) - (a.new_arrival ? 1 : 0);
      if (sortBy === 'name-asc') return a.product_name.localeCompare(b.product_name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div id="shop-page" className="py-10 sm:py-16 bg-[#FAF8F5] min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[0.7rem] uppercase tracking-[0.22em] font-semibold text-[#E5A93C] block mb-2">
            Catalog & Curations
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#232323] font-medium tracking-tight mb-3">
            SHOP LITTLE PANDA
          </h1>
          <p className="text-base text-[#6B655D]">
            Explore our collection of carefully styled kidswear.
          </p>
        </div>

        {/* Filter & Controls Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E7E1D8] shadow-xs mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`filter-tab-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`py-2 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#232323] text-[#FAF8F5] shadow-xs'
                      : 'bg-[#FAF8F5] text-[#5A544C] hover:bg-[#F3EFEA]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search and Sort */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 md:w-56">
              <Search className="w-4 h-4 text-[#A8A196] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search styles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl bg-[#FAF8F5] border border-[#D9D2C7] focus:outline-none focus:border-[#232323] text-[#232323]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#A8A196] hover:text-[#232323]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Select */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="py-2 px-3 text-xs rounded-xl bg-[#FAF8F5] border border-[#D9D2C7] text-[#4A453F] focus:outline-none focus:border-[#232323] cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="newest">New Arrivals</option>
                <option value="name-asc">Alphabetical</option>
              </select>
            </div>
          </div>

        </div>

        {/* Results Counter & Order Guidance Banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#7C756D] mb-6 gap-2">
          <span>Showing {filteredProducts.length} curated styles</span>
          <span className="flex items-center gap-1.5 text-[#5F5850]">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />
            Found a style you love? Click <strong>DM to Order</strong> to check size availability with Little Panda.
          </span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.product_id}
                product={product}
                onSelect={onSelectProduct}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E7E1D8] p-8 max-w-md mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#E7E1D8] flex items-center justify-center text-[#A8A196] mx-auto mb-4">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-[#232323] font-medium mb-2">
              No styles found
            </h3>
            <p className="text-sm text-[#6B655D] mb-6">
              Our collection is growing. Check back soon for new Little Panda styles or explore another collection.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="py-2.5 px-6 rounded-xl bg-[#232323] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#383531]"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Instagram Consultation Card */}
        <div className="mt-16 p-8 rounded-3xl bg-[#F3EFEA] border border-[#E7E1D8] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-serif text-2xl text-[#232323] font-medium mb-1">
              Looking for a custom size or specific style?
            </h3>
            <p className="text-sm text-[#6B655D]">
              We are happy to check our upcoming drop schedules or help with customized sizing requests.
            </p>
          </div>

          <a
            href={BRAND_INFO.instagramDmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#232323] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold hover:bg-[#383531] transition-all whitespace-nowrap shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#E5A93C]" />
            <span>DM Little Panda on Instagram</span>
          </a>
        </div>

      </div>
    </div>
  );
};
