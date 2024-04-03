import { useUnit } from 'effector-react'
import { FC } from 'react'

import { RoomStatus } from '@app/shared/api'
import { Button, FadeIn, Overflow } from '@app/shared/ui'
import { HoverEvent } from '@react-aria/interactions'

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
        <Overflow>
          <FadeIn className={styles.title} delay={1} y="100%">
            Пойдешь в кальянную?
          </FadeIn>
        </Overflow>

        <Overflow>
          <FadeIn className={styles.actions} delay={1.5}>
            <Button
              excludeFromTabOrder
              isInactive={isRejected}
              onPress={onAccceptPress}
              variant="action"
            >
              Конечно да
            </Button>

            <Button
              excludeFromTabOrder
              isInactive={isAccepted}
              // onHoverStart={onHoverStart}
              onPress={onRejectPress}
              variant="danger"
            >
              Нет, я не игрок
            </Button>
          </FadeIn>
        </Overflow>
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
