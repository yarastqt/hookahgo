import { FC } from 'react'

import { routes } from '@app/shared/router'
import { Button } from '@app/shared/ui'

import styles from './not-found-screen.module.css'

export const NotFoundScreen: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>Страница не найдена x_X</div>

      <Button className={styles.action} to={routes.main} variant="action">
        Вернуться на главную
      </Button>
    </div>
  )
}
