import {
  useQuery as useQueryOriginal,
  UseQueryOptions,
  UseQueryResult as UseQueryResultOriginal,
  QueryKey,
  Query as QueryOriginal,
} from '@tanstack/react-query';
import { useEffect } from 'react';
import { ApiClientError } from '@/core/errors';
export type Query<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
> = QueryOriginal<TQueryFnData, TError, TData, APIQueryKey>;

export type APIQueryKey = ReadonlyArray<
  string | null | undefined | boolean | number
>;

interface APIUseQueryOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
> extends Omit<
    Extract<
      UseQueryOptions<TQueryFnData, TError, TData, APIQueryKey>,
      { queryKey?: QueryKey }
    >,
    'queryKey' | 'enabled'
  > {
  queryKey: APIQueryKey;
  enabled: boolean;
  onSuccess?: (data: TQueryFnData) => void;
  onError?: (error: TError) => void;
}

export type UseQueryFnArgs<TQueryFnData = unknown, TError = ApiClientError> =
  | Partial<APIUseQueryOptions<TQueryFnData, TError, TQueryFnData>>
  | undefined;

export type UseQueryResult<
  TData = unknown,
  TError = ApiClientError,
> = UseQueryResultOriginal<TData, TError>;

export const useQuery = <TQueryFnData = unknown, TError = ApiClientError>({
  onError,
  onSuccess,
  ...options
}: APIUseQueryOptions<TQueryFnData, TError, TQueryFnData>) => {
  const query = useQueryOriginal<
    TQueryFnData,
    TError,
    TQueryFnData,
    APIQueryKey
  >(options);

  // onError and onSuccess can be anonymous functions.
  // If they are we need to make sure they don't trigger a call on every re-render of the source component,
  // so they are left out of the dependency array.
  useEffect(() => {
    if (query.error && onError) {
      onError(query.error);
    }
  }, [query.error]);

  useEffect(() => {
    if (query.data && onSuccess) {
      onSuccess(query.data);
    }
  }, [query.data]);

  return {
    ...query,
    isLoading: options.enabled === false ? query.isFetching : query.isPending,
  };
};
