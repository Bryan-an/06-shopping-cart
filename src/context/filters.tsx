import { createContext, useState } from 'react';

interface FiltersStore {
  filters: ProductFilters;
  setFilters: React.Dispatch<React.SetStateAction<ProductFilters>>;
}

export const FiltersContext = createContext<FiltersStore>({} as FiltersStore);

interface Props {
  children: JSX.Element;
}

export interface ProductFilters {
  category: string;
  minPrice: number;
}

export function FiltersProvider({ children }: Props) {
  const [filters, setFilters] = useState<ProductFilters>({
    category: 'all',
    minPrice: 0
  });

  const store: FiltersStore = {
    filters,
    setFilters
  };

  return (
    <FiltersContext.Provider value={store}>{children}</FiltersContext.Provider>
  );
}
