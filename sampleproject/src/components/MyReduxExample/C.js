import React, {Component} from "react";

class C extends Component {
  render() {
    return (
      <div>
        <h1>Get Name & Location</h1>
        <h1>Name:{this.props.name}</h1>
        <h1>Location:{this.props.l}</h1>
      </div>
    );
  }
}

export default C;
