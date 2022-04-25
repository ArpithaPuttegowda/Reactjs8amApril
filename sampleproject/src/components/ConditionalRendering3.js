import React, {Component} from "react";

export default class ConditionalRendering3 extends Component {
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
    return (
      <div>
        <button onClick={this.fnClick}>Click me</button>
        <h1>{this.state.isData && "Data is there.."}</h1>
      </div>
    );
  }
}
