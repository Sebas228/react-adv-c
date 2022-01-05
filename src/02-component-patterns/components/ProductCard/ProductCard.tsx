import { createContext } from 'react';

import styles from '../../styles/styles.module.css';

import useProduct from './hooks/useProduct';
import { ProductContextProps, ProductCardProps } from './interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  const providerValue = { counter, increaseBy, product };

  return (
    <Provider value={providerValue}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
