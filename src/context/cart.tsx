import { createContext, useEffect, useState } from 'react';
import { Product } from '../models';

interface CartStore {
  cart: Product[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
  removeFromCart: (product: Product) => void;
}

export const CartContext = createContext<CartStore>({} as CartStore);

interface Props {
  children: any;
}

export function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<Product[]>(() =>
    JSON.parse(localStorage.getItem('cart') || '[]')
  );

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart: CartStore['addToCart'] = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity! += 1;
      return setCart(newCart);
    }

    setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };

  const removeFromCart: CartStore['removeFromCart'] = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  };

  const clearCart: CartStore['clearCart'] = () => setCart([]);

  const store: CartStore = {
    cart,
    addToCart,
    clearCart,
    removeFromCart
  };

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
}
