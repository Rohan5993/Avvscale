import React from 'react';

const SERVICE_DATA = [
  {
    id: '01',
    title: 'CONTENT SYSTEM',
    description: 'Strategic posts and videos that consistently earn trust and drive replies - not just likes.',
    highlights: ['High-impact trust-building content', 'Strategic video storytelling', 'Viral engagement loops'],
    outcomes: 'Predictable authority building.'
  },
  {
    id: '02',
    title: 'GROWTH SYSTEM',
    description: 'A calculated approach to network expansion. We connect you with high-value prospects.',
    highlights: ['Inbound Hook Framework', 'Active Network Pruning', 'Strategic Influencer Ties'],
    outcomes: 'Expanded reach within niche ICP.'
  },
  {
    id: '03',
    title: 'SALES SYSTEM',
    description: 'Turning conversations into pipeline. We implement targeted campaigns that convert clicks.',
    highlights: ['Smart Outreach Automations', 'CRM Integration', 'Predictable Booking Engine'],
    outcomes: 'Consistent booked meetings.'
  },
];

export const Services: React.FC = () => {
  return (
    <section id="solutions" className="bg-white relative py-16 lg:py-24 px-6 md:px-14 lg:px-20">
      <div className="w-full max-w-[1000px] mx-auto">
        <div className="flex flex-col relative">
          {SERVICE_DATA.map((service, index) => (
            <div 
              key={service.id} 
              className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start sticky top-20 lg:top-32 pt-8 pb-16 bg-white w-full border-t border-gray-50"
              style={{ zIndex: index + 10 }}
            >
              <div className="lg:w-1/3">
                <h3 className="text-4xl md:text-5xl font-black text-[#1a1a1a] leading-none tracking-tighter uppercase">
                  {service.title.split(' ')[0]}<br />
                  <span className="text-[#DE275B]">{service.title.split(' ')[1]}</span>
                </h3>
              </div>

              <div className="lg:w-2/3 w-full">
                <div className="group relative">
                  <div className="p-6 md:p-10 lg:p-12 rounded-[32px] md:rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border-gray-100 bg-white relative overflow-hidden transition-all duration-700 hover:shadow-[0_30px_80px_rgba(222,39,91,0.1)] border">
                    
                    <div className="absolute top-5 right-6 text-xl md:text-2xl font-black text-[#1a1a1a]/[0.05] select-none pointer-events-none italic tracking-tighter">
                      {service.id}
                    </div>
                    
                    <div className="relative z-10">
                      <p className="text-[#1a1a1a]/80 text-[1.1rem] md:text-[1.2rem] mb-10 leading-relaxed font-light max-w-xl">
                        {service.description}
                      </p>
                      
                      <div className="space-y-6 mb-10">
                        <div className="flex items-center gap-3">
                          <span className="text-[9px] font-black text-[#DE275B] tracking-[0.4em] uppercase">Core Pillars</span>
                          <div className="flex-1 h-px bg-black/5" />
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                          {service.highlights.map(h => (
                            <div key={h} className="flex items-start gap-3 group/item">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#DE275B] mt-1.5 flex-shrink-0" />
                              <span className="font-bold text-[#1a1a1a] text-[10px] uppercase tracking-[0.15em] leading-tight opacity-70">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-8 border-t border-black/5">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div>
                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Outcome</p>
                            <p className="text-[#1a1a1a] text-[1.1rem] font-bold leading-tight tracking-tight">{service.outcomes}</p>
                          </div>
                          
                          <div className="flex items-center gap-3 transition-transform duration-500 cursor-pointer hover:translate-x-1.5">
                             <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1a1a1a]">Explore</span>
                             <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#DE275B] hover:border-[#DE275B] transition-all duration-500">
                               <span className="text-sm">→</span>
                             </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="h-[15vh]" />
        </div>
      </div>
    </section>
  );
};