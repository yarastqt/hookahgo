import type { FC } from 'react'
import { useUnit } from 'effector-react'
import cx from 'clsx'
import { motion } from 'framer-motion'

import { usePress, useHover } from '@react-aria/interactions'
import { mergeProps } from '@react-aria/utils'
import { CopyOutline } from '@app/shared/icons'
import { urls } from '@app/shared/urls'

import { mainScreenModel } from '../../model'
import styles from './toast.module.css'

export const Toast: FC = () => {
  const { createdRoomId, onToastPress } = useUnit({
    createdRoomId: mainScreenModel.$createdRoomId,
    onToastPress: mainScreenModel.toastPressed,
  })

  const isOpen = createdRoomId !== null

  const { isPressed, pressProps } = usePress({ onPress: onToastPress })
  const { isHovered, hoverProps } = useHover({})

  if (!isOpen) {
    return null
  }

  return (
    <motion.div
      {...mergeProps<any>(pressProps, hoverProps)}
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 24 }}
      transition={{
        type: 'spring',
        damping: 30,
        duration: 0.5,
        stiffness: 200,
      }}
      className={cx(styles.root, {
        [styles.root_isPressed]: isPressed,
        [styles.root_isHovered]: isHovered,
      })}
    >
      {urls.getRoomUrl(createdRoomId).pathname}
      <CopyOutline />
    </motion.div>
  )
}
