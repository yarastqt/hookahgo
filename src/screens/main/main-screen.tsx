import cx from 'clsx'
import { FC, useRef } from 'react'
import { useUnit } from 'effector-react'
import gsap from 'gsap'

import { useGSAP } from '@gsap/react'
import { Button } from '@app/shared/ui'
import Shape1Image from '@app/shared/assets/shape-1.png'
import Shape2Image from '@app/shared/assets/shape-2.png'
import { BracketBackward, BracketForward } from '@app/shared/icons'

import { Toast } from './ui/toast'
import { mainScreenModel } from './model'
import styles from './main-screen.module.css'

export const MainScreen: FC = () => {
  const shapeTopRef = useRef<HTMLImageElement>(null)
  const shapeBottomRef = useRef<HTMLImageElement>(null)
  const firstLineRef = useRef<HTMLDivElement>(null)
  const secondLineRef = useRef<HTMLDivElement>(null)
  const highlightsRef = useRef<HTMLDivElement>(null)
  const actionRef = useRef<HTMLButtonElement>(null)

  const { isRoomCreating, onCreateRoomPress } = useUnit({
    isRoomCreating: mainScreenModel.$isRoomCreating,
    onCreateRoomPress: mainScreenModel.createRoomPressed,
  })

  useGSAP(() => {
    const timeline = gsap.timeline({
      delay: 1,
      repeatDelay: 1,
      defaults: {
        duration: 0.5,
        ease: 'expoScale(0.5, 7, none)',
      },
    })

    timeline.from(firstLineRef.current, { opacity: 0, y: -24 })

    timeline.from(secondLineRef.current, { opacity: 0, y: 24 })

    timeline.from(highlightsRef.current, { opacity: 0 })

    timeline.add([
      gsap.from(shapeTopRef.current, { opacity: 0, scale: 0 }),
      gsap.from(shapeBottomRef.current, { opacity: 0, rotate: 90, scale: 0 }),

      gsap.to(shapeTopRef.current, { delay: 0.5, duration: 1, repeat: -1, y: 8, yoyo: true }),
      gsap.to(shapeBottomRef.current, { duration: 1, repeat: -1, y: 8, yoyo: true }),
    ])

    timeline.from(actionRef.current, { opacity: 0 })
  })

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <img
            className={cx(styles.image, styles.image_position_top)}
            ref={shapeTopRef}
            src={Shape1Image}
          />

          <div className={styles.title} ref={firstLineRef}>
            Пригласи своего бро
          </div>

          <div className={styles.secondline}>
            <div className={styles.highlights} ref={highlightsRef}>
              <BracketBackward />
              <div className={styles.highlightsList}>
                <div className={styles.highlight}>Незабываемая атмосфера</div>
                <div className={styles.highlight}>Увлекательные разговоры</div>
                <div className={styles.highlight}>Бесценные идеи стартапов</div>
              </div>
              <BracketForward />
            </div>

            <div className={styles.title} ref={secondLineRef}>
              в кальянную
            </div>

            <img
              className={cx(styles.image, styles.image_position_bottom)}
              ref={shapeBottomRef}
              src={Shape2Image}
            />
          </div>
        </div>

        <Button
          className={styles.action}
          onPress={onCreateRoomPress}
          ref={actionRef}
          variant="action"
        >
          {isRoomCreating ? 'Создаем ссылку...' : 'Пригласить'}
        </Button>

        <Toast />
      </div>
    </div>
  )
}
