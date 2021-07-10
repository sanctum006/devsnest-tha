import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increamentCounter = () => {
    setCount((element) => element + 1);
  };
  return (
    <div className="counter">
      <button onClick={increamentCounter}>{count}</button>
    </div>
  );
}

export default Counter;
