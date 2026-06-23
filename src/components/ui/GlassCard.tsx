import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, VIEWPORT } from '../../lib/motion'

interface GlassCardProps {
  children: ReactNode
  className?: string
  animate?: boolean
  delay?: number
}

export default function GlassCard({
  children,
  className = '',
  animate = true,
  delay = 0,
}: GlassCardProps) {
  const inner = (
    <div className={`glass-card p-7 ${className}`}>
      {children}
    </div>
  )

  if (!animate) return inner

  return (
    <motion.div
      className={`glass-card p-7 ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
