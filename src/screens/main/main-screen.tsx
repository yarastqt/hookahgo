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
      <div className={styles.heading}>
        <div className={styles.firstline}>
          <Overflow>
            <FadeIn delay={1} y="100%">
              <div className={styles.title}>Пригласи своего бро</div>
            </FadeIn>
          </Overflow>
        </div>

        <div className={styles.highlights}>
          <Highlights />
        </div>

        <div className={styles.secondline}>
          <Overflow>
            <FadeIn delay={1.5} y="-100%">
              <div className={styles.title}>в кальянную</div>
            </FadeIn>
          </Overflow>
        </div>
      </div>

      <FadeIn delay={2.5} className={styles.action}>
        <Button onPress={onCreateRoomPress} variant="action">
          {isRoomCreating ? 'Создаем ссылку...' : '>>> Пригласить <<<'}
        </Button>
      </FadeIn>

      <Toast />
    </div>
  )
}
