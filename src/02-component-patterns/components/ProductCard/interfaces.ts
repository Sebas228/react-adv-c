import { Props as ProductCardProps } from './ProductCard';
import { Props as ProductTitleProps } from './ProductTitle';
import { Props as ProductImageProps } from './ProductImage';
import { Props as ProductButtonsProps } from './ProductButtons';

export interface ProductContextProps {
  counter: number;
  product: Product;
  isMaxCountReached: boolean;
  increaseBy: (value: number) => void;
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

export interface onChangeArgs {
  product: Product,
  count: number;
};

export interface InititalValues {
  count?: number;
  maxCount?: number;
};

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  increaseBy: (value: number) => void;
  reset: () => void;
};