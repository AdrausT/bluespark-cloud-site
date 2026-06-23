import { ReactNode } from 'react'

type Variant = 'primary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: Variant
  size?: Size
  className?: string
  target?: string
  rel?: string
  'aria-label'?: string
}

const sizeClasses: Record<Size, string> = {
  sm: 'text-sm px-4 py-2.5 min-h-[40px]',
  md: 'text-[15px] px-5 py-3 min-h-[44px]',
  lg: 'text-base px-6 py-3.5 min-h-[52px]',
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-accent text-white shadow-[0_0_0_1px_rgba(59,130,246,0.18),0_2px_8px_rgba(59,130,246,0.14)] ' +
    'hover:bg-blue-600 hover:shadow-glow active:scale-95',
  ghost:
    'bg-transparent text-ink border border-white/10 ' +
    'hover:border-white/25 hover:bg-white/[0.04] active:scale-95',
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  target,
  rel,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-semibold rounded-[9px] ' +
    'transition-all duration-200 hover:-translate-y-px whitespace-nowrap ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg '

  const cls = `${base}${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={cls} target={target} rel={rel} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
