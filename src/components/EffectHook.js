import React, { useState, useEffect } from "react";

function EffectHook() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("updating document tilte");
    document.title = `you clicked ${counter} times`;
  }, [counter]);
  return (
    <div>
      <h3>Effect Hook counter</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setCounter((prevCounter) => prevCounter + 1);
        }}
      >
        Increment: {counter}
      </button>
    </div>
  );
}

export default EffectHook;
