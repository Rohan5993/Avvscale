import React from 'react';

export const BottomCTA: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-[40px] bg-white border border-gray-100 py-20 px-8 md:px-16 flex flex-col items-center text-center shadow-[0_40px_120px_-20px_rgba(24,10,92,0.12)]">
          
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F7FF 55%, #E8EDFF 100%)' }} 
          />
          
          <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
            style={{ 
              backgroundImage: `radial-gradient(#e5e7eb 1px, transparent 1px)`, 
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
            }} 
          />

          <div className="relative z-10 max-w-4xl flex flex-col items-center w-full">
            <h2 className="text-[22px] md:text-[42px] lg:text-[46px] font-bold text-[#111827] tracking-tight leading-[1.1] mb-8 uppercase">
              Ready to build a <br className="hidden md:block" />
              <span className="text-[#180A5C] italic font-medium">GTM system</span> that compounds?
            </h2>

            <p className="text-[18px] md:text-[20px] text-gray-500 mb-12 font-medium max-w-xl leading-relaxed tracking-tight">
              LinkedIn is already the most powerful B2B distribution platform. <br className="hidden md:block" />
              The only question is whether you’re using it as content or as a GTM system.
            </p>

            <div className="flex justify-center w-full">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-[#180A5C]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <button className="relative bg-[#0D0339] text-white px-12 py-5 rounded-2xl font-bold text-[17px] transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-2xl shadow-blue-900/20 overflow-hidden group">
                  <span className="relative z-10">Book a Free Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </button>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#180A5C]/10 rounded-full blur-[120px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
};