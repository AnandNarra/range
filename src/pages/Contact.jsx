import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, MessageSquare, Clock, 
  Send, AlertCircle, CheckCircle2, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { siteConfig, getWhatsAppLink, getMailtoLink } from '../data/siteConfig';
import Breadcrumb from '../components/Breadcrumb';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Poultry Consultation',
    message: ''
  });

  const [formError, setFormError] = useState('');
  const [formSuccessMethod, setFormSuccessMethod] = useState('');

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.phone.trim() || !contactForm.message.trim()) {
      setFormError('Please fill in your Name, Phone Number, and Message.');
      return;
    }
    setFormError('');

    const text = `Hello Orange Structures,\n\n*Name:* ${contactForm.name}\n*Phone:* ${contactForm.phone}\n*Email:* ${contactForm.email || 'N/A'}\n*Subject:* ${contactForm.subject}\n*Message:* ${contactForm.message}`;
    const url = getWhatsAppLink(text);
    window.open(url, '_blank');
    setFormSuccessMethod('WhatsApp');
  };

  const handleEmailSend = (e) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.phone.trim() || !contactForm.message.trim()) {
      setFormError('Please fill in your Name, Phone Number, and Message.');
      return;
    }
    setFormError('');

    const subject = `Website Enquiry: ${contactForm.subject} - ${contactForm.name}`;
    const body = `Name: ${contactForm.name}\nPhone: ${contactForm.phone}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`;
    const mailto = getMailtoLink(subject, body);
    window.location.href = mailto;
    setFormSuccessMethod('Email');
  };

  return (
    <div className="space-y-0">
      
      {/* Header */}
      <section className="relative py-16 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/modern_poultry_farm_shed.jpg"
            alt="Orange Structures Facility"
            className="w-full h-full object-cover brightness-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/75 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumb items={[{ label: "Contact Us" }]} />

          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-semibold uppercase tracking-wider">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
              Contact Orange Structures
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Connect with our agricultural engineers for turnkey farm construction, automated equipment sizing, or climate control questions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 sm:py-20 bg-zinc-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left 5 Cols: Contact Details & Direct Connect Actions */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/90 shadow-card space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-zinc-950 font-heading">
                    Official Contact Channels
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    Direct phone and WhatsApp assistance during business hours.
                  </p>
                </div>

                {/* Direct Action Cards */}
                <div className="space-y-3">
                  
                  {/* WhatsApp */}
                  <a
                    href={getWhatsAppLink("Hello Orange Structures, I would like to discuss a poultry farm project.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-950 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-emerald-800 uppercase">Chat on WhatsApp</div>
                      <div className="text-sm font-bold text-zinc-900 truncate">{siteConfig.contact.whatsapp}</div>
                      <div className="text-[11px] text-zinc-500">Fastest technical response</div>
                    </div>
                  </a>

                  {/* Click to Call */}
                  <a
                    href={`tel:${siteConfig.contact.phoneClean}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-950 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-orange text-white flex items-center justify-center shrink-0 shadow-brand group-hover:scale-105 transition-transform">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-brand-orange uppercase">Click to Call</div>
                      <div className="text-sm font-bold text-zinc-900 truncate">{siteConfig.contact.phone}</div>
                      <div className="text-[11px] text-zinc-500">Mon-Sat, 9:00 AM - 6:30 PM</div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${siteConfig.contact.salesEmail}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-950 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-zinc-500 uppercase">Sales & Support Email</div>
                      <div className="text-sm font-bold text-zinc-900 truncate">{siteConfig.contact.salesEmail}</div>
                      <div className="text-[11px] text-zinc-500">Official commercial enquiries</div>
                    </div>
                  </a>

                </div>

                {/* Office Address Card */}
                <div className="pt-4 border-t border-zinc-100 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800">
                        Operational Headquarters
                      </h4>
                      <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                        {siteConfig.contact.address.line1}<br />
                        {siteConfig.contact.address.line2}<br />
                        {siteConfig.contact.address.city}, {siteConfig.contact.address.state} - {siteConfig.contact.address.pincode}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <Clock className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800">
                        Business Hours
                      </h4>
                      <p className="text-xs text-zinc-600 mt-1">
                        {siteConfig.contact.workingHours}<br />
                        <span className="text-zinc-500">{siteConfig.contact.sundayStatus}</span>
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right 7 Cols: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200/90 shadow-card space-y-6">
                
                <div>
                  <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">
                    Send a Message
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 font-heading mt-1">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                    Fill out the fields below. Once submitted, your message will instantly open in WhatsApp or your Email client with no server delay.
                  </p>
                </div>

                {formError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                {formSuccessMethod && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Message formatted! Opening {formSuccessMethod} now with your inquiry.</span>
                  </div>
                )}

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Patel"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98852 79787"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
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
                        placeholder="name@email.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        Inquiry Subject
                      </label>
                      <select
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange bg-white font-medium"
                      >
                        <option>New Poultry Farm Construction</option>
                        <option>Equipment Supply & Pan Feeders</option>
                        <option>Ventilation Fans & Cooling Pads</option>
                        <option>Climate Automation & Software</option>
                        <option>Existing Shed Retrofit</option>
                        <option>Spare Parts & Service Request</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Your Message or Shed Requirements *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please share details such as your farm location, bird capacity, or specific equipment questions..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange resize-none"
                    />
                  </div>

                  {/* Submission Buttons */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="flex items-center justify-center gap-2 py-3.5 px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-98"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send on WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleEmailSend}
                      className="flex items-center justify-center gap-2 py-3.5 px-5 bg-brand-orange hover:bg-brand-orangeDark text-white font-bold rounded-xl text-xs sm:text-sm shadow-brand transition-all active:scale-98"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send via Email</span>
                    </button>
                  </div>

                </form>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

    </div>
  );
}
