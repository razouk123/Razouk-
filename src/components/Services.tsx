import React, { useState } from 'react';
import { Service } from '../types';
import { Compass, Droplet, Sprout, CheckCircle2, ShieldAlert, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const pathwayImage = '/src/assets/images/garden_pathway_detail_1782995684398.jpg';

  const services: Service[] = [
    {
      id: 'landscape-design',
      title: 'Landscape Design & Installation',
      description: 'Custom landscape designs and complete installation to bring your vision to life.',
      longDescription: 'Our signature service turns bare villa backyards into bespoke luxury havens. We handle the entire lifecycle, blending lush foliage with structural hardscapes, custom walkways, and atmospheric night lighting designed to withstand the region’s climate.',
      image: pathwayImage,
      badges: ['Custom Planning', 'Professional Installation', 'Elegant Outdoor Spaces'],
      features: [
        '3D Backyard Spatial Layouts',
        'Tropical & Desert Flora Curation',
        'Natural & Sawn Stone Pathway Paving',
        'Luxury Pergola & Gazebo Hardscapes',
        'Atmospheric Smart Lighting Design',
      ],
      benefits: [
        { title: 'Bespoke Aesthetics', desc: 'Individually crafted designs that reflect your home’s architecture.' },
        { title: 'Climatic Hardiness', desc: 'Sourced plants that thrive in high temperatures with elegant grace.' },
      ],
    },
    {
      id: 'artificial-grass',
      title: 'Artificial Grass Installation',
      description: 'High-quality artificial grass for a lush green look all year round.',
      longDescription: 'Achieve a immaculate, vibrant lawn without the heavy water bills or constant mowing. We install high-density, multi-tone artificial turf with professional sub-base preparation for a realistic touch and perfect year-round drainage.',
      image: 'https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&q=80&w=1000',
      badges: ['All-Season Greenery', 'Low Maintenance', 'Premium Finish'],
      features: [
        'Premium Multi-Tone Realistic Fibers',
        'Sub-base Preparation & Grading',
        'Perfect Perimeter Securing',
        'Eco-Friendly, Non-Toxic, Pet-Safe',
        'Advanced Underground Drainage Systems',
      ],
      benefits: [
        { title: 'Zero Maintenance', desc: 'No watering, fertilizing, or weekly lawn mowing required.' },
        { title: 'Durability Guaranteed', desc: 'UV-stabilized turf that stays vibrant green even under intense sun.' },
      ],
    },
    {
      id: 'irrigation-system',
      title: 'Irrigation System Installation',
      description: 'Efficient irrigation systems to keep your garden healthy and green.',
      longDescription: 'Maximize plant vitality while minimizing water waste. We build customized automated irrigation networks using micro-drip emitters, pop-up sprinklers, and smart controllers connected to local weather data for perfect watering schedules.',
      image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=1000',
      badges: ['Water Efficiency', 'Healthy Green Lawns', 'Smart Coverage'],
      features: [
        'Smart Wifi-Enabled Irrigation Timers',
        'Zoned Micro-Drip Root Irrigation',
        'Pop-up Sprinkler Uniform Coverage',
        'Automatic Weather Adjustments',
        'Leak Detection & Pressure Regulation',
      ],
      benefits: [
        { title: 'Eco Savings', desc: 'Reduces irrigation water bills by up to 45% via smart zoning.' },
        { title: 'Optimal Growth', desc: 'Emitters distribute correct hydration quantity right to root lines.' },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(services[0].id);
  const selectedService = services.find((s) => s.id === activeTab) || services[0];

  const whatsappNumber = '+971585385005';
  const getInquireUrl = (serviceTitle: string) =>
    `https://wa.me/${whatsappNumber}?text=Hi%20Luqman%20Khuhro%20Landscaping,%20I%20am%20interested%20in%20inquiring%20about%20your%20${encodeURIComponent(
      serviceTitle
    )}%20service.`;

  return (
    <section id="services" className="py-24 bg-stone-50 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-100/60 px-3.5 py-1.5 rounded-full">
            Our Premium Services
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950 mt-4 tracking-tight leading-tight">
            Designed for Elite Lifestyles
          </h2>
          <p className="font-sans text-stone-600 text-sm sm:text-base font-light mt-3 leading-relaxed">
            From modern concept design to precision field installation, we bring premium artistry and smart engineering to Dubai’s most exclusive residential villas.
          </p>
        </div>

        {/* Tab Buttons for Desktop / Single column picker for Mobile */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {services.map((service) => {
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-sm cursor-pointer border ${
                  isActive
                    ? 'bg-emerald-800 text-white border-emerald-800 shadow-emerald-100'
                    : 'bg-white text-stone-700 hover:text-emerald-700 hover:bg-stone-50 border-stone-200'
                }`}
              >
                {service.id === 'landscape-design' && <Compass className="w-4 h-4" />}
                {service.id === 'artificial-grass' && <Sprout className="w-4 h-4" />}
                {service.id === 'irrigation-system' && <Droplet className="w-4 h-4" />}
                <span>{service.title.split(' ')[0]} {service.title.split(' ')[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Service Feature Panel */}
        <div className="bg-white rounded-3xl border border-stone-200/60 shadow-xl shadow-stone-100 overflow-hidden transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Showcase Image Side */}
            <div className="relative h-64 sm:h-96 lg:h-auto min-h-[340px] bg-stone-900">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Image Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/25"></div>
              
              {/* Badges on the Image */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                {selectedService.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-950/80 backdrop-blur border border-emerald-400/30 text-emerald-200 text-xs font-semibold uppercase tracking-wider shadow-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Information Details Side */}
            <div className="p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-emerald-700 mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-sans text-xs font-bold uppercase tracking-widest">
                    Luqman Khuhro Standard
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 mb-4 leading-tight">
                  {selectedService.title}
                </h3>
                <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed font-light mb-8">
                  {selectedService.longDescription}
                </p>

                {/* Features List */}
                <h4 className="font-serif font-bold text-stone-950 text-sm tracking-wider uppercase mb-3">
                  Scope of Delivery
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="font-sans text-stone-700 text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Benefit Highlights */}
                <div className="border-t border-stone-100 pt-6 mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {selectedService.benefits.map((benefit, idx) => (
                    <div key={idx}>
                      <h5 className="font-serif font-semibold text-stone-900 text-sm">
                        {benefit.title}
                      </h5>
                      <p className="font-sans text-stone-500 text-xs leading-normal mt-1">
                        {benefit.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Rows */}
              <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-stone-100 pt-8 mt-10">
                <a
                  href={getInquireUrl(selectedService.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 text-white rounded-full font-semibold text-xs tracking-wider uppercase shadow-md transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <button
                  onClick={() => onSelectService(selectedService.id)}
                  className="flex items-center justify-center gap-1.5 w-full sm:w-auto px-6 py-3.5 text-emerald-800 hover:text-emerald-900 font-semibold text-xs tracking-wider uppercase group cursor-pointer"
                >
                  <span>Pre-Plan This Garden Space</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
