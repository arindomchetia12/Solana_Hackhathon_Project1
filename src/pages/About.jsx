import React, { useEffect, useState } from 'react';
import './About.css';
import Header from '../components/Header';

export default function About() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / height) * 100;
      setScrollProgress(Math.min(scrolled, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate colors based on scroll
  const bgIntensity = 255 - (scrollProgress * 2.55); // 255 (white) to 0 (black)
  const textIntensity = scrollProgress * 2.55; // 0 to 255 (white)

  const dynamicBg = `rgb(${bgIntensity}, ${bgIntensity}, ${bgIntensity})`;
  const dynamicText = `rgb(${textIntensity}, ${textIntensity}, ${textIntensity})`;

  return (
    <div className="about-wrapper" style={{ backgroundColor: dynamicBg, color: dynamicText }}>
      <Header />
      
      <main className="about-content">
        <section className="about-hero">
          <h1 className="hero-title">Intelligent OS for your assets.</h1>
          <p className="hero-subtitle">Solaire is building the next generation of autonomous asset management on Solana.</p>
        </section>

        <section className="about-details">
          <div className="detail-block">
            <h2>The Mission</h2>
            <p>Our goal is to remove the complexity of on-chain operations. By leveraging AI-driven intent agents, Solaire executes complex financial strategies with simple commands.</p>
          </div>

          <div className="detail-block">
            <h2>Built on Solana</h2>
            <p>Performance, speed, and cost-efficiency. Solaire utilizes Solana's sub-second finality to ensure your assets are always where they need to be, precisely when they need to be there.</p>
          </div>

          <div className="detail-block">
            <h2>Non-Custodial Security</h2>
            <p>Your keys, your crypto. Solaire acts as an orchestration layer, never taking custody of your funds. Security is baked into every syscall of the OS.</p>
          </div>
        </section>

        <section className="about-vision">
          <h2 className="vision-title">Future of Finance</h2>
          <p>Imagine a world where your portfolio manages itself. Where risks are mitigated before they happen, and yields are harvested automatically. That is the world Solaire is creating.</p>
        </section>
      </main>
    </div>
  );
}
