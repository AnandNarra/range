import React, { useState } from 'react';
import { 
  FileText, MessageSquare, Mail, Send, AlertCircle, 
  CheckCircle2, ArrowRight, ShieldCheck, Building2, Wrench, Cpu 
} from 'lucide-react';
import { siteConfig, getWhatsAppLink, getMailtoLink } from '../data/siteConfig';
import Breadcrumb from '../components/Breadcrumb';
import SectionHeading from '../components/SectionHeading';

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    serviceRequired: 'Poultry Farm Construction',
    // Conditional fields:
    shedCapacity: '',
    shedDimensions: '',
    equipmentNeeded: 'Complete Package (Feeding + Drinking + Ventilation)',
    softwareShedCount: '1 - 3 Sheds',
    projectTimeline: 'Within 1 - 2 Months',
    projectDetails: ''
  });

  const [formError, setFormError] = useState('');
  const [submissionFeedback, setSubmissionFeedback] = useState('');

  const generateEnquiryText = () => {
    let text = `Hello Orange Structures,\n\nI would like to request an official quotation for:\n*Service Required:* ${formData.serviceRequired}\n\n`;
    text += `*Client Name:* ${formData.name}\n`;
    text += `*Phone:* ${formData.phone}\n`;
    text += `*Email:* ${formData.email || 'N/A'}\n`;
    text += `*Farm Location:* ${formData.location}\n`;
    text += `*Target Timeline:* ${formData.projectTimeline}\n`;

    if (formData.serviceRequired.includes('Construction')) {
      text += `*Proposed Capacity:* ${formData.shedCapacity || 'To be determined'}\n`;
      text += `*Shed Dimensions:* ${formData.shedDimensions || 'Standard'}\n`;
    } else if (formData.serviceRequired.includes('Equipment')) {
      text += `*Equipment Scope:* ${formData.equipmentNeeded}\n`;
      text += `*Shed Dimensions:* ${formData.shedDimensions || 'N/A'}\n`;
    } else if (formData.serviceRequired.includes('Software')) {
      text += `*Number of Sheds to Monitor:* ${formData.softwareShedCount}\n`;
    }

    if (formData.projectDetails) {
      text += `*Specific Requirements / Notes:*\n${formData.projectDetails}\n`;
    }

    text += `\nPlease review and share an initial design estimate and commercial proposal.`;
    return text;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.location.trim()) {
      setFormError('Please enter your Name, Phone Number, and Farm Location.');
      return;
    }
    setFormError('');

    const text = generateEnquiryText();
    const url = getWhatsAppLink(text);
    window.open(url, '_blank');
    setSubmissionFeedback('Opening WhatsApp with your formatted quotation request...');
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.location.trim()) {
      setFormError('Please enter your Name, Phone Number, and Farm Location.');
      return;
    }
    setFormError('');

    const text = generateEnquiryText();
    const subject = `Official Quote Request: ${formData.serviceRequired} - ${formData.name}`;
    const mailto = getMailtoLink(subject, text);
    window.location.href = mailto;
    setSubmissionFeedback('Opening your email client with your prefilled quotation request...');
  };

  return (
    <div className="space-y-0 bg-zinc-50 min-h-screen">
      
      {/* Header */}
      <section className="relative py-16 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/modern_poultry_farm_shed.jpg"
            alt="Poultry Farm Planning"
            className="w-full h-full object-cover brightness-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/75 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumb items={[{ label: "Request a Quote" }]} />

          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-semibold uppercase tracking-wider">
              Itemized Estimation
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
              Request an Official Quotation
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Tell us about your poultry project requirements. Receive transparent pricing, engineering specifications, and structural proposals tailored to your farm size.
            </p>
          </div>
        </div>
      </section>

      {/* Main Quotation Form */}
      <section className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200/90 shadow-xl space-y-8">
            
            <div className="border-b border-zinc-100 pb-5">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 font-heading">
                Poultry Project Information
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                Please complete the form below. Depending on the service you select, relevant sizing fields will appear.
              </p>
            </div>

            {formError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {submissionFeedback && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{submissionFeedback}</span>
              </div>
            )}

            <form className="space-y-6">
              
              {/* Step 1: Select Service */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                  1. Which Service or Solution Do You Require? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { title: "Poultry Farm Construction", icon: Building2, desc: "PEB steel shed & civil works" },
                    { title: "Poultry Equipment Sales", icon: Wrench, desc: "Feeding, drinking & fans" },
                    { title: "Poultry Software & Automation", icon: Cpu, desc: "Sensors & mobile control" }
                  ].map((srv, idx) => {
                    const isSelected = formData.serviceRequired === srv.title;
                    const Icon = srv.icon;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setFormData({...formData, serviceRequired: srv.title})}
                        className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'border-brand-orange bg-orange-50/70 ring-2 ring-brand-orange/20 shadow-sm'
                            : 'border-zinc-200 hover:border-zinc-300 bg-white'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${isSelected ? 'bg-brand-orange text-white' : 'bg-zinc-100 text-zinc-600'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className={`text-xs font-bold ${isSelected ? 'text-brand-orange' : 'text-zinc-900'}`}>{srv.title}</div>
                          <div className="text-[11px] text-zinc-500 mt-0.5">{srv.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Conditional Fields based on Service */}
              <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block">
                  2. Sizing & Specifications ({formData.serviceRequired})
                </span>

                {formData.serviceRequired.includes('Construction') && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        Proposed Bird Capacity
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 20,000 / 35,000 Broilers"
                        value={formData.shedCapacity}
                        onChange={(e) => setFormData({...formData, shedCapacity: e.target.value})}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        Land / Shed Dimensions (Length x Width)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 300 ft x 50 ft"
                        value={formData.shedDimensions}
                        onChange={(e) => setFormData({...formData, shedDimensions: e.target.value})}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange bg-white"
                      />
                    </div>
                  </div>
                )}

                {formData.serviceRequired.includes('Equipment') && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        Equipment Needed
                      </label>
                      <select
                        value={formData.equipmentNeeded}
                        onChange={(e) => setFormData({...formData, equipmentNeeded: e.target.value})}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange bg-white font-medium"
                      >
                        <option>Complete Package (Feeding + Drinking + Ventilation)</option>
                        <option>Only Automatic Pan Feeding Lines</option>
                        <option>Only Nipple Drinking Water Lines</option>
                        <option>50" Cone Exhaust Fans & Cooling Pads</option>
                        <option>Gas Brooders & Heating Systems</option>
                        <option>Bulk Feed Storage Silos</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        Existing Shed Dimensions
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 250 x 40 ft (or bird quantity)"
                        value={formData.shedDimensions}
                        onChange={(e) => setFormData({...formData, shedDimensions: e.target.value})}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange bg-white"
                      />
                    </div>
                  </div>
                )}

                {formData.serviceRequired.includes('Software') && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        Number of Poultry Sheds
                      </label>
                      <select
                        value={formData.softwareShedCount}
                        onChange={(e) => setFormData({...formData, softwareShedCount: e.target.value})}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange bg-white font-medium"
                      >
                        <option>1 - 3 Sheds</option>
                        <option>4 - 8 Sheds</option>
                        <option>9 - 15 Sheds</option>
                        <option>15+ Multi-Location Enterprise</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        Primary Goal
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Temperature SMS alerts, FCR tracking"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange bg-white"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Target Start Timeline
                  </label>
                  <select
                    value={formData.projectTimeline}
                    onChange={(e) => setFormData({...formData, projectTimeline: e.target.value})}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange bg-white font-medium"
                  >
                    <option>Immediate / Within 2 Weeks</option>
                    <option>Within 1 - 2 Months</option>
                    <option>Planning Phase (3 - 6 Months)</option>
                    <option>Exploring Budgetary Estimates</option>
                  </select>
                </div>
              </div>

              {/* Step 3: Contact Details */}
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
                  3. Your Contact Information
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange bg-white"
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
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange bg-white"
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
                      placeholder="yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Farm Location / Town / State *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Warangal, Telangana"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Additional Project Details & Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide any additional specifications, local wind conditions, or specific equipment questions..."
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({...formData, projectDetails: e.target.value})}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange bg-white resize-none"
                  />
                </div>
              </div>

              {/* Instant WhatsApp / Email Dispatch */}
              <div className="pt-2 border-t border-zinc-100 space-y-3">
                <p className="text-[11px] text-zinc-500">
                  Direct submission via WhatsApp or Email. No server-side storage or user authentication required.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-98"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Quote Request on WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-brand-orange hover:bg-brand-orangeDark text-white font-bold rounded-xl text-xs sm:text-sm shadow-brand transition-all active:scale-98"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Quote Request via Email</span>
                  </button>
                </div>
              </div>

            </form>

          </div>

        </div>
      </section>

    </div>
  );
}
