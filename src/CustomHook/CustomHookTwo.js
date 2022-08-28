import React, { useState } from "react";
import useDocumentTitle from "./Hooks/useDocumentTitle";

function CustomHookTwo() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  useDocumentTitle(counter);
  return (
    <div>
      <button onClick={incrementCounter}>Counter - {counter}</button>
    </div>
  );
}

export default CustomHookTwo;
