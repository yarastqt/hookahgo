import { FC, ReactNode } from 'react'
import { Link } from 'atomic-router-react'

import { FluidCanvas, Logo } from '@app/shared/ui'
import { routes } from '@app/shared/router'

import styles from './main-layout.module.css'

export interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout: FC<MainLayoutProps> = (props) => {
  const { children } = props

  return (
    <div className={styles.root}>
      <Link to={routes.main} className={styles.logo}>
        <Logo />
      </Link>

      {children}

      <FluidCanvas />
    </div>
  )
}
