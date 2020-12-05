import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  results: {},
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        results: action.payload,
        error: "",
      };
    case "FETCH_FAILURE":
      return {
        loading: false,
        results: {},
        error: "something went wrong",
      };

    default:
      return state;
  }
};
function DataFetechingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAILURE" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Loading...." : state.results.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetechingTwo;
