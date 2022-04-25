import React, {Component} from "react";

export default class SetStateArgs extends Component {
  state = {
    count: 0,
    name: "Sachin"
  };
  incCount = () => {
    this.setState(
      {
        count: this.state.count + 1
      },
      () => console.log(this.state.count, "value inside callback")
    );
    console.log(this.state.count, "count value");
  };

  increamentCount = () => {
    // this.setState((prevState) => {
    //   return {
    //     count: prevState.count + 1
    //   };
    // });
    this.setState((p) => ({
      count: p.count + 1
    }));
  };
  incCount5 = () => {
    this.increamentCount();
    this.increamentCount();
    this.increamentCount();
    this.increamentCount();
    this.increamentCount();
  };

  render() {
    return (
      <div>
        <button onClick={this.incCount}>Inc</button>
        <button onClick={this.incCount5}>Inc 5</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
