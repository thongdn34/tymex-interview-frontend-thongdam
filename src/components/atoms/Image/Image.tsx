import React from 'react';
import NextImage, { ImageProps } from 'next/image';

export const Image = (props: ImageProps) => {
  return (
    <NextImage
      width={1000}
      height={1000}
      style={{ width: '100%', height: '100%' }}
      blurDataURL="/skeleton.gif"
      placeholder="blur"
      {...props}
    />
  );
};
