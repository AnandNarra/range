import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { getWhatsAppLink } from '../data/siteConfig';

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 lg:bottom-6 right-5 z-30 flex items-end gap-3 group">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-zinc-800 text-xs py-2 px-3 rounded-xl shadow-lg border border-zinc-200 animate-in fade-in slide-in-from-right-4 duration-300">
          <span>Need quick pricing or farm consultation?</span>
          <button 
            type="button" 
            onClick={() => setShowTooltip(false)}
            className="text-zinc-400 hover:text-zinc-600 p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppLink("Hello Orange Structures, I would like to enquire about your poultry farm construction & equipment.")}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all focus:outline-none ring-4 ring-emerald-500/20"
        aria-label="Chat with Orange Structures on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
}
