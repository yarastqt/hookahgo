import { FC } from 'react'

import styles from './title.module.css'

export const Title: FC = () => {
  return (
    <div className={styles.root}>
      Пойдешь в <span className={styles.highlight}>кальянную</span>?
    </div>
  )
}
