import { useUnit } from 'effector-react'
import { FC } from 'react'

import { RoomStatus } from '@app/shared/api'
import { Button, FadeIn, Overflow } from '@app/shared/ui'

import { roomScreenModel } from './model'
import styles from './room-screen.module.css'

export const RoomScreen: FC = () => {
  const { onAccceptPress, onRejectPress, room } = useUnit({
    onAccceptPress: roomScreenModel.acceptPressed,
    onRejectPress: roomScreenModel.rejectPressed,
    room: roomScreenModel.$room,
  })

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

        <div className={styles.actions}>
          <FadeIn className={styles.action} delay={2}>
            <Button isInactive={isRejected} onPress={onAccceptPress} variant="action">
              Конечно да
            </Button>
          </FadeIn>

          <FadeIn className={styles.action} delay={2.5}>
            <Button isInactive={isAccepted} onPress={onRejectPress} variant="danger">
              Нет, я не игрок
            </Button>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
