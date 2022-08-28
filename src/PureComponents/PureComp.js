import React, { PureComponent } from "react";

export default class PureComp extends PureComponent {
  render() {
    console.log("PureComponent");
    return <div>PureComponent {this.props.name}</div>;
  }
}
