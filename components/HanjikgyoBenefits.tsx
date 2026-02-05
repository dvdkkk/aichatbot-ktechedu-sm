
import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { CreditCard, Banknote, Home } from 'lucide-react';

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
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const HanjikgyoBenefits: React.FC = () => {
  const benefits = [
    {
      id: 1,
      badge: "혜택 1",
      title: "국민내일배움카드 수강료 지원",
      description: "국민내일배움카드를 통해 교육비 부담 없이 실무 위주의 전문 교육을 수강할 수 있습니다.",
      icon: (
        <div className="relative w-48 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-[0_20px_50px_rgba(59,130,246,0.3)] transform -rotate-3 hover:rotate-0 transition-transform duration-500">
          <CreditCard className="text-white w-16 h-16" />
          <div className="absolute bottom-4 left-4 text-white/80 font-bold text-[10px] tracking-widest uppercase">국민내일배움카드</div>
          <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-400 rounded-full blur-[2px] opacity-80 animate-pulse"></div>
          {/* Floating coins effect */}
          <div className="absolute -left-4 -bottom-4 w-6 h-6 bg-yellow-500 rounded-full border-b-2 border-yellow-700 animate-bounce"></div>
          <div className="absolute -right-2 -top-2 w-4 h-4 bg-yellow-500 rounded-full border-b-2 border-yellow-700 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      )
    },
    {
      id: 2,
      badge: "혜택 2",
      title: "국취제도 연계 시 최대 70만원 지원 훈련장려금 지원",
      description: "훈련장려금 제도를 활용해 훈련기간 동안 실질적인 생활비 보탬을 받을 수 있습니다.",
      icon: (
        <div className="relative w-48 h-32 mx-auto mb-8 flex items-center justify-center">
          <div className="relative bg-emerald-500 w-40 h-20 rounded-lg flex items-center justify-center shadow-xl z-10">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-black text-2xl">₩</div>
            {/* Wings */}
            <div className="absolute -left-8 top-0 w-12 h-16 bg-white/30 rounded-full blur-[1px] transform -rotate-45 animate-pulse"></div>
            <div className="absolute -right-8 top-0 w-12 h-16 bg-white/30 rounded-full blur-[1px] transform rotate-45 animate-pulse"></div>
          </div>
          <div className="absolute inset-0 bg-emerald-400/20 blur-3xl rounded-full animate-pulse"></div>
        </div>
      )
    },
    {
      id: 3,
      badge: "혜택 3",
      title: "기숙사 운영",
      description: "원거리 수강생도 걱정 없이 참여할 수 있도록 쾌적한 기숙사를 운영합니다.",
      icon: (
        <div className="relative w-48 h-32 mx-auto mb-8 flex items-center justify-center transform hover:scale-110 transition-transform duration-500">
           <div className="relative w-32 h-32 bg-sky-100 rounded-lg border-b-4 border-sky-300 flex flex-col items-center justify-end overflow-hidden shadow-2xl">
              <div className="absolute top-0 w-full h-1/2 bg-sky-400 transform -skew-y-12 -translate-y-4"></div>
              <div className="w-8 h-12 bg-white border-x border-t border-sky-200 rounded-t-sm mb-4 z-10"></div>
              <div className="absolute top-4 left-4 w-4 h-4 bg-sky-200 rounded-sm"></div>
           </div>
           <div className="absolute inset-0 bg-sky-400/10 blur-2xl rounded-full"></div>
        </div>
      )
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-[#0a0a0a] border-t border-zinc-900 overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        
        {/* Header */}
        <Reveal className="mb-24">
          <span className="text-[#a855f7] font-bold text-lg mb-4 block">한직교 혜택</span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight break-keep">
            수강생의 성장을 위한<br />
            한직교 맞춤 혜택
          </h2>
        </Reveal>

        {/* Benefit Items */}
        <div className="space-y-32">
          {benefits.map((benefit, idx) => (
            <Reveal key={benefit.id} delay={idx * 100}>
              <div className="flex flex-col items-center group">
                {/* Badge */}
                <div className="inline-block bg-[#a855f7] text-white text-sm font-bold px-5 py-1.5 rounded-full mb-10 shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform">
                  {benefit.badge}
                </div>

                {/* Icon/Illustration Area */}
                <div className="mb-6">
                  {benefit.icon}
                </div>

                {/* Text Area */}
                <div className="max-w-xl mx-auto">
                  <h3 className="text-white text-2xl md:text-3xl font-black mb-6 tracking-tight leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed break-keep font-medium">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
