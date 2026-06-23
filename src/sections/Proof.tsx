import { motion } from 'framer-motion'
import { fadeUp, fadeIn, staggerContainer, VIEWPORT } from '../lib/motion'
import Button from '../components/ui/Button'

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 8h10"/><path d="M9 4l4 4-4 4"/>
  </svg>
)

export default function Proof() {
  return (
    <section id="proof" className="py-24 bg-bg border-t border-white/[0.05]" aria-labelledby="proof-h2">
      <div className="max-w-site mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="sec-label" variants={fadeIn}>Live Examples</motion.p>
          <motion.h2 id="proof-h2" className="sec-heading mb-4" variants={fadeUp}>
            See it in the real world
          </motion.h2>
          <motion.p className="sec-sub max-w-[480px] mx-auto" variants={fadeUp}>
            These are real businesses running on Blue Spark Cloud infrastructure. No invented results or fake testimonials.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
        >
          {/* Apex Mobile Detailing — Live */}
          <motion.div variants={fadeUp} className="glass-card p-7">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-accent-cyan mb-1">
                  Currently Live
                </p>
                <h3 className="font-display text-xl font-bold text-ink">
                  Apex Mobile Detailing
                </h3>
              </div>
              <span
                className="flex items-center gap-1.5 text-[12px] font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                style={{
                  color: '#10B981',
                  background: 'rgba(16,185,129,0.09)',
                  border: '1px solid rgba(16,185,129,0.24)',
                }}
                aria-label="Live on Blue Spark Cloud"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                  style={{ animation: 'pulse 2.4s ease-in-out infinite' }}
                  aria-hidden="true"
                />
                Live
              </span>
            </div>

            <p className="text-sm text-muted leading-relaxed mb-6">
              A full-stack local service business system — premium website, booking portal, and CRM-connected lead capture — running today for a mobile detailing operation.
            </p>

            <div className="flex flex-col gap-2 mb-6">
              {[
                { label: 'Mobile-first detailing website', check: true },
                { label: 'Dedicated booking request portal', check: true },
                { label: 'Lead capture connected to GoHighLevel CRM', check: true },
                { label: 'Manual + email follow-up on every request', check: true },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5 text-[14px] text-ink">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(59,130,246,0.10)', border: '1px solid rgba(59,130,246,0.28)' }}
                    aria-hidden="true"
                  >
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="#22D3EE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="2,6 5,9 10,3"/>
                    </svg>
                  </div>
                  {item.label}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5">
              <Button
                href="https://apex.bluespark.cloud"
                size="sm"
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Apex website (opens in new tab)"
              >
                Apex Website <ArrowRight />
              </Button>
              <Button
                href="https://book.apex.bluespark.cloud"
                size="sm"
                variant="ghost"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Booking Portal (opens in new tab)"
              >
                Booking Portal <ArrowRight />
              </Button>
            </div>
          </motion.div>

          {/* XDealer Detailing — Coming Soon */}
          <motion.div variants={fadeUp} className="glass-card p-7 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-muted mb-1">
                  Coming Soon
                </p>
                <h3 className="font-display text-xl font-bold text-ink">
                  XDealer Detailing
                </h3>
              </div>
              <span
                className="text-[12px] font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                style={{
                  color: '#8B98B8',
                  background: 'rgba(139,152,184,0.08)',
                  border: '1px solid rgba(139,152,184,0.18)',
                }}
              >
                In Progress
              </span>
            </div>

            <p className="text-sm text-muted leading-relaxed mb-6">
              Another auto detailing operation being onboarded to the Blue Spark Cloud system. Full website, booking portal, and automation suite.
            </p>

            {/* Placeholder wireframe preview */}
            <div
              className="flex-1 rounded-[10px] border border-dashed border-white/[0.08] flex flex-col items-center justify-center py-10 gap-3"
              aria-label="XDealer website preview coming soon"
            >
              <div className="w-10 h-10 rounded-lg border border-white/[0.08] flex items-center justify-center" aria-hidden="true">
                <svg className="w-5 h-5 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
                </svg>
              </div>
              <p className="text-[13px] text-muted text-center max-w-[200px]">
                Site and booking portal launching soon
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
