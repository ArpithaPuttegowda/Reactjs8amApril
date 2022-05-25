import React, {Component, createRef} from "react";

export default class A extends Component {
  constructor() {
    super();
    this.myRef = createRef(null);
  }
  handleClick = () => {
    let name = this.myRef.current.value;
    this.props.cb(name);
  };
  render() {
    return (
      <div>
        <input ref={this.myRef} />
        <button onClick={this.handleClick}>Name</button>
      </div>
    );
  }
}
