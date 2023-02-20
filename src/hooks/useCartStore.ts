import { useContext } from 'react';
import { CartContext } from '../context';

export function useCartStore() {
  return useContext(CartContext);
}
