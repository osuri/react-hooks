import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(20000);
  const handleAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const handleSalary = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="Age" value={age} />
      <Button handleClick={handleAge}> Increment Age </Button>
      <Count text="Salary" value={salary} />
      <Button handleClick={handleSalary}> Increment Salary </Button>
    </div>
  );
}

export default ParentComponent;
