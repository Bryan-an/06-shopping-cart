import { useCartStore } from '../hooks';
import { Product } from '../models';

interface Props {
  product: Product;
}

export function CartItem({ product }: Props) {
  const { thumbnail, price, title, quantity } = product;
  const { addToCart } = useCartStore();

  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - $ {price}
      </div>
      <footer>
        <small>Quantity: {quantity}</small>
        <button onClick={() => addToCart(product)}>+</button>
      </footer>
    </li>
  );
}
