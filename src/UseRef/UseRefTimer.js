import React, { useState, useEffect, useRef } from "react";

function UseRefTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      <div>Class timer - {timer}</div>
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
        }}
      >
        Clear Interval
      </button>
    </div>
  );
}

export default UseRefTimer;
