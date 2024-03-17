import { FC } from 'react'
import { useUnit } from 'effector-react'

import { RoomStatus } from '@app/shared/api'
import { HoverEvent } from '@react-aria/interactions'
import { Button, FadeIn } from '@app/shared/ui'

import { roomScreenModel } from './model'
import styles from './room-screen.module.css'

export const RoomScreen: FC = () => {
  const { onAccceptPress, onRejectPress, room } = useUnit({
    onAccceptPress: roomScreenModel.acceptPressed,
    onRejectPress: roomScreenModel.rejectPressed,
    room: roomScreenModel.$room,
  })

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

  const isPending = room?.status === RoomStatus.Pending
  const isAccepted = !isPending && room?.status === RoomStatus.Accepted
  const isRejected = !isPending && room?.status === RoomStatus.Rejected

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <div
            style={{
              overflow: 'hidden',
              zIndex: 1,
              position: 'relative',
              paddingTop: 32,
            }}
          >
            <FadeIn className={styles.title} delay={1} y="100%">
              Пойдешь в кальянную?
            </FadeIn>
          </div>
        </div>

        <div
          style={{
            overflow: 'hidden',
            paddingTop: 8,
            paddingBottom: 16,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <FadeIn className={styles.actions} delay={1.5} y="-100%">
            <Button
              excludeFromTabOrder
              isInactive={isRejected}
              onPress={onAccceptPress}
              variant="action"
            >
              👋 Да
            </Button>

            <Button
              excludeFromTabOrder
              isInactive={isAccepted}
              // onHoverStart={onHoverStart}
              onPress={onRejectPress}
              variant="danger"
            >
              🦧 Нет
            </Button>
          </FadeIn>
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
