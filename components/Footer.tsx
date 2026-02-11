import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 md:px-14 lg:px-[20%] bg-white border-t border-gray-50">
      <div className="w-full max-w-[1100px] mx-auto flex flex-col items-center">
        {/* Static Abstract Logo Section with "AS" */}
        <div className="flex items-center gap-5 mb-10 group cursor-pointer">
          <div className="relative w-14 h-14 flex items-center justify-center">
            {/* Main Squircle */}
            <div className="absolute w-12 h-12 bg-[#180A5C] rounded-2xl shadow-xl shadow-blue-900/10 flex items-center justify-center overflow-hidden">
               <span className="text-white font-black text-[18px] tracking-tighter select-none z-10">
                 AS
               </span>
               <div className="absolute top-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent -left-full group-hover:left-full transition-all duration-1000" />
            </div>
            {/* Accent Pink Element */}
            <div className="absolute top-1 right-1 w-4 h-4 bg-[#DE275B] rounded-full shadow-lg border-2 border-white" />
          </div>
          <span className="font-black text-[32px] tracking-tighter text-[#0D0339] lowercase group-hover:text-[#DE275B] transition-colors duration-300">
            avv<span className="text-[#DE275B]">scale</span>
          </span>
        </div>

        <div className="w-full h-px bg-gray-100 mb-10" />
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>© 2026 AVVSCALE. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#180A5C] hover:text-[#DE275B] transition-colors duration-300 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#DE275B]" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};