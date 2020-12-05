import React from "react";
import ComponentF from "./ComponentF";

function ComponentE({ username }) {
  return (
    <div>
      <ComponentF username={username} />
    </div>
  );
}

export default ComponentE;
