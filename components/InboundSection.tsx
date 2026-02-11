import React from 'react';

const MessageBubble = ({ 
  name, 
  time, 
  avatar, 
  className, 
  hoverStyles, 
  delay 
}: { 
  name: string; 
  time: string; 
  avatar: string; 
  className: string; 
  hoverStyles: string; 
  delay: string;
}) => (
  <div className={`absolute w-full max-w-[210px] bg-white rounded-2xl p-3 shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center gap-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${delay} ${className} ${hoverStyles}`}>
    <div className="w-9 h-9 rounded-full bg-gray-100 overflow-hidden shrink-0">
      <img src={avatar} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex justify-between items-center mb-1">
        <span className="text-[10px] font-bold text-gray-900 truncate">{name}</span>
        <span className="text-[8px] text-gray-400 shrink-0">{time}</span>
      </div>
      <div className="h-1.5 w-[75%] bg-gray-100 rounded-full" />
    </div>
  </div>
);

const BrowserMockup = ({ className, delay = "" }: { className?: string, delay?: string }) => (
  <div className={`absolute bg-white rounded-[14px] shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${className} ${delay}`}>
    {/* Browser Bar */}
    <div className="h-4 md:h-6 bg-[#2d2d2d] flex items-center px-2 md:px-3 gap-1 md:gap-1.5">
      <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-white/20" />
      <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-white/20" />
      <div className="w-8 md:w-12 h-1.5 md:h-2 bg-white/10 rounded-full ml-auto" />
    </div>
    {/* Page Content */}
    <div className="p-3 md:p-4 space-y-2 md:space-y-3">
      <div className="flex gap-2 md:gap-3">
        <div className="w-8 md:w-10 h-8 md:h-10 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover grayscale opacity-60" alt="Founder Workshop" />
        </div>
        <div className="flex-1 space-y-1 md:space-y-1.5 pt-0.5">
          <div className="h-1.5 md:h-2 w-full bg-gray-100 rounded-full" />
          <div className="h-1.5 md:h-2 w-[85%] bg-gray-100 rounded-full" />
          <div className="h-1.5 md:h-2 w-[40%] bg-[#180A5C]/30 rounded-full" />
        </div>
      </div>
      <div className="space-y-1 md:space-y-1.5 pt-1">
        <div className="h-1 md:h-1.5 w-full bg-gray-50 rounded-full" />
        <div className="h-1 md:h-1.5 w-full bg-gray-50 rounded-full" />
        <div className="h-1 md:h-1.5 w-[90%] bg-gray-50 rounded-full" />
        <div className="h-1 md:h-1.5 w-[95%] bg-gray-50 rounded-full" />
      </div>
    </div>
  </div>
);

const FOUNDER_NODES = [
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150", 
  "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=150", 
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150", 
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150", 
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"  
];

export const InboundSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Header Area - Centered */}
        <div className="text-center mb-20 relative">
          <span className="text-[#180A5C] text-[13px] font-black tracking-[0.2em] uppercase mb-4 block">
            Solutions
          </span>
          <h2 className="text-[38px] md:text-[54px] font-bold text-[#111827] tracking-[-0.03em] leading-[1.05] mb-6">
            Stop chasing clients.<br />
            Start building a <span className="text-[#180A5C]">GTM System.</span>
          </h2>
          <p className="text-[#6b7280] text-[17px] max-w-xl mx-auto leading-relaxed font-medium">
            We design LinkedIn as a go-to-market system, not just another posting channel.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Inbound System */}
          <div className="group flex flex-col bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-[300px] bg-[#FFF5F7] flex items-center justify-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  {/* Radial Lines - Darker Brand Blue (#180A5C) */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <line 
                      key={angle} 
                      x1="100" y1="100" 
                      x2={100 + 72 * Math.cos((angle * Math.PI) / 180)} 
                      y2={100 + 72 * Math.sin((angle * Math.PI) / 180)} 
                      stroke="#180A5C" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4"
                      className="opacity-0 group-hover:opacity-60 transition-all duration-700 ease-out"
                      style={{ 
                        transitionDelay: `${i * 80}ms`
                      }}
                    />
                  ))}
                  
                  <style>{`
                    @keyframes drawCircleBrand {
                      from { stroke-dashoffset: 452; opacity: 0; }
                      to { stroke-dashoffset: 0; opacity: 1; }
                    }
                    .group:hover .authority-circle-brand {
                      animation: drawCircleBrand 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                    }
                  `}</style>
                  <circle 
                    cx="100" cy="100" r="72" 
                    fill="none" 
                    stroke="#180A5C" 
                    strokeWidth="2" 
                    strokeDasharray="5 7"
                    strokeDashoffset="452"
                    className="authority-circle-brand opacity-0"
                  />
                </svg>

                {/* Central Authority Hub */}
                <div className="relative z-20 p-1.5 bg-white rounded-full shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 border border-gray-100">
                   <div className="w-14 h-14 rounded-full bg-[#0D0339] flex items-center justify-center overflow-hidden">
                     <svg className="w-8 h-8 text-[#180A5C] opacity-80" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                     </svg>
                   </div>
                </div>

                {/* Surrounding Nodes */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <div 
                    key={i}
                    className="absolute z-10 bg-white p-0.5 rounded-full shadow-md transition-all duration-500 ease-out opacity-100 scale-100 group-hover:shadow-lg border border-gray-100"
                    style={{
                      transform: `translate(${72 * Math.cos((angle * Math.PI) / 180)}px, ${72 * Math.sin((angle * Math.PI) / 180)}px)`,
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white">
                      <img src={FOUNDER_NODES[i]} alt="founder-profile" className="w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 pt-6">
              <h3 className="text-[22px] font-bold text-[#111827] mb-3">Inbound System</h3>
              <p className="text-[#6b7280] text-[14px] leading-relaxed font-medium">
                We position founders/CXOS as category voices, not content creators with clear narrative.
              </p>
            </div>
          </div>

          {/* Card 2: Outbound System */}
          <div className="group flex flex-col bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-[300px] bg-[#F5F7FF] flex flex-col items-center justify-center overflow-hidden">
              <div className="relative w-full max-w-[210px] h-full flex flex-col items-center pt-8">
                
                <MessageBubble 
                  name="Sarah Jenkins"
                  time="1:03 PM"
                  avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
                  className="-rotate-6 -translate-x-8 translate-y-4"
                  hoverStyles="group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0"
                  delay="delay-[0ms]"
                />

                <MessageBubble 
                  name="Marcus Thorne"
                  time="1:03 PM"
                  avatar="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150"
                  className="rotate-3 translate-x-6 translate-y-16"
                  hoverStyles="group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-[52px]"
                  delay="delay-[100ms]"
                />
                  <MessageBubble 
                  name="Julian Vane"
                  time="1:03 PM"
                  avatar="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150"
                  className="-rotate-2 -translate-x-2 translate-y-32"
                  hoverStyles="group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-[104px]"
                  delay="delay-[200ms]"
                />

                <MessageBubble 
                  name="Elena Rodriguez"
                  time="1:03 PM"
                  avatar="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=150"
                  className="rotate-6 translate-x-4 translate-y-[180px]"
                  hoverStyles="group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-[156px]"
                  delay="delay-[300ms]"
                />

                <div className="absolute top-[230px] left-1/2 -translate-x-1/2 flex items-center gap-2.5 bg-white rounded-2xl px-5 py-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-gray-100 whitespace-nowrap z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] delay-[400ms] opacity-0 group-hover:opacity-100 group-hover:top-[215px] group-hover:scale-105 pointer-events-none group-hover:pointer-events-auto">
                  <div className="w-5 h-5 bg-[#180A5C] rounded flex items-center justify-center">
                    <span className="text-white text-[9px] font-black italic">in</span>
                  </div>
                  <span className="text-[12px] font-bold text-gray-800">Contextual DM</span>
                </div>
              </div>
            </div>
            <div className="p-8 pt-6">
              <h3 className="text-[22px] font-bold text-[#111827] mb-3">Outbound System</h3>
              <p className="text-[#6b7280] text-[14px] leading-relaxed font-medium">
                Outbound that works because it's built on context and authority. Customised DMS for your offer and ICP curated using Sales Navigator.
              </p>
            </div>
          </div>

          {/* Card 3: Newsletter & Ads */}
          <div className="group flex flex-col bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-[300px] bg-[#FFEDF2] flex items-center justify-center p-8 overflow-hidden">
              <div className="relative w-full max-w-[210px] h-[140px] md:h-[180px]">
                <BrowserMockup 
                  className="w-full h-full -rotate-[8deg] -translate-x-4 -translate-y-4 group-hover:-rotate-[12deg] group-hover:-translate-x-8 group-hover:-translate-y-8 opacity-60 scale-95" 
                  delay="delay-100"
                />
                <BrowserMockup 
                  className="w-full h-full rotate-[4deg] group-hover:rotate-[6deg] group-hover:translate-x-4 group-hover:-translate-y-2 z-10" 
                />
                
                <div className="absolute -bottom-4 right-0 bg-[#180A5C] text-white text-[9px] font-black px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-[-20px] transition-all duration-500 z-20 delay-300">
                  NEWSLETTER SENT ↗
                </div>
              </div>
            </div>
            <div className="p-8 pt-6">
              <h3 className="text-[22px] font-bold text-[#111827] mb-3">Newsletter & Ads</h3>
              <p className="text-[#6b7280] text-[14px] leading-relaxed font-medium">
                Newsletters and paid distribution to amplify proven narratives and reach the right ICP, only after core GTM system is stable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};