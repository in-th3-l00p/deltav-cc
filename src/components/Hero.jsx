import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { stagger, lineReveal, fadeUp, fadeIn, EASE } from '../animations'

const ANIMATION_SRC = 'https://joannezichenpeng.github.io/amaranth/'

export default function Hero() {
  const [iframeSrc, setIframeSrc] = useState(null)
  const [gifLoaded, setGifLoaded] = useState(false)

  useEffect(() => {
    const id = typeof requestIdleCallback !== 'undefined'
      ? requestIdleCallback(() => setIframeSrc(ANIMATION_SRC))
      : setTimeout(() => setIframeSrc(ANIMATION_SRC), 200)
    return () => typeof cancelIdleCallback !== 'undefined'
      ? cancelIdleCallback(id)
      : clearTimeout(id)
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--color-ink-deep)' }}
    >
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        {iframeSrc && (
          <motion.iframe
            src={iframeSrc}
            title="Generative animation"
            className="absolute inset-0 w-full h-full border-0"
            style={{ pointerEvents: 'none' }}
            sandbox="allow-scripts allow-same-origin"
            onLoad={() => setGifLoaded(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: gifLoaded ? 0.38 : 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />
        )}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: '55%',
            background: 'linear-gradient(to bottom, transparent, var(--color-ink-deep))',
          }}
        />
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: '8rem',
            background: 'linear-gradient(to top, transparent, var(--color-ink-deep))',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col justify-end flex-1 max-w-7xl mx-auto w-full px-6 md:px-10 pb-16 pt-32">
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.6875rem',
            letterSpacing: '0.16em',
            color: 'var(--color-gold)',
          }}
          className="uppercase mb-6"
        >
          Delta V
        </motion.p>

        {/* Headline */}
        <motion.div
          variants={stagger(0.4, 0.12)}
          initial="hidden"
          animate="visible"
          className="overflow-hidden"
        >
          {[
            { text: 'Accelerates your', italic: false },
            { text: 'Adoption', italic: true },
            { text: 'of Decentralized', italic: false },
            { text: 'Technologies', italic: false },
          ].map(({ text, italic }) => (
            <div key={text} style={{ overflow: 'hidden', lineHeight: 1 }}>
              <motion.span
                variants={lineReveal}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  lineHeight: 1.06,
                  letterSpacing: '-0.025em',
                  fontSize: 'clamp(2.25rem, 5.5vw, 5rem)',
                  color: italic ? 'var(--color-paper-dim)' : 'var(--color-paper)',
                  fontStyle: italic ? 'italic' : 'normal',
                  display: 'block',
                }}
              >
                {text}
              </motion.span>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: EASE, delay: 1.0 }}
          className="mt-12 pt-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
          style={{ borderTop: '1px solid var(--color-rule)' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8125rem',
              color: 'var(--color-paper-muted)',
              maxWidth: '30rem',
              lineHeight: 1.65,
            }}
          >
            Tech foundations, strategic growth, cybersecurity, and research,
            built for a decentralized world.
          </p>
          <a
            href="#services"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              letterSpacing: '0.12em',
              color: 'var(--color-paper)',
              borderBottom: '1px solid var(--color-paper-muted)',
              paddingBottom: '2px',
            }}
            className="uppercase whitespace-nowrap hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-colors duration-300"
          >
            Explore services ↓
          </a>
        </motion.div>
      </div>
    </section>
  )
}
