import { type NextRequest } from 'next/server';
import products from '@/data-layer/products.json';
import { DEFAULT_LIMIT } from '@/common/constants';
import { type Character } from '@/common/types';

type SortDirection = 'oldest' | 'newest';
type PriceSort = 'low-to-high' | 'high-to-low';

interface FilterOptions {
  limit: number;
  offset: number;
  text: string;
  priceStart: number;
  priceEnd: number;
  tier: string;
  category: string;
  theme: string;
  time?: SortDirection;
  price?: PriceSort;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  // Parse and validate query parameters
  const filters: FilterOptions = {
    limit: Math.max(1, +(searchParams.get('limit') ?? DEFAULT_LIMIT)),
    offset: Math.max(0, +(searchParams.get('offset') ?? 0)),
    text: searchParams.get('text') ?? '',
    priceStart: Math.max(0, +(searchParams.get('priceStart') ?? 0)),
    priceEnd: +(searchParams.get('priceEnd') ?? 0),
    tier: searchParams.get('tier') ?? '',
    category: searchParams.get('category') ?? '',
    theme: searchParams.get('theme') ?? '',
    time: searchParams.get('time') as SortDirection,
    price: searchParams.get('price') as PriceSort,
  };

  // Apply filters
  let filteredProducts = filterProducts(products.products, filters);

  // Apply sorting
  filteredProducts = sortProducts(filteredProducts, filters);

  // Paginate results
  const paginatedProducts = paginateProducts(filteredProducts, filters);

  const response = {
    total: filteredProducts.length,
    data: paginatedProducts,
  };

  return new Response(JSON.stringify(response), {
    headers: { 'Content-Type': 'application/json' },
  });
}

function filterProducts(
  products: Character[],
  filters: FilterOptions
): Character[] {
  const { text, tier, category, theme, priceStart, priceEnd } = filters;

  return products.filter((product) => {
    const matchesText = product.title
      .toLowerCase()
      .includes(text.toLowerCase());
    const matchesTier =
      !tier || product.tier.toLowerCase() === tier.toLowerCase();
    const matchesCategory = !category || product.category === category;
    const matchesTheme =
      !theme || product.theme.toLowerCase() === theme.toLowerCase();
    const matchesPriceStart = product.price >= priceStart;
    const matchesPriceEnd = !priceEnd || product.price <= priceEnd;

    return (
      matchesText &&
      matchesTier &&
      matchesCategory &&
      matchesTheme &&
      matchesPriceStart &&
      matchesPriceEnd
    );
  });
}

function sortProducts(
  products: Character[],
  filters: FilterOptions
): Character[] {
  const { time, price } = filters;
  let result = [...products];

  if (time) {
    result.sort((a, b) =>
      time === 'oldest' ? a.createdAt - b.createdAt : b.createdAt - a.createdAt
    );
  }

  if (price) {
    result.sort((a, b) =>
      price === 'low-to-high' ? a.price - b.price : b.price - a.price
    );
  }

  return result;
}

function paginateProducts(
  products: Character[],
  filters: FilterOptions
): Character[] {
  const { offset, limit } = filters;
  return products.slice(offset, offset + limit) || [];
}
