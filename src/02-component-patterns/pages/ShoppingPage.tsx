import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components/ProductCard';

import styles from '../styles/styles.module.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div className={styles.productsContainer}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="Café" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title="Café Mug" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
