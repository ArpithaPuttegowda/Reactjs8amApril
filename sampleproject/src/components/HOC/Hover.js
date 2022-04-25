import React, {Component} from "react";
import {myHoc} from "./myHoc";

class Hover extends Component {
  render() {
    return (
      <div>
        <h1 onMouseOver={this.props.fn}>You hover on me{this.props.count} </h1>
      </div>
    );
  }
}
export default myHoc(Hover);
