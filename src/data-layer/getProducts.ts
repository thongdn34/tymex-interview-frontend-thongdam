import { Character } from '@/common/types';
import { apiClient } from './apiClient';

export type GetProductsResponse = {
  data: Character[];
  total: number;
};

export const getProducts = async (params: Record<string, string>) => {
  const response = await apiClient.v1.get<GetProductsResponse>(
    '/api/products',
    {
      params,
    }
  );
  return response.data;
};
