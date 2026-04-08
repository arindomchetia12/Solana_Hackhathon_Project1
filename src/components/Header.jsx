import React from 'react';
import { Link } from 'react-router-dom';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Header() {
  return (
      <header className="flex justify-between p-4">
      <h1>IntentAI</h1>
      <WalletMultiButton />
    
     className="glass" style={{
      position: 'fixed',
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1200px',
      zIndex: 1000,
      padding: '0.75rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800, fontSize: '1.5rem' }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-solana)', boxShadow: '0 0 15px var(--accent-solana)' }}></div>
        <span>Intrust</span>
      </Link>

      <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <a href="#how-it-works" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}>How it Works</a>
        <a href="#safety" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Safety</a>
        <Link to="/dashboard" className="glass" style={{ 
          padding: '0.5rem 1.25rem', 
          fontSize: '0.9rem', 
          fontWeight: 600,
          background: 'rgba(255,255,255,0.1)'
        }}>Dashboard</Link>
        <button style={{ 
          background: 'var(--gradient-main)', 
          color: 'white', 
          padding: '0.6rem 1.5rem', 
          borderRadius: '100px',
          fontWeight: 600,
          fontSize: '0.9rem',
          boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)'
        }}>Connect Wallet</button>
      </nav>
    </header>
  );
}
