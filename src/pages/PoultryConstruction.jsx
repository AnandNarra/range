import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, CheckCircle2, ArrowRight, ShieldCheck, 
  MapPin, Phone, MessageSquare, AlertCircle, Sparkles, Layers 
} from 'lucide-react';
import { siteConfig, getWhatsAppLink, getMailtoLink } from '../data/siteConfig';
import { constructionFaqs } from '../data/faqs';
import { projects } from '../data/projects';
import Breadcrumb from '../components/Breadcrumb';
import SectionHeading from '../components/SectionHeading';
import FAQAccordion from '../components/FAQAccordion';
import ProjectCard from '../components/ProjectCard';
import LightboxModal from '../components/LightboxModal';

export default function PoultryConstruction() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Construction Enquiry Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    farmType: 'Commercial Broiler Closed Shed',
    proposedCapacity: '',
    requirements: ''
  });

  const [formError, setFormError] = useState('');
  const [formSuccessMethod, setFormSuccessMethod] = useState('');


  const constructionServicesList = [
    {
      title: "Pre-Engineered Steel Sheds (PEB)",
      desc: "Custom high-tensile steel portals fabricated with hot-dip galvanization for superior corrosion resistance and clear-span interior clearances.",
      image: "/images/peb_steel_construction.jpg"
    },
    {
      title: "Biosecure Farm Layout & Civil Planning",
      desc: "Comprehensive site elevation, east-west orientation, inter-shed biosecurity spacing, perimeter drainage, and concrete foundation works.",
      image: "/images/modern_poultry_farm_shed.jpg"
    },
    {
      title: "Thermal Insulation & Sandwich Panels",
      desc: "Class-A polyurethane (PUF) sandwich panels (30mm-50mm) drastically reducing solar heat gain and maintaining stable indoor temperatures.",
      image: "/images/poultry_ventilation_system.jpg"
    },
    {
      title: "Tunnel Ventilation Structural Integration",
      desc: "Airtight framing for 50\" exhaust fans, louvered air inlets, evaporative cooling pad tunnels, and motorized side drop curtains.",
      image: "/images/poultry_house_fans.jpg"
    }
  ];

  const farmTypes = [
    {
      type: "Commercial Broiler Houses",
      desc: "Closed environmentally controlled tunnel sheds designed for 15,000 to 50,000 birds per unit with optimal density and litter dryness."
    },
    {
      type: "Commercial Layer Cage Sheds",
      desc: "High-clearance multi-tier structures engineered with heavy floor load ratings, automated manure collection channels, and high-volume cross ventilation."
    },
    {
      type: "Breeder & Parent Stock Sheds",
      desc: "High biosecurity facilities with light-proof dark-out traps, automated nest box corridors, and precision male/female feeding lines."
    },
    {
      type: "Feed Mills & Storage Infrastructure",
      desc: "Clear-span industrial steel godowns for bulk grain storage, feed mixing machinery, raw material hoppers, and finished bagged inventory."
    }
  ];

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.location.trim()) {
      setFormError('Please enter your Name, Phone Number, and Farm Location.');
      return;
    }
    setFormError('');

    const message = `Hello Orange Structures,\n\nI would like to enquire about *Poultry Farm Construction*:\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || 'N/A'}\n*Farm Location:* ${formData.location}\n*Farm Type:* ${formData.farmType}\n*Proposed Capacity:* ${formData.proposedCapacity || 'To be discussed'}\n*Requirements:* ${formData.requirements || 'Turnkey Construction Quote'}\n\nPlease share design consultation and commercial quotation.`;

    const url = getWhatsAppLink(message);
    window.open(url, '_blank');
    setFormSuccessMethod('WhatsApp');
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.location.trim()) {
      setFormError('Please enter your Name, Phone Number, and Farm Location.');
      return;
    }
    setFormError('');

    const subject = `Poultry Construction Enquiry - ${formData.farmType} (${formData.name})`;
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nLocation: ${formData.location}\nFarm Type: ${formData.farmType}\nCapacity: ${formData.proposedCapacity}\nRequirements:\n${formData.requirements}`;

    const mailto = getMailtoLink(subject, body);
    window.location.href = mailto;
    setFormSuccessMethod('Email');
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO */}
      <section className="relative py-20 lg:py-24 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/modern_poultry_farm_shed.jpg"
            alt="Modern Poultry Shed Construction Site"
            className="w-full h-full object-cover brightness-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/75 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumb items={[{ label: "Services", to: "/#services" }, { label: "Poultry Construction" }]} />

          <div className="max-w-3xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-semibold uppercase tracking-wider">
              Turnkey Farm Infrastructure
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
              Pre-Engineered Steel Poultry Sheds & Construction
            </h1>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Engineered for extreme climate resilience, biological security, and maximum flock productivity. From initial land survey to live bird commissioning.
            </p>
            <div className="pt-2">
              <a
                href="#enquiry-form"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeDark text-white px-6 py-3 rounded-xl font-bold text-sm shadow-brand transition-all"
              >
                <span>Request Construction Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <SectionHeading
                badge="Engineering Excellence"
                title="Sheds Designed to Safeguard Flock Health and Farmer ROI"
                description="A poultry house is not merely a warehouse; it is a finely tuned biological environment."
                center={false}
              />
              <p className="text-sm text-zinc-600 leading-relaxed">
                Poor shed construction causes air leakage, severe heat transmission, floor moisture condensation, and premature metal rusting. Orange Structures constructs heavy-gauge galvanized steel poultry houses equipped with thermal PUF sandwich panels, precise airtight seals, and calibrated aerodynamic roof slopes that protect your birds during scorching summers and monsoons alike.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200">
                  <div className="text-2xl font-extrabold text-brand-orange font-heading">≥ 275 g/m²</div>
                  <div className="text-xs text-zinc-600 mt-1 font-medium">Hot-Dip Zinc Coating</div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                  <div className="text-2xl font-extrabold text-zinc-900 font-heading">50 mm</div>
                  <div className="text-xs text-zinc-600 mt-1 font-medium">PUF Thermal Insulation</div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 aspect-4/3">
              <img
                src="/images-1.jpg"
                alt="Inside modern closed broiler house"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. TYPES OF FARMS SUPPORTED */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Farm Classifications"
            title="Types of Poultry Farms Supported"
            description="We build customized facilities suited for diverse commercial bird lines and enterprise capacities."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {farmTypes.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-brand-orange flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-zinc-900 font-heading">
                  {item.type}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CONSTRUCTION SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="End-to-End Execution"
            title="Complete Construction Services"
            description="Explore our specialized civil and mechanical construction offerings."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {constructionServicesList.map((srv, idx) => (
              <div key={idx} className="group rounded-2xl border border-zinc-200 overflow-hidden bg-white shadow-card hover:shadow-card-hover transition-all flex flex-col sm:flex-row">
                <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden bg-zinc-100">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="sm:w-3/5 p-6 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 group-hover:text-brand-orange transition-colors font-heading">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed mt-2">
                      {srv.desc}
                    </p>
                  </div>
                  <div className="pt-2 text-xs font-semibold text-brand-orange flex items-center gap-1">
                    <span>Engineered by Orange Structures</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>



      {/* 7. FAQS */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Construction FAQs"
            title="Frequently Asked Construction Questions"
            description="Clear answers regarding site preparation, insulation specs, and timelines."
          />
          <FAQAccordion items={constructionFaqs} />
        </div>
      </section>

      {/* 8. CONSTRUCTION ENQUIRY FORM */}
      <section id="enquiry-form" className="py-20 bg-white border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-zinc-50 border border-zinc-200/90 rounded-3xl p-6 sm:p-10 shadow-lg">
            <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-semibold uppercase tracking-wider">
                Direct Project Consultation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 font-heading">
                Request a Construction Quotation
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600">
                Submit your proposed farm details. Our civil engineers will connect directly via WhatsApp or email with initial layout recommendations.
              </p>
            </div>

            {formError && (
              <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {formSuccessMethod && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Enquiry drafted! Opening {formSuccessMethod} now with your project details.</span>
              </div>
            )}

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98852 79787"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="you@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Farm Location / District *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Karimnagar, Telangana"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Farm Type
                  </label>
                  <select
                    value={formData.farmType}
                    onChange={(e) => setFormData({...formData, farmType: e.target.value})}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange bg-white"
                  >
                    <option>Commercial Broiler Closed Shed</option>
                    <option>Layer Battery / Cage Shed</option>
                    <option>Breeder / Parent Stock Shed</option>
                    <option>Open Shed to Closed Tunnel Retrofit</option>
                    <option>Feed Mill or Storage Shed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Proposed Capacity (Number of Birds)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 25,000 Birds / 300x50 ft"
                    value={formData.proposedCapacity}
                    onChange={(e) => setFormData({...formData, proposedCapacity: e.target.value})}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  Project Requirements & Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your land dimensions, target start date, or specific equipment requirements..."
                  value={formData.requirements}
                  onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange bg-white resize-none"
                />
              </div>

              <div className="p-3 bg-zinc-100 rounded-xl text-[11px] text-zinc-500">
                Note: This is a static frontend website. When you click below, your details will be formatted into a prefilled message and opened in WhatsApp or your Email client for instant submission.
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Submit via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-brand-orange hover:bg-brand-orangeDark text-white font-bold rounded-xl text-xs sm:text-sm shadow-brand transition-all active:scale-98"
                >
                  <Phone className="w-4 h-4" />
                  <span>Submit via Email</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
