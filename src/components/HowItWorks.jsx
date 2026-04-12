import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Connect Wallet",
      desc: "Link your Phantom or Solflare wallet instantly with our secure, non-custodial bridge."
    },
    {
      num: "02",
      title: "Choose Strategy",
      desc: "Select from AI-optimized yield strategies tailored to your risk profile and goals."
    },
    {
      num: "03",
      title: "Earn Autonomously",
      desc: "Smart contracts auto-compound your rewards, allowing you to earn passively 24/7."
    }
  ];

  return (
    <section id="how-it-works" className="container" style={{ paddingBottom: '8rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>How Intrust Works</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Three simple steps to start maximizing your Solana assets with institutional-grade security.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {steps.map((step, i) => (
          <div key={i} className="glass" style={{ padding: '2.5rem', position: 'relative' }}>
            <div style={{ 
              fontSize: '4rem', 
              fontWeight: 800, 
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255,255,255,0.1)',
              position: 'absolute',
              top: '1rem',
              right: '1.5rem',
              lineHeight: 1
            }}>
              {step.num}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', marginTop: '2rem', position: 'relative', zIndex: 1 }}>{step.title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
