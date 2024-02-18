import { FC, ReactNode } from 'react'

import { FluidCanvas } from '@app/shared/ui'

import { Logo } from './ui/logo'
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

      <FluidCanvas />
    </div>
  )
}
