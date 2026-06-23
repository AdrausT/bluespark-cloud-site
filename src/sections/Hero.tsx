import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import { fadeUp, fadeIn, staggerContainer, VIEWPORT } from '../lib/motion'
import { useReducedMotion, useIsMobile } from '../hooks/useReducedMotion'

const HeroScene = lazy(() => import('../three/HeroScene'))

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 8h10"/><path d="M9 4l4 4-4 4"/>
  </svg>
)

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const isMobile = useIsMobile()
  const show3D = !prefersReducedMotion && !isMobile

  return (
    <section
      className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden py-24 px-6"
      aria-labelledby="hero-h1"
    >
      {/* 3D canvas — lazy, desktop only */}
      {show3D && (
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      )}

      {/* Radial glow overlay */}
      <div
        className="absolute inset-x-0 top-0 h-[560px] pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at 50% -10%, rgba(59,130,246,0.18) 0%, transparent 65%)',
        }}
      />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 hero-grid pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-[820px] mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="eyebrow" variants={fadeIn}>
          AI-Powered Growth Infrastructure
        </motion.p>

        <motion.h1
          id="hero-h1"
          className="font-display text-[clamp(36px,7vw,72px)] font-bold tracking-tight text-ink leading-[1.05] mb-5"
          variants={fadeUp}
        >
          Turn Missed Leads Into{' '}
          <span className="gradient-text">Booked Jobs.</span>
        </motion.h1>

        <motion.p
          className="text-[clamp(17px,2.2vw,21px)] text-muted leading-relaxed max-w-[600px] mx-auto mb-3"
          variants={fadeUp}
        >
          Blue Spark powers premium websites, booking portals, AI follow-up, and lead automation for local service businesses.
        </motion.p>

        <motion.p
          className="text-[15px] text-muted/70 mb-10"
          variants={fadeUp}
        >
          Built for local service businesses — starting with auto detailing.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-9"
          variants={fadeUp}
        >
          <Button
            href="#system"
            size="lg"
            variant="primary"
            onClick={() => {
              document.getElementById('system')?.scrollIntoView({ behavior: 'smooth' })
            }}
            aria-label="See the system"
          >
            See the System <ArrowRight />
          </Button>
          <Button
            href="https://apex.bluespark.cloud"
            size="lg"
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a walkthrough (opens in new tab)"
          >
            Book a Walkthrough
          </Button>
        </motion.div>

        <motion.p
          className="flex items-center justify-center gap-2 text-[13px] text-muted"
          variants={fadeIn}
        >
          <span className="nav-dot" aria-hidden="true" />
          Powering live local service businesses today.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="text-[11px] text-muted tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
          animate={{ scaleY: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
