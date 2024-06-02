import { useUnit } from 'effector-react'
import { FC, useCallback, useRef, useState } from 'react'

import { RoomStatus } from '@app/shared/api'
import { Button, FadeIn, Overflow, Toast } from '@app/shared/ui'

import { roomScreenModel } from './model'
import styles from './room-screen.module.css'

const REJECT_BUTTON_TEXTS = ['Нет, я не игрок', 'Точно нет?', 'Да нет']

export const RoomScreen: FC = () => {
  const { isToastOpen, onAccceptPress, onCloseToastPress, onRejectPress, room } = useUnit({
    isToastOpen: roomScreenModel.$isToastOpen,
    onAccceptPress: roomScreenModel.acceptPressed,
    onCloseToastPress: roomScreenModel.closeToastPressed,
    onRejectPress: roomScreenModel.rejectPressed,
    room: roomScreenModel.$room,
  })

  const rootRef = useRef<HTMLDivElement>(null)
  const rejectContainerRef = useRef<HTMLDivElement>(null)

  const [rejectCounter, setRejectCounter] = useState(0)

  const onRejectPressHandler = useCallback(() => {
    if (!rootRef.current || !rejectContainerRef.current) {
      return
    }

    if (rejectCounter >= 2) {
      rejectContainerRef.current.style.width = ''
      rejectContainerRef.current.style.height = ''
      rejectContainerRef.current.style.position = ''
      rejectContainerRef.current.style.left = ''
      rejectContainerRef.current.style.top = ''

      setRejectCounter(0)
      onRejectPress()

      return
    }

    const rootRect = rootRef.current.getBoundingClientRect()
    const rejectContainerRect = rejectContainerRef.current.getBoundingClientRect()

    const getRandomCoordinates = (currentX: number, currentY: number): { x: number; y: number } => {
      const x = Math.floor(Math.random() * (rootRect.width - rejectContainerRect.width))
      const y = Math.floor(Math.random() * (rootRect.height - rejectContainerRect.height))

      if (
        Math.abs(currentX - x) < rejectContainerRect.width ||
        Math.abs(currentY - y) < rejectContainerRect.height
      ) {
        return getRandomCoordinates(currentX, currentY)
      }

      return { x, y }
    }

    const { x, y } = getRandomCoordinates(
      parseInt(rejectContainerRef.current.style.left) || 0,
      parseInt(rejectContainerRef.current.style.top) || 0,
    )

    rejectContainerRef.current.style.width = `${rejectContainerRect.width}px`
    rejectContainerRef.current.style.height = `${rejectContainerRect.height}px`
    rejectContainerRef.current.style.position = 'absolute'
    rejectContainerRef.current.style.left = `${x}px`
    rejectContainerRef.current.style.top = `${y}px`

    setRejectCounter(rejectCounter + 1)
  }, [rejectCounter, onRejectPress])

  const isPending = room?.status === RoomStatus.Pending
  const isAccepted = !isPending && room?.status === RoomStatus.Accepted
  const isRejected = !isPending && room?.status === RoomStatus.Rejected
  const isRejectedTry = rejectCounter > 0

  return (
    <>
      <div className={styles.root} ref={rootRef}>
        <div className={styles.content}>
          <Overflow>
            <FadeIn className={styles.title} delay={1} y="100%">
              Пойдешь в кальянную?
            </FadeIn>
          </Overflow>

          <div className={styles.actions}>
            <FadeIn className={styles.action} delay={2}>
              <Button
                isInactive={isRejected}
                isSelected={isAccepted}
                onPress={onAccceptPress}
                variant="action"
              >
                Конечно да
              </Button>
            </FadeIn>

            {isRejectedTry && <div className={styles.action}></div>}

            <FadeIn className={styles.action} delay={2.5} ref={rejectContainerRef}>
              <Button
                isInactive={isAccepted}
                isSelected={isRejected}
                onPress={onRejectPressHandler}
                variant="danger"
              >
                {REJECT_BUTTON_TEXTS[rejectCounter]}
              </Button>
            </FadeIn>
          </div>
        </div>
      </div>

      <Toast isOpen={isToastOpen} onClose={onCloseToastPress}>
        {isAccepted && 'Выбор настоящего профессионала'}
        {isRejected && 'Попробуем в следующий раз'}
      </Toast>
    </>
  )
}
