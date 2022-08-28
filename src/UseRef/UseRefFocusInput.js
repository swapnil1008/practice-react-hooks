import React, { useRef, useEffect } from "react";

function UseRefFocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    //focus elemenent
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default UseRefFocusInput;
