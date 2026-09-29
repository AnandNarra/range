import React, { useEffect } from 'react';
import { X, MapPin, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LightboxModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl z-10 my-8 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-72 w-full bg-zinc-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
            <span className="inline-block bg-brand-orange text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-1">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              {project.title}
            </h3>
            {project.location && (
              <p className="flex items-center gap-1.5 text-xs text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                <span>{project.location}</span>
                {project.capacity && <span>• {project.capacity}</span>}
              </p>
            )}
          </div>
        </div>

        {/* Details Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Project Overview & Engineering Scope
            </h4>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Highlights */}
          {project.highlights && (
            <div className="space-y-3 bg-zinc-50 p-4 rounded-xl border border-zinc-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-600">
                Key Performance & Technical Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Specifications Pills */}
          <div className="flex flex-wrap gap-3 pt-2 text-xs">
            {project.dimensions && (
              <div className="bg-orange-50 border border-orange-200 text-brand-orange px-3 py-1.5 rounded-lg font-medium">
                Dimensions: {project.dimensions}
              </div>
            )}
            {project.status && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1.5 rounded-lg font-medium">
                Status: {project.status}
              </div>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-zinc-400 text-center sm:text-left">
              Want a similar poultry farm setup for your location?
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold text-zinc-600 hover:text-zinc-800 border border-zinc-200 rounded-xl"
              >
                Close Preview
              </button>
              <Link
                to="/request-quote"
                onClick={onClose}
                className="flex-1 sm:flex-none px-5 py-2 text-xs font-semibold bg-brand-orange hover:bg-brand-orangeDark text-white rounded-xl shadow-brand text-center"
              >
                Request Similar Shed Quote
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
