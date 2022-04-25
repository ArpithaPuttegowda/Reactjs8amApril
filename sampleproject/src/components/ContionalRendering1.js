import React, {Component} from "react";

export default class ConditionalRendering1 extends Component {
  constructor() {
    super();
    this.state = {
      isData: true
    };
  }
  fnClick = () => {
    this.setState({
      isData: !this.state.isData
    });
  };
  render() {
    let message;
    if (this.state.isData) {
      message = "Data is there";
    } else {
      message = "Data is not there";
    }
    return (
      <div>
        <button onClick={this.fnClick}>Click me</button>
        <h1>{message}</h1>
      </div>
    );
  }
}
