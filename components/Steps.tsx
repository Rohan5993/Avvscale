import React, { useEffect, useState, useRef } from 'react';

const STEPS = [
  { title: 'Discovery Call', desc: 'A short 15min alignment session to understand your ICP and goals.' },
  { title: 'Strategy', desc: 'Building your LinkedIn funnel architecture, messaging, and target segments.' },
  { title: 'Positioning & Profile Setup', desc: 'Crafting an authority-driven profile that converts visitors to leads.' },
  { title: '4C\'s System', desc: 'Deploying our proprietary Content, Connections, Conversation, and Conversion model.' },
  { title: 'Feedback', desc: 'Continuous iteration and scaling based on data-driven performance metrics.' },
];

export const Steps: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (rect.height + window.innerHeight / 2)));
      setProgress(scrollProgress * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-24 px-6 md:px-14 lg:px-20 bg-white overflow-hidden">
      <div className="w-full max-w-[1100px] mx-auto">
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[18px] md:left-[22px] top-[14px] bottom-10 w-[2px] md:w-1 bg-gray-50 rounded-full overflow-hidden">
            <div 
              className="w-full bg-[#DE275B] transition-all duration-300 ease-out origin-top shadow-[0_0_15px_rgba(222,39,91,0.5)]"
              style={{ height: `${progress}%` }}
            />
          </div>

          <div className="space-y-16">
            {STEPS.map((step, idx) => (
              <div key={idx} className="relative pl-14 md:pl-20 group">
                <div 
                  className={`absolute left-0 top-0 w-9 h-9 md:w-11 md:h-11 rounded-xl flex items-center justify-center font-black text-sm md:text-base transition-all duration-700 z-10 border-2 ${
                    progress > (idx / STEPS.length) * 100 
                      ? 'bg-[#DE275B] border-[#DE275B] text-white shadow-lg shadow-[#DE275B]/20' 
                      : 'bg-white border-gray-100 text-gray-200'
                  }`}
                >
                  {idx + 1}
                </div>
                
                <div className="max-w-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#DE275B] transition-colors tracking-tight uppercase">
                    {step.title}
                  </h3>
                  
                  <div className="relative py-1">
                    <div className="absolute left-[-15px] top-0 bottom-0 w-[2px] bg-[#DE275B]/30 rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                    <p className="text-gray-500 text-[1rem] md:text-[1.1rem] leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};