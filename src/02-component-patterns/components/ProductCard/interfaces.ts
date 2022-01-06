import { Props as ProductCardProps } from './ProductCard';
import { Props as ProductTitleProps } from './ProductTitle';
import { Props as ProductImageProps } from './ProductImage';
import { Props as ProductButtonsProps } from './ProductButtons';

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
};

export interface Product {
  id: string;
  title: string;
  img?: string;
};

export interface ProductCardHOCProps {
  (props: ProductCardProps): JSX.Element;
  Image: (props: ProductImageProps) => JSX.Element;
  Title: (props: ProductTitleProps) => JSX.Element;
  Buttons: (props: ProductButtonsProps) => JSX.Element;
};