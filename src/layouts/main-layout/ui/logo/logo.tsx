import { Link } from 'atomic-router-react'
import type { FC } from 'react'

import { routes } from '@app/shared/router'
import { FadeIn, Logo as LogoBase } from '@app/shared/ui'
import { FocusRing } from '@react-aria/focus'

import styles from './logo.module.css'

export const Logo: FC = () => {
  return (
    <FadeIn delay={0.5}>
      <FocusRing focusRingClass={styles.focusRing}>
        <Link to={routes.main} className={styles.root}>
          <LogoBase />
        </Link>
      </FocusRing>
    </FadeIn>
  )
}
