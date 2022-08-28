import React, { useContext } from "react";
import { CounterContext } from "../../App";

function ComponentA() {
  const countContext = useContext(CounterContext);
  return (
    <div>
      ComponentA - {countContext.countState}
      <button
        onClick={() => {
          countContext.countDispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          countContext.countDispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          countContext.countDispatch("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default ComponentA;
