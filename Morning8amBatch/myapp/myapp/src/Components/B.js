import React, {Component, createRef} from "react";

export default class B extends Component {
  constructor() {
    super();
    this.myRef = createRef(null);
  }
  handleLocation = () => {
    let loc = this.myRef.current.value;
    this.props.cb(loc);
  };
  render() {
    return (
      <div>
        <input ref={this.myRef} />
        <button onClick={this.handleLocation}>Location</button>
      </div>
    );
  }
}
