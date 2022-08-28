import React, { useState } from "react";
import UseEffectMouseMove from "./UseEffectMouseMove";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setDisplay(!display);
          }}
        >
          Toggle display
        </button>
        {display && <UseEffectMouseMove />}
      </div>
    </div>
  );
}

export default MouseContainer;
