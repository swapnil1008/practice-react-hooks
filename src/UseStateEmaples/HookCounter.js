import React, { useState } from "react";

const HookCounter = (props) => {
  const [count, setCount] = useState(0);
  const incrementVal = () => {
    setCount(count + 1);
  };

  const decrementVal = () => {
    setCount(count - 1);
  };
  const resetValue = () => {
    setCount(0);
  };
  return (
    <div>
      <div>Count {count} </div>
      <div>
        <button onClick={incrementVal}>Increment</button>
        <button onClick={decrementVal}>Decrement</button>
        <button onClick={resetValue}>Reset</button>
      </div>
    </div>
  );
};

export default HookCounter;
