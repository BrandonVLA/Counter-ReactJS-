import Button from "../components/Button";
import Display from "../components/Display";
import { useCounter } from "../hooks/useCounter";
import styles from "./Counter.module.css";

function Counter() {
  const { counter, minus5, minus1, reset, add1, add5 } = useCounter();

  return (
    <div className={styles.container}>
      <Display value={counter} title="Custom Counter" />
      <div className={styles.buttonGroup}>
        <Button onClick={minus5} variant="danger">-5</Button>
        <Button onClick={minus1} variant="danger"> -1 </Button>
        <Button onClick={reset} variant="reset">Reset(0)</Button>
        <Button onClick={add1} variant="success"> +1 </Button>
        <Button onClick={add5} variant="success">+5</Button>
      </div>
    </div>
  );
}

export default Counter;
