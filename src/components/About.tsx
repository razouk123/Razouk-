import React from 'react';
import { Sparkles, Leaf, Users, Shield, Compass } from 'lucide-react';

export default function About() {
  const familyLoungeImage = '/src/assets/images/outdoor_seating_lounge_1782995667644.jpg';

  const pillars = [
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Family Comfort First',
      desc: 'We design layouts where children play safely on low-maintenance premium grass, and parents host elegant dinners under handcrafted pergolas.',
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: 'Water-Smart Nature',
      desc: 'Our intelligent irrigation networks balance the region’s soil hydration, delivering perfect green hues while respecting resource footprinting.',
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Durability Guaranteed',
      desc: 'By pairing premium UV-stabilized grass with advanced base layers, we build gardens designed to stay lush and safe through intensive summer heat.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-stone-50 border-t border-stone-150 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Row: Split image & narrative text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Side (Col 5) */}
          <div className="lg:col-span-5 relative order-last lg:order-first">
            {/* Visual Frame */}
            <div className="relative aspect-[3/4] max-h-[580px] rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
              <img
                src={familyLoungeImage}
                alt="More Space For Life Luxury Villa Seating"
                className="absolute inset-0 w-full h-full object-cover scale-102 hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent"></div>
              
              {/* Overlay Badge with slogan */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md rounded-2xl border border-stone-100 shadow-lg">
                <span className="font-serif italic text-emerald-800 text-sm font-semibold block mb-1">
                  "Moments that turn land into a lifestyle"
                </span>
                <span className="font-sans text-[10px] uppercase font-bold text-stone-500 tracking-wider">
                  Luqman Khuhro Design Creed
                </span>
              </div>
            </div>

            {/* Decorative backcard */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-emerald-800/10 rounded-3xl -z-10"></div>
          </div>

          {/* Slogans & Pillars side (Col 7) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-1.5 text-emerald-800 font-sans text-xs font-bold uppercase tracking-widest mb-3">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Our Philosophy</span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-5">
                More Space for Life.<br />
                <span className="text-emerald-700 font-serif font-semibold italic">
                  More Meaning for Families.
                </span>
              </h2>

              <p className="font-sans text-stone-600 text-sm sm:text-base font-light leading-relaxed mb-4">
                At Luqman Khuhro Landscaping, we believe that your villa garden is more than just square footage—it’s an extension of your family’s home, a sanctuary of tranquility, and the address of your freedom.
              </p>

              <p className="font-sans text-stone-600 text-sm font-light leading-relaxed">
                By blending premium, high-density artificial grass with smart automated irrigation and handcrafted pergolas, we build gardens where life is beautiful, healthy, and completely hassle-free.
              </p>
            </div>

            {/* Structured Pillars Grid */}
            <div className="space-y-5 border-t border-stone-200/60 pt-8">
              <h3 className="font-serif font-bold text-xs uppercase tracking-wider text-stone-950">
                What Sets Our Gardens Apart
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pillars.map((pillar, idx) => (
                  <div key={idx} className="flex gap-3.5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100 flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-stone-900">
                        {pillar.title}
                      </h4>
                      <p className="font-sans text-stone-500 text-xs leading-normal mt-1">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
