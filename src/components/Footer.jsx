export default function Footer() {
  return (
    <footer style={{ padding: '2.5rem 0', textAlign: 'center', color: 'var(--text-muted)' }}>
      <p>IntentAI • Built on Solana 🚀</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem' }}>
        <a href="#" style={{ color: 'var(--text-secondary)' }}>Docs</a>
        <a href="#" style={{ color: 'var(--text-secondary)' }}>GitHub</a>
        <a href="#" style={{ color: 'var(--text-secondary)' }}>Twitter</a>
      </div>
    </footer>
  );
}