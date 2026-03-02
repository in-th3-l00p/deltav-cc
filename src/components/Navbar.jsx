import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { EASE } from '../animations'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Why us', href: '#why-us' },
  { label: 'Engage', href: '#engage' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
      style={{
        fontFamily: 'var(--font-sans)',
        borderBottom: scrolled ? '1px solid var(--color-rule)' : '1px solid transparent',
        backgroundColor: scrolled ? 'rgba(9,9,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <a
          href="#"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
          className="text-xl font-light text-[var(--color-paper)] hover:text-[var(--color-gold)] transition-colors duration-300"
        >
          ΔV
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}
              className="text-[var(--color-paper-muted)] hover:text-[var(--color-paper)] uppercase transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{ backgroundColor: 'var(--color-paper)', transition: 'transform 0.3s, opacity 0.3s' }}
              className={`block w-5 h-px ${
                i === 0 && menuOpen ? 'rotate-45 translate-y-2' :
                i === 1 && menuOpen ? 'opacity-0' :
                i === 2 && menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          ))}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            style={{ borderTop: '1px solid var(--color-rule)', backgroundColor: 'var(--color-ink)', overflow: 'hidden' }}
            className="md:hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: EASE, delay: i * 0.07 }}
                  style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', letterSpacing: '-0.02em' }}
                  className="text-[var(--color-paper)] hover:text-[var(--color-gold)] transition-colors duration-300"
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
