import React from 'react';
import './TestimonialsSection.css';
import TestimonialCard from './TestimonialCard';

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sophia M.',
      quote: 'Super professional and fast! They fixed my amplifier like new.',
      rating: 5
    },
    {
      name: 'Jason T.',
      quote: 'I thought my old game console was done for — but it’s alive again!',
      rating: 4
    },
    {
      name: 'Nadia R.',
      quote: 'Prompt pickup and clear communication. Love the eco-friendly approach.',
      rating: 5
    },
    {
      name: 'Lucas V.',
      quote: 'Quick diagnosis, fair price, and my laptop runs like new. Recommended!',
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="testimonials-heading">What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <TestimonialCard
            key={index}
            name={t.name}
            quote={t.quote}
            rating={t.rating}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
