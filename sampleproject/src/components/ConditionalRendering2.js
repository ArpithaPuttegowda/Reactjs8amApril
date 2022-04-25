import React, {Component} from "react";

export default class ConditionalRendering2 extends Component {
  constructor() {
    super();
    this.state = {
      isData: false
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
        <h1>
          {this.state.isData ? "Data is there..." : "Data is not there...."}
        </h1>
      </div>
    );
  }
}
