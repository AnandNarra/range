/**
 * Orange Structures - Global Site Configuration
 * 
 * Update contact details, phone numbers, WhatsApp links, and office addresses here.
 * All pages and forms throughout the website read from this central configuration.
 */

export const siteConfig = {
  companyName: "Orange Structures",
  tagline: "Automation & Climate Control",
  brandMotto: "Building Smarter Poultry Farms for a Better Tomorrow.",
  establishedYear: 2018,
  
  // Contact details (Configurable placeholders - replace with actual client credentials)
  contact: {
    phone: "+91 98765 43210",
    phoneClean: "+919876543210", // Used for tel: links
    whatsapp: "+91 98765 43210",
    whatsappClean: "919876543210", // Country code + number without plus for wa.me links
    email: "info@orangestructures.com",
    salesEmail: "sales@orangestructures.com",
    supportEmail: "support@orangestructures.com",
    address: {
      line1: "Orange Structures Industrial Campus",
      line2: "Agricultural Engineering & Automation Zone",
      city: "Hyderabad / Bangalore Region",
      state: "Telangana / Karnataka",
      pincode: "500001",
      country: "India"
    },
    workingHours: "Monday – Saturday: 9:00 AM – 6:30 PM (IST)",
    sundayStatus: "Sunday: Closed (Emergency Support Available)"
  },

  // Social Links
  socials: {
    facebook: "https://facebook.com/orangestructures",
    linkedin: "https://linkedin.com/company/orangestructures",
    youtube: "https://youtube.com/@orangestructures",
    instagram: "https://instagram.com/orangestructures"
  },

  // Brand color constants
  colors: {
    primary: "#F04F32",
    black: "#09090B",
    charcoal: "#27272A",
    secondary: "#52525B",
    lightGrey: "#F4F5F6",
    white: "#FFFFFF"
  },

  // Company Key Metrics / Highlights
  stats: [
    { label: "Sheds Constructed", value: "350+", suffix: "Units" },
    { label: "Poultry Capacity Built", value: "8M+", suffix: "Birds" },
    { label: "Equipment Installed", value: "1,200+", suffix: "Lines" },
    { label: "Customer Satisfaction", value: "98.5%", suffix: "Rating" }
  ]
};

/**
 * Helper to build prefilled WhatsApp URLs
 */
export const getWhatsAppLink = (message = "") => {
  const cleanNumber = siteConfig.contact.whatsappClean;
  const encodedText = encodeURIComponent(message || "Hello Orange Structures, I would like to enquire about your poultry farm solutions.");
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
};

/**
 * Helper to build prefilled mailto links
 */
export const getMailtoLink = (subject = "", body = "") => {
  const email = siteConfig.contact.salesEmail;
  const encodedSub = encodeURIComponent(subject || "Enquiry for Orange Structures");
  const encodedBody = encodeURIComponent(body || "Hello Orange Structures Team,\n\nI am interested in your services.");
  return `mailto:${email}?subject=${encodedSub}&body=${encodedBody}`;
};
