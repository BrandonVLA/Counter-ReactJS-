import { useState } from "react";

function Counter() {
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
  return (
    <>
      <h1>My Counter: {counter}</h1>
      <button onClick={minus5}>-5</button>
      <button onClick={minus1}> -1 </button>
      <button onClick={reset}>Reset(0)</button>
      <button onClick={add1}> +1 </button>
      <button onClick={add5}>+5</button>
    </>
  );
}

export default Counter;
