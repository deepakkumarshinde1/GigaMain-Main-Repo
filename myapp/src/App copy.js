import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState({
    countone: 0,
    counttwo: 2,
  });

  const increment = () => {
    let newOne = { ...counter, countone: counter.countone + 1 };
    setCounter(newOne); // recreating state

    // states  immutable
    // create new copy of state
  };
  const decrement = () => {
    setCounter(counter.counttwo + 1);
  };
  return (
    <div className="App">
      <span>Counter :{counter}</span>
      <button onClick={increment}>Button1</button>
      <button onClick={decrement}>Button2</button>
    </div>
  );
}

export default App;
