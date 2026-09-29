import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, MessageSquare, ArrowLeft, ArrowRight, 
  CheckCircle2, ShieldCheck, Truck, Check, HelpCircle 
} from 'lucide-react';
import { products } from '../data/products';
import { getWhatsAppLink } from '../data/siteConfig';
import Breadcrumb from '../components/Breadcrumb';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';

export default function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();



  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Find product by slug
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <h2 className="text-2xl font-bold text-zinc-900">Equipment Not Found</h2>
        <p className="text-sm text-zinc-600">The product you are looking for does not exist or has been relocated.</p>
        <Link
          to="/poultry-equipment"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-orange text-white rounded-xl text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Equipment Catalog</span>
        </Link>
      </div>
    );
  }

  const gallery = product.gallery || [product.image];


  // Related products from same category
  const relatedProducts = products
    .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3);

  const directWhatsAppLink = getWhatsAppLink(
    `Hello Orange Structures,\n\nI am interested in:\n*Product:* ${product.name}\n*Model:* ${product.model || 'Standard'}\n*Category:* ${product.category}\n\nPlease share commercial quotation, availability, and delivery lead time.`
  );

  return (
    <div className="space-y-0 bg-white">
      
      {/* Breadcrumb Bar */}
      <div className="border-b border-zinc-200 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Poultry Equipment", to: "/poultry-equipment" },
              { label: product.category, to: `/poultry-equipment?cat=${product.categorySlug}` },
              { label: product.name }
            ]}
          />
        </div>
      </div>

      {/* Main Details Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left: Product Images Gallery */}
            <div className="space-y-4 lg:sticky lg:top-28">
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-md">
                <img
                  src={gallery[activeImageIndex] || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-zinc-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {product.category}
                </span>
                {product.model && (
                  <span className="absolute bottom-4 left-4 bg-zinc-950/80 backdrop-blur-sm text-white text-xs font-mono px-3 py-1 rounded shadow-sm">
                    Model: {product.model}
                  </span>
                )}
              </div>

              {/* Thumbnails if gallery has multiple photos */}
              {gallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {gallery.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                        activeImageIndex === idx ? 'border-brand-orange shadow-sm' : 'border-zinc-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Guarantee Bar */}
              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 grid grid-cols-2 gap-4 text-xs">
                <div className="flex items-center gap-2 text-zinc-700">
                  <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Heavy-Duty Industrial Grade</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-700">
                  <Truck className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>On-Site Farm Delivery & Rigging</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Details & Actions */}
            <div className="space-y-6">
              
              <div>
                <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">
                  {product.category}
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 font-heading tracking-tight mt-1">
                  {product.name}
                </h1>
                {product.model && (
                  <p className="text-xs text-zinc-500 font-mono mt-1">
                    Serial / Product Code: {product.model}
                  </p>
                )}
              </div>

              {/* Short & Full Description */}
              <div className="space-y-3 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4">
                <p className="font-medium text-zinc-800">{product.shortDesc}</p>
                <p>{product.fullDesc}</p>
              </div>

              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <div className="space-y-3 border-t border-zinc-100 pt-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 font-heading">
                    Key Engineering Features
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical Specifications Table */}
              {product.specifications && product.specifications.length > 0 && (
                <div className="space-y-3 border-t border-zinc-100 pt-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 font-heading">
                    Technical Specifications
                  </h3>
                  <div className="bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden">
                    <table className="w-full text-xs text-left">
                      <tbody>
                        {product.specifications.map((spec, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-zinc-50/60'}>
                            <td className="px-4 py-2.5 font-semibold text-zinc-600 border-b border-zinc-100 w-1/2">
                              {spec.label}
                            </td>
                            <td className="px-4 py-2.5 font-medium text-zinc-900 border-b border-zinc-100 w-1/2">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Target Applications */}
              {product.applications && (
                <div className="space-y-2 border-t border-zinc-100 pt-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 font-heading">
                    Recommended Applications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-brand-orange font-medium">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Purchase / Enquiry Controls */}
              <div className="space-y-4 border-t border-zinc-200 pt-6">
                


                {/* Primary CTA Buttons */}
                <div className="grid grid-cols-1 gap-3">
                  
                  {/* WhatsApp Direct Quotation */}
                  <a
                    href={directWhatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-98"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Request Price on WhatsApp</span>
                  </a>


                </div>

                <div className="text-[11px] text-zinc-500 text-center">
                  Need a full shed package quote? Contact our engineering team for customized bundle discounts.
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-zinc-50 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-semibold text-brand-orange uppercase">Similar Equipment</span>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 font-heading">
                  Related Products in {product.category}
                </h2>
              </div>
              <Link
                to={`/poultry-equipment?cat=${product.categorySlug}`}
                className="text-xs font-semibold text-brand-orange hover:underline flex items-center gap-1"
              >
                <span>View all in category</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(rel => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <CTASection />

    </div>
  );
}
