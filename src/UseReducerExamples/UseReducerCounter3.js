import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UseReducerCounter3() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countOne, dispatchOne] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count: {count}</div>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
      <div>countOne: {countOne}</div>
      <button
        onClick={() => {
          dispatchOne("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatchOne("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatchOne("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default UseReducerCounter3;
