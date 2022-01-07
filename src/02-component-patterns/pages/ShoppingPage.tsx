import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components/ProductCard';

import useShoppingCart from '../hooks/useShoppingCart';
import { Product } from '../components/ProductCard/interfaces';

import products from '../data/products';

import styles from '../styles/styles.module.css';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {
  const { shoppingCart, handleChangeShoppingCart } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div className={styles.productsContainer}>
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
            onChange={handleChangeShoppingCart}
            value={shoppingCart[product.id]?.count ?? 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.keys(shoppingCart).map((key: string) => (
          <ProductCard
            key={key}
            product={shoppingCart[key]}
            className="bg-dark"
            style={{ width: '100px' }}
            value={shoppingCart[key].count}
            onChange={handleChangeShoppingCart}
          >
            <ProductImage className="custom-image" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
