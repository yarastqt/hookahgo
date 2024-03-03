import cx from 'clsx'
import { FC, useRef } from 'react'
import { useUnit } from 'effector-react'
import gsap from 'gsap'

import { RoomStatus } from '@app/shared/api'
import { useGSAP } from '@gsap/react'
import { HoverEvent } from '@react-aria/interactions'
import { Button } from '@app/shared/ui'
import Shape3Image from '@app/shared/assets/shape-3.png'
import Shape4Image from '@app/shared/assets/shape-4.png'

import { roomScreenModel } from './model'
import styles from './room-screen.module.css'

export const RoomScreen: FC = () => {
  const { onAccceptPress, onRejectPress, room } = useUnit({
    onAccceptPress: roomScreenModel.acceptPressed,
    onRejectPress: roomScreenModel.rejectPressed,
    room: roomScreenModel.$room,
  })

  const shapeTopRef = useRef<HTMLImageElement>(null)
  const shapeBottomRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const acceptRef = useRef<HTMLButtonElement>(null)
  const rejectRef = useRef<HTMLButtonElement>(null)

  const onHoverStart = (event: HoverEvent) => {
    const rect = event.target.getBoundingClientRect()

    const canvasHeight = document.body.offsetHeight
    const canvasWidth = document.body.offsetWidth

    const randX = getRandom(0, canvasWidth)
    const randY = getRandom(0, canvasHeight)

    const x = clamp(randX - rect.width - rect.x, 0, canvasWidth)
    const y = clamp(randY - rect.height - rect.y, 0, canvasHeight)

    event.target.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }

  useGSAP(() => {
    const timeline = gsap.timeline({
      delay: 1,
      repeatDelay: 1,
      defaults: {
        duration: 0.5,
        ease: 'expoScale(0.5, 7, none)',
      },
    })

    timeline.from(titleRef.current, { opacity: 0, y: -24 })

    timeline.add([
      gsap.from(shapeTopRef.current, { opacity: 0, scale: 0 }),
      gsap.from(shapeBottomRef.current, { opacity: 0, rotate: 90, scale: 0 }),

      gsap.to(shapeTopRef.current, { delay: 0.5, duration: 1, repeat: -1, y: 8, yoyo: true }),
      gsap.to(shapeBottomRef.current, { duration: 1, repeat: -1, y: 8, yoyo: true }),
    ])

    timeline.from(acceptRef.current, { opacity: 0 })
    timeline.from(rejectRef.current, { opacity: 0 })
  })

  const isPending = room?.status === RoomStatus.Pending
  const isAccepted = !isPending && room?.status === RoomStatus.Accepted
  const isRejected = !isPending && room?.status === RoomStatus.Rejected

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <img
            className={cx(styles.image, styles.image_position_top)}
            ref={shapeTopRef}
            src={Shape3Image}
          />

          <div className={styles.title} ref={titleRef}>
            Пойдешь в кальянную?
          </div>

          <img
            className={cx(styles.image, styles.image_position_bottom)}
            ref={shapeBottomRef}
            src={Shape4Image}
          />
        </div>

        <div className={styles.actions}>
          <Button
            excludeFromTabOrder
            isInactive={isRejected}
            onPress={onAccceptPress}
            ref={acceptRef}
            variant="action"
          >
            👋 Да
          </Button>

          <Button
            excludeFromTabOrder
            isInactive={isAccepted}
            // onHoverStart={onHoverStart}
            onPress={onRejectPress}
            ref={rejectRef}
            variant="danger"
          >
            🦧 Нет
          </Button>
        </div>
      </div>
    </div>
  )
}

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max)
}
