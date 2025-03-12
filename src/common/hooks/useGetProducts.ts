import { getProducts, GetProductsResponse } from '@/data-layer/getProducts';
import { useQueryParams } from './useQueryParams';
import { useQuery, UseQueryFnArgs } from '@/data-layer/useQuery';

export const useGetProducts = (
  options: UseQueryFnArgs<GetProductsResponse>,
  queryParams?: Record<string, string>
) => {
  const { getParams } = useQueryParams();
  const queryObject = { ...queryParams, ...getParams() };
  Object.keys(queryObject).forEach((key) => {
    if (queryObject[key] === 'all') {
      delete queryObject[key];
    }
  });

  return useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(queryObject),
    retry: false,
    refetchInterval: 60000,
    enabled: true,
    ...options,
  });
};
