import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../../styles/styles.module.css';
import noImage from '../../assets/no-image.jpg';

export interface Props {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img = '', className, style }: Props) => {
  let imgSrc: string;

  const { product } = useContext(ProductContext);
  const elementClass = [styles.productImg, className ?? ''].join(' ');

  if (img) imgSrc = img;
  else if (product.img) imgSrc = product.img;
  else imgSrc = noImage;

  return (
    <img
      style={style}
      className={elementClass}
      src={imgSrc}
      alt="Product Thumnail"
    />
  );
};
