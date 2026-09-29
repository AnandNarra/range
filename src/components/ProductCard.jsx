import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, MessageSquare, Check, Eye } from 'lucide-react';
import { getWhatsAppLink } from '../data/siteConfig';

export default function ProductCard({ product }) {

  const directWhatsAppLink = getWhatsAppLink(
    `Hello Orange Structures,\n\nI would like to enquire about the price, availability, and technical specifications for:\n*Product:* ${product.name}\n*Model:* ${product.model || 'Standard'}\n*Category:* ${product.category}\n\nPlease share quotation details.`
  );

  return (
    <div className="group bg-white rounded-2xl border border-zinc-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col h-full overflow-hidden hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative h-56 w-full overflow-hidden bg-zinc-100 p-3 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Category Pill */}
        <span className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm text-zinc-800 text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-sm border border-zinc-200/60">
          {product.category}
        </span>

        {/* Model Tag */}
        {product.model && (
          <span className="absolute bottom-5 left-5 bg-zinc-900/80 backdrop-blur-sm text-white text-[11px] font-mono px-2 py-0.5 rounded shadow-sm">
            {product.model}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <Link
            to={`/poultry-equipment/${product.slug}`}
            className="block text-base font-bold text-zinc-900 hover:text-brand-orange transition-colors font-heading leading-snug line-clamp-1"
          >
            {product.name}
          </Link>
          <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">
            {product.shortDesc}
          </p>
        </div>

        {/* Key Specification Preview */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="bg-zinc-50 rounded-lg p-2.5 text-[11px] border border-zinc-100 space-y-1">
            <div className="flex justify-between text-zinc-600">
              <span className="font-medium text-zinc-500">{product.specifications[0].label}:</span>
              <span className="font-semibold text-zinc-800 truncate ml-2">{product.specifications[0].value}</span>
            </div>
            {product.specifications[1] && (
              <div className="flex justify-between text-zinc-600">
                <span className="font-medium text-zinc-500">{product.specifications[1].label}:</span>
                <span className="font-semibold text-zinc-800 truncate ml-2">{product.specifications[1].value}</span>
              </div>
            )}
          </div>
        )}

        {/* Actions Grid */}
        <div className="space-y-2 pt-1">
          <div className="grid grid-cols-2 gap-2">
            {/* View Details */}
            <Link
              to={`/poultry-equipment/${product.slug}`}
              className="inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 rounded-xl text-xs font-semibold transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Details</span>
            </Link>

            {/* Direct WhatsApp Quote */}
            <a
              href={directWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-xl text-xs font-semibold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Ask Price</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
