import React, { useState } from "react";

function HookCounter2() {
  const initialCOuntValue = 0;
  const [count, setcount] = useState(initialCOuntValue);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setcount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      Count: {count}
      <div>
        <button
          onClick={() => {
            setcount(initialCOuntValue);
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            setcount((prevCount) => prevCount + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setcount((prevCount) => prevCount - 1);
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            incrementFive();
          }}
        >
          Increment 5
        </button>
      </div>
    </div>
  );
}

export default HookCounter2;
