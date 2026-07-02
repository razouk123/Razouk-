import React from 'react';
import { Testimonial } from '../types';
import { Star, Quote, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      id: 'rev-1',
      name: 'Tareq Al Mazrouei',
      role: 'Villa Owner',
      location: 'Signature Villas, Palm Jumeirah',
      text: 'Luqman Khuhro Landscaping transformed our sandy beach garden into an absolute paradise. The artificial grass is incredibly thick, feels natural, and stays surprisingly cool even in midday heat. The irrigation system is fully smart and runs quietly on timers. Phenomenal work!',
      rating: 5,
    },
    {
      id: 'rev-2',
      name: 'Elizabeth & Richard',
      role: 'Residential Clients',
      location: 'The Nest, Al Barari',
      text: 'Their design team drafted detailed spatial layouts before starting any work. The installation of the stone pathway paired with the lush garden plantings and low-voltage lighting completely transformed our evenings. It has truly added more space for life for our kids.',
      rating: 5,
    },
    {
      id: 'rev-3',
      name: 'Hamdan Al Maktoum',
      role: 'Estate Owner',
      location: 'Sector L, Emirates Hills',
      text: 'Extremely professional team. They executed our courtyard artificial grass and irrigation zones with pristine attention to detail. Our water bills have dropped significantly thanks to their micro-drip zonal calibration. If you need landscaping in Dubai, look no further.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white border-y border-stone-200/60 relative overflow-hidden">
      {/* Small design accents */}
      <div className="absolute top-10 left-10 text-stone-100 font-serif text-[120px] select-none leading-none pointer-events-none opacity-40">
        “
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-100/60 px-3.5 py-1.5 rounded-full">
            Our Reputation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950 mt-4 tracking-tight leading-tight">
            Loved by Premium Homeowners
          </h2>
          <p className="font-sans text-stone-600 text-sm sm:text-base font-light mt-3 leading-relaxed">
            Read what luxury villa owners across Dubai’s most exclusive communities say about their custom gardens, artificial grass installations, and automated irrigation.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-stone-50 border border-stone-200/50 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                {/* Stars Row */}
                <div className="flex items-center gap-1 text-amber-500 mb-6">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-stone-700 text-xs sm:text-sm font-light leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Client Info Block */}
              <div className="border-t border-stone-200/60 pt-5 mt-5 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-stone-900 leading-tight">
                    {rev.name}
                  </h4>
                  <span className="font-sans text-[10px] text-stone-500 block mt-0.5">
                    {rev.role}
                  </span>
                </div>
                
                <span className="font-sans text-[10px] font-bold text-emerald-800 bg-emerald-100/70 px-2 py-1 rounded tracking-wide uppercase">
                  {rev.location.split(',')[1]?.trim() || rev.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
