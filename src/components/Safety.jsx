export default function Safety() {
  return (
    <section style={{ padding: '4rem 2rem' }}>
      <h2 style={{ fontSize: '1.875rem', textAlign: 'center', marginBottom: '2.5rem' }}>Safety First</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        <div className="glass" style={{ padding: '1rem', textAlign: 'center' }}>Simulation</div>
        <div className="glass" style={{ padding: '1rem', textAlign: 'center' }}>Risk Score</div>
        <div className="glass" style={{ padding: '1rem', textAlign: 'center' }}>Approval</div>
        <div className="glass" style={{ padding: '1rem', textAlign: 'center' }}>Transparency</div>
      </div>
    </section>
  );
}