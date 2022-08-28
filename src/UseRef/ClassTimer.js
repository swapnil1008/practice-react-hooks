import React, { Component } from "react";

export default class ClassTimer extends Component {
  interval;
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        return {
          timer: prevState.timer + 1,
        };
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <div>Class timer - {this.state.timer}</div>
        <button
          onClick={() => {
            clearInterval(this.interval);
          }}
        >
          Clear Interval
        </button>
      </div>
    );
  }
}
