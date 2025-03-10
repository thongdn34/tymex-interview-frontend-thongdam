import { BaseRef } from '@/core/types';
import { forwardRef } from 'react';
import styles from './styles.module.css';

export const BaseButton: BaseRef<HTMLButtonElement> = forwardRef(
  ({ children, className, ...props }, ref) => {
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
  }
);
