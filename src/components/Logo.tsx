import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'compact' | 'light';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '', onClick }) => {
  return (
    <div 
      id="brand-logo"
      onClick={onClick} 
      className={`inline-flex items-center gap-3 select-none cursor-pointer group ${className}`}
      aria-label="Little Panda - Kids Clothing"
    >
      {/* Panda Emblem with warm golden and soft charcoal tones */}
      <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Panda Head Outer */}
          <circle cx="50" cy="50" r="44" fill="#FAF8F5" stroke="#232323" strokeWidth="3.5" />
          
          {/* Ears */}
          <circle cx="26" cy="24" r="14" fill="#232323" />
          <circle cx="26" cy="24" r="6" fill="#403C39" />
          <circle cx="74" cy="24" r="14" fill="#232323" />
          <circle cx="74" cy="24" r="6" fill="#403C39" />

          {/* Eye Patches */}
          <ellipse cx="36" cy="46" rx="9" ry="12" fill="#232323" transform="rotate(-12 36 46)" />
          <ellipse cx="64" cy="46" rx="9" ry="12" fill="#232323" transform="rotate(12 64 46)" />

          {/* Eye Pupils & Highlights */}
          <circle cx="37" cy="45" r="3.5" fill="#FAF8F5" />
          <circle cx="38" cy="44" r="1.5" fill="#232323" />
          <circle cx="63" cy="45" r="3.5" fill="#FAF8F5" />
          <circle cx="62" cy="44" r="1.5" fill="#232323" />

          {/* Warm Golden Muzzle */}
          <ellipse cx="50" cy="64" rx="16" ry="12" fill="#E5A93C" />
          
          {/* Panda Nose */}
          <path d="M45 59 C45 57, 55 57, 55 59 C55 62, 51 64, 50 64 C49 64, 45 62, 45 59 Z" fill="#232323" />

          {/* Gentle Smile */}
          <path d="M44 68 Q50 72 56 68" stroke="#232323" strokeWidth="2.2" strokeLinecap="round" fill="none" />

          {/* Subtle Cheeks */}
          <circle cx="26" cy="58" r="4" fill="#F4CFBA" opacity="0.75" />
          <circle cx="74" cy="58" r="4" fill="#F4CFBA" opacity="0.75" />
        </svg>
      </div>

      {/* Brand Typography */}
      {variant !== 'icon' && (
        <div className="flex flex-col text-left">
          <span className="font-serif text-[1.15rem] sm:text-[1.3rem] tracking-[0.18em] font-semibold text-[#232323] leading-none uppercase">
            Little Panda
          </span>
          <span className="text-[0.62rem] sm:text-[0.68rem] tracking-[0.25em] font-medium text-[#7C756D] uppercase mt-1">
            Kids Clothing
          </span>
        </div>
      )}
    </div>
  );
};
