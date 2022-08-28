import React, { Component } from "react";
import PureComp from "./PureComp";
import RegularComponent from "./RegularComponent";

export default class ParentComp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "Swapnil",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Swapnil",
      });
    }, 2000);
  }
  render() {
    console.log("******************ParentComponent********************");
    return (
      <div>
        ParentComponent
        <RegularComponent name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}
