import React, {Component} from "react";

export default class UnMountingLifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      isChildMount: false
    };
  }
  render() {
    return (
      <div>
        {this.state.isChildMount && <Child />}
        <button
          onClick={() =>
            this.setState({isChildMount: !this.state.isChildMount})
          }
        >
          Click me mount and unMount the child Component
        </button>
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert("I'm unmounting");
    clearInterval(this.id);
  }
  render() {
    return <div>Child</div>;
  }
  componentDidMount() {
    this.id = setInterval(() => {
      console.log("I'm setInterval");
    }, 5000);
  }
}
