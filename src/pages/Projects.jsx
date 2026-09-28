import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Filter, Layers, ArrowRight, 
  MapPin, CheckCircle2, Eye, Sparkles 
} from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import Breadcrumb from '../components/Breadcrumb';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import LightboxModal from '../components/LightboxModal';
import CTASection from '../components/CTASection';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter(p => p.categorySlug === activeCategory);
  }, [activeCategory]);

  return (
    <div className="space-y-0">
      
      {/* Banner */}
      <section className="relative py-16 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/modern_poultry_farm_shed.jpg"
            alt="Poultry Farm Construction Projects"
            className="w-full h-full object-cover brightness-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/75 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumb items={[{ label: "Projects & Gallery" }]} />

          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-semibold uppercase tracking-wider">
              Track Record & Installations
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
              Projects & Structural Gallery
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Explore demonstration reference installations of our pre-engineered poultry sheds, automated feeding lines, tunnel ventilation setups, and cooling retrofits.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-14 sm:py-20 bg-zinc-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {projectCategories.map(cat => {
              const isActive = activeCategory === cat.id;
              const count = cat.id === 'all' 
                ? projects.length 
                : projects.filter(p => p.categorySlug === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-brand-orange text-white shadow-brand'
                      : 'bg-white text-zinc-700 hover:bg-orange-50 border border-zinc-200'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-zinc-100 text-zinc-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Demonstration Notice */}
          <div className="max-w-2xl mx-auto p-3 bg-white rounded-xl border border-zinc-200 text-center text-xs text-zinc-500">
            <span className="font-semibold text-zinc-700">Engineering Reference Portfolio:</span> Click any project card below to inspect high-resolution photographs, structural dimensions, and technical specifications.
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      {/* CTA Section */}
      <CTASection />

    </div>
  );
}
