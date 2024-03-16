import { FC } from 'react'
import { useUnit } from 'effector-react'

import { Button, FadeIn, Overflow } from '@app/shared/ui'

import { Toast } from './ui/toast'
import { mainScreenModel } from './model'
import { Highlights } from './ui/highlights'
import styles from './main-screen.module.css'

export const MainScreen: FC = () => {
  const { isRoomCreating, onCreateRoomPress } = useUnit({
    isRoomCreating: mainScreenModel.$isRoomCreating,
    onCreateRoomPress: mainScreenModel.createRoomPressed,
  })

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <Overflow>
            <FadeIn delay={1} y="100%">
              <div className={styles.title}>Пригласи своего бро</div>
            </FadeIn>
          </Overflow>

          <div className={styles.secondline}>
            <Highlights />

            <Overflow>
              <FadeIn delay={1.5} y="-100%">
                <div className={styles.title}>в кальянную</div>
              </FadeIn>
            </Overflow>
          </div>
        </div>

        <FadeIn delay={2.5} className={styles.action}>
          <Button onPress={onCreateRoomPress} variant="action">
            {isRoomCreating ? 'Создаем ссылку...' : '🔥 Пригласить'}
          </Button>
        </FadeIn>

        <Toast />
      </div>
    </div>
  )
}
