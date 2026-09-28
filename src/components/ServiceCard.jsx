import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServiceCard({ service }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-zinc-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Image Preview with Hover Zoom */}
      <div className="relative h-60 w-full overflow-hidden bg-zinc-100">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Badge */}
        <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-zinc-900 font-semibold text-xs px-3 py-1 rounded-full shadow-sm">
          {service.badge}
        </span>

        {/* Title overlay on bottom of image for impact */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white font-heading leading-tight drop-shadow-sm group-hover:text-orange-200 transition-colors">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <p className="text-sm text-zinc-600 leading-relaxed">
          {service.description}
        </p>

        {/* Highlights List */}
        {service.highlights && service.highlights.length > 0 && (
          <ul className="space-y-2 pt-2 border-t border-zinc-100">
            {service.highlights.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Action Link */}
        <div className="pt-2">
          <Link
            to={service.slug}
            className="w-full inline-flex items-center justify-center gap-2 bg-zinc-900 group-hover:bg-brand-orange text-white py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm"
          >
            <span>Explore {service.shortTitle || 'Service'}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
