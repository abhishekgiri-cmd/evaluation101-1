import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-cy` key value pair

  const [count, setCount] = useState(0);

  function incFun(){
    setCount(count+1);
  }
  function dcsFun(){
    setCount(count-1);
  }
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={dcsFun} id="btn">-</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button " onClick={incFun} id="btn">+</button>
    </div>
  );
};

export default Counter;
