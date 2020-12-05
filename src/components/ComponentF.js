import React, { useContext } from "react";
import { userContext } from "../App";

function ComponentF({ username }) {
  const user = useContext(userContext);
  return (
    <div>
      <h2>This is component F: {user}</h2>
    </div>
  );
}

export default ComponentF;
