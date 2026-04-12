import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section style={{ textAlign: 'center', paddingTop: '12rem', paddingBottom: '6rem' }}>
      <div style={{ marginBottom: '2rem', display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '100px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 600 }}>
        Powered by Solana Fast-Track
      </div>
      <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem', textTransform: 'uppercase' }}>
        <span style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900 }}>Trustless</span> <span style={{ background: 'var(--gradient-main)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontFamily: "'Orbitron', sans-serif", fontWeight: 900 }}>Asset Management</span> <br />
        <span style={{ fontSize: '0.8em' }}>on the Speed of Light</span>
      </h1>
      <p style={{ 
        color: 'var(--text-secondary)', 
        fontSize: '1.125rem', 
        maxWidth: '700px', 
        margin: '0 auto 1.5rem',
        lineHeight: 1.6,
        fontWeight: 500 
      }}>
        The next generation of decentralised finance.
      </p>
      <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '750px', margin: '0 auto 3rem', lineHeight: 1.5 }}>
        Stake, swap, and manage your Solana assets with zero-compromise security and advanced AI-driven yields.
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <button style={{
            background: 'var(--gradient-main)',
            color: 'white',
            padding: '1.2rem 2.5rem',
            borderRadius: '12px',
            fontWeight: 600,
            fontSize: '1.1rem',
            boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)',
            border: 'none',
            cursor: 'pointer'
          }}>Start Investing</button>
        </Link>
        <button className="glass" style={{
          padding: '1.2rem 2.5rem',
          fontWeight: 600,
          fontSize: '1.1rem'
        }}>Learn Architecture</button>
      </div>
    </section>
  );
}
