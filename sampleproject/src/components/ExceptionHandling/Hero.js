import React, {Component} from "react";

export default class Hero extends Component {
  render() {
    if (this.props.heroName === "Jiranjeevi") {
      throw new Error("Jiranjivi is not acceptable");
    }
    return <div>I'm {this.props.heroName}</div>;
  }
}
