import React, {Component} from "react";

export default class Hero extends Component {
  render() {
    console.log(this);
    if (this.props.hero === "Joker") {
      throw new Error("Joker is not a Hero");
    } else {
      return (
        <div>
          {this.props.hero}
          {this.props.children}
        </div>
      );
    }
  }
}
