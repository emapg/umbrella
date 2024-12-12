import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(containerRef.current.children, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      delay: 0.5
    });
  }, []);

  return (
    <div ref={containerRef} className="text-center space-y-6 p-8 bg-black/30 backdrop-blur-lg rounded-xl">
      <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 transform hover:scale-105 transition-transform duration-300">
        Creative Developer
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 transform hover:translate-y-[-5px] transition-transform duration-300">
        Bringing ideas to life through code and design
      </p>
      <button className="group relative px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
        <span className="relative z-10">Explore Portfolio</span>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
    </div>
  );
}