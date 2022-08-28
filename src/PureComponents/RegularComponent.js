import React, { Component } from "react";

export default class RegularComponent extends Component {
  render() {
    console.log("RegularComponent");
    return <div>RegularComponent {this.props.name}</div>;
  }
}
