import React, { useState, useRef, useEffect } from 'react';
import { Project } from '../types';
import { ArrowLeftRight, MapPin, Sparkles, Sliders } from 'lucide-react';

export default function BeforeAfter() {
  // Slider position state (0 to 100 percentage)
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Hardcode beautiful Unsplash links representing Before (barren dry sand backyard) vs After (stunning lush luxury backyard)
  const mainComparison = {
    title: 'Modern Palm Jumeirah Villa',
    location: 'Signature Villas, Palm Jumeirah',
    description: 'Complete transformation of a barren, dry sand lot into an ultra-luxury modern retreat. Implemented multi-tone artificial turf, integrated automated smart irrigation zones, custom concrete stepping path, and tropical softscaping.',
    // Dry sand backyard / empty desert lot
    beforeImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200',
    // Luxury pool garden
    afterImage: '/src/assets/images/hero_villa_garden_1782995653670.jpg',
  };

  // Additional mock projects list
  const projects: Project[] = [
    {
      id: 'proj-1',
      title: 'Emirates Hills Mediterranean',
      category: 'Landscape Design',
      location: 'Sector R, Emirates Hills',
      beforeImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
      afterImage: '/src/assets/images/outdoor_seating_lounge_1782995667644.jpg',
      description: 'Custom handcrafted timber pergola paired with high-end luxury seating and integrated low-voltage lighting grids.',
      tags: ['Lush Oasis', 'Custom Pergola', 'Desert Vegetation'],
    },
    {
      id: 'proj-2',
      title: 'Al Barari Sanctuary Garden',
      category: 'Artificial Turf & Lighting',
      location: 'The Nest, Al Barari',
      beforeImage: 'https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&q=80&w=800',
      afterImage: '/src/assets/images/garden_pathway_detail_1782995684398.jpg',
      description: 'Sleek structural garden walkway with architectural concrete stepping slabs, premium artificial grass borders, and professional evening spot-illumination.',
      tags: ['Premium Grass', 'Walkway Masonry', 'Ambient Spotlights'],
    },
  ];

  // Selected project for minor list below
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0);

  // Drag logic handling
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-100/60 px-3.5 py-1.5 rounded-full">
            Our Transformations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950 mt-4 tracking-tight leading-tight">
            Proof of Premium Craftsmanship
          </h2>
          <p className="font-sans text-stone-600 text-sm sm:text-base font-light mt-3 leading-relaxed">
            Drag the visual slider to see how Luqman Khuhro Landscaping transforms barren, sandy Dubai soils into lush, verdant residential paradises.
          </p>
        </div>

        {/* DRAGGABLE SLIDER HERO PANEL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Slider Display (Col 7) */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-stone-100 select-none cursor-ew-resize"
              onMouseDown={startDrag}
              onTouchStart={startDrag}
            >
              {/* After Image (Full Base) */}
              <img
                src={mainComparison.afterImage}
                alt="After transformation"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-emerald-800/90 text-white font-sans text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow z-20">
                After
              </div>

              {/* Before Image (Clipping Mask Layer) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={mainComparison.beforeImage}
                  alt="Before transformation"
                  className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                  style={{ width: containerRef.current?.offsetWidth || '100%' }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-stone-900/90 text-stone-200 font-sans text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow z-20">
                  Before
                </div>
              </div>

              {/* Draggable vertical divider bar */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 shadow"
                style={{ left: `${sliderPos}%` }}
              >
                {/* Circular Draggable Button Handle */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-emerald-800 text-white rounded-full border-2 border-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            {/* Guide Text */}
            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-stone-500 font-sans">
              <Sliders className="w-3.5 h-3.5" />
              <span>Drag the center handle left or right to compare</span>
            </div>
          </div>

          {/* Slider Narrative Side (Col 5) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-1.5 text-emerald-800 font-sans text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Featured Masterpiece</span>
            </div>
            
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
              {mainComparison.title}
            </h3>
            
            <div className="flex items-center gap-1 text-stone-500 font-sans text-xs mb-5">
              <MapPin className="w-3.5 h-3.5 text-emerald-700" />
              <span>{mainComparison.location}</span>
            </div>

            <p className="font-sans text-stone-600 text-sm sm:text-base font-light leading-relaxed mb-6">
              {mainComparison.description}
            </p>

            <div className="grid grid-cols-3 gap-4 border-t border-stone-100 pt-6">
              <div>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Turf Selection</span>
                <span className="font-serif text-sm font-bold text-stone-800 mt-0.5 block">Premium C35</span>
              </div>
              <div>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Water Control</span>
                <span className="font-serif text-sm font-bold text-stone-800 mt-0.5 block">Smart Wifi</span>
              </div>
              <div>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Value Added</span>
                <span className="font-serif text-sm font-bold text-stone-800 mt-0.5 block">+25% Villa Value</span>
              </div>
            </div>
          </div>
        </div>

        {/* PORTFOLIO GRID TRANSFORMATION BLOCKS */}
        <div className="border-t border-stone-150 pt-20">
          <h3 className="font-serif font-bold text-xl text-stone-950 mb-8 tracking-tight text-center">
            Other Elite Communities We Served
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <div
                key={proj.id}
                className="bg-stone-50 rounded-3xl border border-stone-200/50 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row h-full"
              >
                {/* Visual Thumbnail Frame */}
                <div className="relative w-full sm:w-2/5 min-h-[220px] bg-stone-900">
                  <img
                    src={proj.afterImage}
                    alt={proj.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Location Pin */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-stone-800 text-[9px] font-semibold uppercase tracking-wider px-2 py-1 rounded-md shadow-sm flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-emerald-800" />
                    <span>{proj.location.split(',')[1]?.trim() || proj.location}</span>
                  </div>
                </div>

                {/* Text Description Frame */}
                <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                  <div>
                    <span className="font-sans text-[10px] font-bold text-emerald-800 tracking-widest uppercase block">
                      {proj.category}
                    </span>
                    <h4 className="font-serif font-bold text-base text-stone-900 mt-1 mb-2.5">
                      {proj.title}
                    </h4>
                    <p className="font-sans text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-stone-100 mt-4">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-1 bg-emerald-50 text-emerald-800 font-sans text-[9px] font-semibold uppercase tracking-wider rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
