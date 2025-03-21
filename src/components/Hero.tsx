
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Golf driving range"
          className="w-full h-full object-cover image-fade"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 z-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Perfect Your <span className="text-golf-light">Golf Swing</span> at Jim's Driving Range
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8">
          Kitchener's premier driving range with 40 hitting mats and a relaxed atmosphere
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#pricing" 
            className="px-8 py-3 bg-golf hover:bg-golf-dark text-white font-medium rounded-md transition-colors shadow-lg"
          >
            View Pricing
          </a>
          <a 
            href="#location" 
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md transition-colors backdrop-blur-sm border border-white/30"
          >
            Find Our Location
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-scroll-down">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
