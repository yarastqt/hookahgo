import { ReactNode, forwardRef } from 'react'

import { HoverProps, useHover } from '@react-aria/interactions'
import { AriaButtonProps, useButton } from '@react-aria/button'
import { useObjectRef, mergeProps } from '@react-aria/utils'

import styles from './button.module.css'

export interface ButtonProps extends AriaButtonProps, HoverProps {
  children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children } = props

  const rootRef = useObjectRef(ref)
  const { hoverProps } = useHover(props)
  const { buttonProps } = useButton(props, rootRef)

  return (
    <button {...mergeProps(buttonProps, hoverProps)} className={styles.root} ref={rootRef}>
      {children}
    </button>
  )
})
