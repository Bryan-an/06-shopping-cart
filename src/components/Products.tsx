import './Products.css';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';
import { Product } from '../models';
import { useCartStore } from '../hooks';

interface Props {
  products: Product[];
}

export function Products({ products }: Props) {
  const { addToCart, cart, removeFromCart } = useCartStore();

  const checkProductInCart = (product: Product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product);

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: isProductInCart
                      ? 'orangered'
                      : 'deepskyblue'
                  }}
                  onClick={() =>
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }>
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
