import React, { HTMLAttributes } from 'react';

interface BoxProps {
  children?: React.ReactNode;
}

export const Box: React.FC<BoxProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...boxProps
}) => {
  return <div {...boxProps}>{children}</div>;
};
