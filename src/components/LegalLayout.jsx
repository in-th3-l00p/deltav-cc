import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { stagger, fadeUp, lineReveal, EASE } from '../animations'

export default function LegalLayout({ title, subtitle, children }) {
  return (
    <div style={{ backgroundColor: 'var(--color-ink-deep)', minHeight: '100vh' }}>
      {/* Minimal nav */}
      <header
        style={{
          borderBottom: '1px solid var(--color-rule)',
          fontFamily: 'var(--font-sans)',
        }}
        className="px-6 md:px-10 h-16 flex items-center justify-between max-w-7xl mx-auto"
      >
        <Link
          to="/"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', fontSize: '1.25rem', fontWeight: 500 }}
          className="text-[var(--color-paper)] hover:text-[var(--color-gold)] transition-colors duration-300"
        >
          ΔV
        </Link>
        <Link
          to="/"
          style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: 'var(--color-paper-muted)' }}
          className="uppercase hover:text-[var(--color-paper)] transition-colors duration-300"
        >
          ← Back
        </Link>
      </header>

      {/* Hero */}
      <motion.div
        variants={stagger(0, 0.12)}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-16"
        style={{ borderBottom: '1px solid var(--color-rule)' }}
      >
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.6875rem',
            letterSpacing: '0.16em',
            color: 'var(--color-gold)',
          }}
          className="uppercase mb-6"
        >
          Legal
        </motion.p>
        <div style={{ overflow: 'hidden' }}>
          <motion.h1
            variants={lineReveal}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              letterSpacing: '-0.025em',
              lineHeight: 1.06,
              color: 'var(--color-paper)',
            }}
          >
            {title}
          </motion.h1>
        </div>
        {subtitle && (
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8125rem',
              color: 'var(--color-paper-muted)',
              marginTop: '1.5rem',
              lineHeight: 1.65,
            }}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>

      {/* Body */}
      <motion.main
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
        className="max-w-3xl mx-auto px-6 md:px-10 py-16"
      >
        {children}
      </motion.main>

      {/* Footer */}
      <footer
        className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex items-center justify-between"
        style={{ borderTop: '1px solid var(--color-rule)', fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', color: 'var(--color-paper-muted)' }}
      >
        <span style={{ letterSpacing: '0.06em' }}>© 2025 Delta V</span>
        <Link
          to="/"
          style={{ letterSpacing: '0.1em' }}
          className="uppercase hover:text-[var(--color-paper)] transition-colors duration-300"
        >
          Back to site
        </Link>
      </footer>
    </div>
  )
}
