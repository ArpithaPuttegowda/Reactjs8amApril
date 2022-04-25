import React, {Component} from "react";

export default class ConditionalRendering extends Component {
  constructor() {
    super();
    this.state = {
      isData: true
    };
  }
  fnClick = () => {
    this.setState({
      isData: false
    });
  };
  render() {
    if (this.state.isData) {
      return (
        <div>
          <button onClick={this.fnClick}>Click</button>
          <h1>Data is there</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.fnClick}>Click</button>
          <h1>Data is not there</h1>
        </div>
      );
    }
  }
}
