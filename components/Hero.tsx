'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden" style={{ backgroundColor: '#064a61' }}>
      {/* Gradient Overlay - Desktop Only */}
      <div className="hidden lg:block absolute inset-0 gradient-overlay z-0"></div>
      
      {/* Background Image - Desktop Only */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <Image
          src="/img/hero.png"
          alt="Hero Background"
          fill
          className="object-contain object-center opacity-20"
          style={{ objectPosition: 'center 30%' }}
          priority
        />
      </div>

      {/* Mobile Hero Image - Above Text */}
      <div className="lg:hidden w-full pt-24 pb-8 px-4 flex justify-center relative z-10">
        <div className="w-full max-w-md">
          <Image
            src="/img/hero-m.png"
            alt="Hero"
            width={600}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex-1 flex items-center">
        <div className={`max-w-4xl text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 lg:mb-8 leading-tight">
            Fueling Ambition, Igniting Innovation, and Accelerating Growth.
          </h1>
          <p className="text-lg md:text-xl lg:text-3xl text-white/90 mb-8 lg:mb-12 font-light">
            NAVIGATING YOUR BUSINESS IN THE RIGHT DIRECTION.
          </p>
          <div className="flex justify-center pb-8 lg:pb-0">
            <a
              href="https://calendly.com/og26/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 lg:px-10 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden lg:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
