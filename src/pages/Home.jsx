import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Hero from "../components/Hero";
import Header from "../components/Header";
import WalletSection from "../components/WalletSection";
import HowItWorks from "../components/HowItWorks";
import DashboardPreview from "../components/DashboardPreview";
import LegoGrid from "../components/LegoGrid";
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

      <Header />

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

      {/* Lego Modular Grid Section */}
      <LegoGrid />

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
