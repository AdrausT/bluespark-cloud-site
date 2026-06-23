import { motion } from 'framer-motion'
import { fadeUp, fadeIn, staggerContainer, VIEWPORT } from '../lib/motion'
import { SERVICES } from '../lib/content'

function ServiceIcon({ name }: { name: string }) {
  const base = 'w-5 h-5'
  const icons: Record<string, JSX.Element> = {
    calendar: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="9" y1="15" x2="15" y2="15"/><line x1="12" y1="12" x2="12" y2="18"/>
      </svg>
    ),
    layout: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
    message: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
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

export default function Services() {
  return (
    <section className="py-24 bg-bg border-t border-white/[0.05]" aria-labelledby="services-h2">
      <div className="max-w-site mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="sec-label" variants={fadeIn}>Services</motion.p>
          <motion.h2 id="services-h2" className="sec-heading mb-4" variants={fadeUp}>
            What we build for you
          </motion.h2>
          <motion.p className="sec-sub max-w-[500px] mx-auto" variants={fadeUp}>
            Every service is a building block. Most clients start with one and grow from there.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
        >
          {SERVICES.map((service) => (
            <motion.div key={service.title} variants={fadeUp} className="glass-card p-6">
              <div
                className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-4 text-accent"
                style={{
                  background: 'rgba(59,130,246,0.09)',
                  border: '1px solid rgba(59,130,246,0.18)',
                }}
                aria-hidden="true"
              >
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="text-base font-semibold text-ink mb-2">{service.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
