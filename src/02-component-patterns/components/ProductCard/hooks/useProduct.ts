import { useEffect, useMemo, useRef, useState } from 'react';
import { InititalValues, onChangeArgs, Product } from '../interfaces';

interface UseProductArgs {
  increaseCallback?: (args: onChangeArgs) => void;
  product: Product;
  value?: number;
  initialValues?: InititalValues
};

interface UseProductState {
  counter: number;
  isMaxCountReached: boolean;
  increaseBy: (value: number) => void;
  reset: () => void;
};

const useProduct = ({ increaseCallback, product, value = 0, initialValues }: UseProductArgs): UseProductState => {

  const [counter, setCounter] = useState<number>( initialValues?.count ?? value );
  
  const isControlled = useRef( !!increaseCallback );
  const isMounted = useRef(false);

  const isMaxCountReached = useMemo(
    () => !!initialValues?.maxCount && counter >= initialValues.maxCount, 
    [counter, initialValues?.maxCount]
  );

  const increaseBy = (toIncrease: number) => {

    if (isControlled.current) {
      return increaseCallback!({ count: toIncrease, product });
    }

    const newValue = Math.max(counter + toIncrease, 0);

    if (counter + toIncrease < 0) return;
    if (initialValues?.maxCount && (newValue > initialValues.maxCount)) return;

    setCounter(newValue);
    
  }

  const reset = () => setCounter(initialValues?.count ?? value);

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return { 
    counter,
    isMaxCountReached,
    increaseBy,
    reset
  }

};

export default useProduct;