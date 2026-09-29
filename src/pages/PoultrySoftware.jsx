import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, ThermometerSnowflake, LineChart, Bell, 
  Smartphone, ShieldAlert, CheckCircle2, ArrowRight, 
  MessageSquare, Layers, Laptop, Sparkles, Activity, AlertCircle 
} from 'lucide-react';
import { siteConfig, getWhatsAppLink, getMailtoLink } from '../data/siteConfig';
import { softwareFaqs } from '../data/faqs';
import Breadcrumb from '../components/Breadcrumb';
import SectionHeading from '../components/SectionHeading';
import FAQAccordion from '../components/FAQAccordion';


export default function PoultrySoftware() {
  const [demoForm, setDemoForm] = useState({
    name: '',
    phone: '',
    email: '',
    numberOfSheds: '1 - 3 Sheds',
    farmLocation: '',
    currentController: 'Manual / Standard Relay'
  });

  const [formError, setFormError] = useState('');
  const [demoSuccess, setDemoSuccess] = useState(false);

  const features = [
    {
      title: "Real-Time Micro-Climate Telemetry",
      desc: "Live stream temperature, relative humidity, negative static pressure (Pa), and CO2 from multi-sensor arrays directly to your phone.",
      icon: ThermometerSnowflake
    },
    {
      title: "Flock Lifecycle & Age Tracking",
      desc: "Track daily bird age from Day 0 chick placement to harvest, with target body weight curves calibrated against breed guidelines.",
      icon: Activity
    },
    {
      title: "Daily Feed & Water FCR Analytics",
      desc: "Automatically tally daily feed silo dispensing and water meter pulses to calculate real-time Feed Conversion Ratio (FCR).",
      icon: LineChart
    },
    {
      title: "Instant Emergency Alerts",
      desc: "Receive immediate WhatsApp and SMS notifications if temperatures exceed critical thresholds, water pressure drops, or mains power trips.",
      icon: Bell
    },
    {
      title: "Multi-Shed & Multi-Farm Hierarchy",
      desc: "Manage multiple sheds or geographically scattered farm clusters from a unified executive web dashboard.",
      icon: Layers
    },
    {
      title: "Mortality & Health Logs",
      desc: "Log daily cull and mortality rates with visual curve charts to spot health deviations before outbreaks spread.",
      icon: ShieldAlert
    }
  ];

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    if (!demoForm.name.trim() || !demoForm.phone.trim() || !demoForm.farmLocation.trim()) {
      setFormError('Please fill in your Name, Phone Number, and Farm Location.');
      return;
    }
    setFormError('');

    const message = `Hello Orange Structures,\n\nI would like to request a *Live Demo* of your *Poultry Management Software*:\n\n*Name:* ${demoForm.name}\n*Phone:* ${demoForm.phone}\n*Email:* ${demoForm.email || 'N/A'}\n*Farm Location:* ${demoForm.farmLocation}\n*Number of Sheds:* ${demoForm.numberOfSheds}\n*Current Controller:* ${demoForm.currentController}\n\nPlease schedule a demo session and share platform pricing.`;

    const url = getWhatsAppLink(message);
    window.open(url, '_blank');
    setDemoSuccess(true);
  };

  return (
    <div className="space-y-0">
      
      {/* 1. SOFTWARE HERO */}
      <section className="relative py-20 lg:py-24 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/plc_controller.jpg"
            alt="Poultry Farm Software Platform"
            className="w-full h-full object-cover brightness-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/80 to-black/60" />
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumb items={[{ label: "Services", to: "/#services" }, { label: "Poultry Software" }]} />

          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-semibold uppercase tracking-wider">
              Intelligent Farm Telemetry
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
              Smart Digital Monitoring for Modern Poultry Farms
            </h1>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Connect shed climate controllers, sensor arrays, and flock records into one intuitive mobile and cloud dashboard. Make proactive, profitable decisions based on live farm data.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#demo-form"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeDark text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-brand transition-all active:scale-98"
              >
                <span>Book a Live Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppLink("Hello Orange Structures, I would like to consult regarding your Poultry Management Software.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-md transition-all active:scale-98"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* 3. SOFTWARE FEATURES */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Telemetry Capabilities"
            title="Comprehensive Management Modules"
            description="Built to address the daily operational realities of commercial poultry houses."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-card hover:shadow-card-hover transition-all space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 font-heading">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. BENEFITS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-5">
              <SectionHeading
                badge="Measurable Impact"
                title="Transforming Raw Farm Telemetry into Profit"
                description="Why progressive integrators and commercial farm owners switch to digital poultry management."
                center={false}
              />
              
              <ul className="space-y-3.5 text-sm text-zinc-700">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong>Heat Stress Prevention:</strong> Anticipate high temperature spikes before mortality occurs with predictive fan staging and instant WhatsApp alerts.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong>Lower FCR:</strong> Consistent ideal micro-climates encourage higher feed conversion, resulting in faster weight gains and shorter rearing cycles.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong>Reduced Labor Dependency:</strong> Eliminate subjective manual ventilation adjustments; automated setpoints manage fans and cooling pumps 24/7.
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 aspect-4/3">
                <img
                  src="/images/plc_controller.jpg"
                  alt="Industrial environmental controller panel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FAQS */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Software FAQs"
            title="Frequently Asked Software Questions"
            description="Insights into hardware connectivity, sensors, and remote mobile access."
          />
          <FAQAccordion items={softwareFaqs} />
        </div>
      </section>

      {/* 6. BOOK A DEMO FORM */}
      <section id="demo-form" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-zinc-50 border border-zinc-200/90 rounded-3xl p-6 sm:p-10 shadow-lg">
            <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-semibold uppercase tracking-wider">
                Live Demonstration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 font-heading">
                Book a Software & Automation Demo
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600">
                Experience the Orange Structures cloud dashboard and mobile alerts. Schedule a quick walkthrough with our automation specialists.
              </p>
            </div>

            {formError && (
              <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {demoSuccess && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Demo request formatted! Opening WhatsApp to schedule your demonstration time.</span>
              </div>
            )}

            <form onSubmit={handleDemoSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Reddy"
                    value={demoForm.name}
                    onChange={(e) => setDemoForm({...demoForm, name: e.target.value})}
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
                    placeholder="e.g. +91 98765 43210"
                    value={demoForm.phone}
                    onChange={(e) => setDemoForm({...demoForm, phone: e.target.value})}
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
                    value={demoForm.email}
                    onChange={(e) => setDemoForm({...demoForm, email: e.target.value})}
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
                    placeholder="e.g. Coimbatore, Tamil Nadu"
                    value={demoForm.farmLocation}
                    onChange={(e) => setDemoForm({...demoForm, farmLocation: e.target.value})}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Number of Poultry Sheds
                  </label>
                  <select
                    value={demoForm.numberOfSheds}
                    onChange={(e) => setDemoForm({...demoForm, numberOfSheds: e.target.value})}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange bg-white"
                  >
                    <option>1 - 2 Sheds</option>
                    <option>3 - 5 Sheds</option>
                    <option>6 - 10 Sheds</option>
                    <option>10+ Commercial Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Current Climate Controller
                  </label>
                  <select
                    value={demoForm.currentController}
                    onChange={(e) => setDemoForm({...demoForm, currentController: e.target.value})}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange bg-white"
                  >
                    <option>Manual switches / Relays</option>
                    <option>Basic Thermostat</option>
                    <option>Digital Multi-Stage Controller</option>
                    <option>Planning New Farm Construction</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-brand-orange hover:bg-brand-orangeDark text-white font-bold rounded-xl text-sm shadow-brand transition-all active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Live Demo via WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-zinc-500 text-center">
                Submits instantly via WhatsApp wa.me link. Zero backend storage or sensitive login required.
              </p>
            </form>
          </div>

        </div>
      </section>


    </div>
  );
}
