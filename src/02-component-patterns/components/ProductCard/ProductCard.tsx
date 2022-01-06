import { createContext } from 'react';

import styles from '../../styles/styles.module.css';

import useProduct from './hooks/useProduct';
import { ProductContextProps, Product } from './interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();

  const providerValue = { counter, increaseBy, product };
  const elementClass = [styles.productCard, className ?? ''].join(' ');

  return (
    <Provider value={providerValue}>
      <div className={elementClass} style={style}>
        {children}
      </div>
    </Provider>
  );
};
