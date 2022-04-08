import { Component } from "react";
import "./CounterButton.css";

class CounterButton extends Component {
  render() {
    return (
      <div className="counter">
        <button>+{this.props.by}</button>
        <button>-{this.props.by}</button>
      </div>
    );
  }
}

export default CounterButton;
