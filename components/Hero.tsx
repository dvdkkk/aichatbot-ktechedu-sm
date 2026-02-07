import React from 'react';
import { ArrowRight, Star, Calendar, Clock, MapPin, Home, UserCheck, Flame } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

export const Hero: React.FC = () => {
  const { content } = useContent();
  const { hero } = content;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Icon mapping for stats (Recruitment Summary)
  const statIcons = [
    <Flame size={16} className="text-red-500 animate-pulse" />,
    <Clock size={16} className="text-yellow-400" />,
    <Calendar size={16} className="text-yellow-400" />,
    <MapPin size={16} className="text-yellow-400" />,
    <Home size={16} className="text-yellow-400" />,
    <UserCheck size={16} className="text-yellow-400" />,
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      
      {/* Background Spline 3D Design */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#000000_100%)]" />
        
        {/* Spline Position Adjusted Upwards (-translate-y-56) */}
        <div className="absolute inset-0 opacity-60 md:opacity-80 scale-[0.6] md:scale-[0.55] -translate-y-48 md:-translate-y-56 pointer-events-none transition-all duration-1000">
           <iframe 
            src='https://my.spline.design/genkubgreetingrobot-wZzvYvqwHBprarK5vEX2Ngva/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            style={{ width: '100%', height: '100%' }}
            title="Hero Background Robot"
          ></iframe>
        </div>

        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black pointer-events-none" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-400/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50" />
      </div>

      <div className="container mx-auto px-4 z-10 relative text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 mb-6 animate-fade-in-up shadow-[0_0_20px_rgba(250,204,21,0.1)]">
          <Star size={14} fill="currentColor" />
          <span className="text-xs font-bold tracking-wide">{hero.badge}</span>
        </div>
        
        <h1 className="text-3xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
          {hero.title} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
            {hero.highlight}
          </span>로 거듭나세요
        </h1>
        
        <p className="text-base md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed whitespace-pre-line drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
          {hero.description}
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#consultation" 
            onClick={(e) => handleNavClick(e, '#consultation')}
            className="group w-full md:w-auto px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black text-lg font-black rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(250,204,21,0.4)]"
          >
            국비지원 무료상담 신청하기
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#courses" 
            onClick={(e) => handleNavClick(e, '#courses')}
            className="w-full md:w-auto px-8 py-4 bg-zinc-900/80 backdrop-blur-md hover:bg-zinc-800 text-white text-lg font-bold rounded-xl transition-all border border-zinc-700 shadow-xl"
          >
            교육과정 자세히 보기
          </a>
        </div>

        {/* Recruitment Info Summary (6 Items) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full border-t border-white/10 pt-10 bg-black/10 backdrop-blur-sm rounded-2xl">
          {hero.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-yellow-400/30 transition-colors group">
              <div className="flex items-center gap-2 mb-2">
                {statIcons[idx]}
                <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
              <p className={`text-sm md:text-lg font-black break-keep ${stat.value === '모집 중' ? 'text-yellow-400' : 'text-white'}`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
