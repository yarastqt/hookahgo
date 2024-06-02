import { AnimatePresence, type PanInfo, motion } from 'framer-motion'
import { type FC, type ReactNode, useCallback } from 'react'

import { useIsMobileDevice } from '@app/shared/lib/use-is-mobile-device'

import styles from './toast.module.css'

export interface ToastProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  onPress?: () => void
}

export const Toast: FC<ToastProps> = (props) => {
  const { children, isOpen, onClose, onPress } = props

  const isMobileDevice = useIsMobileDevice()

  const onDragEndHandler = useCallback(
    (_: unknown, info: PanInfo) => {
      if (info.offset.y < 0 && (info.velocity.y > 10 || info.offset.y < -32)) {
        onClose()
      }
    },
    [onClose],
  )

  const hiddenVerticalPosition = isMobileDevice ? -88 : 128

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key={children?.toString()}
          animate={{ y: 0 }}
          exit={{ y: hiddenVerticalPosition }}
          initial={{ y: hiddenVerticalPosition }}
          transition={{ type: 'spring', damping: 30, stiffness: 500 }}
          className={styles.root}
          drag={isMobileDevice ? 'y' : false}
          dragConstraints={{ bottom: 0, top: 0 }}
          dragElastic={{ top: 1 }}
          onDragEnd={onDragEndHandler}
          onTap={onPress}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
