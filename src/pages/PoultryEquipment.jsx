import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, SlidersHorizontal, ShoppingBag, 
  ArrowRight, X, Sparkles, Filter, Grid3X3, Layers 
} from 'lucide-react';
import { products } from '../data/products';
import { categories } from '../data/categories';
import ProductCard from '../components/ProductCard';
import Breadcrumb from '../components/Breadcrumb';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';

export default function PoultryEquipment() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);


  // Sync category with URL search param
  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategorySelect = (slug) => {
    setSelectedCategory(slug);
    if (slug === 'all') {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', slug);
    }
    setSearchParams(searchParams);
    setMobileFilterOpen(false);
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return products
      .filter(item => {
        // Category match
        if (selectedCategory !== 'all' && item.categorySlug !== selectedCategory) {
          return false;
        }
        // Search query match
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase();
          const matchesName = item.name.toLowerCase().includes(query);
          const matchesCat = item.category.toLowerCase().includes(query);
          const matchesModel = (item.model || '').toLowerCase().includes(query);
          const matchesDesc = item.shortDesc.toLowerCase().includes(query);
          if (!matchesName && !matchesCat && !matchesModel && !matchesDesc) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'name-asc') {
          return a.name.localeCompare(b.name);
        }
        if (sortBy === 'name-desc') {
          return b.name.localeCompare(a.name);
        }
        // default: featured first
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      });
  }, [selectedCategory, searchQuery, sortBy]);

  const currentCategoryObj = categories.find(c => c.slug === selectedCategory) || categories[0];

  return (
    <div className="space-y-0">
      
      {/* Banner */}
      <section className="relative py-16 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pan_feeder.jpg"
            alt="Poultry Equipment Inventory"
            className="w-full h-full object-cover brightness-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/75 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumb items={[{ label: "Poultry Equipment" }]} />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-semibold uppercase tracking-wider">
                Industrial Catalogue
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
                Poultry Equipment & Automation Systems
              </h1>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Commercial pan feeding lines, nipple drinking systems, high-CFM cone fans, evaporative cooling pads, and micro-climate controllers.
              </p>
            </div>


          </div>
        </div>
      </section>

      {/* Main Catalogue Area */}
      <section className="py-12 sm:py-16 bg-zinc-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar: Search, Category Drawer Trigger & Sorting */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-zinc-200 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search equipment, fan, feeder..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-10 pr-8 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filter Toggle on Mobile */}
            <div className="flex items-center justify-between w-full md:w-auto gap-3">
              <button
                type="button"
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-zinc-200 rounded-xl text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
              >
                <Filter className="w-3.5 h-3.5 text-brand-orange" />
                <span>Categories ({selectedCategory === 'all' ? 'All' : currentCategoryObj.name})</span>
              </button>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-500 hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-xs py-2 px-3 rounded-xl border border-zinc-200 focus:outline-none focus:border-brand-orange bg-white font-medium text-zinc-800"
                >
                  <option value="featured">Featured First</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
              </div>
            </div>

          </div>

          {/* Layout Grid: Sidebar Categories (Desktop) + Product Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Desktop Category Sidebar */}
            <aside className="hidden lg:block lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl p-5 border border-zinc-200 shadow-sm space-y-4 sticky top-28">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                  <h3 className="text-sm font-bold text-zinc-900 font-heading">
                    Equipment Categories
                  </h3>
                  {selectedCategory !== 'all' && (
                    <button
                      type="button"
                      onClick={() => handleCategorySelect('all')}
                      className="text-[11px] text-brand-orange hover:underline font-semibold"
                    >
                      Reset
                    </button>
                  )}
                </div>

                <div className="space-y-1.5">
                  {categories.map((cat) => {
                    const count = cat.slug === 'all' 
                      ? products.length 
                      : products.filter(p => p.categorySlug === cat.slug).length;
                    const isActive = selectedCategory === cat.slug;

                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleCategorySelect(cat.slug)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all text-left ${
                          isActive
                            ? 'bg-brand-orange text-white shadow-sm'
                            : 'text-zinc-700 hover:bg-orange-50/60 hover:text-brand-orange'
                        }`}
                      >
                        <span className="truncate">{cat.name}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          isActive ? 'bg-white/20 text-white' : 'bg-zinc-100 text-zinc-500'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Quick Assistance Box */}
                <div className="pt-4 border-t border-zinc-100 bg-orange-50/50 p-3.5 rounded-xl border border-orange-100 text-xs space-y-2">
                  <h4 className="font-bold text-zinc-900">Need Custom Sizing?</h4>
                  <p className="text-[11px] text-zinc-600 leading-relaxed">
                    Our engineers calculate exact CFM, cooling pad square footage, and feed pan numbers for your shed dimensions.
                  </p>
                  <Link
                    to="/request-quote"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-orange hover:underline"
                  >
                    <span>Request Custom Quote</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Mobile Category Modal / Drawer */}
            {mobileFilterOpen && (
              <div className="fixed inset-0 z-50 lg:hidden flex">
                <div 
                  className="fixed inset-0 bg-black/50"
                  onClick={() => setMobileFilterOpen(false)}
                />
                <div className="relative ml-auto w-full max-w-xs bg-white h-full p-6 shadow-2xl flex flex-col space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
                    <h3 className="font-bold text-zinc-900 text-sm">Select Category</h3>
                    <button
                      type="button"
                      onClick={() => setMobileFilterOpen(false)}
                      className="p-1 text-zinc-400 hover:text-zinc-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleCategorySelect(cat.slug)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-left ${
                          selectedCategory === cat.slug
                            ? 'bg-brand-orange text-white'
                            : 'text-zinc-800 hover:bg-zinc-100'
                        }`}
                      >
                        <span>{cat.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Product Cards Grid */}
            <main className="lg:col-span-3 space-y-6">
              
              {/* Category Info Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-zinc-900 font-heading">
                    {currentCategoryObj.name}
                  </h2>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} available for quotation
                  </p>
                </div>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-2xl p-12 text-center border border-zinc-200 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-zinc-100 text-zinc-400 flex items-center justify-center mx-auto">
                    <Search className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-900">No equipment found</h3>
                    <p className="text-xs text-zinc-500 max-w-sm mx-auto mt-1">
                      No products matched "{searchQuery}". Try searching for fans, feeding pans, or reset the category filter.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => { setSearchQuery(''); handleCategorySelect('all'); }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-orange text-white text-xs font-semibold rounded-xl"
                  >
                    <span>View All Equipment</span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}

            </main>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

    </div>
  );
}
