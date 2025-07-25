// src/pages/Home.jsx
import React from 'react';
import HeroBanner from '../components/HeroBanner';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Home;
