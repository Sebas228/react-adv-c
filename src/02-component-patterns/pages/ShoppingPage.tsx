import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components/ProductCard';

import styles from '../styles/styles.module.css';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div className={styles.productsContainer}>
        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title="Café" className="text-white text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-image" />
          <ProductTitle title="Café Mug" className="text-white text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: '#204589',
            color: 'white',
            boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
