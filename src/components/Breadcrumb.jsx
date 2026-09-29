import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center text-xs text-zinc-500 py-3" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 sm:gap-2">
        <li className="flex items-center">
          <Link to="/" className="flex items-center hover:text-brand-orange transition-colors">
            <Home className="w-3.5 h-3.5 mr-1 text-zinc-400" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-1">
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
            {item.to ? (
              <Link to={item.to} className="hover:text-brand-orange transition-colors whitespace-nowrap">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-zinc-800 truncate max-w-[120px] sm:max-w-xs">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
