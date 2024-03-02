import { type FC, useRef } from 'react'
import { useUnit } from 'effector-react'
import cx from 'clsx'
import gsap from 'gsap'

import { useGSAP } from '@gsap/react'
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

  const ref = useRef<HTMLDivElement>(null)
  const { isPressed, pressProps } = usePress({ onPress: onToastPress })
  const { isHovered, hoverProps } = useHover({})

  useGSAP(
    () => {
      if (!isOpen) {
        return
      }

      gsap.from(ref.current, { duration: 0.25, ease: 'expoScale(0.5, 7, none)', opacity: 0, y: 24 })
    },
    { dependencies: [createdRoomId] },
  )

  if (!isOpen) {
    return null
  }

  return (
    <div
      {...mergeProps(pressProps, hoverProps)}
      className={cx(styles.root, {
        [styles.root_isPressed]: isPressed,
        [styles.root_isHovered]: isHovered,
      })}
      ref={ref}
    >
      {urls.getRoomUrl(createdRoomId).pathname}
      <CopyOutline />
    </div>
  )
}
