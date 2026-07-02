import React, { useState, useMemo } from 'react';
import { Compass, Sparkles, Send, MessageSquare, Check, HelpCircle, RefreshCw } from 'lucide-react';

export default function CostEstimator() {
  // Local state for interactive choices
  const [yardSize, setYardSize] = useState<'small' | 'medium' | 'large' | 'estate'>('medium');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'landscape-design',
    'smart-irrigation',
  ]);
  const [stylePreference, setStylePreference] = useState<string>('tropical');
  const [userName, setUserName] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [isAgreed, setIsAgreed] = useState(true);

  const yardSizes = [
    { id: 'small', label: 'Cozy Courtyard', size: 'Under 150 m²', factor: 0.7, desc: 'Ideal for townhouses & small villa side-yards.' },
    { id: 'medium', label: 'Standard Villa Yard', size: '150 - 400 m²', factor: 1.0, desc: 'Average size for detached luxury villas in Dubai.' },
    { id: 'large', label: 'Grand Garden', size: '400 - 850 m²', factor: 1.8, desc: 'Expansive backyard layouts requiring strategic design.' },
    { id: 'estate', label: 'Private Estate', size: 'Over 850 m²', factor: 3.0, desc: 'Large custom estates requiring premium resort-style architecture.' },
  ];

  const availableServices = [
    { id: 'landscape-design', name: 'Landscape Design & Walkways', basePrice: 4500, desc: 'Custom 3D plans, stepping stone paving, and layout.' },
    { id: 'artificial-grass', name: 'Premium Artificial Grass', basePrice: 8500, desc: 'High-density, non-toxic multi-tone grass installation.' },
    { id: 'smart-irrigation', name: 'Automated Smart Irrigation', basePrice: 5500, desc: 'Wifi timer controllers, micro-drip zoning, and sprinkler grids.' },
    { id: 'pergola-gazebo', name: 'Custom Wooden Pergola / Gazebo', basePrice: 12000, desc: 'Handcrafted premium timber shades & relaxation gazebos.' },
    { id: 'garden-lighting', name: 'Ambient Accent Night Lighting', basePrice: 3200, desc: 'Low-voltage waterproof brass spotlights and linear pathways.' },
    { id: 'softscaping', name: 'Tropical & Exotic Planting', basePrice: 6500, desc: 'Premium palm trees, flowering bushes, and soil preparation.' },
  ];

  const styles = [
    { id: 'tropical', name: 'Lush Tropical Oasis', desc: 'Dense green layers, exotic palms, and poolside luxury vibes.' },
    { id: 'modern', name: 'Desert Modern Minimalist', desc: 'Clean geometric lines, low-water native flora, and sleek stone paths.' },
    { id: 'classic', name: 'European Royal Estate', desc: 'Neat borders, symmetrical hedges, structured pergolas, and elegant stone.' },
  ];

  // Toggle services
  const handleToggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // Calculate live estimation
  const estimation = useMemo(() => {
    const sizeObj = yardSizes.find((y) => y.id === yardSize) || yardSizes[1];
    
    // Sum selected service base prices
    let totalBase = 0;
    selectedServices.forEach((serviceId) => {
      const s = availableServices.find((as) => as.id === serviceId);
      if (s) totalBase += s.basePrice;
    });

    // Apply size multiplier
    const rawTotal = totalBase * sizeObj.factor;

    // Apply slight modifier for styles
    let styleMultiplier = 1.0;
    if (stylePreference === 'tropical') styleMultiplier = 1.15; // requires more soil & lush vegetation
    if (stylePreference === 'classic') styleMultiplier = 1.1; // precise masonry

    const finalEstimate = rawTotal * styleMultiplier;
    
    // Create price bracket (Lower / Upper)
    const lowBracket = Math.round(finalEstimate * 0.9);
    const highBracket = Math.round(finalEstimate * 1.15);

    // Dynamic duration
    let daysToComplete = 7;
    if (yardSize === 'medium') daysToComplete = 12;
    if (yardSize === 'large') daysToComplete = 18;
    if (yardSize === 'estate') daysToComplete = 30;

    return {
      low: lowBracket,
      high: highBracket,
      days: daysToComplete,
    };
  }, [yardSize, selectedServices, stylePreference]);

  // Handle WhatsApp Link formulation
  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const sizeName = yardSizes.find((y) => y.id === yardSize)?.label || yardSize;
    const sizeDetail = yardSizes.find((y) => y.id === yardSize)?.size || '';
    const styleName = styles.find((s) => s.id === stylePreference)?.name || stylePreference;
    const servicesList = selectedServices
      .map((id) => availableServices.find((s) => s.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const text = `Hi Luqman Khuhro Landscaping! %0A%0AI just designed a custom yard on your website planner and would love a free site consultation: %0A%0A*Name:* ${userName || 'Valued Client'}%0A*Phone:* ${userPhone || 'Provided'}%0A*Villa Location:* ${userLocation || 'Dubai'}%0A*Yard Scale:* ${sizeName} (${sizeDetail})%0A*Style Choice:* ${styleName}%0A*Services Wanted:* ${servicesList}%0A*Calculated Online Estimate:* AED ${estimation.low.toLocaleString()} - AED ${estimation.high.toLocaleString()}%0A%0APlease let me know when your site engineers are available to visit!`;

    const whatsappNumber = '+971585385005';
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const resetPlanner = () => {
    setYardSize('medium');
    setSelectedServices(['landscape-design', 'smart-irrigation']);
    setStylePreference('tropical');
    setUserName('');
    setUserLocation('');
    setUserPhone('');
  };

  return (
    <section id="planner" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1 font-sans text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-950/80 border border-emerald-800/60 px-3.5 py-1.5 rounded-full">
            <Compass className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Interactive Yard Architect</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-4 tracking-tight leading-tight">
            Design Your Dream Garden
          </h2>
          <p className="font-sans text-stone-300 text-sm sm:text-base font-light mt-3 leading-relaxed">
            Customize your outdoor space below. Select your yard size, select the specific services from our flyer guidelines, and preview a realistic project scope instantly.
          </p>
        </div>

        {/* Master Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Configurator Controls (Col 7) */}
          <div className="lg:col-span-7 space-y-8 bg-stone-850/50 backdrop-blur border border-stone-800 p-6 sm:p-8 rounded-3xl">
            
            {/* Step 1: Yard Size */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif font-semibold text-lg text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-900 text-emerald-400 flex items-center justify-center text-xs font-bold font-sans">
                    1
                  </span>
                  Select Garden / Yard Scale
                </h3>
                <button
                  onClick={resetPlanner}
                  className="flex items-center gap-1 text-xs text-stone-400 hover:text-emerald-400 transition"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {yardSizes.map((size) => {
                  const isSelected = yardSize === size.id;
                  return (
                    <button
                      key={size.id}
                      onClick={() => setYardSize(size.id as any)}
                      className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'border-emerald-500 bg-emerald-950/40 text-white shadow-md'
                          : 'border-stone-800 bg-stone-900/60 text-stone-300 hover:border-stone-700 hover:bg-stone-900'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-bold text-sm">{size.label}</span>
                        {isSelected && (
                          <span className="w-4.5 h-4.5 rounded-full bg-emerald-500 flex items-center justify-center">
                            <Check className="w-3 h-3 text-emerald-950" />
                          </span>
                        )}
                      </div>
                      <span className="block font-mono text-[11px] text-emerald-400 font-semibold mt-0.5">{size.size}</span>
                      <span className="block font-sans text-xs text-stone-400 leading-normal mt-1.5">{size.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Service Checklist */}
            <div>
              <h3 className="font-serif font-semibold text-lg text-white flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-emerald-900 text-emerald-400 flex items-center justify-center text-xs font-bold font-sans">
                  2
                </span>
                Choose Landscaping Elements
              </h3>
              <p className="text-stone-400 text-xs font-sans mb-3.5">
                Select one or multiple premium items. Click to add/remove from your master plan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availableServices.map((service) => {
                  const isChecked = selectedServices.includes(service.id);
                  return (
                    <button
                      key={service.id}
                      onClick={() => handleToggleService(service.id)}
                      className={`text-left p-4 rounded-2xl border transition-all duration-200 flex items-start gap-3 cursor-pointer ${
                        isChecked
                          ? 'border-emerald-500 bg-emerald-950/30'
                          : 'border-stone-800 bg-stone-900/60 hover:border-stone-700'
                      }`}
                    >
                      <div className={`mt-0.5 w-4.5 h-4.5 rounded flex items-center justify-center flex-shrink-0 border transition-all ${
                        isChecked
                          ? 'bg-emerald-500 border-emerald-500 text-stone-900'
                          : 'border-stone-700 bg-stone-950'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <span className="font-sans font-semibold text-xs sm:text-sm text-white leading-snug block">
                          {service.name}
                        </span>
                        <span className="font-sans text-[11px] text-stone-400 leading-normal mt-1 block">
                          {service.desc}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Style Preference */}
            <div>
              <h3 className="font-serif font-semibold text-lg text-white flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-emerald-900 text-emerald-400 flex items-center justify-center text-xs font-bold font-sans">
                  3
                </span>
                Choose Design Aesthetic
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {styles.map((style) => {
                  const isSelected = stylePreference === style.id;
                  return (
                    <button
                      key={style.id}
                      onClick={() => setStylePreference(style.id)}
                      className={`text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'border-emerald-500 bg-emerald-950/40'
                          : 'border-stone-800 bg-stone-900/60 hover:border-stone-700'
                      }`}
                    >
                      <div className="pr-4">
                        <span className="font-serif font-bold text-sm text-white block">{style.name}</span>
                        <span className="font-sans text-xs text-stone-400 leading-normal mt-1 block">{style.desc}</span>
                      </div>
                      <div className={`w-4.5 h-4.5 rounded-full flex items-center justify-center flex-shrink-0 border ${
                        isSelected ? 'bg-emerald-500 border-emerald-500' : 'border-stone-700'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 text-stone-900" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Live Estimates & Booking Form (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Dynamic Estimate Card */}
            <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-950 border border-emerald-500/30 p-6 sm:p-8 rounded-3xl shadow-xl shadow-emerald-950/20">
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-3">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Real-Time Estimation Preview</span>
              </div>
              
              <p className="text-stone-300 text-xs font-sans">
                Below is a custom guideline estimation for your selected yard parameters in Dubai.
              </p>

              {/* Price Bracket */}
              <div className="my-6">
                <span className="text-xs text-stone-400 font-sans block tracking-wider uppercase">
                  Estimated Bracket
                </span>
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-white block mt-1 tracking-tight">
                  AED {estimation.low.toLocaleString()} - {estimation.high.toLocaleString()}
                </span>
                <span className="text-[10px] text-emerald-300/80 font-sans italic block mt-0.5">
                  *Includes professional delivery, soil grading & setup. Subject to physical site check.
                </span>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 gap-4 border-t border-emerald-800/50 pt-5 mt-5">
                <div>
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Estimated Duration</span>
                  <span className="font-serif text-lg font-bold text-white mt-0.5 block">
                    ~{estimation.days} Working Days
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Engineering Lead</span>
                  <span className="font-serif text-lg font-bold text-white mt-0.5 block">
                    Included
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Inquiry Form to Lock-in / Submit */}
            <div className="bg-stone-850 border border-stone-800 p-6 rounded-3xl">
              <h4 className="font-serif font-bold text-base text-white mb-4">
                Submit & Request Site Consultation
              </h4>
              <form onSubmit={handleSendToWhatsApp} className="space-y-4">
                <div>
                  <label className="block text-[11px] text-stone-400 font-sans uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Salim Al Maktoum"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] text-stone-400 font-sans uppercase tracking-wider mb-1.5">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +971 50..."
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-stone-400 font-sans uppercase tracking-wider mb-1.5">
                      Villa Location / Community
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Palm Jumeirah"
                      value={userLocation}
                      onChange={(e) => setUserLocation(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2">
                  <input
                    id="agree-checkbox"
                    type="checkbox"
                    required
                    checked={isAgreed}
                    onChange={(e) => setIsAgreed(e.target.checked)}
                    className="mt-1 rounded text-emerald-600 bg-stone-900 border-stone-800 focus:ring-emerald-600 focus:ring-offset-stone-850"
                  />
                  <label htmlFor="agree-checkbox" className="text-stone-400 text-xs leading-normal select-none">
                    I agree to share my layout choices with the landscape coordinator for customized site analysis.
                  </label>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-sans text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-md cursor-pointer mt-3"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send Proposal via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
