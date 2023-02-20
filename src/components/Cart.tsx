import './Cart.css';

import { useId } from 'react';
import { CartIcon, ClearCartIcon } from './Icons';
import { useCartStore } from '../hooks';
import { CartItem } from './CartItem';

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart } = useCartStore();

  return (
    <>
      <label htmlFor={cartCheckboxId} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />
      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem product={product} />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
