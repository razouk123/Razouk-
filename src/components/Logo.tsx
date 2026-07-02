import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

export default function Logo({ className = '', iconOnly = false, light = false }: LogoProps) {
  const primaryColor = light ? 'text-white' : 'text-emerald-900';
  const accentColor = 'text-emerald-600';
  const subtitleColor = light ? 'text-emerald-100' : 'text-stone-500';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Custom Emblem SVG */}
      <div className={`relative flex-shrink-0 w-11 h-11 bg-white rounded-full flex items-center justify-center border ${light ? 'border-emerald-700/50' : 'border-emerald-100'} shadow-sm`}>
        <svg
          viewBox="0 0 100 100"
          className="w-9 h-9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circular frame border styled with leaves pattern */}
          <circle cx="50" cy="50" r="45" stroke="#064e3b" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="41" stroke="#10b981" strokeWidth="1" />
          
          {/* Leaves surrounding top border */}
          <path d="M15 45 C20 40, 25 42, 28 48 C25 52, 18 50, 15 45 Z" fill="#047857" opacity="0.8" />
          <path d="M85 45 C80 40, 75 42, 72 48 C75 52, 82 50, 85 45 Z" fill="#047857" opacity="0.8" />
          <path d="M50 8 C47 13, 50 18, 55 18 C58 13, 55 8, 50 8 Z" fill="#10b981" />
          
          {/* Pergola / Gazebo Structure */}
          <path d="M35 55 L35 40 L65 40 L65 55" stroke="#064e3b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30 40 L70 40" stroke="#047857" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M28 36 L72 36" stroke="#064e3b" strokeWidth="2" strokeLinecap="round" />
          {/* Slats of Pergola */}
          <line x1="38" y1="36" x2="38" y2="40" stroke="#064e3b" strokeWidth="1.5" />
          <line x1="44" y1="36" x2="44" y2="40" stroke="#064e3b" strokeWidth="1.5" />
          <line x1="50" y1="36" x2="50" y2="40" stroke="#064e3b" strokeWidth="1.5" />
          <line x1="56" y1="36" x2="56" y2="40" stroke="#064e3b" strokeWidth="1.5" />
          <line x1="62" y1="36" x2="62" y2="40" stroke="#064e3b" strokeWidth="1.5" />
          
          {/* Green Trees inside the circle */}
          <path d="M25 55 C22 50, 28 43, 33 46 C35 40, 42 42, 43 47 C45 42, 52 44, 50 50 C48 55, 30 58, 25 55 Z" fill="#10b981" opacity="0.9" />
          <path d="M75 55 C78 50, 72 43, 67 46 C65 40, 58 42, 57 47 C55 42, 48 44, 50 50 C52 55, 70 58, 75 55 Z" fill="#047857" opacity="0.9" />
          
          {/* Stone Garden Path curving forward */}
          <path d="M48 55 C48 55, 49 68, 41 78 C33 88, 55 88, 57 88 C49 80, 52 68, 52 55 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="0.75" />
          {/* Path stepping stone lines */}
          <line x1="46" y1="62" x2="52" y2="61" stroke="#9ca3af" strokeWidth="1" />
          <line x1="44" y1="69" x2="51" y2="67" stroke="#9ca3af" strokeWidth="1" />
          <line x1="42" y1="76" x2="52" y2="74" stroke="#9ca3af" strokeWidth="1" />
          <line x1="46" y1="83" x2="55" y2="81" stroke="#9ca3af" strokeWidth="1" />

          {/* Curved green leaves representing landscape ground */}
          <path d="M10 58 C30 52, 70 52, 90 58 C85 75, 70 85, 50 85 C30 85, 15 75, 10 58 Z" fill="#065f46" opacity="0.3" />
          <path d="M5 55 C25 65, 75 65, 95 55 C90 78, 72 90, 50 90 C28 90, 10 78, 5 55 Z" fill="#047857" opacity="0.15" />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col select-none">
          <span className={`font-serif tracking-[0.12em] font-semibold text-sm sm:text-base leading-tight uppercase ${primaryColor}`}>
            Luqman Khuhro
          </span>
          <div className="flex items-center gap-1.5">
            <span className={`font-sans tracking-[0.3em] font-medium text-[8px] sm:text-[9px] uppercase ${accentColor}`}>
              Landscaping
            </span>
            <span className={`h-1 w-1 rounded-full bg-emerald-500`}></span>
            <span className={`font-sans text-[6px] sm:text-[7px] tracking-wider uppercase font-light ${subtitleColor}`}>
              Dubai
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
