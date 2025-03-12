import {
  ComponentProps,
  ForwardRefExoticComponent,
  FC,
  PropsWithChildren,
} from 'react';
import { AxiosRequestConfig } from 'axios';

export type WithChildren<T> = T extends { children: unknown }
  ? T
  : PropsWithChildren<T>;

export type BaseRef<
  TRefComp,
  TProps = ComponentProps<FC<WithChildren<unknown>>>,
> = ForwardRefExoticComponent<
  WithChildren<TProps & { className?: string } & React.RefAttributes<TRefComp>>
>;

export type ApiClientResponse<TData = any> = {
  status: number;
  data: TData;
};

export interface APIError {
  message: string;
  system_message: string;
  code: string;
  status: number;
  [key: string]: unknown;
}

export type RequestOptions = Pick<
  AxiosRequestConfig,
  | 'headers'
  | 'params'
  | 'timeout'
  | 'responseType'
  | 'withCredentials'
  | 'data'
  | 'onUploadProgress'
>;

export type GetMethod = <TData = any>(
  url: string,
  options?: RequestOptions
) => Promise<ApiClientResponse<TData>>;
export interface ApiClientMethods {
  get: GetMethod;
}
