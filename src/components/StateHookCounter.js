import React, { useState } from "react";

function StateHookCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>counter with state hook</h3>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

export default StateHookCounter;