import React, { useState, useEffect } from 'react';

interface GlowingButtonProps {
  text: React.ReactNode;
  compact?: boolean;
}

export const GlowingButton: React.FC<GlowingButtonProps> = ({ text, compact }) => {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => [
        ...prev.slice(-10),
        { 
          id: Date.now() + Math.random(), 
          x: Math.random() * 100, 
          y: Math.random() * 100, 
          size: Math.random() * 2 + 0.5 
        }
      ]);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      <div className="relative group">
        {/* Subtle brand blue border glow */}
        <div className="absolute -inset-[1.2px] bg-gradient-to-r from-[#180A5C] to-[#0D0339] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
        
        <button className={`relative bg-[#0e0e0e] text-white rounded-full font-bold z-10 hover:bg-black transition-all overflow-hidden border border-[#180A5C]/30 group shadow-xl
          ${compact 
            ? 'px-5 py-2 text-[12px] md:px-6 md:py-2 md:text-[13px]' 
            : 'px-5 py-2 text-[12px] md:px-8 md:py-3.5 md:text-[15px]'
          }
        `}>
          <span className="relative z-20 tracking-tight whitespace-nowrap">{text}</span>
          
          {/* Subtle Particles from brand blue */}
          {particles.map(p => (
            <span
              key={p.id}
              className="absolute pointer-events-none bg-[#180A5C] rounded-full animate-pulse opacity-30 z-10"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
              }}
            />
          ))}

          {/* Internal Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-10" />
        </button>
      </div>
    </div>
  );
};