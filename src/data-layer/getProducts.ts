import { Character } from '@/common/types';

export const getProducts = async (): Promise<Character[]> => {
  const response = await fetch('/api/products');
  const data = await response.json();
  return data;
};