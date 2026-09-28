import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-3.5 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen 
                ? 'border-orange-200 bg-orange-50/20 shadow-sm' 
                : 'border-zinc-200/90 bg-white hover:border-zinc-300'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3 pr-4">
                <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${isOpen ? 'text-brand-orange' : 'text-zinc-400'}`} />
                <span className={`text-sm sm:text-base font-semibold font-heading ${isOpen ? 'text-brand-orange' : 'text-zinc-900'}`}>
                  {item.question}
                </span>
              </span>
              <div className={`p-1 rounded-full shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-orange-100 text-brand-orange' : 'text-zinc-400'}`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-orange-100/60 animate-in fade-in duration-150">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
