import { BaseRef } from '@/core/types';
import { ComponentProps, forwardRef } from 'react';
import styles from './button.module.css';

export type BaseButtonProps = Pick<
  ComponentProps<'button'>,
  'onClick' | 'disabled' | 'className' | 'type' | 'form' | 'onMouseLeave'
>;

export const BaseButton: BaseRef<HTMLButtonElement, BaseButtonProps> =
  forwardRef(({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${styles.button} ${className}`}
        type="button"
        {...props}
      >
        {children}
      </button>
    );
  });
