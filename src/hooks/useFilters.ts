import { Product } from '../models';
import { useFiltersStore } from './useFiltersStore';

export function useFilters(products: Product[]) {
  const { filters } = useFiltersStore();

  const filterProducts = (products: Product[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });
  };

  return filterProducts(products);
}
