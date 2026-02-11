import React, { useEffect, useRef, useState } from 'react';

export const HowItWorks: React.FC = () => {
  const [autoProgress, setAutoProgress] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);
  const arrowRef = useRef<SVGGElement>(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }

    const handleResize = () => {
      if (pathRef.current) {
        setPathLength(pathRef.current.getTotalLength());
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let startTime = Date.now();
    const cycleDuration = 6000;

    const animate = () => {
      const now = Date.now();
      const elapsed = (now - startTime) % cycleDuration;
      
      let currentProgress = 0;
      if (elapsed < 4000) {
        currentProgress = elapsed / 4000;
      } else {
        currentProgress = 1;
      }
      
      setAutoProgress(currentProgress);

      if (pathRef.current && arrowRef.current && pathLength > 0) {
        const length = currentProgress * pathLength;
        const p = pathRef.current.getPointAtLength(length);
        const p0 = pathRef.current.getPointAtLength(Math.max(0, length - 1));
        const angle = Math.atan2(p.y - p0.y, p.x - p0.x) * 180 / Math.PI;
        arrowRef.current.setAttribute('transform', `translate(${p.x}, ${p.y}) rotate(${angle})`);
        const isAtBounds = currentProgress < 0.005 || currentProgress > 0.995;
        arrowRef.current.style.opacity = isAtBounds ? '0' : '1';
      }

      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [pathLength]);

  const steps = [
    { number: '1', day: 'Day 0', title: 'Discovery', desc: 'A short call to assess positioning, ICP, authority gaps, and conversion friction.' },
    { number: '2', day: 'Day 1-14', title: 'Strategy', desc: 'Design Inbound authority and outbound conversations built as one system.' },
    { number: '3', day: 'Day 15', title: 'Launch', desc: 'We run, refine, and scale the system over time.' }
  ];

  const isStepActive = (idx: number) => {
    // On mobile (static), all steps appear active or follow basic static rules
    // For mobile, we just force idx 0 always true, and the rest based on progress or just static true
    if (window.innerWidth < 768) return true; 

    if (idx === 0) return true;
    if (idx === 1) return autoProgress >= 0.5;
    if (idx === 2) return autoProgress >= 0.99;
    return false;
  };

  const wavePath = "M 200 60 C 350 120, 450 0, 600 60 C 750 120, 850 0, 1000 60";

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative">
        <div className="text-center mb-16 md:mb-28 max-w-xl mx-auto">
          <span className="text-[#180A5C] text-[13px] font-black tracking-widest uppercase mb-4 block">
            How it Works
          </span>
          <h2 className="text-[36px] md:text-[56px] font-bold text-[#111827] tracking-tight leading-tight">
            Getting started is <span className="text-[#180A5C]">only</span> 3-steps.
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-7 left-0 w-full h-[120px] pointer-events-none z-0 -translate-y-1/2">
            <svg viewBox="0 0 1200 120" fill="none" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <mask id="progressive-wave-mask">
                  <path 
                    d={wavePath} 
                    stroke="white" 
                    strokeWidth="60" 
                    strokeLinecap="round"
                    style={{
                      strokeDasharray: pathLength || 5000,
                      strokeDashoffset: (pathLength || 5000) * (1 - autoProgress),
                      transition: 'none'
                    }}
                  />
                </mask>
              </defs>
              <path 
                ref={pathRef}
                d={wavePath} 
                stroke="#DE275B" 
                strokeWidth="2.5" 
                strokeDasharray="8 8" 
                strokeLinecap="round" 
                mask="url(#progressive-wave-mask)" 
              />
              <g ref={arrowRef} style={{ transition: 'opacity 0.2s' }}>
                <path 
                  d="M -7 -5 L 3 0 L -7 5" 
                  stroke="#DE275B" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  fill="none" 
                />
              </g>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group relative">
                <div className="relative mb-6 md:mb-8 z-10 w-full flex justify-center">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-500 relative z-10 ring-[8px] ring-white ${
                      isStepActive(idx) ? 'bg-[#180A5C] text-white shadow-lg shadow-blue-200/50 scale-110' : 'bg-gray-50 text-gray-300'
                    }`}
                  >
                    {step.number}
                  </div>
                </div>

                <div className={`inline-block px-3 py-1 rounded-full mb-4 md:mb-6 transition-all duration-700 ${
                  isStepActive(idx) ? 'bg-blue-50 translate-y-0 opacity-100' : 'bg-transparent translate-y-2 opacity-50'
                }`}>
                  <span className="text-[#180A5C] text-[13px] font-bold tracking-tight">{step.day}</span>
                </div>

                <div className="max-w-[320px] px-4">
                  <h3 className={`text-[22px] md:text-[26px] font-bold mb-3 md:mb-4 tracking-tight transition-all duration-500 ${
                    isStepActive(idx) ? 'text-[#111827]' : 'text-gray-300'
                  }`}>{step.title}</h3>
                  <p className={`text-[15px] md:text-[16px] leading-relaxed font-medium transition-all duration-500 delay-100 ${
                    isStepActive(idx) ? 'text-gray-500 opacity-90' : 'text-gray-200'
                  }`}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};