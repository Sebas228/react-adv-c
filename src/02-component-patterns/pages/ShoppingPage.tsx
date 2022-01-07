import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components/ProductCard';

import products from '../data/products';

import styles from '../styles/styles.module.css';
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div className={styles.productsContainer}>
        <ProductCard
          product={product}
          className="bg-dark"
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({ count, maxCount, increaseBy, reset }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white text-bold" />
              <ProductButtons className="custom-buttons" />

              <div className="optional-custom-buttons">
                <button onClick={reset}>Reset</button>
                <button
                  onClick={() => increaseBy(-2)}
                  className={`${count === 0 && styles.disabled}`}
                >
                  - 2
                </button>
                <button
                  onClick={() => increaseBy(2)}
                  className={`${
                    !!maxCount && count >= maxCount - 1 && styles.disabled
                  }`}
                >
                  + 2
                </button>
              </div>

              <span className="custom-count">
                Count: {count} - {maxCount ?? <>&infin;</>}
              </span>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
