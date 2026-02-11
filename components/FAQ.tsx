import React, { useState } from 'react';

const FAQ_ITEMS = [
  {
    question: "Which offer is right for me??",
    answer: "Most founders start with the D4Y(Done-For-You) LinkedIn GTM System.If you need clarity first, getting a free GTM Audit is the right entry point."
  },
  {
    question: "Should I commit for a long period of time to work with you?",
    answer: "We only take a select set of clients at a time. Building a sustainable, predictable, and robust GTM engine can take a few iterations. That's why we ask for a commitment of at least 3 months. This way we know you're in it with us. After that, we're fully invested - you're free to go whenever you want, and our role is to ensure you never do by earning your trust and delivering clear ROI every month."
  },
  {
    question: "How long do you need to launch a first campaign?",
    answer: "Typically, we go from strategy to live campaign in 14-21 days. This includes profile optimization, messaging framework development, and initial prospect list building."
  },
  {
    question: "How can you write content that resonates with my Ideal Customer Profile (ICP)?",
    answer: "We perform a deep dive into your market through our 4C's audit. We identify the pain points, aspirations, and language used by your specific prospects to ensure every piece of content feels like a personal solution."
  },
  {
    question: "How many outreach campaigns should I expect every month?",
    answer: "We focus on quality over quantity. Generally, we run 2-3 highly targeted micro-campaigns simultaneously, focusing on specific segments of your market for maximum relevance."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 md:px-14 lg:px-20 bg-white">
      <div className="w-full max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#DE275B] text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-2 block">FAQ</span>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-[#1a1a1a] tracking-tight mb-4 leading-[1.1]">
            Everything you <br className="hidden md:block" /> <span className="italic font-medium text-gray-500">need to know.</span>
          </h2>
        </div>

        <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto">
          {FAQ_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className="rounded-[24px] border border-gray-100 bg-white overflow-hidden transition-all duration-300 hover:border-[#DE275B]/30 hover:shadow-xl hover:shadow-[#DE275B]/[0.02]"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
              >
                <span className="text-base md:text-xl font-bold text-[#1a1a1a] pr-8 group-hover:text-[#DE275B] transition-colors leading-tight">
                  {item.question}
                </span>
                <span className={`text-xl md:text-2xl font-light transform transition-transform duration-300 flex-shrink-0 ${openIndex === idx ? 'rotate-180 text-[#DE275B]' : 'text-gray-300'}`}>
                  {openIndex === idx ? '−' : '+'}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-8 pt-0 text-gray-500 leading-relaxed font-medium text-[0.9rem] md:text-[1.1rem] max-w-3xl md:border-l-2 border-[#DE275B]/20 md:ml-8">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};