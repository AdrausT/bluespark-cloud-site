import { motion } from 'framer-motion'
import { fadeUp, fadeIn, staggerContainer, slideInLeft, slideInRight, VIEWPORT } from '../lib/motion'
import { NICHE_SERVICES } from '../lib/content'

const CheckIcon = () => (
  <svg
    className="w-4 h-4 flex-shrink-0 mt-0.5"
    viewBox="0 0 16 16"
    fill="none"
    stroke="#22D3EE"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="3,8 6,11 13,4" />
  </svg>
)

export default function Niche() {
  return (
    <section className="py-24 bg-panel border-t border-white/[0.05]" aria-labelledby="niche-h2">
      <div className="max-w-site mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left: copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p className="sec-label" variants={fadeIn}>Focused on Auto Detailing</motion.p>
            <motion.h2 id="niche-h2" className="sec-heading mb-5" variants={fadeUp}>
              The first niche{' '}
              <span className="gradient-text">we own</span>
            </motion.h2>
            <motion.p className="sec-sub mb-7" variants={fadeUp}>
              Auto detailers were the first businesses we built the system around. We know the leads, the questions, the objections, and the booking patterns — because we&apos;ve built live systems for them.
            </motion.p>
            <motion.ul
              className="flex flex-col gap-3"
              aria-label="Auto detailing services we handle"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              {NICHE_SERVICES.map((service) => (
                <motion.li
                  key={service}
                  className="flex items-start gap-3 text-[15px] text-ink"
                  variants={fadeUp}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: 'rgba(59,130,246,0.10)',
                      border: '1px solid rgba(59,130,246,0.28)',
                    }}
                    aria-hidden="true"
                  >
                    <CheckIcon />
                  </span>
                  {service}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right: visual preview panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={slideInRight}
          >
            <div
              className="rounded-[16px] p-6 border"
              style={{
                background: 'rgba(13,18,33,0.95)',
                border: '1px solid rgba(59,130,246,0.15)',
                boxShadow: '0 0 48px rgba(59,130,246,0.08), 0 2px 16px rgba(0,0,0,0.4)',
              }}
            >
              {/* Mock browser chrome */}
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  {['#F87171', '#FBBF24', '#34D399'].map((c) => (
                    <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} aria-hidden="true" />
                  ))}
                </div>
                <div className="flex-1 h-6 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center px-2">
                  <span className="text-[11px] text-muted">apexmobiledetailing.com/book</span>
                </div>
              </div>

              {/* Service request preview */}
              <p className="text-[11px] font-bold tracking-widest uppercase text-accent mb-3">
                Request Service
              </p>
              <h3 className="font-display text-xl font-bold text-ink mb-1">
                Apex Mobile Detailing
              </h3>
              <p className="text-[13px] text-muted mb-5">
                Select a service to get started. We come to you.
              </p>

              <div className="flex flex-col gap-2.5">
                {['Full Detail — Interior & Exterior', 'Ceramic Coating Package', 'Paint Correction', 'Interior Only'].map((svc, i) => (
                  <div
                    key={svc}
                    className="flex items-center justify-between px-4 py-3 rounded-[9px] border text-[13px] font-medium"
                    style={{
                      background: i === 0 ? 'rgba(59,130,246,0.08)' : 'rgba(255,255,255,0.025)',
                      border: i === 0 ? '1px solid rgba(59,130,246,0.30)' : '1px solid rgba(255,255,255,0.07)',
                      color: i === 0 ? '#E8EDF5' : '#8B98B8',
                    }}
                  >
                    <span>{svc}</span>
                    {i === 0 && (
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 8h10"/><path d="M9 4l4 4-4 4"/>
                      </svg>
                    )}
                  </div>
                ))}
              </div>

              <div
                className="mt-5 flex items-center gap-2 text-[11px] font-bold"
                style={{ color: '#10B981' }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                Live on Blue Spark Cloud
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
