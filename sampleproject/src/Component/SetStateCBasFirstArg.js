import React, {Component} from "react";

//setState with callback as a argument

export default class SetState3 extends Component {
  state = {
    count: 0,
    name: "arpitha"
  };

  handleCount1 = () => {
    // this.setState((prevState) => {
    //   return {
    //     count: prevState.count + 1
    //   };
    // });
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  handleCount5 = () => {
    this.handleCount1();
    this.handleCount1();
    this.handleCount1();
    this.handleCount1();
    this.handleCount1();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleCount1}>Inc Count</button>
        {/* <h1>Count{this.state.count}</h1> */}
        <button onClick={this.handleCount5}>Inc Count5</button>
        <h1>Count {this.state.count} </h1>
      </div>
    );
  }
}
