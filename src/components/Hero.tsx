import React, { useEffect, useRef } from 'react';
import { Zap, CheckCircle, ArrowRight } from 'lucide-react';

export function Hero() {
  const vineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (vineRef.current) {
        const scrolled = window.scrollY;
        const rotation = Math.min(scrolled / 10, 15);
        const translateX = Math.min(scrolled / 5, 50);
        vineRef.current.style.transform = `rotate(${rotation}deg) translateX(${translateX}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="hero" className="relative px-6 md:px-12 pt-20 pb-32 grid md:grid-cols-2 gap-12 items-center bg-[#111111] overflow-hidden">
      <div className="absolute inset-0 jungle-gradient"></div>
      
      <div ref={vineRef} className="absolute right-0 top-0 h-full w-[400px] overflow-visible" style={{ zIndex: 1 }}>
        <svg 
          viewBox="0 0 400 1000" 
          className="w-full h-full" 
          style={{ 
            position: 'absolute',
            right: '-200px',
            top: '0'
          }}
        >
          <path
            d="M200,0 C300,200 100,400 200,600 S100,800 200,1000"
            className="vine-path"
            fill="none"
            stroke="rgba(77, 124, 255, 0.15)"
            strokeWidth="4"
          />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={i} transform={`translate(${190 + (i % 2) * 20}, ${i * 200})`}>
              <path
                d="M0,0 C10,-20 30,-20 40,0"
                fill="rgba(77, 124, 255, 0.1)"
              />
              <path
                d="M0,0 C10,20 30,20 40,0"
                fill="rgba(77, 124, 255, 0.1)"
              />
            </g>
          ))}
        </svg>
      </div>

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/80 mb-6 hover:bg-white/20 transition-colors cursor-pointer group backdrop-blur-sm">
          <Zap className="w-4 h-4 group-hover:text-[#4D7CFF] transition-colors" />
          <span>Trusted by 100+ Amazon Sellers</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
          Scale Your <span className="text-[#4D7CFF] italic">Amazon</span><br />
          Business With<br />
          <span className="relative">
            Experts
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
              <path d="M0,0 Q50,8 100,0" stroke="#4D7CFF" strokeWidth="2" fill="none"/>
            </svg>
          </span>
        </h1>
        <p className="text-gray-400 mt-8 text-lg leading-relaxed">
          We help brands scale on Amazon through data-driven optimization and proven growth strategies.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <input 
              type="email" 
              placeholder="Enter your email..." 
              className="w-full bg-[#222222] text-white px-6 py-4 rounded-xl border border-gray-700 focus:outline-none focus:border-[#4D7CFF] transition-colors backdrop-blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#4D7CFF]/0 via-[#4D7CFF]/5 to-[#4D7CFF]/0 rounded-xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
          <button className="group bg-[#4D7CFF] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#3D6CFF] transition-all duration-300 hover:scale-105 transform hover:shadow-lg shadow-[#4D7CFF]/20 flex items-center gap-2 backdrop-blur-sm">
            Get A Free Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-10 space-y-4">
          <div className="flex items-center gap-3 text-gray-300 group cursor-pointer">
            <CheckCircle className="w-5 h-5 text-[#4D7CFF] group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-white transition-colors">Full-service Amazon management</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300 group cursor-pointer">
            <CheckCircle className="w-5 h-5 text-[#4D7CFF] group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-white transition-colors">7-figure brand experience</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300 group cursor-pointer">
            <CheckCircle className="w-5 h-5 text-[#4D7CFF] group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-white transition-colors">146% YOY average revenue growth</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 relative shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
          <div className="absolute -top-4 left-8 bg-[#4D7CFF] text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            <span className="font-medium">Trusted Amazon Partner</span>
          </div>
          
          <img 
            src="https://voyagela.com/wp-content/uploads/2022/12/c-TravisMarziani__PassionProductLive73048_1669274437235.jpg"
            alt="Travis Marziani - Amazon Expert"
            className="w-full h-[400px] object-cover rounded-2xl hover:shadow-xl transition-shadow duration-300"
          />

          <div className="mt-6 bg-[#4D7CFF] text-white p-8 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 backdrop-blur-sm">
            <div className="text-4xl font-bold">$50M+</div>
            <p className="mt-2 text-white/90 text-lg">Annual revenue managed</p>
            <div className="mt-6 flex -space-x-3">
              {[1,2,3,4].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/40?img=${i}`}
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer"
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-sm font-medium hover:scale-110 transition-transform duration-300 cursor-pointer ml-1">
                +50
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-lg px-8 py-4 rounded-2xl flex items-center gap-4 shadow-lg z-20 animate-float">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">A+</div>
          </div>
          <span className="text-white font-medium">Verified Amazon Expert</span>
        </div>
      </div>

      <div className="hero-curve">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  );
}