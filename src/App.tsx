import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Products from './components/Products';
import Refund from './components/Refund';
import Factors from './components/Factors';
import Brands from './components/Brands';

export default function App() {
  const [activeSection, setActiveSection] = useState('products');

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 60; // header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['products', 'brands', 'refund', 'factors'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: 'products', label: 'Products' },
    { id: 'brands', label: 'Brands' },
    { id: 'refund', label: 'Returns' },
    { id: 'factors', label: 'Factors' },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f7] font-sans selection:bg-[#1d1d1f] selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-[#d2d2d7]/50">
        <div className="max-w-3xl mx-auto px-4">
          <nav className="flex justify-between items-center h-12 text-xs font-semibold tracking-wide uppercase">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className={`transition-colors duration-300 ${
                  activeSection === tab.id
                    ? 'text-[#1d1d1f]'
                    : 'text-[#86868b] hover:text-[#1d1d1f]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-12 pb-24">
        <section id="products" className="min-h-screen flex items-center"><Products /></section>
        <section id="brands" className="min-h-screen flex items-center"><Brands /></section>
        <section id="refund" className="min-h-screen flex items-center"><Refund /></section>
        <section id="factors" className="min-h-screen flex items-center"><Factors /></section>
      </main>

      {/* Footer */}
      <footer className="pb-12 text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[#86868b] uppercase hover:text-[#1d1d1f] transition-colors duration-300 cursor-default"
        >
          <span className="w-4 h-px bg-[#d2d2d7]"></span>
          Created by Jonny Fan
          <span className="w-4 h-px bg-[#d2d2d7]"></span>
        </motion.div>
      </footer>
    </div>
  );
}
