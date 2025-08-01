import React from 'react';
import '../pages/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="content-wrapper">
        <h1 className="title">About Us</h1>
        <p className="paragraph">
          Welcome to <strong>HealthCare+</strong>, your trusted online destination for premium healthcare products. 
          Our mission is to make healthcare essentials accessible and affordable for everyone, delivered right to your doorstep.
        </p>
        <p className="paragraph">
          Founded in 2023, <strong>HealthCare+</strong> has grown from a small startup into a reliable platform dedicated to improving your health and wellness. 
          We carefully curate our products with a focus on quality, safety, and effectiveness.
        </p>
        <p className="paragraph">
          Customer satisfaction is at the heart of everything we do. We strive to provide excellent service, helpful guidance, and a seamless shopping experience.
          Your health is our priority.
        </p>
        <p className="paragraph">
          Thank you for choosing <strong>HealthCare+</strong>. If you have any questions or feedback, feel free to reach out — we’re here to help.
        </p>
        <p className="paragraph">
          Sincerely,<br />
          <span className="team">The HealthCare+ Team</span>
        </p>
      </div>
    </div>
  );
}

export default About;
