import React, { useState } from "react";

function HookCounter3() {
  const [name, setName] = useState({ firsName: "", lastName: "" });
  return (
    <form>
      <input
        type="text"
        value={name.firsName}
        onChange={(event) => setName({ ...name, firsName: event.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(event) => setName({ ...name, lastName: event.target.value })}
      />
      <h2>Your first name: {name.firsName}</h2>
      <h2>Your last name: {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
}

export default HookCounter3;
