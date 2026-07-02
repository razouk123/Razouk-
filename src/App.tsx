import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CostEstimator from './components/CostEstimator';
import BeforeAfter from './components/BeforeAfter';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll handler to target elements by ID
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 72; // Adjust for sticky header height
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  // Intersection observer simulation to highlight active sections on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'planner', 'gallery', 'why-us', 'testimonials'];
      const scrollPosition = window.scrollY + 120; // offset for detection line

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-stone-850 selection:bg-emerald-250 selection:text-emerald-900 scroll-smooth antialiased">
      {/* Sticky Header Nav */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Sections Stack */}
      <main>
        {/* Fullscreen Hero */}
        <Hero
          onStartPlanning={() => handleNavigate('planner')}
          onContactClick={() => handleNavigate('contact')}
        />

        {/* Detailed Services Tabs Section */}
        <Services onSelectService={() => handleNavigate('planner')} />

        {/* Interactive Yard Cost Planner & Architect */}
        <CostEstimator />

        {/* Tactile Drag Slider - Before & After Transformation */}
        <BeforeAfter />

        {/* Brand Slogans and Family Philosophy Section */}
        <About />

        {/* Luxury Reviews Column */}
        <Testimonials />

        {/* Site Survey Booking Hub */}
        <ContactForm />
      </main>

      {/* Polished Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
