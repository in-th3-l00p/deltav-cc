import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { fadeUp, fadeIn, stagger, EASE } from '../animations'

const services = [
  {
    index: '01',
    title: 'Tech\nFoundations',
    tagline: 'Build IT systems ready for tomorrow\'s challenge',
    items: [
      { name: 'Web & Mobile Apps', price: '$100–500 / page' },
      { name: 'IT Infrastructure', price: 'from $80' },
      { name: 'Scalable Web3 Integration', price: 'Contact us' },
      { name: 'Web3 Apps', price: 'Contact us' },
    ],
  },
  {
    index: '02',
    title: 'Growth\nBoost',
    tagline: 'Expand your reach across regions with confidence',
    items: [
      { name: 'Strategic Expansion Support', price: 'EU / Swiss markets' },
      { name: 'Public Good Advocacy & Fundraising', price: '' },
    ],
  },
  {
    index: '03',
    title: 'Cyber-\nsecurity',
    tagline: 'Secure operations with state-of-the-art solutions',
    items: [
      { name: 'Cybersecurity & Privacy Audits', price: '$100 retail' },
      { name: 'GenAI & Agent Development', price: '$50 / hour' },
      { name: 'CryptoSec', price: '$50 / month or 10% profits' },
      { name: 'Threat Monitoring', price: '$50–$5,000 / month' },
    ],
  },
  {
    index: '04',
    title: 'Research\nServices',
    tagline: 'Uncover market trends with data-driven insights',
    items: [
      { name: 'Market Research Reports', price: '$2,000' },
      { name: 'On-chain / OSINT Analysis', price: '10% funds or $80 / hr' },
      { name: 'Training', price: '$80 / hour' },
    ],
  },
]

// sp = spacing unit (8px base)
const SP = 8 // 1sp = 8px = 0.5rem
// Card pad: 4sp = 32px = 2rem on all sides

function ServiceCard({ service, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <motion.div
      ref={ref}
      variants={stagger(0, 0.08)}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={{
        padding: '2rem',
      }}
      className="flex flex-col gap-6"
    >
      {/* Index + Title */}
      <motion.div variants={fadeUp} className="flex items-start gap-4">
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.6875rem',
            letterSpacing: '0.14em',
            color: 'var(--color-gold)',
            marginTop: '0.5rem',
            minWidth: '2rem',
          }}
          className="uppercase"
        >
          {service.index}
        </span>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            fontSize: 'clamp(1.875rem, 3.5vw, 3rem)',
            color: 'var(--color-paper)',
            whiteSpace: 'pre-line',
          }}
        >
          {service.title}
        </h3>
      </motion.div>

      {/* Tagline */}
      <motion.p
        variants={fadeUp}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.8125rem',
          color: 'var(--color-paper-muted)',
          lineHeight: 1.55,
        }}
      >
        {service.tagline}
      </motion.p>

      {/* Line items */}
      <motion.ul
        variants={stagger(0, 0.06)}
        className="flex flex-col"
        style={{ gap: '0' }}
      >
        {service.items.map((item) => (
          <motion.li
            key={item.name}
            variants={fadeUp}
            className="flex items-baseline justify-between gap-4"
            style={{
              borderBottom: '1px solid var(--color-rule)',
              paddingTop: '0.75rem',
              paddingBottom: '0.75rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.9375rem',
                color: 'var(--color-paper-dim)',
                lineHeight: 1.4,
              }}
            >
              {item.name}
            </span>
            {item.price && (
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  color: 'var(--color-paper-muted)',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.04em',
                }}
              >
                {item.price}
              </span>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}

export default function Services() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px 0px' })

  return (
    <section
      id="services"
      className="py-24 md:py-32"
      style={{ backgroundColor: 'var(--color-ink)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          variants={stagger(0, 0.1)}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          className="flex items-end justify-between mb-16"
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
            }}
          >
            Services
          </motion.h2>
          <motion.span
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              letterSpacing: '0.14em',
              color: 'var(--color-paper-muted)',
            }}
            className="uppercase"
          >
            Four disciplines
          </motion.span>
        </motion.div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: '0 2rem' }}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.index} service={service} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
