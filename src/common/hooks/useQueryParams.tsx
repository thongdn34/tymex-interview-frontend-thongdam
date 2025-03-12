import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

type ParamRecord = Record<string, string>;

export const useQueryParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Memoize the params object to avoid recalculating on every render
  const getParams = useCallback((): ParamRecord => {
    const queryObject: ParamRecord = {};
    searchParams.forEach((value, key) => {
      queryObject[key] = value;
    });
    return queryObject;
  }, [searchParams]);

  // Memoize the current params for components that need the current state
  const currentParams = useMemo(() => getParams(), [getParams]);

  const getParam = useCallback(
    (key: string): string | null => {
      return searchParams.get(key);
    },
    [searchParams]
  );

  const updateUrl = useCallback(
    (queryObject: ParamRecord): void => {
      const params = new URLSearchParams(queryObject).toString();
      router.push(`?${params}`, { scroll: false });
    },
    [router]
  );

  const onChangeParam = useCallback(
    (key: string, value: string): void => {
      const queryObject = getParams();
      queryObject[key] = value;
      updateUrl(queryObject);
    },
    [getParams, updateUrl]
  );

  const onChangeParams = useCallback(
    (queryParams: ParamRecord): void => {
      const queryObject = getParams();
      Object.assign(queryObject, queryParams);
      updateUrl(queryObject);
    },
    [getParams, updateUrl]
  );

  const onClearParams = useCallback(
    (queryParams: string[]): void => {
      const queryObject = getParams();
      for (const param of queryParams) {
        delete queryObject[param];
      }
      updateUrl(queryObject);
    },
    [getParams, updateUrl]
  );

  // Add a new utility function for toggling boolean params
  const onToggleParam = useCallback(
    (key: string): void => {
      const queryObject = getParams();
      if (queryObject[key]) {
        delete queryObject[key];
      } else {
        queryObject[key] = 'true';
      }
      updateUrl(queryObject);
    },
    [getParams, updateUrl]
  );

  return {
    getParams,
    getParam,
    currentParams,
    onChangeParam,
    onChangeParams,
    onClearParams,
    onToggleParam,
  };
};
