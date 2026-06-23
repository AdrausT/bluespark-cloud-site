import { motion } from 'framer-motion'
import { fadeUp, fadeIn, staggerContainer, VIEWPORT } from '../lib/motion'
import { SYSTEM_CAPABILITIES } from '../lib/content'

function CapabilityIcon({ name }: { name: string }) {
  const base = 'w-5 h-5'
  const icons: Record<string, JSX.Element> = {
    monitor: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    calendar: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="9" y1="15" x2="15" y2="15"/><line x1="12" y1="12" x2="12" y2="18"/>
      </svg>
    ),
    clipboard: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/>
      </svg>
    ),
    message: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    'phone-missed': (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="23" y1="1" x2="17" y2="7"/><line x1="17" y1="1" x2="23" y2="7"/>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.18 9a16 16 0 005.82 5.82l1.32-1.07a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16z"/>
      </svg>
    ),
    send: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
      </svg>
    ),
    star: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    'bar-chart': (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
  }
  return icons[name] ?? null
}

export default function BlueSparkSystem() {
  return (
    <section id="system" className="py-24 bg-bg border-t border-white/[0.05]" aria-labelledby="system-h2">
      <div className="max-w-site mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="sec-label" variants={fadeIn}>The System</motion.p>
          <motion.h2 id="system-h2" className="sec-heading mb-4" variants={fadeUp}>
            One connected{' '}
            <span className="gradient-text">operating layer</span>
          </motion.h2>
          <motion.p className="sec-sub max-w-[560px] mx-auto" variants={fadeUp}>
            Every piece a local business needs to look credible, capture demand, and convert visitors — built to work together.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
        >
          {SYSTEM_CAPABILITIES.map((cap, i) => (
            <motion.div key={cap.title} variants={fadeUp} className="glass-card p-6">
              <div
                className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-4 text-accent"
                style={{
                  background: 'rgba(59,130,246,0.09)',
                  border: '1px solid rgba(59,130,246,0.18)',
                }}
                aria-hidden="true"
              >
                <CapabilityIcon name={cap.icon} />
              </div>
              <h3 className="text-[15px] font-semibold text-ink mb-2">{cap.title}</h3>
              <p className="text-[13px] text-muted leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
