import React, { useState } from "react";
import useCounter from "./Hooks/useCounter";

function CustomHookCounterOne() {
  const [counter, incrementCounter, decrementCounter, resetCounter] =
    useCounter(0);
  return (
    <div>
      <div>
        <h1>CustomHookCounterOne - {counter}</h1>
      </div>
      <div>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
}

export default CustomHookCounterOne;
