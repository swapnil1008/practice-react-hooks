import React, { useReducer } from "react";

const initialState = { firstCounter: 0, secondCounter: 10 };
const reducer = (state, action) => {
  switch (action.type) {
    case "incrementfirstCounter":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrementfirstCounter":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "incrementsecondCounter":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrementsecondCounter":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UseReducerCounter2() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>First Counter: {count.firstCounter}</div>
      <div>Second Counter: {count.secondCounter}</div>
      <button
        onClick={() => {
          dispatch({ type: "incrementfirstCounter", value: 1 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrementfirstCounter", value: 1 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "incrementfirstCounter", value: 5 });
        }}
      >
        Increment by 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrementfirstCounter", value: 5 });
        }}
      >
        Decrement by 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "incrementsecondCounter", value: 1 });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrementsecondCounter", value: 1 });
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default UseReducerCounter2;
