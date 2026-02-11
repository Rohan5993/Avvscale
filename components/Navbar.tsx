import React, { useState, useEffect } from 'react';
import { GlowingButton } from './GlowingButton';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[100] flex justify-center pointer-events-none pt-4 transition-all duration-500">
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(12px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(12px) rotate(-360deg); }
        }
        @keyframes squircle-breath {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.05) rotate(2deg); }
        }
        @keyframes shine-sweep {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        .logo-orbit { animation: orbit 4s linear infinite; }
        .logo-squircle { animation: squircle-breath 3s ease-in-out infinite; }
        .group:hover .logo-orbit { animation-duration: 1.5s; }
        .text-glow { text-shadow: 0 0 10px rgba(255,255,255,0.3); }
      `}</style>
      
      <nav 
        className={`
          flex items-center justify-between bg-white/70 backdrop-blur-xl border border-gray-100/50 
          transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-auto
          ${isScrolled 
            ? 'w-[95%] md:w-[600px] lg:w-[700px] rounded-[24px] px-4 md:px-6 py-2.5 shadow-[0_20px_40px_rgba(0,0,0,0.1)]' 
            : 'w-full rounded-none px-4 lg:px-[20%] py-5 border-t-0 border-x-0'
          }
        `}
      >
        {/* Enhanced Logo Section with "AS" */}
        <div className="flex items-center gap-2.5 md:gap-4 group cursor-pointer shrink-0">
          <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
            {/* Background Squircle */}
            <div className="logo-squircle absolute w-7 h-7 md:w-9 md:h-9 bg-[#180A5C] rounded-lg md:rounded-xl shadow-lg shadow-indigo-900/20 overflow-hidden flex items-center justify-center">
               {/* Internal shine */}
               <div className="absolute top-0 w-full h-full bg-gradient-to-tr from-transparent via-white/20 to-transparent -left-full group-hover:left-full transition-all duration-1000" style={{ animation: 'shine-sweep 2s infinite' }} />
               
               {/* Enhanced 'AS' Text Logo */}
               <span className="text-white font-black text-[12px] md:text-[14px] tracking-tighter text-glow select-none z-10">
                 AS
               </span>
            </div>
            
            {/* Orbiting Pink Circle */}
            <div className="logo-orbit absolute w-2 h-2 md:w-2.5 md:h-2.5 bg-[#DE275B] rounded-full shadow-[0_0_8px_#DE275B]" />
          </div>

          <span className={`font-black tracking-tighter text-[#0D0339] lowercase transition-all duration-300 ${isScrolled ? 'text-[14px]' : 'text-[18px] md:text-[22px]'}`}>
            avv<span className="text-[#DE275B]">scale</span>
          </span>
        </div>
        
        {/* Simplified Navigation */}
        <div className="flex items-center gap-3 md:gap-8">
          <a
            href="#solutions"
            className="hidden md:block text-[11px] font-bold text-[#1a1a1a] hover:text-[#DE275B] transition-colors uppercase tracking-[0.15em] whitespace-nowrap"
          >
            Our System
          </a>
          
          <div className="relative">
            <GlowingButton 
              text={
                <>
                  <span className="hidden sm:inline">Get a Free </span>
                  GTM Audit
                </>
              } 
              compact={isScrolled} 
            />
          </div>
        </div>
      </nav>
    </div>
  );
};