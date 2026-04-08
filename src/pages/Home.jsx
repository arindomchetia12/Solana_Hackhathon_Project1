import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Decorative Background Elements */}
      <div className="glow-bg glow-1"></div>
      <div className="glow-bg glow-2"></div>

      <div className="container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">
            <span className="dot"></span> Intrust
          </div>

          <ul className="nav-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Pricing</a></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><a href="#">Resources</a></li>
          </ul>

          <div className="auth">
            <a href="#" className="login-btn">Log in</a>
            <button className="signup-btn">Sign up</button>
          </div>
        </nav>

        {/* Hero Section */}
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
      </div>
    </div>
  );
}
