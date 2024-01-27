import { ReactNode, forwardRef } from 'react'

import styles from './button.module.css'
import { HoverProps, useHover } from '@react-aria/interactions'

export interface ButtonProps extends HoverProps {
  children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children } = props

  const { hoverProps } = useHover(props)

  return (
    <button {...hoverProps} className={styles.root} ref={ref}>
      {children}
    </button>
  )
})
