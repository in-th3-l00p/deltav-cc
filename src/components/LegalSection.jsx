export function Section({ title, children }) {
  return (
    <section
      className="mb-12"
      style={{ paddingBottom: '3rem', borderBottom: '1px solid var(--color-rule)' }}
    >
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 300,
          fontSize: 'clamp(1.375rem, 2vw, 1.875rem)',
          letterSpacing: '-0.02em',
          color: 'var(--color-paper)',
          lineHeight: 1.15,
          marginBottom: '1.5rem',
        }}
      >
        {title}
      </h2>
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.875rem',
          color: 'var(--color-paper-muted)',
          lineHeight: 1.75,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {children}
      </div>
    </section>
  )
}

export function P({ children }) {
  return <p>{children}</p>
}

export function Ul({ items }) {
  return (
    <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      {items.map((item, i) => (
        <li key={i} style={{ listStyleType: 'disc' }}>{item}</li>
      ))}
    </ul>
  )
}
