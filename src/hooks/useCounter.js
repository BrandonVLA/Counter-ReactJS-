import { useState } from "react";

export function useCounter() {
  const [counter, setCounter] = useState(0);

  const add1 = () => {
    setCounter((prev) => prev + 1);
  };
  const minus1 = () => {
    setCounter((prev) => prev - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  const add5 = () => {
    setCounter((prev) => prev + 5);
  };

  const minus5 = () => {
    setCounter((prev) => prev - 5);
  };

  return { counter, minus5, minus1, reset,add1, add5};
}
