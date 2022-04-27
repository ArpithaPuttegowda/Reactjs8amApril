import React, {Component, createRef} from "react";
class Parent extends Component {
  constructor() {
    super();
    this.myRef = createRef(null);
  }
  handleClick = () => {
    this.myRef.current.value = "Sachin";
  };
  render() {
    return (
      <div>
        <Child reference={this.myRef} />
        <button onClick={this.handleClick}>
          Click to set value in Child input field
        </button>
      </div>
    );
  }
}
export default Parent;

class Child extends Component {
  render() {
    return (
      <div>
        <input ref={this.props.reference} />
      </div>
    );
  }
}
