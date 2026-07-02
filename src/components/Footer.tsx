import React from 'react';
import Logo from './Logo';
import { MessageSquare, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Design Planner', id: 'planner' },
    { label: 'Before & After', id: 'gallery' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Testimonials', id: 'testimonials' },
  ];

  const whatsappNumber = '+971585385005';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Luqman%20Khuhro%20Landscaping,%20I%20would%20like%20to%20request%20more%20information%20about%20your%20services.`;

  return (
    <footer className="bg-stone-950 text-stone-400 font-sans border-t border-stone-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-stone-900 pb-12 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Logo light />
            <p className="text-xs text-stone-500 font-sans font-light leading-relaxed max-w-sm">
              We specialize in turning sand into custom luxury lifestyle spaces. From modern 3D design to flawless artificial grass and water-efficient smart irrigation.
            </p>
            <div className="flex items-center gap-3 pt-2 text-stone-500">
              <a href="#" className="hover:text-emerald-400 transition" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-emerald-400 transition" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-emerald-400 transition cursor-pointer text-left focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-white">
              Contact & Support
            </h4>
            
            <ul className="space-y-3 text-xs font-light">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <a href={`tel:${whatsappNumber}`} className="hover:text-emerald-400 transition">
                  +971 585385005
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/20" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                  WhatsApp Direct Support
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                <span>Dubai, United Arab Emirates</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-stone-600">
          <div>
            &copy; {currentYear} Luqman Khuhro Landscaping Dubai. All Rights Reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-stone-500 transition">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-stone-500 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
