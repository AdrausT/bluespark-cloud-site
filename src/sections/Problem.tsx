import { motion } from 'framer-motion'
import { fadeUp, fadeIn, staggerContainer, VIEWPORT } from '../lib/motion'
import { PAIN_POINTS } from '../lib/content'

function PainIcon({ name }: { name: string }) {
  const base = 'w-5 h-5'
  const icons: Record<string, JSX.Element> = {
    phone: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.18 9a16 16 0 005.82 5.82l1.32-1.07a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16z"/>
      </svg>
    ),
    clock: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    calendar: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    globe: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    mail: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    layers: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  }
  return icons[name] ?? null
}

export default function Problem() {
  return (
    <section className="py-24 bg-panel border-t border-white/[0.05]" aria-labelledby="problem-h2">
      <div className="max-w-site mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left: statement */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p className="sec-label" variants={fadeIn}>The Problem</motion.p>
            <motion.h2
              id="problem-h2"
              className="sec-heading mb-6"
              variants={fadeUp}
            >
              Most businesses don&apos;t have a{' '}
              <span className="gradient-text">lead problem</span>.
            </motion.h2>
            <motion.p
              className="text-xl sm:text-2xl font-semibold text-ink leading-snug mb-6"
              variants={fadeUp}
            >
              They have a <span className="text-accent">response problem</span>.
            </motion.p>
            <motion.p className="sec-sub" variants={fadeUp}>
              Visitors arrive, but the path from interest to booked appointment is broken.
              Slow sites, no clear way to request service, and leads that fall through the cracks.
              Blue Spark builds the system that closes the gap.
            </motion.p>
          </motion.div>

          {/* Right: pain point cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={staggerContainer}
          >
            {PAIN_POINTS.map((point) => (
              <motion.div
                key={point.title}
                variants={fadeUp}
                className="glass-card p-5"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{
                    background: 'rgba(239,68,68,0.08)',
                    border: '1px solid rgba(239,68,68,0.18)',
                    color: '#F87171',
                  }}
                  aria-hidden="true"
                >
                  <PainIcon name={point.icon} />
                </div>
                <h3 className="text-sm font-semibold text-ink mb-1">{point.title}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
