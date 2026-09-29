import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Phone, Mail, ShoppingBag, 
  ArrowRight, Building2, Wrench, Cpu, CheckCircle2 
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-brand-orange py-2 flex items-center gap-1 ${
      isActive ? 'text-brand-orange font-semibold' : 'text-brand-charcoal'
    }`;

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">

      {/* Main Navigation Bar */}
      <div 
        className={`w-full bg-white transition-all duration-200 ${
          isScrolled 
            ? 'shadow-md py-2.5 bg-white/95 backdrop-blur-md border-b border-zinc-200' 
            : 'py-3.5 border-b border-zinc-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Company Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <img 
              src="/logo.jpg" 
              alt="Orange Structures Logo" 
              className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>

            <NavLink to="/about" className={navLinkClasses}>
              About Us
            </NavLink>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`text-sm font-medium transition-colors hover:text-brand-orange py-2 flex items-center gap-1 ${
                  location.pathname.includes('/poultry-') 
                    ? 'text-brand-orange font-semibold' 
                    : 'text-brand-charcoal'
                }`}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-brand-orange' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-zinc-200/80 p-2 overflow-hidden ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-150">
                    <Link
                      to="/poultry-construction"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50/70 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-orange-100/70 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-zinc-900 group-hover:text-brand-orange">
                          Poultry Construction
                        </div>
                        <p className="text-xs text-zinc-500 mt-0.5 line-clamp-2">
                          Turnkey steel sheds, civil layout planning, and biosecure farm infrastructure.
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/poultry-equipment"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50/70 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-orange-100/70 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-zinc-900 group-hover:text-brand-orange">
                          Poultry Equipment
                        </div>
                        <p className="text-xs text-zinc-500 mt-0.5 line-clamp-2">
                          Automated feeding, drinking lines, cone fans, cooling pads, and brooders.
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/poultry-management-software"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50/70 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-orange-100/70 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-zinc-900 group-hover:text-brand-orange">
                          Poultry Management Software
                        </div>
                        <p className="text-xs text-zinc-500 mt-0.5 line-clamp-2">
                          Real-time shed micro-climate monitoring, FCR tracking, and alert triggers.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/projects" className={navLinkClasses}>
              Projects & Gallery
            </NavLink>

            <NavLink to="/contact" className={navLinkClasses}>
              Contact Us
            </NavLink>
          </nav>

          {/* Desktop Right Actions: Cart & Quote Button */}
          <div className="hidden lg:flex items-center gap-4">

            {/* Orange Get a Quote Button */}
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeDark text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-brand hover:shadow-brand-lg transition-all transform active:scale-98"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Actions: Cart + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-800 hover:text-brand-orange rounded-lg border border-zinc-200 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-brand-orange" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Collapsible Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 shadow-xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="px-5 pt-3 pb-6 space-y-3">
            
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive ? 'bg-orange-50 text-brand-orange font-semibold' : 'text-zinc-800 hover:bg-zinc-50'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive ? 'bg-orange-50 text-brand-orange font-semibold' : 'text-zinc-800 hover:bg-zinc-50'
                }`
              }
            >
              About Us
            </NavLink>

            {/* Mobile Services Accordion */}
            <div className="border border-zinc-100 rounded-lg overflow-hidden">
              <button
                type="button"
                className="w-full flex items-center justify-between px-3 py-2.5 text-base font-medium text-zinc-800 bg-zinc-50"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span>Our Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-brand-orange' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="px-3 py-2 space-y-1 bg-white border-t border-zinc-100">
                  <NavLink
                    to="/poultry-construction"
                    className="flex items-center gap-2 py-2 px-2 text-sm text-zinc-700 hover:text-brand-orange rounded-md"
                  >
                    <Building2 className="w-4 h-4 text-brand-orange" />
                    <span>Poultry Construction</span>
                  </NavLink>
                  <NavLink
                    to="/poultry-equipment"
                    className="flex items-center gap-2 py-2 px-2 text-sm text-zinc-700 hover:text-brand-orange rounded-md"
                  >
                    <Wrench className="w-4 h-4 text-brand-orange" />
                    <span>Poultry Equipment</span>
                  </NavLink>
                  <NavLink
                    to="/poultry-management-software"
                    className="flex items-center gap-2 py-2 px-2 text-sm text-zinc-700 hover:text-brand-orange rounded-md"
                  >
                    <Cpu className="w-4 h-4 text-brand-orange" />
                    <span>Poultry Management Software</span>
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive ? 'bg-orange-50 text-brand-orange font-semibold' : 'text-zinc-800 hover:bg-zinc-50'
                }`
              }
            >
              Projects & Gallery
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive ? 'bg-orange-50 text-brand-orange font-semibold' : 'text-zinc-800 hover:bg-zinc-50'
                }`
              }
            >
              Contact Us
            </NavLink>

            {/* Mobile CTAs */}
            <div className="pt-3 border-t border-zinc-100 flex flex-col gap-2.5">
              <Link
                to="/request-quote"
                className="w-full flex items-center justify-center gap-2 bg-brand-orange text-white py-3 rounded-xl font-semibold shadow-md active:bg-brand-orangeDark"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${siteConfig.contact.phoneClean}`}
                className="w-full flex items-center justify-center gap-2 bg-zinc-100 text-zinc-800 py-2.5 rounded-xl font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>Call Us: {siteConfig.contact.phone}</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
