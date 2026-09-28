import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, 
  Layers, Cpu, ThermometerSnowflake, Boxes, Building2, 
  Phone, MessageSquare, Award, Compass, ClipboardCheck, 
  FileSpreadsheet, ExternalLink, Sparkles
} from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../data/siteConfig';
import { services, whyChooseUs } from '../data/services';
import { products } from '../data/products';
import { projects } from '../data/projects';
import { homeFaqs } from '../data/faqs';
import ServiceCard from '../components/ServiceCard';
import ProductCard from '../components/ProductCard';
import ProjectCard from '../components/ProjectCard';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import LightboxModal from '../components/LightboxModal';
import SectionHeading from '../components/SectionHeading';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter featured products and projects for the homepage
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4);
  const featuredProjects = projects.filter(p => p.isFeatured).slice(0, 3);

  // Icon mapping helper
  const renderIcon = (iconName, className = "w-6 h-6") => {
    switch(iconName) {
      case 'Layers': return <Layers className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'ThermometerSnowflake': return <ThermometerSnowflake className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'ClipboardCheck': return <ClipboardCheck className={className} />;
      case 'Compass': return <Compass className={className} />;
      case 'FileSpreadsheet': return <FileSpreadsheet className={className} />;
      case 'Award': return <Award className={className} />;
      default: return <Boxes className={className} />;
    }
  };

  return (
    <div className="space-y-0">
      
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-black text-white">
        {/* Background Image with Dark Vignette Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/modern_poultry_farm_shed.jpg"
            alt="Modern Automated Poultry Farm by Orange Structures"
            className="w-full h-full object-cover object-center scale-102 filter brightness-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-black/40" />
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center sm:text-left flex flex-col items-center sm:items-start">
          
          {/* Small Service Line Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-200 text-xs sm:text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
            <span>Construction | Equipment | Automation | Climate Control</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-[1.15] max-w-4xl drop-shadow-md">
            Building Smarter <span className="text-brand-orange">Poultry Farms</span> for a Better Tomorrow.
          </h1>

          {/* Description */}
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-zinc-300 max-w-2xl leading-relaxed">
            Complete poultry farm construction, advanced equipment, and intelligent climate control solutions — all under one roof.
          </p>

          {/* Hero CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              to="/request-quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-orange hover:bg-brand-orangeDark text-white px-7 py-4 rounded-xl font-bold text-base shadow-brand hover:shadow-brand-lg transition-all duration-200 active:scale-98"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/poultry-construction"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/25 px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200"
            >
              <span>Explore Our Services</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Trust Metric Badges */}
          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 w-full max-w-4xl text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-heading">350+</div>
              <div className="text-xs text-zinc-400 mt-0.5">Sheds Engineered</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-brand-orange font-heading">8M+</div>
              <div className="text-xs text-zinc-400 mt-0.5">Bird Capacity Built</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-heading">1,200+</div>
              <div className="text-xs text-zinc-400 mt-0.5">Automated Lines</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-brand-orange font-heading">98.5%</div>
              <div className="text-xs text-zinc-400 mt-0.5">Client Satisfaction</div>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 2: ABOUT ORANGE STRUCTURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: Professional Poultry Farm Image with Floating Card */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 aspect-4/3">
                <img
                  src="/images/poultry_ventilation_system.jpg"
                  alt="Orange Structures Modern Poultry Farm Construction Site"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>


            </div>

            {/* Right: Company Introduction, Mission & Vision */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-100/90 text-brand-orange border border-orange-200">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                <span>About Orange Structures</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 font-heading tracking-tight leading-snug">
                Your Partner in Modern Poultry Farming
              </h2>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Orange Structures is an engineering-first agricultural technology company dedicated to advancing modern poultry production. We specialize in designing, fabricating, and erecting industrial pre-engineered steel poultry sheds, supplying automated feeding and drinking lines, and installing intelligent micro-climate controllers.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700">
                    <strong>Our Mission:</strong> To empower poultry farmers with robust structural engineering and climate automation that lower flock mortality, reduce manual labor, and boost profitability.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700">
                    <strong>Our Vision:</strong> To be the most trusted end-to-end infrastructure and automation partner for broiler, layer, and breeder operations across India.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-brand-orange text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 3: OUR SERVICES */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Core Solutions"
            title="Comprehensive Services For Modern Poultry"
            description="From structural shed engineering and industrial rearing equipment to digital farm telemetry — explore our integrated business divisions."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 4: WHY CHOOSE ORANGE STRUCTURES? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="The Orange Advantage"
            title="Why Choose Orange Structures?"
            description="We combine structural integrity with precision climate engineering to deliver poultry farms built to perform."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((feature, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-zinc-50/80 hover:bg-white border border-zinc-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 space-y-4 group hover:-translate-y-1"
              >
                <div className="w-13 h-13 rounded-xl bg-orange-100/80 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors flex items-center justify-center">
                  {renderIcon(feature.icon, "w-6 h-6")}
                </div>

                <h3 className="text-base font-bold text-zinc-900 font-heading">
                  {feature.title}
                </h3>

                <p className="text-xs text-zinc-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 5: FEATURED PROJECTS */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-100 text-brand-orange border border-orange-200 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                <span>Track Record & Portfolio</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 font-heading">
                Featured Projects & Installations
              </h2>
              <p className="text-sm text-zinc-600 mt-2 max-w-xl">
                Demonstration reference installations of commercial broiler sheds, layer houses, and climate retrofits.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-white hover:bg-brand-orange hover:text-white text-zinc-800 border border-zinc-200 px-5 py-2.5 rounded-xl font-semibold text-xs transition-all shadow-sm shrink-0 self-start md:self-auto"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onSelect={(proj) => setSelectedProject(proj)} 
              />
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 6: EQUIPMENT PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-100 text-brand-orange border border-orange-200 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                <span>Equipment Showcase</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 font-heading">
                High-Performance Poultry Equipment
              </h2>
              <p className="text-sm text-zinc-600 mt-2 max-w-xl">
                Explore our commercial line of pan feeders, stainless drinkers, exhaust cone fans, and climate panels.
              </p>
            </div>

            <Link
              to="/poultry-equipment"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeDark text-white px-5 py-2.5 rounded-xl font-semibold text-xs shadow-brand transition-all shrink-0 self-start md:self-auto"
            >
              <span>View All Equipment Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 8: FAQ ACCORDION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Common Inquiries About Our Solutions"
            description="Have questions regarding poultry shed construction, equipment supply, or software? Find answers below."
          />

          <FAQAccordion items={homeFaqs} />

        </div>
      </section>


      {/* SECTION 9: FINAL CTA */}
      <CTASection />


      {/* Project Lightbox Modal */}
      <LightboxModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
