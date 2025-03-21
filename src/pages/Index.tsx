
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Pricing from '../components/Pricing';
import Location from '../components/Location';
import Footer from '../components/Footer';

const Index = () => {
  // Smooth scroll to section when clicking on links
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const sectionId = href.substring(1);
          const section = document.getElementById(sectionId);
          if (section) {
            window.scrollTo({
              top: section.offsetTop,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Location />
      </main>
      <Footer />
    </>
  );
};

export default Index;
