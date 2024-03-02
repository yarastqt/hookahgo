import { FC } from 'react'
import { useUnit } from 'effector-react'

import { HoverEvent } from '@react-aria/interactions'
import { Button } from '@app/shared/ui'

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

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.title}>Пойдешь в кальянную?</div>

        <div className={styles.actions}>
          <Button excludeFromTabOrder onPress={onAccceptPress} variant="action">
            👋 Да
          </Button>

          <Button
            excludeFromTabOrder
            // onHoverStart={onHoverStart}
            onPress={onRejectPress}
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
