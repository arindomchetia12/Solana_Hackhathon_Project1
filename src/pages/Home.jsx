import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Hero from "../components/Hero";
import WalletSection from "../components/WalletSection";
import HowItWorks from "../components/HowItWorks";
import DashboardPreview from "../components/DashboardPreview";
import UseCases from "../components/UseCases";
import Safety from "../components/Safety";
import SolanaSection from "../components/SolanaSection";
import Demo from "../components/Demo";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="home-container">
      {/* Decorative Background Elements */}
      <div className="glow-bg glow-1"></div>
      <div className="glow-bg glow-2"></div>

        {/* Navbar (full-width) */}
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

        <div className="container">
          {/* Hero Section */}
          <Hero />
        </div>

        {/* Wallet Section */}
        <WalletSection />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Dashboard Preview Section */}
        <DashboardPreview />

        {/* Use Cases Section */}
        <UseCases />

        {/* Safety Section */}
        <Safety />

        {/* Solana Section */}
        <SolanaSection />

        {/* Demo Section */}
        <Demo />

        {/* CTA Section */}
        <CTA />

        {/* Footer */}
        <Footer />
    </div>
  );
}
