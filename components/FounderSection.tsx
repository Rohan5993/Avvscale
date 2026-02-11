import React from 'react';
// not required right now
export const FounderSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="relative bg-[#0e0e0e] rounded-[48px] overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 md:gap-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)]">
          {/* Background Accents */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#DE275B]/10 to-transparent pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#DE275B]/5 blur-[80px] rounded-full pointer-events-none" />
          
          {/* Image Container */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#DE275B] to-[#9c1a3e] rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
            <div className="relative w-64 h-80 md:w-80 md:h-[450px] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Founder of AVVSCALE"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-lg mb-0.5">Julian V. Thorne</p>
                <p className="text-[#DE275B] text-xs font-black uppercase tracking-widest">Founder & CEO</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-xl">
            <span className="text-[#DE275B] text-[11px] font-black tracking-[0.3em] uppercase mb-6 block">
              A Note From The Founder
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-8">
              "We didn't build another agency. We built a <span className="text-[#DE275B]">revenue engine</span> for founders."
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Most agencies focus on metrics that don't matter. Likes, impressions, and "reach" don't pay the bills. I founded AVVSCALE because I saw a gap in how B2B companies were approaching LinkedIn.
              </p>
              <p>
                We focus on one thing: <span className="text-[#DE275B] font-bold italic">Pipeline.</span> Our systems are designed to turn your personal authority into a predictable stream of sales conversations.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="h-px flex-1 bg-white/10" />
              <div className="flex flex-col items-end">
                 <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/1/1a/John_Hancock_Signature.svg" 
                  alt="Signature" 
                  className="h-10 invert opacity-60 mb-2"
                 />
                 <span className="text-[#DE275B] text-[10px] font-bold uppercase tracking-widest">Authorized Signature</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};