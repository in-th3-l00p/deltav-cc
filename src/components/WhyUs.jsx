import { useRef } from 'react'
import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { fadeUp, stagger, EASE } from '../animations'

const pillars = [
  {
    title: 'Tech Natives',
    body: 'Passionate professionals at the forefront of decentralization and digital upskilling. We don\'t just consult, we build, operate, and live the stack.',
  },
  {
    title: 'Self-Ownership\nFocused',
    body: 'Every solution we deliver prioritizes user control. Decentralized tools that keep data, keys, and decisions where they belong: with you.',
  },
]

function Pillar({ pillar, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <motion.div
      ref={ref}
      variants={stagger(0, 0.09)}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={{
        borderTop: '1px solid var(--color-rule)',
        paddingTop: '2rem',
        paddingBottom: '2rem',
      }}
      className={`w-full max-w-xl flex flex-col gap-6 items-center text-center md:items-start md:text-left ${
        index === 0
          ? 'md:border-r md:border-[var(--color-rule)] md:pr-12'
          : 'md:pl-12'
      }`}
    >
      <motion.span
        variants={fadeUp}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.6875rem',
          letterSpacing: '0.14em',
          color: 'var(--color-gold)',
        }}
        className="uppercase"
      >
        0{index + 1}
      </motion.span>
      <motion.h3
        variants={fadeUp}
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 300,
          lineHeight: 1.1,
          fontSize: 'clamp(2rem, 3.5vw, 3.25rem)',
          letterSpacing: '-0.025em',
          color: 'var(--color-paper)',
          whiteSpace: 'pre-line',
        }}
      >
        {pillar.title}
      </motion.h3>
      <motion.p
        variants={fadeUp}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.875rem',
          color: 'var(--color-paper-muted)',
          lineHeight: 1.7,
          maxWidth: '26rem',
        }}
      >
        {pillar.body}
      </motion.p>
    </motion.div>
  )
}

export default function WhyUs() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px 0px' })

  return (
    <section
      id="why-us"
      className="py-24 md:py-32"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={stagger(0, 0.1)}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          className="flex flex-col md:flex-row md:items-end gap-6 md:gap-0 mb-16"
        >
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
              letterSpacing: '-0.02em',
              color: 'var(--color-paper)',
              lineHeight: 1.1,
              flex: 1,
            }}
          >
            Why Delta V?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8125rem',
              color: 'var(--color-paper-muted)',
              maxWidth: '28rem',
              lineHeight: 1.65,
            }}
          >
            We believe decentralization isn't a trend. It's a fundamental shift.
            Our work reflects that conviction.
          </motion.p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-stretch">
          {pillars.map((pillar, i) => (
            <Pillar key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
