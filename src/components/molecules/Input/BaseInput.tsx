import { Input, InputProps, InputRef } from 'antd';
import React, { forwardRef } from 'react';
import styles from './base-input.module.css';
import { BaseRef } from '@/core/types';

export const BaseInput: BaseRef<InputRef, InputProps> = forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <Input className={`${styles.input} ${className}`} ref={ref} {...props} />
    );
  }
);
