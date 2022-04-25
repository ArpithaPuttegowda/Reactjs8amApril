import React, {Component} from "react";

export default class TakingTheData1 extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }
  onParent = () => {
    this.myRef.current.value = "Sachin";
  };
  render() {
    return (
      <div>
        <button onClick={this.onParent}>Parent</button>
        <Child reference={this.myRef} />
      </div>
    );
  }
}

class Child extends Component {
  render() {
    return (
      <div>
        <input ref={this.props.reference} />
      </div>
    );
  }
}
