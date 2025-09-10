import React from "react";
import "../styles/AboutPreview.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h1>About Us</h1>
        <p>
          At <strong>Electronics Repair Garage</strong>, we believe technology
          should last longer and work better for everyone. Our mission is to
          provide reliable and eco-friendly repair services that keep electronics
          out of landfills and in the hands of people who need them.
        </p>
        <p>
          Founded in Vancouver, we are a community-focused repair service
          with a passion for problem solving. From laptops and game consoles to
          vintage electronics, our team combines engineering knowledge with
          practical experience to deliver fast, cost-effective, and dependable
          repairs.
        </p>
        <p>
          We stand by three core values: sustainability, trust, and innovation.
          Whether it’s diagnosing a failing battery, restoring a cherished vintage
          device, or keeping your PC running smoothly, our promise is to make
          electronics accessible, transparent, and environmentally
          responsible.
        </p>
        
      </div>
    </section>
  );
};

export default About;
