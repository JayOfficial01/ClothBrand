import React, { useEffect, useState } from "react";

import { CounterStyle } from "./Counter.style";

function Counter(props) {
  const { isVertical = false, counterValue, getValue = () => {} } = props;

  const [counter, setCounter] = useState(counterValue || 0);

  useEffect(() => {
    getValue(counter);
  }, [counter]);

  return (
    <CounterStyle vertical={isVertical}>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <input type="text" value={counter} readOnly />
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </CounterStyle>
  );
}

export default Counter;
