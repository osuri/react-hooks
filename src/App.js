import "./App.css";
import ClassCounter from "./components/ClassCounter";
import StateHookCounter from "./components/StateHookCounter";
import StateHookWithObject from "./components/StateHookWithObject";
import EffectHook from "./components/EffectHook";

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <StateHookCounter />
      <StateHookWithObject />
      <EffectHook />
    </div>
  );
}

export default App;
