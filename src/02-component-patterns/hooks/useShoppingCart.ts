import { useState } from 'react';
import { onChangeArgs, Product } from '../components/ProductCard/interfaces';

interface ProductInCart extends Product {
  count: number;
}

interface ShoppingCartState {
  [key: string]: ProductInCart;
}

const useShoppingCart = () => {

  const [shoppingCart, setShoppingCart] = useState<ShoppingCartState>({});

  const handleChangeProductCount = ({ count, product }: onChangeArgs): void => {
    setShoppingCart((prev) => {
      const productInCart: ProductInCart = prev[product.id] ?? {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        return {
          ...prev,
          [product.id]: {
            ...productInCart,
            count: productInCart.count + count,
          },
        };
      }

      const { [product.id]: toDelete, ...rest } = prev;
      return { ...rest };
    });
  };

  return {
    shoppingCart, 
    handleChangeShoppingCart: handleChangeProductCount
  };

};

export default useShoppingCart;