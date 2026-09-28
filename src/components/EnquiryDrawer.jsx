import React, { useState } from 'react';
import { 
  X, Plus, Minus, Trash2, ShoppingBag, Send, 
  ArrowRight, Check, AlertCircle, Mail, MessageSquare 
} from 'lucide-react';
import { useEnquiryCart } from '../context/EnquiryCartContext';
import { getMailtoLink } from '../data/siteConfig';
import { Link } from 'react-router-dom';

export default function EnquiryDrawer() {
  const { 
    isOpen, 
    setIsOpen, 
    cartItems, 
    totalItems, 
    updateQuantity, 
    removeFromCart, 
    clearCart,
    sendWhatsAppCartEnquiry,
    generateWhatsAppMessage
  } = useEnquiryCart();

  const [customerName, setCustomerName] = useState('');
  const [farmLocation, setFarmLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      setErrorMessage('Please add at least one product before submitting enquiry.');
      return;
    }
    setErrorMessage('');
    sendWhatsAppCartEnquiry(customerName, farmLocation, notes);
  };

  const handleEmailSubmit = () => {
    if (cartItems.length === 0) return;
    const bodyText = generateWhatsAppMessage(customerName, farmLocation, notes);
    const mailto = getMailtoLink("Equipment Quotation Enquiry - Orange Structures", bodyText);
    window.location.href = mailto;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-zinc-200 flex items-center justify-between bg-zinc-50">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-brand-orangeLight text-brand-orange rounded-lg">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-900 font-heading">
                  Equipment Enquiry Cart
                </h3>
                <p className="text-xs text-zinc-500">
                  {totalItems} item{totalItems !== 1 ? 's' : ''} selected for quotation
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 text-zinc-400 hover:text-zinc-600 rounded-lg hover:bg-zinc-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center mx-auto text-zinc-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">Your enquiry cart is empty</h4>
                  <p className="text-xs text-zinc-500 max-w-xs mx-auto mt-1">
                    Explore our equipment catalogue and click "Add to Quote" to request specifications and pricing.
                  </p>
                </div>
                <Link
                  to="/poultry-equipment"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange text-white text-xs font-semibold rounded-lg hover:bg-brand-orangeDark transition-colors"
                >
                  <span>Browse Equipment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center pb-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Selected Equipment
                  </span>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-xs text-red-500 hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Clear All</span>
                  </button>
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  {cartItems.map(({ product, quantity }) => (
                    <div 
                      key={product.id}
                      className="p-3 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50 transition-colors flex gap-3 items-center"
                    >
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-16 h-16 rounded-lg object-cover bg-zinc-200 shrink-0 border border-zinc-200"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-semibold text-brand-orange uppercase">
                          {product.category}
                        </span>
                        <h5 className="text-xs font-semibold text-zinc-900 truncate">
                          {product.name}
                        </h5>
                        <p className="text-[11px] text-zinc-500">
                          Model: {product.model || 'Standard'}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-zinc-300 rounded-md bg-white">
                            <button
                              type="button"
                              onClick={() => updateQuantity(product.id, -1)}
                              className="p-1 text-zinc-500 hover:text-brand-orange"
                              title="Decrease"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-bold text-zinc-800">
                              {quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(product.id, 1)}
                              className="p-1 text-zinc-500 hover:text-brand-orange"
                              title="Increase"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(product.id)}
                            className="text-zinc-400 hover:text-red-500 p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Info Form for WhatsApp Prefill */}
                <div className="pt-3 border-t border-zinc-200 space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Your Information (Optional)
                  </span>

                  <div>
                    <label className="block text-[11px] font-medium text-zinc-700 mb-1">
                      Your Name / Farm Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Patel / Greenfield Farms"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-zinc-300 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-zinc-700 mb-1">
                      Farm Location / Town
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Namakkal / Hyderabad Region"
                      value={farmLocation}
                      onChange={(e) => setFarmLocation(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-zinc-300 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-zinc-700 mb-1">
                      Notes or Shed Dimensions
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Broiler shed 300x50 ft, need fast delivery"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-zinc-300 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-2 bg-red-50 border border-red-200 rounded-lg text-red-600 text-xs flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer Actions */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-zinc-200 bg-zinc-50 space-y-2.5">
              <p className="text-[11px] text-zinc-500 text-center">
                Instant submission via WhatsApp or Email. No payment or registration required.
              </p>

              {/* WhatsApp Checkout Button */}
              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm shadow-md transition-all active:scale-98"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Enquiry on WhatsApp</span>
              </button>

              {/* Email Fallback */}
              <button
                type="button"
                onClick={handleEmailSubmit}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-zinc-200 hover:bg-zinc-300 text-zinc-800 font-semibold rounded-xl text-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Enquire via Email</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
