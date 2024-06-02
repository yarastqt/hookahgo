import { useUnit } from 'effector-react'
import { AnimatePresence, PanInfo, motion } from 'framer-motion'
import { type FC, useCallback } from 'react'

import { CopyOutline } from '@app/shared/icons'
import { useIsMobileDevice } from '@app/shared/lib/use-is-mobile-device'
import { AppUrl } from '@app/shared/urls'

import { mainScreenModel } from '../../model'
import styles from './toast.module.css'

export const Toast: FC = () => {
  const isMobileDevice = useIsMobileDevice()

  const { createdRoomId, onToastClose, onToastPress } = useUnit({
    createdRoomId: mainScreenModel.$createdRoomId,
    onToastClose: mainScreenModel.toastClosed,
    onToastPress: mainScreenModel.toastPressed,
  })

  const isOpen = createdRoomId !== null

  const onDragEndHandler = useCallback(
    (_: unknown, info: PanInfo) => {
      if (info.offset.y < 0 && (info.velocity.y > 10 || info.offset.y < -32)) {
        onToastClose()
      }
    },
    [onToastClose],
  )

  const hiddenVerticalPosition = isMobileDevice ? -88 : 128

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          animate={{ y: 0 }}
          exit={{ y: hiddenVerticalPosition }}
          initial={{ y: hiddenVerticalPosition }}
          transition={{ type: 'spring', damping: 30, stiffness: 500 }}
          className={styles.root}
          drag={isMobileDevice ? 'y' : false}
          dragConstraints={{ bottom: 0, top: 0 }}
          dragElastic={{ top: 1 }}
          onDragEnd={onDragEndHandler}
          onTap={onToastPress}
        >
          {AppUrl.getRoomUrl(createdRoomId).pathname}
          <CopyOutline />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
