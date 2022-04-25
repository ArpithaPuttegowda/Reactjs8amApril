import React, {Component} from "react";

class RefReact18 extends Component {
  constructor() {
    super();
    // let App = this;
    this.handleData = this.handleData.bind(this);
    this.myRef = null;
    this.setRef = (element) => {
      this.myRef = element;
    };
    this.state = {
      data: ""
    };
  }
  handleData() {
    console.log(this, "handleData");
    console.log(this.myRef.value, "value");
    this.setState({
      data: this.myRef.value
    });
  }
  render() {
    console.log(this, "***");
    return (
      <div>
        <input ref={this.setRef} />
        <button onClick={this.handleData}>Click me</button>
        <h1>Result data::{this.state.data}</h1>
      </div>
    );
  }
}

export default RefReact18;
