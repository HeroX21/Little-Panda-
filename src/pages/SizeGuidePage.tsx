import React, { useState } from 'react';
import { PageId } from '../types';
import { SIZE_CHART, BRAND_INFO } from '../data/brandData';
import { Ruler, Sparkles, MessageCircle, ArrowRight, ShieldCheck, HelpCircle, Sun, Wind, Shirt, Archive } from 'lucide-react';

interface SizeGuidePageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (productName?: string) => void;
}

export const SizeGuidePage: React.FC<SizeGuidePageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [unit, setUnit] = useState<'cm' | 'in'>('cm');
  const [selectedAge, setSelectedAge] = useState<string | null>(null);

  return (
    <div id="size-guide-page" className="bg-[#FAF8F5] min-h-screen py-12 sm:py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[0.7rem] uppercase tracking-[0.22em] font-semibold text-[#E5A93C] block mb-2">
            Garment Information & Guidelines
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#232323] font-medium tracking-tight mb-3">
            EVERYTHING YOU NEED TO KNOW
          </h1>
          <p className="text-base text-[#6B655D]">
            Sizing tables, fabric care instructions, and our simple Instagram ordering guide.
          </p>
        </div>

        {/* 1. SIZE GUIDE SECTION */}
        <section id="size-table-section" className="mb-16 sm:mb-20">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E7E1D8] shadow-xs">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E7E1D8] mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <Ruler className="w-5 h-5 text-[#E5A93C]" />
                  <h2 className="font-serif text-2xl text-[#232323] font-medium">
                    Standard Kidswear Sizing Chart
                  </h2>
                </div>
                <p className="text-xs text-[#7C756D] mt-1">
                  General standard measurements for our children's clothing cuts.
                </p>
              </div>

              {/* Unit Toggle */}
              <div className="inline-flex items-center p-1 rounded-xl bg-[#FAF8F5] border border-[#D9D2C7] self-start sm:self-auto">
                <button
                  onClick={() => setUnit('cm')}
                  className={`py-1.5 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                    unit === 'cm'
                      ? 'bg-[#232323] text-[#FAF8F5] shadow-xs'
                      : 'text-[#6B655D] hover:text-[#232323]'
                  }`}
                >
                  Centimeters (cm)
                </button>
                <button
                  onClick={() => setUnit('in')}
                  className={`py-1.5 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                    unit === 'in'
                      ? 'bg-[#232323] text-[#FAF8F5] shadow-xs'
                      : 'text-[#6B655D] hover:text-[#232323]'
                  }`}
                >
                  Inches (in)
                </button>
              </div>
            </div>

            {/* Sizing Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#E7E1D8] text-[0.72rem] uppercase tracking-wider text-[#7C756D]">
                    <th className="py-3.5 px-4 font-semibold">Age Group</th>
                    <th className="py-3.5 px-4 font-semibold">Height</th>
                    <th className="py-3.5 px-4 font-semibold">Chest</th>
                    <th className="py-3.5 px-4 font-semibold">Waist</th>
                    <th className="py-3.5 px-4 font-semibold">Standard Length</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0EBE3]">
                  {SIZE_CHART.map((row, idx) => {
                    const isSelected = selectedAge === row.age;
                    return (
                      <tr 
                        key={idx}
                        onClick={() => setSelectedAge(isSelected ? null : row.age)}
                        className={`transition-colors cursor-pointer ${
                          isSelected 
                            ? 'bg-[#F9F6F0] font-medium text-[#232323]' 
                            : 'hover:bg-[#FAF8F5] text-[#5A544C]'
                        }`}
                      >
                        <td className="py-3.5 px-4 font-medium text-[#232323] flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#E5A93C]' : 'bg-transparent'}`}></span>
                          <span>{row.age}</span>
                        </td>
                        <td className="py-3.5 px-4">{unit === 'cm' ? row.heightCm : row.heightIn}</td>
                        <td className="py-3.5 px-4">{unit === 'cm' ? row.chestCm : row.chestIn}</td>
                        <td className="py-3.5 px-4">{unit === 'cm' ? row.waistCm : row.waistIn}</td>
                        <td className="py-3.5 px-4">{unit === 'cm' ? row.lengthCm : row.lengthIn}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Fit Tip and DM Sizing Assistance */}
            <div className="mt-8 pt-6 border-t border-[#E7E1D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#FAF8F5] p-5 rounded-2xl">
              <div>
                <span className="font-serif text-base font-medium text-[#232323] block mb-0.5">
                  Not sure which size to choose?
                </span>
                <p className="text-xs text-[#6B655D]">
                  Kids grow fast! If your child is between sizes or has specific height requirements, we are happy to guide you.
                </p>
              </div>

              <a
                href={BRAND_INFO.instagramDmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-[#232323] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#383531] transition-all whitespace-nowrap shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#E5A93C]" />
                <span>Contact Us for Sizing</span>
              </a>
            </div>

          </div>
        </section>

        {/* 2. CARE GUIDE SECTION */}
        <section id="care-guide-section" className="mb-16 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
              Garment Longevity
            </span>
            <h2 className="font-serif text-3xl text-[#232323] font-medium mt-1">
              CLOTHING CARE GUIDE
            </h2>
            <p className="text-sm text-[#6B655D] mt-2">
              Gentle care keeps soft fabrics fresh and beautiful wash after wash.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-white border border-[#E7E1D8] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E7E1D8] flex items-center justify-center text-[#232323] mb-4">
                <Shirt className="w-5 h-5 text-[#E5A93C]" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#232323] mb-2 uppercase tracking-wide">
                Wash Care
              </h3>
              <p className="text-xs sm:text-sm text-[#6B655D] leading-relaxed">
                Use gentle cold or lukewarm hand wash with mild detergents. Wash similar colors together.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E7E1D8] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E7E1D8] flex items-center justify-center text-[#232323] mb-4">
                <Wind className="w-5 h-5 text-[#E5A93C]" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#232323] mb-2 uppercase tracking-wide">
                Drying
              </h3>
              <p className="text-xs sm:text-sm text-[#6B655D] leading-relaxed">
                Line dry inside out in a shaded, airy area to protect natural colors and delicate embroidery.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E7E1D8] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E7E1D8] flex items-center justify-center text-[#232323] mb-4">
                <Sun className="w-5 h-5 text-[#E5A93C]" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#232323] mb-2 uppercase tracking-wide">
                Ironing
              </h3>
              <p className="text-xs sm:text-sm text-[#6B655D] leading-relaxed">
                Low to medium steam iron on the reverse side. Avoid direct ironing on trims, gota, or buttons.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E7E1D8] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E7E1D8] flex items-center justify-center text-[#232323] mb-4">
                <Archive className="w-5 h-5 text-[#E5A93C]" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#232323] mb-2 uppercase tracking-wide">
                Storage
              </h3>
              <p className="text-xs sm:text-sm text-[#6B655D] leading-relaxed">
                Store folded or gently hung in a dry, ventilated wardrobe away from direct harsh sunlight.
              </p>
            </div>

          </div>

          <div className="text-center mt-6 text-xs text-[#7C756D] italic">
            Please check the care label on your garment for product-specific instructions.
          </div>
        </section>

        {/* 3. HOW TO ORDER (4 Steps) */}
        <section id="how-to-order-section" className="bg-[#F3EFEA] rounded-3xl p-8 sm:p-12 border border-[#E7E1D8]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
              Simple Instagram Flow
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#232323] font-medium mt-1">
              HOW TO ORDER
            </h2>
            <p className="text-sm text-[#6B655D] mt-2">
              Our direct boutique ordering process while our e-commerce cart is being developed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            
            <div className="p-6 rounded-2xl bg-white border border-[#E7E1D8] shadow-xs flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-light text-[#E5A93C] block mb-2">01</span>
                <h3 className="font-serif text-xl font-medium text-[#232323] mb-2">
                  BROWSE
                </h3>
                <p className="text-xs sm:text-sm text-[#6B655D] leading-relaxed">
                  Explore the available Little Panda styles on our website or Instagram page.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E7E1D8] shadow-xs flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-light text-[#E5A93C] block mb-2">02</span>
                <h3 className="font-serif text-xl font-medium text-[#232323] mb-2">
                  CHOOSE
                </h3>
                <p className="text-xs sm:text-sm text-[#6B655D] leading-relaxed">
                  Select your preferred product cut, color, and age size.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E7E1D8] shadow-xs flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-light text-[#E5A93C] block mb-2">03</span>
                <h3 className="font-serif text-xl font-medium text-[#232323] mb-2">
                  MESSAGE
                </h3>
                <p className="text-xs sm:text-sm text-[#6B655D] leading-relaxed">
                  Contact Little Panda through Instagram DM (@{BRAND_INFO.instagramUsername}).
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E7E1D8] shadow-xs flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-light text-[#E5A93C] block mb-2">04</span>
                <h3 className="font-serif text-xl font-medium text-[#232323] mb-2">
                  CONFIRM
                </h3>
                <p className="text-xs sm:text-sm text-[#6B655D] leading-relaxed">
                  Confirm availability, price, delivery and order details directly with the Little Panda team.
                </p>
              </div>
            </div>

          </div>

          <div className="text-center">
            <a
              href={BRAND_INFO.instagramDmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3.5 px-8 rounded-xl bg-[#232323] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold hover:bg-[#383531] transition-all shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#E5A93C]" />
              <span>DM Little Panda to Order</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};
