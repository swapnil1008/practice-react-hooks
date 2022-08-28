import React, { Component } from "react";

export default class ClassMouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMouseMovements = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.logMouseMovements);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.logMouseMovements);
  }

  render() {
    const { x, y } = this.state;
    return (
      <div>
        X - {x} Y - {y}
      </div>
    );
  }
}
