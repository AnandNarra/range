import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, MessageSquare, ArrowUpRight, 
  ShieldCheck, Clock, CheckCircle2 
} from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../data/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-zinc-400 border-t border-zinc-800">

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Bio (2 spans) */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block bg-white p-2.5 rounded-xl">
              <img 
                src="/logo.jpg" 
                alt="Orange Structures Logo" 
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-zinc-400 max-w-sm">
              Orange Structures delivers modern poultry farm construction, high-efficiency feeding, drinking, ventilation systems, and intelligent climate control automation.
            </p>
            <p className="text-xs text-zinc-500 italic">
              "{siteConfig.brandMotto}"
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={getWhatsAppLink("Hello Orange Structures, I would like to enquire about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-orange hover:bg-brand-orangeDark text-white text-xs font-semibold transition-all shadow-brand"
              >
                <span>Request Quotation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-brand-orange transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-orange transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-brand-orange transition-colors">Projects & Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-orange transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/request-quote" className="hover:text-brand-orange transition-colors">Request a Quote</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase font-heading">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/poultry-construction" className="hover:text-brand-orange transition-colors">
                  Poultry Shed Construction
                </Link>
              </li>
              <li>
                <Link to="/poultry-equipment" className="hover:text-brand-orange transition-colors">
                  Poultry Equipment Sales
                </Link>
              </li>
              <li>
                <Link to="/poultry-equipment?cat=ventilation-systems" className="hover:text-brand-orange transition-colors">
                  Ventilation & Cooling
                </Link>
              </li>
              <li>
                <Link to="/poultry-management-software" className="hover:text-brand-orange transition-colors">
                  Poultry Farm Software
                </Link>
              </li>
              <li>
                <Link to="/poultry-equipment?cat=automation-controllers" className="hover:text-brand-orange transition-colors">
                  Climate Automation Panels
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase font-heading">
              Contact & Support
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-xs text-zinc-400">
                  {siteConfig.contact.address.line1}, {siteConfig.contact.address.city}, {siteConfig.contact.address.country}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a href={`tel:${siteConfig.contact.phoneClean}`} className="hover:text-brand-orange text-xs">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange text-xs">
                  {siteConfig.contact.whatsapp} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <a href={`mailto:${siteConfig.contact.salesEmail}`} className="hover:text-brand-orange text-xs break-all">
                  {siteConfig.contact.salesEmail}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Terms */}
      <div className="border-t border-zinc-800/80 bg-black/60 py-6 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved. 
            <span className="hidden sm:inline"> | Automation & Climate Control Solutions</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-brand-orange transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-brand-orange transition-colors">
              Terms of Service
            </Link>
            <a 
              href="#top" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-brand-orange hover:underline"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
