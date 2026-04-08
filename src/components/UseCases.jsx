const cases = [
  "Stake SOL for yield",
  "Auto rebalance portfolio",
  "Claim rewards",
  "Convert SOL safely",
];

export default function UseCases() {
  return (
    <section style={{ padding: '4rem 0', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.875rem', marginBottom: '2.5rem' }}>Use Cases</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
        {cases.map((c, i) => (
          <button
            key={i}
            className="glass"
            style={{ padding: '0.5rem 1rem', fontSize: '0.95rem', fontWeight: 500 }}
          >
            {c}
          </button>
        ))}
      </div>
    </section>
  );
}