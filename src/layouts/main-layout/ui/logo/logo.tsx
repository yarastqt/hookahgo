import { type FC, useRef } from 'react'
import { Link } from 'atomic-router-react'
import gsap from 'gsap'

import { useGSAP } from '@gsap/react'
import { Logo as LogoBase } from '@app/shared/ui'
import { routes } from '@app/shared/router'

import styles from './logo.module.css'

export const Logo: FC = () => {
  const ref = useRef<HTMLAnchorElement>(null)

  useGSAP(
    () => {
      gsap.from(ref.current, {
        delay: 0.5,
        duration: 0.5,
        ease: 'expoScale(0.5, 7, none)',
        opacity: 0,
        y: -24,
      })
    },
    { scope: ref },
  )

  return (
    <Link to={routes.main} className={styles.root} ref={ref}>
      <LogoBase />
    </Link>
  )
}
