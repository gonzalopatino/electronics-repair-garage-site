import React from 'react';
import Header from './components/Header.jsx';
import HeroBanner from './components/HeroBanner.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import AboutPreview from './components/AboutPreview.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import CTASection from './components/CTASection';
import FooterSection from './components/FooterSection.jsx';




function App() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <ServicesSection />
      <AboutPreview />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />


      <main style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Testing the Header Component</h1>
        <p>This is where your homepage content will go.</p>
      </main>
    </div>
  );
}

export default App;
