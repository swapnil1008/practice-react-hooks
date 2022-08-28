import React, { useState, useEffect } from "react";

function UseEffectMouseMove() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMouseEvents = (mouseEvent) => {
    console.log("Mouse event");
    setX(mouseEvent.clientX);
    setY(mouseEvent.clientY);
  };

  useEffect(() => {
    console.log("Called use effect");
    window.addEventListener("mousemove", logMouseEvents);

    return () => {
      console.log("Component unmounting");
      window.removeEventListener("mousemove", logMouseEvents);
    };
  }, []);

  return (
    <div>
      X- {x} Y- {y}
    </div>
  );
}

export default UseEffectMouseMove;
