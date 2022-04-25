import React, {Component} from "react";

export default class EventBindingInReact extends Component {
  state = {
    count: 0
  };
  //   incCount() {
  //     console.log(this, "***");
  //     this.setState({
  //       count: this.state.count + 1
  //     });
  //   }
  incCount = () => {
    console.log(this, "***");
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <div>
        {/* <button onClick={this.incCount.bind(this)}>Inc</button> */}
        {/* <button onClick={() => this.incCount()}>Inc</button> */}
        <button onClick={() => this.setState({count: this.state.count + 1})}>
          Inc
        </button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
