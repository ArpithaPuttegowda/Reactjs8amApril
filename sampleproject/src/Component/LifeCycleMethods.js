import React, {Component} from "react";

//Mounting Phased
export default class LifeCycleMethods extends Component {
  constructor() {
    super();
    console.log("constructor executed");
    this.state = {
      count: 0,
      name: "Sachin"
    };
  }
  static getDerivedStateFromProps() {
    return {
      count: 100,
      name: "DHONI"
    };
  }

  componentDidMount() {
    console.log("ComponentDidMount executed");
  }

  render() {
    console.log("render executed");
    return (
      <div>
        <button onClick={() => this.setState({count: this.state.count + 1})}>
          Inc Count
        </button>
        <h1>
          Count:{this.state.count}......
          {this.state.name}
        </h1>
      </div>
    );
  }
}
