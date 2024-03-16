import type { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

export interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: string | number
}

export const FadeIn: FC<FadeInProps> = (props) => {
  const { children, className, delay = 0, y = 0 } = props

  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      className={className}
      initial={{ y, opacity: 0 }}
      transition={{
        type: 'spring',
        damping: 30,
        delay,
        duration: 2,
        stiffness: 200,
      }}
    >
      {children}
    </motion.div>
  )
}
