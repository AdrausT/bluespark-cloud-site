import { motion } from 'framer-motion'
import { fadeUp, fadeIn, staggerContainer, VIEWPORT } from '../lib/motion'
import Button from '../components/ui/Button'

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 8h10"/><path d="M9 4l4 4-4 4"/>
  </svg>
)

export default function FinalCTA() {
  return (
    <section
      className="relative py-28 overflow-hidden border-t border-white/[0.05]"
      aria-labelledby="cta-h2"
      style={{ background: '#0D1221' }}
    >
      {/* Glow background */}
      <div
        className="absolute inset-x-0 top-0 h-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 65%)',
        }}
      />
      {/* Grid dots */}
      <div className="absolute inset-0 hero-grid pointer-events-none opacity-50" aria-hidden="true" />

      <div className="relative z-10 max-w-[640px] mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p className="sec-label" variants={fadeIn}>Get Started</motion.p>

          <motion.h2
            id="cta-h2"
            className="font-display text-[clamp(28px,4.5vw,48px)] font-bold tracking-tight text-ink leading-[1.1] mb-5"
            variants={fadeUp}
          >
            Build the system that turns{' '}
            <span className="gradient-text">attention into booked appointments</span>.
          </motion.h2>

          <motion.p className="sec-sub mb-9" variants={fadeUp}>
            Modern website. Smart booking portal. Automated follow-up. One connected stack — built for local service businesses that want to grow without adding overhead.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.div variants={fadeUp}>
              <Button
                href="https://apex.bluespark.cloud"
                size="lg"
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a walkthrough (opens in new tab)"
              >
                Book a Walkthrough <ArrowRight />
              </Button>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Button
                href="#system"
                size="lg"
                variant="ghost"
                onClick={() => document.getElementById('system')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See the System
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-5"
            variants={fadeIn}
          >
            {[
              'Live systems for real businesses',
              'Mobile-first, conversion-focused',
              'Auto detailing specialists',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-[13px] text-muted">
                <span className="nav-dot" aria-hidden="true" />
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
