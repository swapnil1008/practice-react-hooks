import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      increment: 0,
    };
  }
  render() {
    const { increment } = this.state || {};
    return (
      <div>
        <div>count {increment}</div>
        <button
          onClick={() => {
            this.setState({ increment: increment + 1 });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.setState((prevCount) => {
              return { increment: prevCount - 1 }; // Using previous state value
            });
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            this.setState({ increment: 0 });
          }}
        >
          Reset Counter
        </button>
      </div>
    );
  }
}

export default Counter;
