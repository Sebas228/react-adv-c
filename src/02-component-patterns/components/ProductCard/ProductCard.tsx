import { createContext } from 'react';

import styles from '../../styles/styles.module.css';

import useProduct from './hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs } from './interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
}: Props) => {
  const { counter, increaseBy } = useProduct({
    increaseCallback: onChange,
    product,
    value,
  });

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
