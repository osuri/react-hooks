import React, { useState } from "react";

function StateHookWithObject() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  return (
    <form>
      <h3>3. state hook with oject</h3>
      First name:{" "}
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => {
          setName({ ...name, firstName: e.target.value });
        }}
      />
      Last name:{" "}
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => {
          setName({ ...name, lastName: e.target.value });
        }}
      />
      <h2>your first name is: {name.firstName}</h2>
      <h2>your last name is: {name.lastName}</h2>
    </form>
  );
}

export default StateHookWithObject;
