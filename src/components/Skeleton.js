export default function Skeleton({ count = 4 }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            border: '1px solid #eee',
            borderRadius: 8,
            padding: 16,
            margin: 8,
            width: 120,
            background: '#f6f6f6',
            minHeight: 120,
            animation: 'pulse 1.5s infinite',
          }}
        >
          <div style={{ height: 20, width: '60%', background: '#e0e0e0', borderRadius: 4, marginBottom: 8 }} />
          <div style={{ height: 80, background: '#e0e0e0', borderRadius: 8 }} />
        </div>
      ))}
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
