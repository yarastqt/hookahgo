import { FC, ReactNode } from 'react'

import { Logo } from './ui/logo'
import { Topology } from './ui/topology'
import styles from './main-layout.module.css'

export interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout: FC<MainLayoutProps> = (props) => {
  const { children } = props

  return (
    <div className={styles.root}>
      <Logo />

      {children}

      <Topology />
    </div>
  )
}
