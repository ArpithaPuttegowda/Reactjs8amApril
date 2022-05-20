import React, {Component} from "react";

export default class C extends Component {
  render() {
    return (
      <div>
        <h1>Name:{this.props.name}</h1>
        <h1>Location:{this.props.loc}</h1>
      </div>
    );
  }
}
