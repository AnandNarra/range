import React from 'react';
import { Phone, MessageSquare, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig, getWhatsAppLink } from '../data/siteConfig';

export default function MobileContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-zinc-200/90 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] py-2 px-3 lg:hidden">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* Call Now */}
        <a
          href={`tel:${siteConfig.contact.phoneClean}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 rounded-xl transition-colors active:scale-95"
        >
          <Phone className="w-4 h-4 text-brand-orange mb-0.5" />
          <span className="text-[11px] font-semibold">Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={getWhatsAppLink("Hello Orange Structures, I would like to enquire about your poultry solutions.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-xl transition-colors active:scale-95"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>

        {/* Request Quote */}
        <Link
          to="/request-quote"
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-brand-orange hover:bg-brand-orangeDark text-white rounded-xl shadow-sm transition-colors active:scale-95"
        >
          <FileText className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px] font-semibold">Get Quote</span>
        </Link>

      </div>
    </div>
  );
}
