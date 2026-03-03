import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { stagger, fadeUp } from '../animations'

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px 0px' })

  return (
    <motion.footer
      ref={ref}
      variants={stagger(0, 0.08)}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="py-10"
      style={{
        backgroundColor: 'var(--color-ink)',
        borderTop: '1px solid var(--color-rule)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center md:items-center justify-between gap-6 text-center md:text-left">
        <motion.div variants={fadeUp} className="w-full md:w-auto flex justify-center md:justify-start">
          <Link
            to="/"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.125rem',
              letterSpacing: '-0.02em',
              color: 'var(--color-paper-muted)',
            }}
            className="hover:text-[var(--color-paper)] transition-colors duration-300"
          >
            ΔV
          </Link>
        </motion.div>

        <motion.nav variants={fadeUp} className="w-full md:w-auto flex items-center justify-center md:justify-start gap-6 flex-wrap">
          {[
            { label: 'CGU', to: '/cgu' },
            { label: 'Privacy Policy', to: '/privacy' },
          ].map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6875rem',
                letterSpacing: '0.1em',
                color: 'var(--color-paper-muted)',
              }}
              className="uppercase hover:text-[var(--color-paper)] transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
          {/* Credit: Cătălin Tișcă — https://tiscacatalin.com */}
        </motion.nav>

        <motion.p
          variants={fadeUp}
          className="w-full md:w-auto"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.6875rem',
            letterSpacing: '0.06em',
            color: 'var(--color-paper-muted)',
          }}
        >
          © 2025 Delta V
        </motion.p>
      </div>
    </motion.footer>
  )
}
