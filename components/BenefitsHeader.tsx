import React from 'react';

export const BenefitsHeader: React.FC = () => {
  return (
    <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-14 lg:px-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-[#180A5C] text-[13px] md:text-[14px] font-bold tracking-[0.05em] mb-4 md:mb-6 block uppercase">
          Benefits
        </span>
        
        <h2 className="text-[32px] md:text-[56px] lg:text-[64px] font-extrabold text-[#111827] leading-[1.1] tracking-tight mb-6 md:mb-8">
          Built differently by <span className="italic font-medium text-[#180A5C]">design.</span>
        </h2>
        
        <p className="text-gray-500 text-[16px] md:text-[20px] max-w-2xl mx-auto leading-relaxed font-medium">
          Not just random likes or comments, <br className="hidden sm:block" />
          we bring real results.
        </p>
      </div>
    </section>
  );
};