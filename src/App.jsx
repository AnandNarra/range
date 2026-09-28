import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import EnquiryDrawer from './components/EnquiryDrawer';
import MobileContactBar from './components/MobileContactBar';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import PoultryConstruction from './pages/PoultryConstruction';
import PoultryEquipment from './pages/PoultryEquipment';
import ProductDetails from './pages/ProductDetails';
import PoultrySoftware from './pages/PoultrySoftware';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import RequestQuote from './pages/RequestQuote';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen pb-16 lg:pb-0">
      {/* Scroll restoration */}
      <ScrollToTop />

      {/* Main Sticky Header */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/poultry-construction" element={<PoultryConstruction />} />
          <Route path="/poultry-equipment" element={<PoultryEquipment />} />
          <Route path="/poultry-equipment/:slug" element={<ProductDetails />} />
          <Route path="/poultry-management-software" element={<PoultrySoftware />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-quote" element={<RequestQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Main Footer */}
      <Footer />

      {/* Interactive Global Slide-out Drawer for Enquiry Cart */}
      <EnquiryDrawer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />

      {/* Fixed Mobile Contact Bar (Visible only on mobile screens) */}
      <MobileContactBar />
    </div>
  );
}
