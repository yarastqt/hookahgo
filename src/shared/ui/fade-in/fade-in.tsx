import { motion } from 'framer-motion'
import { type ReactNode, forwardRef } from 'react'

export interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: string | number
}

export const FadeIn = forwardRef<HTMLDivElement, FadeInProps>((props, ref) => {
  const { children, className, delay = 0, y = 0 } = props

  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      className={className}
      initial={{ y, opacity: 0 }}
      ref={ref}
      transition={{
        type: 'spring',
        damping: 30,
        delay,
        stiffness: 150,
      }}
    >
      {children}
    </motion.div>
  )
})
