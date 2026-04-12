import React from 'react';

export default function WalletSection() {
  return (
    <section style={{ padding: '6rem 0', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
            Connect Your Wallet
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            Securely connect your Phantom or Solflare wallet to start managing your Solana assets with zero-compromise security.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {/* Card 1 - Security */}
          <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔒</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 600 }}>Non-Custodial</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              You remain in full control of your private keys. We never have access to your funds.
            </p>
          </div>

          {/* Card 2 - Speed */}
          <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 600 }}>Lightning Fast</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Transaction finality in milliseconds. Built on Solana's ultra-fast blockchain.
            </p>
          </div>

          {/* Card 3 - Compatible */}
          <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌐</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 600 }}>Multi-Wallet</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Support for Phantom, Solflare, and other major Solana wallet adapters.
            </p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div style={{ textAlign: 'center' }}>
          {/* <button style={{
            background: 'var(--gradient-main)',
            color: 'white',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: 600,
            borderRadius: '100px',
            border: 'none',
            boxShadow: '0 15px 35px rgba(59, 130, 246, 0.4)',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 20px 50px rgba(59, 130, 246, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.4)';
          }}
          >
            Connect Wallet Now
          </button> */}
        </div>

        {/* Trust Badges */}
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>Trusted by developers on Solana</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>✓ Audited Smart Contracts</span>
            <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>✓ Insurance Backed</span>
            <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>✓ 99.9% Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
