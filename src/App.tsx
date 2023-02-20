import { products as initialProducts } from './mocks/products.json';
import { Cart, Footer, Header, Products } from './components';
import { useFilters } from './hooks';
import { IS_DEVELOPMENT } from './config';
import { Product } from './models';
import { CartProvider } from './context';

function App() {
  const filteredProducts = useFilters(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  );
}

export default App;
