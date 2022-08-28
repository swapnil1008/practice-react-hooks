import React, { useState, useEffect } from "react";

function UseEffectCounter1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Runs on every render
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click
        </button>
      </div>
    </div>
  );
}

export default UseEffectCounter1;
