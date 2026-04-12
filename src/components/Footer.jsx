import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon = ({ d, title }) => (
  <a href="#" style={{ color: 'white', opacity: 0.7, transition: '0.3s' }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.7}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <title>{title}</title>
      <path d={d} />
    </svg>
  </a>
);

export default function Footer() {
  return (
    <footer style={{
      background: '#030305',
      padding: '5rem 2rem 3rem',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      color: 'white',
      fontFamily: "'Outfit', sans-serif"
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>

        {/* Brand Section */}
        <div style={{ gridColumn: 'span 2' }}>
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {/* Social SVGs */}
            <SocialIcon title="Facebook" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            <SocialIcon title="Instagram" d="M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5z M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z M16.5 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            <SocialIcon title="Discord" d="M20.3 4.4c-1.5-0.7-3-1.2-4.6-1.5c-0.2 0.4-0.4 0.8-0.6 1.2c-1.7-0.3-3.4-0.3-5.1 0c-0.2-0.4-0.4-0.8-0.6-1.2c-1.6 0.3-3.1 0.8-4.6 1.5c-2.9 4.3-3.7 8.5-3.3 12.6c1.9 1.4 3.8 2.2 5.6 2.8c0.4-0.6 0.8-1.2 1.2-1.9c-0.7-0.3-1.3-0.6-1.9-1c0.2-0.1 0.3-0.2 0.5-0.3c3.6 1.7 7.5 1.7 11.2 0c0.2 0.1 0.3 0.2 0.5 0.3c-0.6 0.4-1.3 0.7-1.9 1c0.4 0.7 0.8 1.3 1.2 1.9c1.9-0.6 3.7-1.4 5.6-2.8C24.1 12.9 23.2 8.7 20.3 4.4z M8.5 14.8c-1.1 0-2-1-2-2.2s0.9-2.2 2-2.2c1.1 0 2 1 2 2.2S9.6 14.8 8.5 14.8z M15.5 14.8c-1.1 0-2-1-2-2.2s0.9-2.2 2-2.2c1.1 0 2 1 2 2.2S16.6 14.8 15.5 14.8z" />
            <SocialIcon title="X" d="M18.2 3H21l-6.1 7l7.2 11h-5.6l-4.4-6.8l-5 6.8H4.3l6.5-7.4L3.9 3h5.7l4 6l4.6-6z" />
            <SocialIcon title="YouTube" d="M22.5 7.3c-0.3-1.1-1.1-2-2.2-2.3C18.3 4.5 12 4.5 12 4.5s-6.3 0-8.3 0.5c-1.1 0.3-1.9 1.2-2.2 2.3C1 9.3 1 12 1 12s0 2.7 0.5 4.7c0.3 1.1 1.1 2 2.2 2.3c2 0.5 8.3 0.5 8.3 0.5s6.3 0 8.3-0.5c1.1-0.3 1.9-1.2 2.2-2.3c0.5-2 0.5-4.7 0.5-4.7s0-2.7-0.5-4.7z M9.8 15.5v-7l6 3.5-6 3.5z" />
            <SocialIcon title="LinkedIn" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM9 18.5V10H6v8.5h3zM7.5 8.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8-1.8.8-1.8 1.8.8 1.8 1.8 1.8zM18 18.5V13.6c0-2.4-1.3-3.6-3.1-3.6-1.4 0-2 .8-2.4 1.4V10H9.5c0 .9 0 8.5 0 8.5h3v-4.8c0-.2 0-.5.1-.7.2-.5.6-1.1 1.3-1.1 1 0 1.3.7 1.3 1.8v4.8h3z" />
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            {/* Security Badge Placeholders */}
            <div style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '4px', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '12px', height: '12px', border: '1px solid currentColor', borderRadius: '2px' }}></div>
              GDPR
            </div>
            <div style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '4px', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '12px', height: '12px', border: '2px solid currentColor', borderRadius: '50%' }}></div>
              SOC 2 TYPE II
            </div>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', maxWidth: '400px', lineHeight: '1.6' }}>
            INTRUST is fully committed to the highest standards of security, availability, and data integrity. Your assets are protected by enterprise-grade Solana security protocols.
          </p>
        </div>

        {/* Columns */}
        <div>
          <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Features</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <FooterLink text="Asset Manager" />
            <FooterLink text="Yield Optimizer" />
            <FooterLink text="Flash-Track" />
            <FooterLink text="Vaults" />
            <FooterLink text="Pricing" to="/pricing" />
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Industry</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <FooterLink text="Institutional" />
            <FooterLink text="DAO Governance" />
            <FooterLink text="Retail Finance" />
            <FooterLink text="Developer API" />
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Company</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <FooterLink text="About" to="/about" />
            <FooterLink text="Team" />
            <FooterLink text="Careers" />
            <FooterLink text="Contact" />
            <FooterLink text="Privacy Policy" />
          </ul>
        </div>

      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '4rem auto 0',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.8rem',
        color: 'rgba(255,255,255,0.3)'
      }}>
        <p>© 2026 INTRUST Labs. All rights reserved.</p>
        <p>Built with ❤️ on Solana</p>
      </div>
    </footer>
  );
}

function FooterLink({ text, to = "#" }) {
  const isInternal = to.startsWith('/');
  
  const linkStyle = {
    color: 'rgba(255,255,255,0.5)',
    textDecoration: 'none',
    fontSize: '0.85rem',
    transition: '0.3s'
  };

  const handleMouseEnter = e => e.target.style.color = 'white';
  const handleMouseLeave = e => e.target.style.color = 'rgba(255,255,255,0.5)';

  return (
    <li style={{ marginBottom: '0.75rem' }}>
      {isInternal ? (
        <Link 
          to={to} 
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {text}
        </Link>
      ) : (
        <a 
          href={to} 
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {text}
        </a>
      )}
    </li>
  );
}