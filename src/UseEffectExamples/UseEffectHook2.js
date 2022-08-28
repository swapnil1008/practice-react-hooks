import React, { useState, useEffect } from "react";

function UseEffectHook2() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Document updated");
    document.title = `Document clicked ${count} times `;
  }, [count]);

  return (
    <div>
      <div>Count: {count}</div>
      <button
        onClick={() => {
          setCount((prevState) => prevState + 1);
        }}
      >
        Click
      </button>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default UseEffectHook2;
