import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../data/siteConfig';

export default function CTASection({
  title = "Planning to Build or Upgrade Your Poultry Farm?",
  description = "Connect with Orange Structures to discuss your poultry construction, equipment, and automation requirements.",
  dark = false
}) {
  return (
    <section className={`relative overflow-hidden py-16 sm:py-20 ${dark ? 'bg-brand-black text-white' : 'bg-gradient-to-br from-brand-orange to-brand-orangeDark text-white'}`}>
      
      {/* Decorative background grid & circles */}
      <div className="absolute inset-0 opacity-10 bg-grid-pattern-dark pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Service Line Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold uppercase tracking-wider text-orange-100 border border-white/20">
          <span>Construction • Equipment • Automation • Climate Control</span>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-heading leading-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-orange-100 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Feature Checkmarks */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs text-white/90">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>Turnkey Project Execution</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>Direct WhatsApp Quotation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>Expert Climate Engineering</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/request-quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-brand-orange hover:bg-zinc-100 px-7 py-3.5 rounded-xl font-bold text-sm shadow-xl transition-all duration-200 active:scale-98"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={getWhatsAppLink("Hello Orange Structures, I would like to consult with an engineer regarding my poultry farm project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-3.5 rounded-xl font-semibold text-sm shadow-lg transition-all duration-200 active:scale-98"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black/30 hover:bg-black/40 text-white border border-white/20 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
          >
            <span>Contact Us</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
