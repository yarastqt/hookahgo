import type { FC, ReactNode } from 'react'

import styles from './overflow.module.css'

export interface OverflowProps {
  children: ReactNode
}

export const Overflow: FC<OverflowProps> = (props) => {
  const { children } = props

  return <div className={styles.root}>{children}</div>
}
