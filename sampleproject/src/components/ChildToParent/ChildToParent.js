import React, {Component} from "react";

export default class ChildToParent extends Component {
  constructor() {
    super();
    this.name = "Sachin";
  }
  fnClick = () => {
    this.props.getNameFromChild(this.name);
  };
  render() {
    console.log(this, "child");
    return (
      <div>
        <h1>I'm Child:{this.props.location}</h1>
        <button onClick={this.fnClick}>Click me</button>
        <h1>{this.props.children}</h1>
      </div>
    );
  }
}
