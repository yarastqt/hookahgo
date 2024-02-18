import cx from 'clsx'
import { FC } from 'react'
import { useUnit } from 'effector-react'

import { Button } from '@app/shared/ui'
import Shape1Image from '@app/shared/assets/shape-1.png'
import Shape2Image from '@app/shared/assets/shape-2.png'

import { mainScreenModel } from './model'
import styles from './main-screen.module.css'

export const MainScreen: FC = () => {
  const { createdRoomId, isRoomCreating, onCreateRoomPress } = useUnit({
    createdRoomId: mainScreenModel.$createdRoomId,
    isRoomCreating: mainScreenModel.$isRoomCreating,
    onCreateRoomPress: mainScreenModel.createRoomPressed,
  })

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <img src={Shape1Image} className={cx(styles.image, styles.image_position_top)} />

          <div className={styles.title}>Пригласи своего бро</div>

          <div className={styles.secondline}>
            <div className={styles.highlights}>
              <div className={styles.highlight}>Незабываемая атмосфера</div>
              <div className={styles.highlight}>Увликательные разгворы</div>
              <div className={styles.highlight}>Бесценные идеи стартапов</div>
            </div>

            <div className={styles.title}>в кальянную</div>

            <img src={Shape2Image} className={cx(styles.image, styles.image_position_bottom)} />
          </div>
        </div>

        <Button className={styles.action} onPress={onCreateRoomPress} variant="action">
          {isRoomCreating ? 'Создаем ссылку...' : 'Пригласить'}
        </Button>
      </div>
    </div>
  )
}
