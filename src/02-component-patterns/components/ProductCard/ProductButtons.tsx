import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { counter, increaseBy } = useContext(ProductContext);
  const elementClass = [styles.buttonsContainer, className ?? ''].join(' ');

  return (
    <div className={elementClass} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};
