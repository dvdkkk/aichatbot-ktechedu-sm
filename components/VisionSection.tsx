
import React, { useRef, useState, useEffect, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const VisionSection: React.FC = () => {
  const [startAnimate, setStartAnimate] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimate(true);
        }
      },
      { threshold: 0.5 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="vision" className="py-24 bg-black relative border-b border-zinc-900 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Emoji Header */}
        <Reveal className="mb-8">
          <div className="text-6xl mb-6 animate-bounce">😎</div>
          <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
            모든 기업이 원하는 AI 챗봇,<br />
            <span className="text-yellow-400">자체 개발자로 고연봉 취업!</span>
          </h2>
        </Reveal>

        {/* Separator Dots */}
        <Reveal delay={100} className="mb-12 flex flex-col gap-2">
          <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full mx-auto"></div>
          <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full mx-auto"></div>
          <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full mx-auto"></div>
        </Reveal>

        {/* Chart Section */}
        <div ref={chartRef} className="w-full max-w-lg mx-auto mb-16 px-4">
          <Reveal delay={200} className="mb-10">
            <h3 className="text-zinc-300 text-sm font-bold uppercase tracking-widest">
              챗봇 도입에 대한 기업체 수요
            </h3>
          </Reveal>

          <div className="relative h-80 flex items-end justify-center gap-12 md:gap-20 border-b border-zinc-800 pb-4">
            {/* Growth Arrow Overlay */}
            <div className={`absolute left-1/2 bottom-12 -translate-x-1/2 w-48 transition-all duration-1000 delay-500 ${startAnimate ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
               <svg viewBox="0 0 200 100" fill="none" className="w-full h-auto text-purple-500/40">
                 <path d="M10 90 Q 60 40 190 10" stroke="currentColor" strokeWidth="4" strokeDasharray="5,5" />
                 <path d="M180 20 L 192 8 L 180 2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
               </svg>
            </div>

            {/* 2021 Bar */}
            <div className="flex flex-col items-center gap-4 w-24 z-10">
              <div className="relative w-full">
                <div 
                  className={`w-full bg-zinc-800/80 rounded-t-lg transition-all duration-1000 ease-out origin-bottom`}
                  style={{ height: startAnimate ? '40px' : '0px' }}
                >
                  <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-500 text-[10px] md:text-xs font-bold transition-opacity duration-500 delay-1000 ${startAnimate ? 'opacity-100' : 'opacity-0'}`}>
                    5.6%
                  </span>
                </div>
              </div>
              <span className="text-zinc-500 text-sm font-bold">2021</span>
            </div>

            {/* 2026 Bar */}
            <div className="flex flex-col items-center gap-4 w-24 z-10">
              <div className="relative w-full">
                <div className={`absolute -top-10 left-1/2 -translate-x-1/2 text-white text-2xl font-black transition-all duration-500 delay-1000 ${startAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  68.6
                </div>
                <div 
                  className={`w-full bg-gradient-to-t from-purple-900 via-purple-600 to-purple-400 rounded-t-lg transition-all duration-1000 ease-out origin-bottom shadow-[0_0_40px_rgba(147,51,234,0.3)]`}
                  style={{ height: startAnimate ? '220px' : '0px' }}
                >
                  <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xs md:text-sm font-black transition-opacity duration-500 delay-1000 ${startAnimate ? 'opacity-100' : 'opacity-0'}`}>
                    74.2%
                  </span>
                </div>
              </div>
              <span className="text-white text-sm font-bold">2026</span>
            </div>
          </div>

          <Reveal delay={400} className="mt-6">
            <p className="text-zinc-600 text-xs">
              협약 기업 챗봇 도입 수요 조사 결과
            </p>
          </Reveal>
        </div>

        {/* Final CTA Text */}
        <Reveal delay={500} className="space-y-6">
          <p className="text-zinc-400 text-base md:text-xl font-medium leading-relaxed">
            이젠 IT 직종이 아니더라도<br className="md:hidden" /> AI 챗봇 자체 개발은 필수입니다.
          </p>
          <div className="pt-4">
            <h4 className="text-2xl md:text-5xl font-black text-white bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500">
              비전공자도 경력자로!<br />
              <span className="text-white">한국직업능력교육원</span>
            </h4>
          </div>
        </Reveal>

      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]"></div>
      </div>
    </section>
  );
};
