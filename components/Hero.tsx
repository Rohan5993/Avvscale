import React from 'react';
import { GlowingButton } from './GlowingButton';

const PartnerLogos = () => (
  <div className="w-full border-t border-b border-gray-100 mt-10 md:mt-20 relative bg-white overflow-hidden">
    <div className="w-full py-8 md:py-12 px-6 lg:px-[20%]">
      <p className="text-[10px] font-bold text-gray-500 mb-8 md:mb-10 tracking-[0.2em] uppercase text-center opacity-90">Consulting & Coaching • Agencies & SaaS • Investors & VCs</p>
      
      {/* Mobile Carousel / Desktop Flex */}
      <div className="relative w-full">
        <div className="flex md:hidden overflow-hidden">
          <div className="flex animate-infinite-scroll whitespace-nowrap items-center gap-12 py-2">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <img src="input_file_0.webp" alt="FX" className="h-8 w-auto grayscale opacity-60" />
                <img src="input_file_1.webp" alt="PLF" className="h-8 w-auto grayscale opacity-60" />
                <img src="input_file_2.webp" alt="kcas Branding" className="h-8 w-auto grayscale opacity-60" />
                <img src="input_file_3.webp" alt="SIOX GLOBAL" className="h-8 w-auto grayscale opacity-60" />
                <img src="input_file_4.webp" alt="Scientific Vadanya" className="h-8 w-auto grayscale opacity-60" />
                <img src="input_file_5.webp" alt="Partner Logo" className="h-8 w-auto grayscale opacity-60" />
              </React.Fragment>
            ))}
          </div>
        </div>
        
        {/* Desktop View */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-x-12 gap-y-10 opacity-60 grayscale hover:opacity-100 transition-all duration-700">
          <img src="input_file_0.webp" alt="FX" className="h-10 md:h-12 w-auto object-contain hover:grayscale-0 transition-all" />
          <img src="input_file_1.webp" alt="PLF" className="h-10 md:h-12 w-auto object-contain hover:grayscale-0 transition-all" />
          <img src="input_file_2.webp" alt="kcas Branding" className="h-10 md:h-12 w-auto object-contain hover:grayscale-0 transition-all" />
          <img src="input_file_3.webp" alt="SIOX GLOBAL" className="h-10 md:h-12 w-auto object-contain hover:grayscale-0 transition-all" />
          <img src="input_file_4.webp" alt="Scientific Vadanya" className="h-10 md:h-12 w-auto object-contain hover:grayscale-0 transition-all" />
          <img src="input_file_5.webp" alt="Partner Logo" className="h-10 md:h-12 w-auto object-contain hover:grayscale-0 transition-all" />
        </div>
      </div>
    </div>
    <style>{`
      @keyframes infinite-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      .animate-infinite-scroll {
        animation: infinite-scroll 25s linear infinite;
      }
    `}</style>
  </div>
);

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full border-b border-gray-100 bg-white pt-24 md:pt-32">
      <style>{`
        @keyframes status-flash {
          0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
          70% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
          100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
        .animate-status-flash {
          animation: status-flash 2s infinite;
        }
      `}</style>
      <div className="relative pt-12 flex flex-col items-center text-center overflow-hidden">
        
        <div className="grid-cross-pattern opacity-5" />

        {/* Ambient Glows */}
        <div 
          className="absolute bottom-[-15%] left-[-10%] w-[80%] h-64 bg-[#180A5C] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" 
        />
        <div 
          className="absolute top-[-10%] right-[-10%] w-[70%] h-64 bg-[#0D0339] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" 
        />
        
        <div className="w-full px-6 lg:px-[20%] relative z-10 flex flex-col items-center">
          
          {/* Availability Badge */}
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-3 py-1 rounded-full shadow-sm">
              <div className="relative flex h-2 w-2">
                <div className="animate-status-flash absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></div>
                <div className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e] border border-white"></div>
              </div>
              <span className="text-[11px] font-bold text-gray-800">Accepting 2 more clients in Feb</span>
            </div>
          </div>

          <div className="mb-6">
            <span className="text-[#180A5C] text-[12px] font-black tracking-[0.25em] uppercase px-4 py-1.5 bg-[#F5F7FF] rounded-full">
              <span className="hidden sm:inline">$1,000,000 in pipeline opportunities</span>
              <span className="sm:hidden">$1 million in pipeline</span>
            </span>
          </div>
          
          <div className="mb-8">
            <h1 className="text-[36px] sm:text-[22px] md:text-[34px] lg:text-[52px] font-bold text-[#111827] tracking-[-0.05em] leading-[1.05] capitalize">
              Founder-Led LinkedIn <span className="text-[#DE275B] font-bold opacity-90"> GTM </span> Systems
            </h1>
            <h2 className="text-[28px] sm:text-[24px] md:text-[28px] lg:text-[36px] italic font-medium text-gray-400 tracking-[-0.03em] leading-[1.1] mt-2">
              Turn Authority Into <span className="text-[#180A5C] font-semibold opacity-90">Predictable Revenue</span>
            </h2>
          </div>
          
          <p className="text-[17px] md:text-[15px] text-gray-500 max-w-[620px] mb-8 md:mb-12 font-medium leading-relaxed tracking-tight opacity-90">
            Not posting. Not lead lists. Just systems that combine content, inbox management, <br className="hidden sm:block" />
            newsletter & ads that bring sales calls.
          </p>

          <div className="mb-4 md:mb-8 flex justify-center">
            <GlowingButton text="Book a Free Consultation" />
          </div>

        </div>

        <PartnerLogos />
      </div>
    </section>
  );
};