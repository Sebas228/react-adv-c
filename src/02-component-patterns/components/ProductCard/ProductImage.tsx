import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../../styles/styles.module.css';
import noImage from '../../assets/no-image.jpg';

export const ProductImage = ({ img = '' }) => {
  let imgSrc: string;

  const { product } = useContext(ProductContext);

  if (img) imgSrc = img;
  else if (product.img) imgSrc = product.img;
  else imgSrc = noImage;

  return (
    <img className={styles.productImg} src={imgSrc} alt="Product Thumnail" />
  );
};
