import React, {Component} from "react";

//setState with object as a arg

export default class SetState1 extends Component {
  state = {
    count: 0,
    name: ""
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
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
