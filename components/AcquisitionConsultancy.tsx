import React from 'react';

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#DE275B] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const BookIcon = () => (
  <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 2H5C3.89 2 3 2.89 3 4V20C3 21.11 3.89 22 5 22H19C20.11 22 21 21.11 21 20V4C21 2.89 20.11 2 19 2ZM19 20H5V4H7V11L9.5 9.5L12 11V4H19V20Z" />
  </svg>
);

export const AcquisitionConsultancy: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#fbfbfb]">
      <style>{`
        @keyframes floatRotate {
          0% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          25% { transform: translateY(-5px) rotateX(2deg) rotateY(1deg); }
          50% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          75% { transform: translateY(5px) rotateX(-2deg) rotateY(-1deg); }
          100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
        }
        .animate-float-rotate {
          animation: floatRotate 6s ease-in-out infinite;
          perspective: 1000px;
        }
      `}</style>
      {/* Header Area - Centered */}
        <div className="text-center mb-20 relative">
          <span className="text-[#180A5C] text-[13px] font-black tracking-[0.2em] uppercase mb-4 block">
            Our System
          </span>
          <h2 className="text-[38px] md:text-[54px] font-bold text-[#111827] tracking-[-0.03em] leading-[1.05] mb-6">
            Build to <span className="text-[#180A5C]">Compound.</span> <br/>
            
          </h2>
          <p className="text-[#6b7280] text-[17px] max-w-xl mx-auto leading-relaxed font-medium">
            Start where you are. Move up when ready.
          </p>
        </div>
      <div className="max-w-[1240px] mx-auto px-4 md:px-6">
        
        {/* Top Row: Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-4 mb-6 md:mb-4 items-stretch">
          
          {/* Left Card: Fit Check */}
          <div className="bg-white border border-gray-100 rounded-[24px] p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col relative min-h-[390px] sm:min-h-[480px] lg:min-h-[440px]">
            
            <div className="absolute -top-6 left-0 w-full px-[15px] sm:px-0 sm:left-[1.4rem] sm:w-[92%] z-20 pointer-events-none animate-float-rotate">
              <div className="bg-[#0D0339] rounded-[32px] px-[15px] py-6 md:p-8 pb-3 md:pb-10 shadow-[0_30px_60px_-12px_rgba(24,10,92,0.6)] border border-white/10 relative overflow-hidden">
                <div className="bg-[#DE275B] text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-tight w-fit mb-6 md:mb-8">
                  We Design for you
                </div>
                <h3 className="text-white text-[22px] md:text-[24px] font-bold leading-[1.1] tracking-tight relative z-10">
                  Build a Pipeline on LinkedIn with <br className="hidden sm:block" />
                  <span className="text-[#DE275B] font-medium italic opacity-90">a long-term GTM partner.</span>
                </h3>
                
                <div className="absolute top-0 right-0 w-2/3 h-full overflow-hidden pointer-events-none opacity-40">
                  <div className="absolute top-[10%] right-[-5%] w-[120px] h-[200px] bg-white/5 rotate-[35deg] skew-y-12 blur-[2px]" />
                  <div className="absolute top-[30%] right-[20%] w-12 h-12 bg-white/10 rounded-full blur-2xl" />
                </div>
              </div>
            </div>

            <div className="mt-auto space-y-4 pt-36 sm:pt-48 md:pt-44 lg:pt-40">
              <div className="inline-flex items-center gap-2 bg-white border border-gray-50 px-3 py-1 rounded-full shadow-sm w-fit">
                <div className="w-2 h-2 rounded-full bg-[#22c55e] border-2 border-white shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                <span className="text-[11px] font-bold text-gray-800">Accepting 2 more clients in Feb</span>
              </div>
              
              <h2 className="text-[30px] md:text-[34px] font-bold text-[#111827] leading-none tracking-tight">
                See if we'd be a fit
              </h2>
              <p className="text-[#6b7280] text-[14px] font-medium leading-relaxed max-w-[320px]">
                Book a FREE LinkedIn Audit to see if working together would make sense (+ receive some value).
              </p>
            </div>
          </div>

          {/* Right Card: DFY LinkedIn GTM System */}
          <div className="bg-white border border-gray-100 rounded-[24px] p-6 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col h-full">
            <h3 className="text-[28px] md:text-[32px] font-bold text-[#111827] mb-4 md:mb-5 tracking-tight">
              DFY LinkedIn GTM System
            </h3>
            
            <p className="text-gray-500 text-[14px] font-medium leading-relaxed mb-6">
              We design, execute, and optimize the entire system so you don't have to manage moving parts.
              <span className="text-[#DE275B] font-bold"> Best for founders who want outcomes, not experiments.</span>
            </p>

            <div className="w-full h-px bg-gray-100 mb-6" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
              {[
                'Authority-led Positioning',
                'Contextual DMs, & Qualification',
                'End-to-end System Ownership',
                'Newsletter & Ads ',
                'Weekly Team Update Calls',
                'Profile Re-branding'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-3.5 h-3.5 text-[#DE275B] flex-shrink-0">
                     <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-[12px] font-bold text-[#111827]">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <button className="bg-[#180A5C] text-white px-6 py-3 md:px-5 md:py-2.5 rounded-full font-bold text-[13px] md:text-[14px] shadow-[0_15px_30px_-8px_rgba(24,10,92,0.5)] hover:bg-[#0D0339] transition-all duration-300 flex items-center gap-3 w-full sm:w-fit justify-center whitespace-nowrap">
                <div className="w-5 h-5 bg-white rounded flex items-center justify-center text-[#180A5C] font-black text-[9px]">S</div>
                See if you qualify
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Horizontal Banner */}
        <div className="bg-[#0D0339] rounded-[24px] p-8 md:p-10 lg:px-14 lg:py-12 mt-4 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div className="relative z-10 flex flex-col gap-6 md:gap-8">
            
            {/* Top Row: Title & Badge */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <h3 className="text-white text-[32px] sm:text-[38px] md:text-[42px] lg:text-[44px] font-bold leading-[1.1] tracking-tight whitespace-normal md:whitespace-nowrap max-w-[300px] sm:max-w-none">
                LinkedIn 1-1 Consultancy
              </h3>
              <div className="bg-[#DE275B] text-white px-4 py-1.5 rounded-full text-[10px] md:text-[11px] font-bold tracking-tight w-fit whitespace-nowrap shrink-0">
                Done-With-You
              </div>
            </div>

            {/* Content Row */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-0">
              <div className="w-full lg:w-auto lg:max-w-[360px]">
                <p className="text-white text-[14px] font-medium leading-relaxed tracking-tight opacity-90">
                  For founders or teams who want to <br className="hidden xl:block" />
                  calls/month. <span className="text-[#DE275B] font-bold">Learn the GTM system and execute internally.</span>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-10 lg:gap-x-0 w-full lg:w-auto shrink-0">
                <div className="flex items-center gap-3 whitespace-nowrap lg:pr-10">
                  <CheckIcon />
                  <span className="text-[14px] font-bold text-white tracking-tight"> Guidance & Frameworks</span>
                </div>
                <div className="flex items-center gap-3 whitespace-nowrap lg:pr-10">
                  <CheckIcon />
                  <span className="text-[14px] font-bold text-white tracking-tight">Playbooks & System Design</span>
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-center lg:justify-end shrink-0">
                <button className="bg-white text-[#0D0339] px-6 py-2.5 rounded-full font-bold text-[14px] shadow-2xl hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 justify-center w-full sm:w-fit group whitespace-nowrap">
                  <BookIcon />
                  Book A Call
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#DE275B]/10 blur-[120px] pointer-events-none rounded-full" />
        </div>
      </div>
    </section>
  );
};