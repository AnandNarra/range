import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Building2, Wrench, MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '../data/siteConfig';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-zinc-200/90 shadow-xl">
        
        <div className="w-20 h-20 rounded-2xl bg-orange-100/80 text-brand-orange flex items-center justify-center mx-auto text-3xl font-extrabold font-mono shadow-inner">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-zinc-950 font-heading">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            The page you are trying to visit does not exist or may have been moved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="pt-2 space-y-2 text-xs">
          <Link
            to="/"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-brand-orange hover:bg-brand-orangeDark text-white font-semibold rounded-xl shadow-brand transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/poultry-equipment"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-medium rounded-xl transition-colors"
          >
            <Wrench className="w-4 h-4 text-brand-orange" />
            <span>Browse Poultry Equipment</span>
          </Link>

          <a
            href={getWhatsAppLink("Hello Orange Structures, I was looking for information on your website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-medium rounded-xl transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Contact Us on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
