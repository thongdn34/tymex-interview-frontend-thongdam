import {
  ComponentProps,
  ForwardRefExoticComponent,
  FC,
  PropsWithChildren,
} from 'react';

export type WithChildren<T> = T extends { children: unknown }
  ? T
  : PropsWithChildren<T>;

export type BaseRef<
  TRefComp,
  TProps = ComponentProps<FC<WithChildren<unknown>>>,
> = ForwardRefExoticComponent<
  WithChildren<TProps & { className?: string } & React.RefAttributes<TRefComp>>
>;
