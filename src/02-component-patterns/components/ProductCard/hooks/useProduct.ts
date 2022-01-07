import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces';

interface UseProductArgs {
  increaseCallback?: (args: onChangeArgs) => void;
  product: Product;
  value?: number;
};

interface UseProductState {
  counter: number;
  increaseBy: (value: number) => void;
};

const useProduct = ({ increaseCallback, product, value = 0 }: UseProductArgs): UseProductState => {

  const [counter, setCounter] = useState(0);
  const isControlled = useRef( !!increaseCallback );

  const increaseBy = (toIncrease: number) => {

    if (isControlled.current) {
      return increaseCallback!({ count: toIncrease, product });
    }

    const newValue = Math.max(counter + toIncrease, 0);

    setCounter(newValue);
    
  }

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return { counter, increaseBy }

};

export default useProduct;