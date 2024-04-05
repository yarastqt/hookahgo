import cx from 'clsx'
import { motion } from 'framer-motion'
import { ReactNode, forwardRef } from 'react'

import { SupressWarning } from '@app/shared/lib/utility-types'
import { AriaButtonProps, useButton } from '@react-aria/button'
import { FocusRing } from '@react-aria/focus'
import { HoverProps, useHover } from '@react-aria/interactions'
import { mergeProps, useObjectRef } from '@react-aria/utils'

import styles from './button.module.css'

export interface ButtonProps extends AriaButtonProps, HoverProps {
  children: ReactNode
  className?: string
  isInactive?: boolean
  variant: 'default' | 'action' | 'danger'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, className, isInactive, variant } = props

  const rootRef = useObjectRef(ref)
  const { hoverProps, isHovered } = useHover(props)
  const { buttonProps, isPressed } = useButton(props, rootRef)

  return (
    <FocusRing focusRingClass={styles.focusRing}>
      <motion.button
        {...mergeProps<SupressWarning>(buttonProps, hoverProps)}
        className={cx(
          styles.root,
          {
            [styles.root_isHovered]: isHovered,
            [styles.root_isInactive]: isInactive,
            [styles.root_isPressed]: isPressed,
            [styles.root_variant_action]: variant === 'action',
            [styles.root_variant_danger]: variant === 'danger',
          },
          className,
        )}
        ref={rootRef}
        whileTap={{ scale: 0.96 }}
        transition={{
          type: 'spring',
          damping: 30,
          duration: 0.2,
          stiffness: 300,
        }}
      >
        {children}
      </motion.button>
    </FocusRing>
  )
})
