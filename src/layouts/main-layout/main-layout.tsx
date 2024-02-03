import { FC, ReactNode } from 'react'
import { Logo } from '@app/shared/ui'

import styles from './main-layout.module.css'

export interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout: FC<MainLayoutProps> = (props) => {
  const { children } = props

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Logo />
      </div>
      {children}
    </div>
  )
}
