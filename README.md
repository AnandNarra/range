# Orange Structures – Automation & Climate Control
### Modern Static Business Website

A premium, modern, fully responsive static business website built for **Orange Structures – Automation & Climate Control**, specializing in turnkey poultry farm construction, automated poultry rearing equipment, environmental climate control systems, and farm management software.

Built strictly as a **frontend-only static website** with React.js, Vite, and Tailwind CSS, ready for zero-configuration deployment to **Vercel**.

---

## 🚀 Features

- **Branded Design System**: Built around the official Orange Structures logo, featuring brand primary orange (`#F04F32`), deep black (`#09090B`), clean whites, and crisp typography (`Poppins` + `Manrope` + `Inter`).
- **Complete Page Suite**:
  1. **Home** (`/`) – Hero section with background overlay, value metrics, about overview, 3 service cards, why choose us icon grid, featured projects preview, equipment showcase, 4-step process timeline, interactive FAQ accordion, and dual CTA section.
  2. **About Us** (`/about`) – Company mission, vision, core values, and engineering benchmarks.
  3. **Poultry Construction** (`/poultry-construction`) – Turnkey PEB sheds, civil foundation planning, sandwich thermal panels, ventilation structural integration, farm types supported, and construction enquiry form.
  4. **Poultry Equipment** (`/poultry-equipment`) – Complete static product catalogue with real-time text search, category sidebar filtering, sorting, responsive product cards, and direct WhatsApp quote buttons.
  5. **Product Details** (`/poultry-equipment/:slug`) – Dynamic product details page with image gallery thumbnails, technical specifications table, engineering features, applications, quantity selector, and related products.
  6. **Poultry Management Software** (`/poultry-management-software`) – Technology-focused page with live telemetry dashboard mockup, 24h temperature/humidity curves, live alerts, benefits, and a "Book a Demo" form.
  7. **Projects & Gallery** (`/projects`) – Portfolio showcase with category filters and an interactive full-screen image Lightbox modal.
  8. **Contact Us** (`/contact`) – Official contact channels (click-to-call, WhatsApp, email), business hours, office campus address, and a dual WhatsApp/Email dispatch form.
  9. **Request a Quote** (`/request-quote`) – Service-conditional quote calculator with custom sizing inputs and instant prefilled WhatsApp/Email dispatch.
  10. **Custom 404** (`*`) – Friendly fallback page with quick navigation links.
- **Equipment Enquiry Cart**:
  - Add multiple products to a quote cart.
  - Increment/decrement quantities or remove items.
  - Persistent cart saved in `localStorage`.
  - Slide-out drawer with prefilled WhatsApp compilation of all selected equipment and models.
- **Mobile Optimized**:
  - Sticky mobile contact bar at the bottom with quick "Call Now", "WhatsApp", and "Get Quote" triggers.
  - Collapsible navigation drawer.
- **Zero Backend Required**:
  - All form submissions compile into structured, prefilled messages via WhatsApp (`wa.me`) or Email (`mailto`).
- **SEO & Performance Ready**:
  - Semantic HTML5, meta tags, Open Graph tags, XML Sitemap (`sitemap.xml`), `robots.txt`, and favicon.

---

## 🛠️ Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Routing**: React Router DOM (v6)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion & CSS keyframe transitions

---

## 📁 Project Structure

```text
├── public/
│   ├── logo.jpg               # Official Orange Structures Logo
│   ├── robots.txt             # Search engine crawl rules
│   └── sitemap.xml            # Search engine site index
├── src/
│   ├── assets/
│   │   └── logo.jpg           # Logo asset
│   ├── components/
│   │   ├── Breadcrumb.jsx
│   │   ├── CTASection.jsx
│   │   ├── EnquiryDrawer.jsx
│   │   ├── FAQAccordion.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── LightboxModal.jsx
│   │   ├── MobileContactBar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── ServiceCard.jsx
│   │   └── WhatsAppFloatingButton.jsx
│   ├── context/
│   │   └── EnquiryCartContext.jsx
│   ├── data/
│   │   ├── categories.js      # Equipment categories & icons
│   │   ├── faqs.js            # FAQs for Home, Construction & Software
│   │   ├── products.js        # Comprehensive equipment catalog
│   │   ├── projects.js        # Demonstration reference projects
│   │   ├── services.js        # Core service descriptions & process steps
│   │   └── siteConfig.js      # Centralized contact info, phone & WhatsApp numbers
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── PoultryConstruction.jsx
│   │   ├── PoultryEquipment.jsx
│   │   ├── PoultrySoftware.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Projects.jsx
│   │   └── RequestQuote.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json                # Vercel SPA rewrite rules
└── vite.config.js
```

---

## ⚙️ Updating Company Information

All business details (phone number, WhatsApp number, email addresses, office location, working hours) are stored in **one central file**:
`src/data/siteConfig.js`

To update your contact information:
1. Open `src/data/siteConfig.js`.
2. Edit `siteConfig.contact.phone`, `whatsappClean`, `salesEmail`, etc.
3. All phone links, WhatsApp buttons, quote dispatches, and footer details update automatically across the entire website.

---

## 💻 Local Development Instructions

1. Clone or extract the project folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite local development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 🏗️ Production Build

To build the static production bundle:
```bash
npm run build
```
The compiled, optimized static HTML, CSS, and JS files will be generated in the `dist/` directory.

To test the production build locally:
```bash
npm run preview
```

---

## 🌐 Vercel Deployment Instructions

This repository is pre-configured with `vercel.json` to handle client-side Single Page Application (SPA) routing.

### Deploying via Vercel Web Dashboard:
1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New"** > **"Project"**.
4. Import your repository.
5. In the Build & Development Settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **"Deploy"**.

### Deploying via Vercel CLI:
```bash
npm i -g vercel
vercel
```
Follow the interactive prompts to deploy directly.
