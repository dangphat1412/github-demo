import { Component } from "react";
import CounterButton from "../counter-button/CounterButton";
import "./Counter.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div className="counter">
        <CounterButton
          by={1}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={5}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <span className="count">{this.state.counter}</span>
        <div>
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
  // function increment() {}
  increment = (by) => {
    this.setState({ counter: this.state.counter + by });
  };

  decrement = (by) => {
    this.setState({ counter: this.state.counter - by });
  };

  reset = () => {
    this.setState({ counter: 0 });
  };
}

export default Counter;
