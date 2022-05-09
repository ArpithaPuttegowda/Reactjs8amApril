import React, {Component} from "react";

export default class Hero extends Component {
  render() {
    if (this.props.hero === "Joker") {
      throw new Error("Joker is not a Hero");
    } else {
      return <div>{this.props.hero}</div>;
    }
  }
}
