import React from 'react';

const CardHeader = ({ children, color = "bg-[#FAF9F5]" }: { children?: React.ReactNode, color?: string }) => (
  <div className={`relative h-[300px] md:h-[340px] ${color} rounded-t-[40px] overflow-hidden flex items-center justify-center p-6 transition-all duration-700`}>
    {children}
  </div>
);

export const GrowthSystems: React.FC = () => {
  return (
    <section className="py-12 md:py-24 px-6 md:px-14 lg:px-20 bg-white">
      <style>{`
        @keyframes signal-flow {
          0% { stroke-dashoffset: 100; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes magnetic-float {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0); }
          33% { transform: translateY(-8px) translateX(4px) rotate(2deg); }
          66% { transform: translateY(4px) translateX(-4px) rotate(-2deg); }
        }
        @keyframes shimmer-logo {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        @keyframes grow-stack {
          0% { transform: scaleY(0.8) translateY(10px); opacity: 0; }
          100% { transform: scaleY(1) translateY(0); opacity: 1; }
        }
        @keyframes pulse-soft {
          0% { box-shadow: 0 0 0 0 rgba(222, 39, 91, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(222, 39, 91, 0); }
          100% { box-shadow: 0 0 0 0 rgba(222, 39, 91, 0); }
        }
        .animate-signal { stroke-dasharray: 20 80; animation: signal-flow 3s linear infinite; }
        .animate-magnetic { animation: magnetic-float 6s ease-in-out infinite; }
        .shimmer { position: absolute; top: 0; width: 50%; height: 100%; background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent); animation: shimmer-logo 2s infinite; }
      `}</style>
      
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-10">
          
          {/* Card 1: GTM, not tactics */}
          <div className="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <CardHeader color="bg-[#fcfcfd]">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Intent Network Background */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 200 200">
                  <path d="M20,150 Q100,140 180,150" stroke="#180A5C" strokeWidth="1" fill="none" className="animate-signal" />
                  <path d="M20,50 Q100,60 180,50" stroke="#180A5C" strokeWidth="1" fill="none" className="animate-signal" style={{ animationDelay: '-1.5s' }} />
                  <circle cx="100" cy="100" r="80" stroke="#DE275B" strokeWidth="0.5" fill="none" strokeDasharray="4 4" className="opacity-20" />
                </svg>

                {/* Central System Core */}
                <div className="relative z-10 w-52 bg-white rounded-3xl shadow-2xl p-4 border border-gray-100 group-hover:scale-105 transition-all duration-500">
                  <div className="w-full h-24 bg-[#0D0339] rounded-xl overflow-hidden relative mb-4">
                    <div className="absolute inset-0 flex items-center justify-around px-4">
                      {[1, 0.4, 0.8, 0.5, 0.9, 0.3].map((h, i) => (
                        <div key={i} className="w-1.5 bg-[#DE275B] rounded-full animate-pulse" style={{ height: `${h * 100}%`, animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 w-full bg-gray-100 rounded-full" />
                    <div className="h-1.5 w-2/3 bg-gray-50 rounded-full" />
                  </div>
                </div>

                {/* Floating Stripe Pop */}
                <div className="absolute top-10 right-4 bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-white flex items-center gap-3 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 delay-300">
                  <div className="w-8 h-8 bg-[#635BFF] rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-[10px]">S</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-900 leading-tight">Paid: $2,099</p>
                    <p className="text-[8px] text-gray-400">Successive pipeline</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <div className="p-10">
              <h3 className="text-[26px] font-bold text-[#111827] mb-4">GTM, not tactics</h3>
              <p className="text-gray-500 text-[16px] leading-relaxed font-medium">
                We don’t optimize posts or scripts in isolation. We design systems that compound and feed each other.
              </p>
            </div>
          </div>

          {/* Card 2: Founder-Led Distribution */}
          <div className="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <CardHeader color="bg-[#f8fafc]">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Neural Map */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  {[30, 150, 210, 330].map((angle, i) => (
                    <g key={i}>
                      <line 
                        x1="100" y1="100"
                        x2={100 + 75 * Math.cos(angle * Math.PI / 180)}
                        y2={100 + 75 * Math.sin(angle * Math.PI / 180)}
                        stroke="#e2e8f0"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                      <line 
                        x1="100" y1="100"
                        x2={100 + 75 * Math.cos(angle * Math.PI / 180)}
                        y2={100 + 75 * Math.sin(angle * Math.PI / 180)}
                        stroke="#180A5C"
                        strokeWidth="2"
                        className="animate-signal opacity-0 group-hover:opacity-100"
                        style={{ animationDelay: `${i * 0.5}s` }}
                      />
                    </g>
                  ))}
                </svg>

                {/* Founder Persona */}
                <div className="relative z-10 w-20 h-20 bg-[#0D0339] rounded-full shadow-2xl border-4 border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                  <div className="shimmer opacity-20" />
                  <svg className="w-10 h-10 text-white opacity-90" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>

                {/* Nodes with Badges */}
                {[30, 150, 210, 330].map((angle, i) => (
                  <div 
                    key={i}
                    className="absolute w-12 h-12 rounded-2xl border-2 border-white bg-white shadow-xl overflow-visible transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110"
                    style={{
                      transform: `translate(${75 * Math.cos(angle * Math.PI / 180)}px, ${75 * Math.sin(angle * Math.PI / 180)}px)`,
                    }}
                  >
                    <img src={`https://i.pravatar.cc/100?u=saas${i}`} alt="user" className="w-full h-full object-cover rounded-[14px]" />
                    <div className="absolute -top-2 -right-2 bg-[#DE275B] text-white text-[7px] font-black px-1.5 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">ICP</div>
                  </div>
                ))}
              </div>
            </CardHeader>
            <div className="p-10">
              <h3 className="text-[26px] font-bold text-[#111827] mb-4">Founder-Led Distribution</h3>
              <p className="text-gray-500 text-[16px] leading-relaxed font-medium">
                In B2B, founder voice outperforms brand voice. We scale your reach without losing your soul.
              </p>
            </div>
          </div>

          {/* Card 3: Social Selling Mechanism */}
          <div className="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <CardHeader color="bg-[#f9fafb]">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* 3D Glass Funnel */}
                <div className="relative w-48 h-56 flex flex-col items-center">
                   <div className="absolute top-0 w-32 h-10 bg-white/40 border border-gray-100 rounded-full backdrop-blur-sm z-10" />
                   <svg className="w-40 h-full drop-shadow-2xl" viewBox="0 0 100 120">
                     <defs>
                       <linearGradient id="funnelFill" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="0%" stopColor="#180A5C" stopOpacity="0.02" />
                         <stop offset="100%" stopColor="#DE275B" stopOpacity="0.1" />
                       </linearGradient>
                     </defs>
                     <path d="M10,10 L90,10 L65,110 L35,110 Z" fill="url(#funnelFill)" stroke="rgba(24,10,92,0.1)" strokeWidth="1" />
                   </svg>
                   
                   {/* Elements Falling */}
                   <div className="absolute top-2 w-full flex flex-col items-center gap-12">
                     <div className="flex gap-4 animate-magnetic">
                       <div className="w-8 h-8 bg-[#0077B5] rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-xs">in</div>
                       <div className="w-8 h-8 bg-white rounded-full shadow-lg border border-gray-50 p-2"><div className="w-full h-full bg-gray-200 rounded-full" /></div>
                     </div>
                     
                     <div className="relative z-20 group-hover:translate-y-2 transition-transform duration-500">
                        <div className="bg-black text-white px-6 py-3 rounded-2xl flex items-center gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:scale-110 transition-all">
                          <span className="font-bold text-xs uppercase tracking-widest">Send DM</span>
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
                        </div>
                     </div>
                   </div>

                   {/* Output Booked Call */}
                   <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-500 translate-y-4 group-hover:translate-y-8">
                      <div className="bg-green-500 text-white px-4 py-2 rounded-full text-[10px] font-black shadow-lg flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full animate-ping" />
                        CALL BOOKED
                      </div>
                   </div>
                </div>
              </div>
            </CardHeader>
            <div className="p-10">
              <h3 className="text-[26px] font-bold text-[#111827] mb-4">Social Selling Mechanism</h3>
              <p className="text-gray-500 text-[16px] leading-relaxed font-medium">
                Inbound creates intent. Outbound activates it. We initiate conversations that move naturally toward revenue.
              </p>
            </div>
          </div>

          {/* Card 4: Authority Before Conversion */}
          <div className="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <CardHeader color="bg-[#fdfdf7]">
              <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
                
                {/* Authority Meter */}
                <div className="absolute top-8 left-8 right-8">
                   <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1.5 flex justify-between">
                     Trust Meter <span className="text-[#DE275B]">100%</span>
                   </p>
                   <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                     <div className="h-full bg-[#DE275B] transition-all duration-1000 ease-out w-0 group-hover:w-full" />
                   </div>
                </div>

                <div className="flex items-center gap-10">
                  {/* The Authority Monolith */}
                  <div className="relative flex flex-col items-center">
                    <div className="text-yellow-500 mb-3 drop-shadow-lg group-hover:rotate-[15deg] transition-transform duration-500">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
                      </svg>
                    </div>
                    <div className="space-y-1.5">
                      {[12, 16, 20, 24].map((w, i) => (
                        <div 
                          key={i} 
                          className={`h-${i === 3 ? '10' : (i + 1) * 2} bg-green-500/20 rounded-lg border border-green-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500`}
                          style={{ width: `${w * 4}px`, animation: 'grow-stack 0.6s ease-out forwards', animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Booking Card */}
                  <div className="bg-white p-5 rounded-[28px] shadow-2xl border border-gray-50 flex items-center gap-4 animate-float-slow transition-transform group-hover:scale-110">
                    <div className="w-12 h-12 bg-[#180A5C] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/20">
                      <div className="w-4 h-4 border-2 border-white rounded-full animate-pulse-soft" />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-gray-900">Andy booked a call</p>
                      <p className="text-[11px] text-gray-400">Authority Gap: Closed</p>
                    </div>
                  </div>
                </div>

              </div>
            </CardHeader>
            <div className="p-10">
              <h3 className="text-[26px] font-bold text-[#111827] mb-4">Authority Before Conversion</h3>
              <p className="text-gray-500 text-[16px] leading-relaxed font-medium">
                Trust compounds before revenue does. We engineer for authority first, pipeline second.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};