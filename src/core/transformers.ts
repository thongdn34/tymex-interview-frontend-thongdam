import { AxiosResponse } from 'axios';
import { ApiClientResponse } from './types';

export const axiosToApiClientResponse = <TData>(
  axiosResponse: AxiosResponse<TData>
): ApiClientResponse => {
  return {
    data: axiosResponse.data,
    status: axiosResponse.status,
  };
};
