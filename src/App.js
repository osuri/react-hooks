import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import StateHookCounter from "./components/StateHookCounter";
import StateHookWithObject from "./components/StateHookWithObject";
import EffectHook from "./components/EffectHook";
import DataFetching from "./components/DataFetching";
import DataFetechingTwo from "./components/DataFetechingTwo";
import ComponentC from "./components/ComponentC";
import ReducerHook from "./components/ReducerHook";

export const userContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/*<ClassCounter />
      <StateHookCounter />
      <StateHookWithObject />
      <EffectHook /> 
      <DataFetching /> 
      <userContext.Provider value={"lokesh"}>
        <ComponentC />
      </userContext.Provider> 
      <ReducerHook /> */}
      <DataFetechingTwo />
    </div>
  );
}

export default App;
