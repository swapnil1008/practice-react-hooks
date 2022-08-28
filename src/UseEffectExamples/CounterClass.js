import React, { Component } from "react";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    const { count = 0 } = this.state || {};
    document.title = `Clicked ${count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    const { count = 0 } = this.state || {};

    if (prevState.count !== count) {
      console.log("Updating document title");
      document.title = `Clicked ${count} times`;
    }
  }

  render() {
    const { count = 0, name = "" } = this.state || {};
    return (
      <div>
        <div>Count: {count}</div>
        <div>
          <button
            onClick={() => {
              this.setState({ count: count + 1 });
            }}
          >
            Click
          </button>
        </div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
          />
          <h2>{name}</h2>
        </div>
      </div>
    );
  }
}
