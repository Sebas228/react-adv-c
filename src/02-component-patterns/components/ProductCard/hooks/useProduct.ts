import { useState } from 'react';

interface useProductState {
  counter: number;
  increaseBy: (value: number) => void;
};

const useProduct = (): useProductState => {

  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => setCounter(prev => Math.max(prev + value, 0));

  return { counter, increaseBy }

};

export default useProduct;