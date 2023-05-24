import logo from "./logo.svg";
import "./App.css";
import react from "react";

class App extends React.Component {
  constructor() {
    state = {
      countone: 0,
      counttwo: 2,
    };
  }

  increment = () => {
    let newOne = { ...this.state, countone: this.state.countone + 1 };
    this.setState(newOne); // recreating state

    // states  immutable
    // create new copy of state
  };
  decrement = () => {
    let newOne = { ...this.state, counttwo: this.state.counttwo + 1 };
    this.setState(newOne);
  };

  render() {
    return (
      <div className="App">
        <span>Counter :{this.state.countone}</span>
        <span>Counter :{this.state.counttwo}</span>
        <button onClick={this.increment}>Button1</button>
        <button onClick={this.decrement}>Button2</button>
      </div>
    );
  }
}

export default App;
