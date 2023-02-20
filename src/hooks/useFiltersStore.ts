import { useContext } from 'react';
import { FiltersContext } from '../context';

export function useFiltersStore() {
  return useContext(FiltersContext);
}
