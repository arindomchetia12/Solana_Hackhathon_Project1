import React from 'react';

export default function Hero() {
  return (
    <section style={{ textAlign: 'center', paddingTop: '12rem', paddingBottom: '6rem' }}>
      <div style={{ marginBottom: '2rem', display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '100px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 600 }}>
        Powered by Solana Fast-Track
      </div>
      <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
        Trustless <span style={{ background: 'var(--gradient-main)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Asset Management</span> <br /> 
        on the Speed of Light
      </h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
        The next generation of decentralised finance. Stake, swap, and manage your Solana assets with zero-compromise security and advanced AI-driven yields.
      </p>
      
      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
        <button style={{ 
          background: 'var(--gradient-main)', 
          color: 'white', 
          padding: '1.2rem 2.5rem', 
          borderRadius: '12px',
          fontWeight: 600,
          fontSize: '1.1rem',
          boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)',
          border: 'none'
        }}>Start Investing</button>
        <button className="glass" style={{ 
          padding: '1.2rem 2.5rem', 
          fontWeight: 600,
          fontSize: '1.1rem'
        }}>Learn Architecture</button>
      </div>
    </section>
  );
}
