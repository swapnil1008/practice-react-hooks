import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};
const reducer = (currentState, action) => {
  switch (action.type) {
    case "getpost":
      return { loading: false, error: "", post: action.val };
    case "error":
      return { loading: false, error: "Something went wrong", post: {} };
    default:
      return currentState;
  }
};
function USeReducerDataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        console.log(res);
        dispatch({ type: "getpost", val: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "error" });
      });
  }, []);
  return (
    <div>
      {state.loading ? "loading..." : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default USeReducerDataFetchingTwo;
