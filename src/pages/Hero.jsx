import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>
          Take control of <br />
          <span className="highlight">your digital life</span>
        </h1>
        <p>Secure, automate, and protect your data with AI-driven solutions.</p>
        <div className="hero-actions">
          <Link to="/dashboard" className="cta-btn">Get Started</Link>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>
    </main>
  );
}
