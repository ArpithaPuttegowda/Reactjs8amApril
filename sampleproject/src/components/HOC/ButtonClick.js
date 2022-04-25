import React, {Component} from "react";
import {myHoc} from "./myHoc";

class ButtonClick extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.fn}>Inc Count</button>
        <h1>{this.props.count}</h1>
      </div>
    );
  }
}
export default myHoc(ButtonClick);
