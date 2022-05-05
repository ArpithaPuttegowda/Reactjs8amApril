import React, {Component} from "react";

//Mounting Phased and Updating phase
export default class LifeCycleMethods1 extends Component {
  //mounting
  constructor(props) {
    super();
    console.log("constructor executed", props, this.props);
    this.state = {
      count: 0,
      name: "Sachin"
    };
  }

  //mounting and updating
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("getDerivedStateFromProps");
    if (nextState.count === 1) {
      return {
        count: 100
      };
    }
  }

  // updating
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    // if (nextState.name !== this.state.name) {
    //   return true;
    // }
    // return false;
    return true;
  }

  //mounting and updating
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
        <button
          onClick={() => {
            this.setState({name: "Sachinn"});
            this.props.getName("Hyderabad");
          }}
        >
          UpdateName
        </button>

        <h1>my prop:{this.props.name}</h1>
      </div>
    );
  }

  //updating
  getSnapshotBeforeUpdate(preProps, preState) {
    console.log("getSnapshotBeforeUpdate");
  }

  //mounting
  componentDidMount() {
    console.log("ComponentDidMount executed");
  }

  //updating
  componentDidUpdate(prevProps, prevState) {
    debugger;
    console.log("componentDidUpdate");
  }
}
