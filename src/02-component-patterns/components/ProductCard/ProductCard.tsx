import { createContext } from 'react';

import styles from '../../styles/styles.module.css';

import useProduct from './hooks/useProduct';
import {
  ProductContextProps,
  Product,
  onChangeArgs,
  InititalValues,
  ProductCardHandlers,
} from './interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InititalValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, isMaxCountReached, increaseBy, reset } = useProduct({
    increaseCallback: onChange,
    product,
    value,
    initialValues,
  });

  const providerValue = {
    counter,
    increaseBy,
    product,
    isMaxCountReached,
  };

  const elementClass = [styles.productCard, className ?? ''].join(' ');

  return (
    <Provider value={providerValue}>
      <div className={elementClass} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
