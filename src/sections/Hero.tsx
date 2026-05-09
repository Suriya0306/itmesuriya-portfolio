// @ts-nocheck
import { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen bg-white overflow-hidden flex flex-col items-center justify-center p-0"
    >
      {/* "PORTFOLIO" large outline text — far behind everything */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1
          className="text-[25vw] md:text-[22vw] font-black tracking-widest text-transparent uppercase opacity-[0.08] select-none leading-none"
          style={{ WebkitTextStroke: '2px #9ca3af' }}
        >
          Portfolio
        </h1>
      </div>

      {/* "MY" decorative text — top left */}
      <div className="absolute top-12 left-4 md:left-20 pointer-events-none z-10">
        <h2
          className="text-6xl md:text-9xl leading-none text-gray-800 -rotate-[12deg] select-none"
          style={{
            fontFamily: "'Permanent Marker', 'Brush Script MT', cursive",
            textShadow: '2px 2px 10px rgba(0,0,0,0.1)'
          }}
        >
          My
        </h2>
      </div>

      {/* CENTRAL PORTRAIT + "Suriya" overlay wrapper */}
      <div className="relative w-full max-w-lg md:max-w-4xl h-full flex items-center justify-center z-20 transition-all duration-1000">

        {/* Portrait image */}
        <img
          src="./upload/image.png"
          alt="Suriya - Web Developer"
          className="relative z-10 w-full h-[85vh] object-contain drop-shadow-2xl animate-float"
        />

        {/* "Suriya" large cursive script — overlaid across upper body of image */}
        <div
          className="absolute z-20 pointer-events-none w-full"
          style={{ top: '25%' }}
        >
          <h2
            className="text-[22vw] md:text-[16vw] leading-none select-none text-center whitespace-nowrap opacity-50"
            style={{
              fontFamily: "'Brush Script MT', 'Caveat', 'Dancing Script', cursive",
              color: 'rgba(100,100,100,0.4)',
              letterSpacing: '0.01em',
              textShadow: '0 0 50px rgba(255,255,255,0.5)'
            }}
          >
            Suriya
          </h2>
        </div>

        {/* Bottom white fade */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-30" />
      </div>

      {/* "Suriya N" name card — right side */}
      <div className="absolute right-4 md:right-20 top-1/2 -translate-y-1/2 z-40 border-l-4 border-blue-600 pl-4 py-2">
        <span className="text-gray-900 block text-lg md:text-3xl font-bold tracking-tight">
          Suriya <span className="text-blue-600">N</span>
        </span>
        <span className="text-gray-500 text-sm md:text-lg font-medium tracking-wide">Web Developer</span>
      </div>

      {/* Bottom intro text */}
      <div className="absolute bottom-12 left-4 md:left-20 z-40 max-w-[70%] md:max-w-md">
        <p className="text-gray-800 text-base md:text-xl font-light leading-relaxed tracking-wide">
          My Name is <span className="text-blue-600 font-bold">Suriya</span> and I am a <span className="italic font-medium">Freelance Web Developer</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
