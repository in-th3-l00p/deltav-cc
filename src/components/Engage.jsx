import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useInView } from 'motion/react'
import { fadeUp, fadeIn, stagger, lineReveal, EASE } from '../animations'

const contactCols = [
  { key: 'email', label: 'Email' },
  { key: 'signal', label: 'Signal' },
  { key: 'note', label: null },
]

export default function Engage() {
  const [qrOpen, setQrOpen] = useState(false)

  const headlineRef = useRef(null)
  const headlineInView = useInView(headlineRef, { once: true, margin: '-60px 0px' })

  const contactRef = useRef(null)
  const contactInView = useInView(contactRef, { once: true, margin: '-60px 0px' })

  return (
    <section
      id="engage"
      className="py-24 md:py-32"
      style={{ backgroundColor: 'var(--color-ink-deep)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Eyebrow + Headline */}
        <motion.div
          ref={headlineRef}
          variants={stagger(0, 0.12)}
          initial="hidden"
          animate={headlineInView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              letterSpacing: '0.16em',
              color: 'var(--color-gold)',
            }}
            className="uppercase mb-8"
          >
            Get in touch
          </motion.p>

          <div>
            {[
              { text: "Let's build the", italic: false },
              { text: 'decentralized', italic: true },
              { text: 'future together.', italic: false },
            ].map(({ text, italic }) => (
              <div key={text} style={{ overflow: 'hidden' }}>
                <motion.span
                  variants={lineReveal}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 300,
                    lineHeight: 1.06,
                    letterSpacing: '-0.03em',
                    fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)',
                    color: italic ? 'var(--color-paper-dim)' : 'var(--color-paper)',
                    fontStyle: italic ? 'italic' : 'normal',
                    display: 'block',
                  }}
                >
                  {text}
                </motion.span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact row */}
        <motion.div
          ref={contactRef}
          variants={stagger(0, 0.1)}
          initial="hidden"
          animate={contactInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ borderTop: '1px solid var(--color-rule)' }}
        >
          {/* Email */}
          <motion.div
            variants={fadeUp}
            className="py-8 flex flex-col gap-4"
            style={{ borderRight: '1px solid var(--color-rule)', paddingRight: '2rem' }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6875rem',
                letterSpacing: '0.14em',
                color: 'var(--color-paper-muted)',
              }}
              className="uppercase"
            >
              Email
            </span>
            <a
              href="mailto:contact@deltav.cc"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)',
                color: 'var(--color-paper)',
                letterSpacing: '0',
                fontWeight: 400,
              }}
              className="hover:text-[var(--color-gold)] transition-colors duration-300"
            >
              contact@deltav.cc
            </a>
          </motion.div>

          {/* Signal */}
          <motion.div
            variants={fadeUp}
            className="py-8 flex flex-col gap-4"
            style={{
              borderRight: '1px solid var(--color-rule)',
              paddingLeft: '2rem',
              paddingRight: '2rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6875rem',
                letterSpacing: '0.14em',
                color: 'var(--color-paper-muted)',
              }}
              className="uppercase"
            >
              Signal
            </span>
            <button
              onClick={() => setQrOpen(true)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)',
                color: 'var(--color-paper)',
                letterSpacing: '0',
                fontWeight: 400,
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                textAlign: 'left',
              }}
              className="hover:text-[var(--color-gold)] transition-colors duration-300"
            >
              @DeltaV.01
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.1em',
                  color: 'var(--color-paper-muted)',
                  display: 'block',
                  marginTop: '0.25rem',
                }}
              >
                Tap to view QR ↗
              </span>
            </button>
          </motion.div>

          {/* Note */}
          <motion.div
            variants={fadeUp}
            className="py-8 flex flex-col justify-between gap-6"
            style={{ paddingLeft: '2rem' }}
          >
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8125rem',
                color: 'var(--color-paper-muted)',
                lineHeight: 1.65,
              }}
            >
              Prefer encrypted communications?
              Signal ensures end-to-end privacy for
              sensitive inquiries.
            </p>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6875rem',
                letterSpacing: '0.14em',
                color: 'var(--color-paper-muted)',
              }}
              className="uppercase"
            >
              Encrypted by default
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* QR Modal */}
      <AnimatePresence>
        {qrOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ backgroundColor: 'rgba(6,6,9,0.92)', backdropFilter: 'blur(16px)' }}
            onClick={() => setQrOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="flex flex-col items-center gap-6 p-8"
              style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-rule)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.14em',
                  color: 'var(--color-paper-muted)',
                }}
                className="uppercase"
              >
                Scan to add on Signal
              </p>
              <img
                src="https://deltav.cc/assets/SignalUsernameQr.png"
                alt="Signal QR code for @DeltaV.01"
                className="w-48 h-48"
              />
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  color: 'var(--color-paper)',
                  letterSpacing: '-0.01em',
                }}
              >
                @DeltaV.01
              </p>
              <button
                onClick={() => setQrOpen(false)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.14em',
                  color: 'var(--color-paper-muted)',
                  background: 'none',
                  border: '1px solid var(--color-rule)',
                  padding: '0.5rem 1.5rem',
                  cursor: 'pointer',
                }}
                className="uppercase hover:text-[var(--color-paper)] hover:border-[var(--color-paper-muted)] transition-colors duration-300"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
