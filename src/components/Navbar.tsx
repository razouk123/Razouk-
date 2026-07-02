import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Phone, MessageSquare, Calendar } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Design Planner', id: 'planner' },
    { label: 'Before & After', id: 'gallery' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Testimonials', id: 'testimonials' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  const whatsappNumber = '+971585385005';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Luqman%20Khuhro%20Landscaping,%20I%20would%20like%20to%20inquire%20about%20your%20landscaping%20services.`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button onClick={() => handleNavClick('home')} className="focus:outline-none">
            <Logo light={!isScrolled} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-emerald-600 font-semibold'
                    : isScrolled
                    ? 'text-stone-600 hover:text-emerald-600'
                    : 'text-stone-200 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Direct Line */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-sans text-xs font-semibold tracking-wider uppercase border transition-all duration-200 ${
                isScrolled
                  ? 'border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100'
                  : 'border-white/30 text-white bg-white/10 hover:bg-white/20'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>+971 585385005</span>
            </a>

            {/* Site Consult Booking Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`flex items-center gap-1.5 px-4.5 py-2 rounded-full font-sans text-xs font-semibold tracking-wider uppercase shadow-sm transition-all duration-200 ${
                isScrolled
                  ? 'bg-emerald-800 text-white hover:bg-emerald-900 hover:shadow'
                  : 'bg-white text-emerald-900 hover:bg-emerald-50'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Free Consult</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-stone-700 hover:bg-stone-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-white z-40 flex flex-col justify-between p-6 border-t border-stone-100 shadow-xl overflow-y-auto">
          <nav className="flex flex-col gap-5 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-lg font-medium py-2 border-b border-stone-50 ${
                  activeSection === item.id
                    ? 'text-emerald-700 font-semibold pl-2 border-emerald-500'
                    : 'text-stone-700 hover:text-emerald-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-6 border-t border-stone-100">
            {/* Quick Info */}
            <p className="text-center text-xs text-stone-500 font-serif tracking-wide italic">
              "Transforming Outdoors, Enhancing Lifestyles"
            </p>
            
            {/* WhatsApp Link */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl font-semibold text-sm"
            >
              <MessageSquare className="w-4 h-4 fill-emerald-800" />
              <span>Contact via WhatsApp</span>
            </a>

            {/* Consult Booking Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-800 hover:bg-emerald-950 text-white rounded-xl font-semibold text-sm shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Site Consult</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
