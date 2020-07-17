import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
    
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={(product) => this.handleIncrement(product)}
        >
          Increment
        </button>
        <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }
  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
