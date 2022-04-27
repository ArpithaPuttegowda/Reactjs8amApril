import React, {Component, createRef} from "react";

export default class ReactCreateRef extends Component {
  constructor() {
    super();
    this.reference = createRef(null);
    this.state = {
      data: ""
    };
  }
  handleData = () => {
    console.log(this, "***");
    let val = this.reference.current.value;
    this.setState({
      data: val
    });
  };
  render() {
    return (
      <div>
        <input ref={this.reference} />
        <button onClick={() => this.handleData()}>Click me</button>
        <h1>Result data::{this.state.data}</h1>
      </div>
    );
  }
}
