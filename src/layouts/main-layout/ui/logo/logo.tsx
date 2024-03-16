import type { FC } from 'react'
import { Link } from 'atomic-router-react'

import { FadeIn, Logo as LogoBase } from '@app/shared/ui'
import { routes } from '@app/shared/router'

import styles from './logo.module.css'

export const Logo: FC = () => {
  return (
    <FadeIn delay={0.5}>
      <Link to={routes.main} className={styles.root}>
        <LogoBase />
      </Link>
    </FadeIn>
  )
}
