import { motion, useAnimation } from 'framer-motion'
import { type FC, useEffect, useState } from 'react'

import { BracketBackward, BracketForward } from '@app/shared/icons'

import styles from './highlights.module.css'

const highlights = ['Незабываемая атмосфера', 'Увлекательные разговоры', 'Бесценные идеи стартапов']

export const Highlights: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const controls = useAnimation()

  const sequenceAnimation = async () => {
    await controls.start((index) => ({
      color: index === activeIndex ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
      transition: { delay: 2, duration: 0.5, ease: 'easeInOut' },
    }))

    setActiveIndex((prevIndex) => (prevIndex + 1) % highlights.length)
  }

  useEffect(() => {
    sequenceAnimation()
  }, [activeIndex])

  return (
    <motion.div
      className={styles.root}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: 'spring',
        damping: 30,
        delay: 2,
        stiffness: 150,
      }}
    >
      <BracketBackward />
      <div className={styles.list}>
        {highlights.map((highlight, index) => (
          <motion.div animate={controls} className={styles.highlight} custom={index} key={index}>
            {highlight}
          </motion.div>
        ))}
      </div>
      <BracketForward />
    </motion.div>
  )
}
