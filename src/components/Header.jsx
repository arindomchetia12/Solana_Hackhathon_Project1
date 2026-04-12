import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1.25rem 4rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(3, 3, 5, 0.7)',
      backdropFilter: 'blur(15px)',
      webkitBackdropFilter: 'blur(15px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      {/* Boxed Logo - Leonardo-Inspired */}
      <Link to="/" className="nav-logo-boxed" style={{
        display: 'flex',
        alignItems: 'center',
        border: '2px solid white',
        padding: '2px 10px',
        fontFamily: "'Orbitron', sans-serif",
        fontWeight: 900,
        fontSize: '1.1rem',
        letterSpacing: '2px',
        color: 'white',
        textDecoration: 'none',
        textTransform: 'uppercase'
      }}>
        INTRUST
      </Link>

      {/* Center Navigation */}
      <nav style={{
        display: 'flex',
        gap: '2.5rem',
        alignItems: 'center'
      }}>
        <Link to="/" className="nav-link-premium" style={{ color: 'white', fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none' }}>Home</Link>
        <Link to="/about" className="nav-link-premium" style={{ color: 'white', fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none' }}>About</Link>
        <Link to="/dashboard" className="nav-link-premium" style={{ color: 'white', fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none' }}>Dashboard</Link>
        <Link to="/pricing" className="nav-link-premium" style={{ color: 'white', fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none' }}>Pricing</Link>
        <Link to="/contact" className="nav-link-premium" style={{ color: 'white', fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none' }}>Contact</Link>
      </nav>

      {/* Right Side Buttons */}
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <button className="btn-ghost-premium" style={{
          background: 'transparent',
          border: '1px solid rgba(255,255,255,0.4)',
          color: 'white',
          padding: '0.6rem 1.6rem',
          borderRadius: '50px',
          fontSize: '0.85rem',
          fontWeight: 600,
          cursor: 'pointer'
        }}>Tutorial</button>
        <button className="btn-solid-premium" style={{
          background: 'white',
          color: 'black',
          border: 'none',
          padding: '0.6rem 1.6rem',
          borderRadius: '5px',
          fontSize: '0.85rem',
          fontWeight: 700,
          cursor: 'pointer'
        }}>Log in</button>
      </div>
    </header>
  );
}
