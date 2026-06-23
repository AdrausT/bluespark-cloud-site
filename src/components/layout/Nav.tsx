import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'

const NAV_LINKS = [
  { label: 'What It Powers', href: '#system' },
  { label: 'The Flow', href: '#workflow' },
  { label: 'Live Example', href: '#proof' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header role="banner" className="sticky top-0 z-50">
      <nav
        aria-label="Main navigation"
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-bg/95 backdrop-blur-[14px] border-b border-white/[0.06] shadow-[0_1px_24px_rgba(0,0,0,0.4)]'
            : 'bg-bg/80 backdrop-blur-[10px] border-b border-white/[0.05]'
        }`}
      >
        <div className="max-w-site mx-auto px-6 h-16 flex items-center justify-between gap-6">
          {/* Brand */}
          <a
            href="/"
            className="flex items-center gap-2.5 text-ink no-underline flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            aria-label="Blue Spark Cloud — home"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #22D3EE)' }}
              aria-hidden="true"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 2L3 9h5l-2 7 7-9h-5L9 2z" />
              </svg>
            </div>
            <span className="text-[15px] font-semibold text-ink">Blue Spark Cloud</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7 list-none" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-muted hover:text-ink transition-colors duration-200 no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + mobile menu toggle */}
          <div className="flex items-center gap-3">
            <Button
              href="https://apex.bluespark.cloud"
              size="sm"
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Apex Example (opens in new tab)"
              className="hidden sm:inline-flex"
            >
              View Apex Example
            </Button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden border-t border-white/[0.06] bg-panel/95 backdrop-blur-xl"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-muted hover:text-ink transition-colors duration-200 no-underline py-1"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  href="https://apex.bluespark.cloud"
                  size="sm"
                  variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center mt-2"
                >
                  View Apex Example
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
