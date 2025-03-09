import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/data-layer/getProducts';

export const useGetProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    retry: false,
    refetchInterval: 60000,
  });
};