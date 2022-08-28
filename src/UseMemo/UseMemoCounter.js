import React, { useState, useMemo } from "react";

function UseMemoCounter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    console.log("incrementOne");
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    console.log("incrementTwo");
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <h1>{counterOne}</h1>
        <div>
          <h2>{isEven() ? "Even" : "Odd"}</h2>
        </div>
        <button onClick={incrementOne}>Increment One</button>
      </div>
      <div>
        <h1>{counterTwo}</h1>
        <button onClick={incrementTwo}>Increment Two</button>
      </div>
    </div>
  );
}

export default UseMemoCounter;
