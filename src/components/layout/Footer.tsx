export default function Footer() {
  return (
    <footer
      className="border-t border-white/[0.06] bg-bg py-12"
      role="contentinfo"
    >
      <div className="max-w-site mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #3B82F6, #22D3EE)' }}
                aria-hidden="true"
              >
                <svg
                  width="14"
                  height="14"
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
            </div>
            <p className="text-sm text-muted">Local business growth infrastructure.</p>
          </div>

          {/* Links */}
          <nav aria-label="Footer links">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="https://apex.bluespark.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-ink transition-colors duration-200 no-underline"
                aria-label="Apex Mobile Detailing example (opens in new tab)"
              >
                Apex Example
              </a>
              <a
                href="https://book.apex.bluespark.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-ink transition-colors duration-200 no-underline"
                aria-label="Booking Portal (opens in new tab)"
              >
                Booking Portal
              </a>
              <a
                href="#system"
                className="text-sm text-muted hover:text-ink transition-colors duration-200 no-underline"
              >
                The System
              </a>
              <a
                href="#proof"
                className="text-sm text-muted hover:text-ink transition-colors duration-200 no-underline"
              >
                Live Examples
              </a>
            </div>
          </nav>
        </div>

        <div className="glow-line mb-6" aria-hidden="true" />

        <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
          <p className="text-sm text-muted">
            Powered by <strong className="text-ink font-semibold">Blue Spark Digital</strong>
          </p>
          <p className="text-xs text-muted/55">
            &copy; {new Date().getFullYear()} Blue Spark Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
