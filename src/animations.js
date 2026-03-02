// Shared ease: expo out feel
export const EASE = [0.16, 1, 0.3, 1]

// Base unit: 8px. Spacing multiples: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export const stagger = (delay = 0, staggerChildren = 0.1) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren: delay,
    },
  },
})

export const lineReveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: EASE },
  },
}
