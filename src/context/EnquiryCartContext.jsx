import React, { createContext, useContext, useState, useEffect } from 'react';
import { siteConfig, getWhatsAppLink } from '../data/siteConfig';

const EnquiryCartContext = createContext();

const STORAGE_KEY = 'orange_structures_enquiry_cart_v1';

export const EnquiryCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to load enquiry cart from localStorage", e);
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error("Failed to save enquiry cart to localStorage", e);
    }
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const setItemQuantity = (productId, qty) => {
    const parsed = parseInt(qty, 10);
    if (isNaN(parsed) || parsed <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity: parsed } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const generateWhatsAppMessage = (customerName = "", location = "", notes = "") => {
    let msg = `Hello Orange Structures,\n\nI would like to request an official quotation for the following equipment:\n\n`;
    
    cartItems.forEach((item, index) => {
      msg += `${index + 1}. *${item.product.name}*\n`;
      msg += `   - Model: ${item.product.model || 'Standard'}\n`;
      msg += `   - Category: ${item.product.category}\n`;
      msg += `   - Quantity Requested: ${item.quantity} Unit(s)\n\n`;
    });

    if (customerName) msg += `*Contact Name:* ${customerName}\n`;
    if (location) msg += `*Farm Location:* ${location}\n`;
    if (notes) msg += `*Additional Notes:* ${notes}\n`;
    msg += `\nPlease provide price quotation, availability, and delivery lead time. Thank you!`;

    return msg;
  };

  const sendWhatsAppCartEnquiry = (customerName = "", location = "", notes = "") => {
    if (cartItems.length === 0) return;
    const msg = generateWhatsAppMessage(customerName, location, notes);
    const url = getWhatsAppLink(msg);
    window.open(url, '_blank');
  };

  return (
    <EnquiryCartContext.Provider
      value={{
        cartItems,
        totalItems,
        isOpen,
        setIsOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        setItemQuantity,
        clearCart,
        generateWhatsAppMessage,
        sendWhatsAppCartEnquiry
      }}
    >
      {children}
    </EnquiryCartContext.Provider>
  );
};

export const useEnquiryCart = () => {
  const context = useContext(EnquiryCartContext);
  if (!context) {
    throw new Error('useEnquiryCart must be used within an EnquiryCartProvider');
  }
  return context;
};
