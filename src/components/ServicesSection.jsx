import React from 'react';
import './ServicesSection.css';
import ServiceCard from './ServiceCard';

function ServicesSection() {
  const services = [
    {
      title: 'Battery Diagnostics',
      description: 'We test and replace failing batteries in laptops, phones, and tablets.',
      icon: '🔋',
      details: 'Includes voltage and capacity analysis, battery calibration, and replacement with OEM-grade parts.'
    },
    {
      title: 'Game Console Repair',
      description: 'Fixing HDMI ports, power issues, and controller connections.',
      icon: '🎮',
      details: 'Supports PlayStation, Xbox, and Nintendo consoles. Includes cleaning, soldering, and power diagnostics.'
    },
    {
      title: 'Vintage Electronics',
      description: 'Restoration and repair for nostalgic and legacy electronics.',
      icon: '📻',
      details: 'Specializing in analog audio systems, radios, turntables, and rare components. Non-invasive methods used.'
    },
    {
      title: 'PC General Maintenance & Laptop Repairs',
      description: 'Full diagnostics, general maintenance, component replacement and upgrades.',
      icon: '💻',
      details: 'RAM, SSD, screen, keyboard, fan replacement, motherboard reflow and OS reinstallation available.'
    },
    {
      title: 'Audio/Video Equipment',
      description: 'Speaker systems, amplifiers, TVs, and more — repaired with care.',
      icon: '🎧',
      details: 'HDMI board repair, speaker cone replacement, amplifier IC repair, and analog signal restoration.'
    }
  ];

  return (
    <section className="services-section" id="services">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            details={service.details}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
