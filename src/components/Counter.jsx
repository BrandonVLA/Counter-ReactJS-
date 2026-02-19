import Button from "../components/Button";
import Display from "../components/Display";
import { useCounter } from "../hooks/useCounter";
function Counter() {
  const { counter, minus5, minus1, reset, add1, add5 } = useCounter();

  return (
    <>
      <Display value={counter} />
      <div className="button-group">
        <Button onClick={minus5}>-5</Button>
        <Button onClick={minus1}> -1 </Button>
        <Button onClick={reset}>Reset(0)</Button>
        <Button onClick={add1}> +1 </Button>
        <Button onClick={add5}>+5</Button>
      </div>
    </>
  );
}

export default Counter;
