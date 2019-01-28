import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  count = () => {
    this.setState(prevState => ({
      count: (prevState.count += 1)
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <div className="hello">
        <button data-testid="counter-button" onClick={this.count}>
          {count}
        </button>
      </div>
    );
  }
}

export default Counter;
