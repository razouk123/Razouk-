import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Award, ThumbsUp } from 'lucide-react';

interface HeroProps {
  onStartPlanning: () => void;
  onContactClick: () => void;
}

export default function Hero({ onStartPlanning, onContactClick }: HeroProps) {
  const heroImage = '/src/assets/images/hero_villa_garden_1782995653670.jpg';
  
  const whatsappNumber = '+971585385005';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Luqman%20Khuhro%20Landscaping,%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20my%20villa%20garden.`;

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-950">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Villa Garden Landscaping Dubai"
          className="w-full h-full object-cover scale-105 animate-subtle-zoom opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-radial-vignette from-transparent via-stone-950/70 to-stone-950"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-900/40 to-stone-950"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        {/* Elite Dubai Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 text-emerald-400 mb-6 font-sans text-xs font-semibold tracking-widest uppercase">
          <Award className="w-3.5 h-3.5" />
          <span>Premier Villa Landscaping in Dubai</span>
        </div>

        {/* Elegant Display Headings */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          Crafting Nature.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-100 to-emerald-400">
            Elevating Life.
          </span>
        </h1>

        {/* Subtitle / Elegant Paragraph */}
        <p className="max-w-2xl mx-auto font-sans text-stone-300 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-10">
          The Address of Freedom. Turn your villa garden into a beautiful green paradise with our landscaping experts. Custom design, premium artificial grass, and smart irrigation.
        </p>

        {/* Interactive Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onStartPlanning}
            className="group flex items-center gap-2 w-full sm:w-auto justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-sans text-sm font-semibold tracking-wider uppercase rounded-full shadow-lg hover:shadow-emerald-900/30 transition-all duration-300 cursor-pointer"
          >
            <span>Start Yard Design Planner</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-full sm:w-auto justify-center px-8 py-4 bg-stone-900/90 hover:bg-stone-850 active:bg-stone-950 border border-stone-800 text-stone-100 font-sans text-sm font-semibold tracking-wider uppercase rounded-full transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4 fill-emerald-500 text-emerald-500" />
            <span>Consult on WhatsApp</span>
          </a>
        </div>

        {/* Floating Core Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          <div className="flex items-start gap-3.5 p-4.5 rounded-2xl bg-stone-900/40 backdrop-blur-sm border border-stone-800/50">
            <div className="p-2.5 rounded-xl bg-emerald-950/50 text-emerald-400 border border-emerald-900/50">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-white text-sm tracking-wide">
                Custom Craftsmanship
              </h3>
              <p className="font-sans text-xs text-stone-400 leading-normal mt-1">
                Individually scaled landscape plans matching your villa's modern structure.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4.5 rounded-2xl bg-stone-900/40 backdrop-blur-sm border border-stone-800/50">
            <div className="p-2.5 rounded-xl bg-emerald-950/50 text-emerald-400 border border-emerald-900/50">
              <ThumbsUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-white text-sm tracking-wide">
                Water-Efficient Tech
              </h3>
              <p className="font-sans text-xs text-stone-400 leading-normal mt-1">
                Advanced smart irrigation systems saving water while maintaining deep lush greens.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4.5 rounded-2xl bg-stone-900/40 backdrop-blur-sm border border-stone-800/50">
            <div className="p-2.5 rounded-xl bg-emerald-950/50 text-emerald-400 border border-emerald-900/50">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-white text-sm tracking-wide">
                Turnkey Solutions
              </h3>
              <p className="font-sans text-xs text-stone-400 leading-normal mt-1">
                From luxury planning to artificial grass & irrigation installation. All under one roof.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Fade to Bottom Section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-stone-950 to-transparent"></div>
    </section>
  );
}
