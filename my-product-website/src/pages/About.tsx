import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>About Beauty Bliss</h1>

      <p className="about-intro">
        At Beauty Bliss, we believe that makeup should empower and elevate. Our products are designed to help you express yourself with confidence and creativity.
      </p>

      {/* Brand Mission */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create makeup products that make you feel your best while staying true to your individuality. We are committed to providing high-quality, cruelty-free makeup that enhances your natural beauty and unleashes your creativity.
        </p>
      </section>

      {/* Brand Image with Caption */}
      <div className="brand-image-container">
        <img
          src="https://media.allure.com/photos/5f36302132d731b9a6880653/master/w_1280%2Cc_limit/bliss-clear-genius-acne-treatment-collection.jpg"
          alt="Beauty Bliss - Empowering Confidence"
          className="brand-image"
        />
        <p className="caption">Empowering confidence through beauty and creativity.</p>
      </div>

      {/* Brand History */}
      <section className="history">
        <h2>Our Story</h2>
        <p>
          Beauty Bliss was founded in 2010 with the vision to inspire beauty in everyone. What started as a passion for colors and makeup artistry has now grown into a globally recognized brand that offers a wide range of beauty products, from lipsticks to highlighters.
        </p>
        <p>
          We started small but have always held the belief that makeup is for everyone. Over the years, we've built a community of makeup enthusiasts who believe in self-expression, creativity, and inclusivity.
        </p>
      </section>
    </div>
  );
};

export default About;



