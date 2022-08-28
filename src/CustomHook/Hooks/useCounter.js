import { useState } from "react";

function useCounter(initialCounter = 0) {
  const [counter, setCounter] = useState(initialCounter);
  const incrementCounter = () => {
    setCounter((prevState) => prevState + 1);
  };
  const decrementCounter = () => {
    setCounter((prevState) => prevState - 1);
  };
  const resetCounter = () => {
    setCounter(0);
  };
  return [counter, incrementCounter, decrementCounter, resetCounter];
}

export default useCounter;
