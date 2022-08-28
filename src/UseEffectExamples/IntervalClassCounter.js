import React, { Component } from "react";

export default class IntervalClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    const { count } = this.state || {};
    this.setState({
      count: count + 1,
    });
  };
  render() {
    const { count } = this.state || {};
    return (
      <div>
        <div>Count: {count}</div>
      </div>
    );
  }
}
