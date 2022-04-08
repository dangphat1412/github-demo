import { Component } from "react";
import CounterButton from "../counter-button/CounterButton";
import "./Counter.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 10,
    };
    this.reset = this.reset.bind(this);
  }
  render() {
    return (
      <div className="counter">
        <CounterButton by={1} />
        <CounterButton by={5} />
        <CounterButton by={10} />
        <span className="count">{this.state.counter}</span>
        <div>
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }

  increment() {}

  decrement() {}

  reset() {
    this.setState({ counter: 0 });
  }
}

export default Counter;
