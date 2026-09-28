import React from 'react';

export default function SectionHeading({ 
  badge, 
  title, 
  description, 
  center = true, 
  light = false 
}) {
  return (
    <div className={`space-y-3 mb-12 sm:mb-16 ${center ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-100/90 text-brand-orange border border-orange-200/80">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-heading ${light ? 'text-white' : 'text-zinc-950'}`}>
        {title}
      </h2>

      {description && (
        <p className={`text-sm sm:text-base leading-relaxed ${light ? 'text-zinc-300' : 'text-zinc-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
