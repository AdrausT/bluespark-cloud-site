import { motion } from 'framer-motion'
import { fadeUp, fadeIn, VIEWPORT } from '../lib/motion'
import { WORKFLOW_STEPS } from '../lib/content'

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 bg-panel border-t border-white/[0.05]" aria-labelledby="workflow-h2">
      <div className="max-w-site mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="sec-label" variants={fadeIn}>The Flow</motion.p>
          <motion.h2 id="workflow-h2" className="sec-heading mb-4" variants={fadeUp}>
            From first click to{' '}
            <span className="gradient-text">booked appointment</span>
          </motion.h2>
          <motion.p className="sec-sub max-w-[480px] mx-auto" variants={fadeUp}>
            Every step connected. Every lead followed up automatically.
          </motion.p>
        </motion.div>

        {/* Desktop: horizontal flow */}
        <ol
          className="hidden md:flex items-center justify-center"
          aria-label="Six steps from visitor to booked appointment"
        >
          {WORKFLOW_STEPS.map((step, i) => (
            <li key={step.step} className="flex items-center">
              {/* Node */}
              <motion.div
                className={`flex flex-col items-center text-center ${
                  i === WORKFLOW_STEPS.length - 1
                    ? 'glass-card border-accent/25 bg-accent/[0.06]'
                    : 'glass-card'
                } px-4 py-4 w-[148px]`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ delay: i * 0.1 + 0.1, duration: 0.5 }}
              >
                <span
                  className="text-[10px] font-bold tracking-widest uppercase mb-1.5"
                  style={{ color: i === WORKFLOW_STEPS.length - 1 ? '#22D3EE' : '#3B82F6' }}
                >
                  {step.step}
                </span>
                <span className="text-[13px] font-semibold text-ink leading-tight mb-1">
                  {step.label}
                </span>
                <span className="text-[11px] text-muted leading-tight">{step.desc}</span>
              </motion.div>

              {/* Connector */}
              {i < WORKFLOW_STEPS.length - 1 && (
                <div className="flex items-center mx-1 flex-shrink-0">
                  <motion.div
                    className="h-0.5 w-8"
                    style={{
                      background: 'linear-gradient(to right, #3B82F6, #22D3EE)',
                      transformOrigin: 'left center',
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={VIEWPORT}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                    aria-hidden="true"
                  />
                  {/* Arrow head */}
                  <div
                    className="w-0 h-0"
                    style={{
                      borderTop: '4px solid transparent',
                      borderBottom: '4px solid transparent',
                      borderLeft: '6px solid #22D3EE',
                    }}
                    aria-hidden="true"
                  />
                </div>
              )}
            </li>
          ))}
        </ol>

        {/* Mobile: vertical flow */}
        <ol
          className="md:hidden flex flex-col items-center gap-0"
          aria-label="Six steps from visitor to booked appointment"
        >
          {WORKFLOW_STEPS.map((step, i) => (
            <li key={step.step} className="flex flex-col items-center w-full max-w-xs">
              <motion.div
                className={`glass-card w-full px-5 py-4 text-center ${
                  i === WORKFLOW_STEPS.length - 1 ? 'border-accent/25 bg-accent/[0.06]' : ''
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VIEWPORT}
                transition={{ delay: i * 0.08, duration: 0.45 }}
              >
                <span
                  className="text-[10px] font-bold tracking-widest uppercase block mb-1"
                  style={{ color: i === WORKFLOW_STEPS.length - 1 ? '#22D3EE' : '#3B82F6' }}
                >
                  {step.step}
                </span>
                <span className="text-sm font-semibold text-ink block">{step.label}</span>
                <span className="text-[12px] text-muted block mt-0.5">{step.desc}</span>
              </motion.div>

              {i < WORKFLOW_STEPS.length - 1 && (
                <motion.div
                  className="w-0.5 my-0.5"
                  style={{
                    height: '28px',
                    background: 'linear-gradient(to bottom, #3B82F6, #22D3EE)',
                    transformOrigin: 'top center',
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={VIEWPORT}
                  transition={{ delay: i * 0.08 + 0.2, duration: 0.4 }}
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>

        <motion.p
          className="text-center text-sm text-muted italic mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeIn}
        >
          A connected path — with smart follow-up at every stage.
        </motion.p>
      </div>
    </section>
  )
}
