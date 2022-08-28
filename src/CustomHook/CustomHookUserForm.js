import React, { useState } from "react";
import useInput from "./Hooks/useInput";

function CustomHookUserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");
  const submitHandler = (e) => {
    e.preventDefault();
    alert(`First name: ${firstName} Last name: ${lastName}`);
    resetLastName();
    resetFirstName();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>FirstName:</label>
          <input {...bindFirstName} type="text" />
        </div>
        <div>
          <label> LastName:</label>
          <input {...bindLastName} type="text" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CustomHookUserForm;
