import React from 'react';

export default function DashboardPreview() {
  return (
    <section className="container" style={{ padding: '4rem 0' }}>
      <div className="glass" style={{
        padding: '1rem',
        borderRadius: '24px',
        boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
        border: '1px solid var(--border-color)',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {/* Glow effect inside the preview */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '100px', background: 'radial-gradient(ellipse at top, rgba(139, 92, 246, 0.3) 0%, transparent 70%)', zIndex: 0 }}></div>
        
        <div style={{ 
          background: '#0a0f1a', 
          borderRadius: '16px', 
          padding: '2rem',
          minHeight: '400px',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          {/* Mock Dashboard UI */}
          <div style={{ width: '100%', maxWidth: '800px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Total Balance</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>$14,284.50</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>24h Change</div>
                <div style={{ color: 'var(--accent-solana)', fontWeight: 600 }}>+5.24%</div>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {[
                { label: 'Staked SOL', value: '42.5', sub: '$6,375.00' },
                { label: 'Available', value: '18.2', sub: '$2,730.00' },
                { label: 'Earned', value: '+1.4', sub: '$210.00' }
              ].map((stat, i) => (
                <div key={i} className="glass" style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{stat.label}</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>{stat.value}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
