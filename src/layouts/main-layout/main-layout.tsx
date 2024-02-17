import { FC, ReactNode } from 'react'
import { Link } from 'atomic-router-react'

import { Logo } from '@app/shared/ui'
import { routes } from '@app/shared/router'

import styles from './main-layout.module.css'

export interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout: FC<MainLayoutProps> = (props) => {
  const { children } = props

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Link to={routes.main}>
          <Logo />
        </Link>
      </div>
      {children}
    </div>
  )
}
