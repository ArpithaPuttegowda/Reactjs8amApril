import React, {Component} from "react";

export default class DropDownReusuableComp extends Component {
  render() {
    return (
      <div>
        <select>
          {this.props.data.map((item, i) => {
            return <option key={i}>{item[this.props.k]}</option>;
          })}
        </select>
      </div>
    );
  }
}
