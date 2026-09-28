import React from 'react';
import { MapPin, ArrowRight, Eye, Layers } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  return (
    <div 
      className="group bg-white rounded-2xl border border-zinc-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col h-full overflow-hidden hover:-translate-y-1 cursor-pointer"
      onClick={() => onSelect(project)}
    >
      {/* Project Image */}
      <div className="relative h-60 w-full overflow-hidden bg-zinc-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-zinc-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          {project.category}
        </span>

        {/* Capacity Tag */}
        {project.capacity && (
          <span className="absolute bottom-4 left-4 bg-brand-orange text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">
            {project.capacity}
          </span>
        )}

        {/* Hover Eye Icon */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
          <Eye className="w-4 h-4" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-base font-bold text-zinc-900 group-hover:text-brand-orange transition-colors font-heading line-clamp-2">
            {project.title}
          </h3>
          <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
          {project.location ? (
            <span className="flex items-center gap-1.5 text-zinc-500 truncate max-w-[65%]">
              <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span className="truncate">{project.location}</span>
            </span>
          ) : (
            <span className="text-zinc-400">Reference Structure</span>
          )}

          <span className="inline-flex items-center gap-1 font-semibold text-brand-orange group-hover:underline shrink-0">
            <span>View Project</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </div>
  );
}
