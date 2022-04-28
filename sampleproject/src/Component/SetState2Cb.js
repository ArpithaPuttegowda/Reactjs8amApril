import React, {Component} from "react";

//setState with object and callback as a arg

export default class SetState2 extends Component {
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        console.log(this.state.count, "count");
      }
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Inc Count</button>
        <h1>Count{this.state.count}</h1>
      </div>
    );
  }
}
