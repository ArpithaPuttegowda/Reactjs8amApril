import React, {Component} from "react";

//Mounting Phased and Updating phase
export default class LifeCycleMethods1 extends Component {
  constructor() {
    super();
    console.log("constructor executed");
    this.state = {
      count: 0,
      name: "Sachin"
    };
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return {
      //   count: 100,
      name: "DHONI"
    };
  }
  shouldComponentUpdate() {
    console.log("shouldcomponentUpdate");
    return true;
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
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
  }
  componentDidMount() {
    console.log("ComponentDidMount executed");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}
